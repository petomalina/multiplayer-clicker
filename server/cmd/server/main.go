package main

import (
	"context"
	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_logrus "github.com/grpc-ecosystem/go-grpc-middleware/logging/logrus"
	grpc_prometheus "github.com/grpc-ecosystem/go-grpc-prometheus"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/mwitkow/grpc-proxy/proxy"
	apis "github.com/petomalina/multiplayer-clicker/apis/go/v1"
	"github.com/petomalina/multiplayer-clicker/server/pkg/game"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	googleGRPC "google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
	"net"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"time"
)

func main() {
	server := googleGRPC.NewServer()

	apis.RegisterGameServiceServer(server, &game.GameService{})

	logEntry := logrus.NewEntry(logrus.StandardLogger())

	wg := sync.WaitGroup{}

	wg.Add(2)
	go func() {
		logEntry.Info("Running gRPC Server")
		if err := RunServer(context.Background(), server, "50080"); err != nil {
			panic(err)
		}
	}()

	go func() {
		proxyServer := grpcweb.WrapServer(
			buildGrpcProxyServer(logEntry),
			grpcweb.WithCorsForRegisteredEndpointsOnly(false),
			grpcweb.WithOriginFunc(makeHttpOriginFunc()),
		)

		httpServer := buildServer(proxyServer)
		listener, _ := net.Listen("tcp", ":8080")

		logEntry.Info("Running HTTP Server")
		if err := httpServer.Serve(listener); err != nil {
			panic(err)
		}
	}()

	wg.Wait()
}

func buildServer(wrappedGrpc *grpcweb.WrappedGrpcServer) *http.Server {
	return &http.Server{
		WriteTimeout: 10 * time.Second,
		ReadTimeout:  10 * time.Second,
		Handler: http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
			wrappedGrpc.ServeHTTP(resp, req)
		}),
	}
}

func makeHttpOriginFunc() func(origin string) bool {
	return func(origin string) bool {
		return true
	}
}

func buildGrpcProxyServer(logger *logrus.Entry) *grpc.Server {
	// gRPC-wide changes.
	grpc.EnableTracing = true

	// gRPC proxy logic.
	backendConn := dialBackendOrFail()
	director := func(ctx context.Context, fullMethodName string) (context.Context, *grpc.ClientConn, error) {
		md, _ := metadata.FromIncomingContext(ctx)
		outCtx, _ := context.WithCancel(ctx)
		mdCopy := md.Copy()
		delete(mdCopy, "user-agent")
		// If this header is present in the request from the web client,
		// the actual connection to the backend will not be established.
		// https://github.com/improbable-eng/grpc-web/issues/568
		delete(mdCopy, "connection")
		outCtx = metadata.NewOutgoingContext(outCtx, mdCopy)
		return outCtx, backendConn, nil
	}
	// Server with logging and monitoring enabled.
	return grpc.NewServer(
		grpc.CustomCodec(proxy.Codec()), // needed for proxy to function.
		grpc.UnknownServiceHandler(proxy.TransparentHandler(director)),
		grpc.MaxRecvMsgSize(1024*1024*4),
		grpc_middleware.WithUnaryServerChain(
			grpc_logrus.UnaryServerInterceptor(logger),
			grpc_prometheus.UnaryServerInterceptor,
		),
		grpc_middleware.WithStreamServerChain(
			grpc_logrus.StreamServerInterceptor(logger),
			grpc_prometheus.StreamServerInterceptor,
		),
	)
}

func dialBackendOrFail() *grpc.ClientConn {
	opt := []grpc.DialOption{
		grpc.WithInsecure(),
	}
	opt = append(opt, grpc.WithCodec(proxy.Codec()))

	opt = append(opt,
		grpc.WithDefaultCallOptions(grpc.MaxCallRecvMsgSize(1024*1024*4)),
	)

	cc, err := grpc.Dial("localhost:50080", opt...)
	if err != nil {
		logrus.Fatalf("failed dialing backend: %v", err)
	}

	return cc
}

// RunServer runs gRPC service to publish PropertyService
func RunServer(ctx context.Context, server *grpc.Server, port string) error {
	listen, err := net.Listen("tcp", ":"+port)
	if err != nil {
		return err
	}

	// graceful shutdownz
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	go func() {
		<-c
		// sig is a ^C, handle it
		//L.Warn("shutting down gRPC server...")

		server.GracefulStop()

		<-ctx.Done()
	}()

	// start gRPC server
	//L.Info("starting gRPC server...")
	return server.Serve(listen)
}
