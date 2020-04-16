/**
 * @fileoverview gRPC-Web generated client stub for v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  AttackRequest,
  AttackResponse,
  BuyRequest,
  BuyResponse,
  JoinRequest,
  PlayRequest,
  PlayResponse,
  StateResponse} from './game_api_pb';

export class GameServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPlay = new grpcWeb.AbstractClientBase.MethodInfo(
    PlayResponse,
    (request: PlayRequest) => {
      return request.serializeBinary();
    },
    PlayResponse.deserializeBinary
  );

  play(
    request: PlayRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PlayResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/v1.GameService/Play',
      request,
      metadata || {},
      this.methodInfoPlay,
      callback);
  }

  methodInfoJoinGame = new grpcWeb.AbstractClientBase.MethodInfo(
    StateResponse,
    (request: JoinRequest) => {
      return request.serializeBinary();
    },
    StateResponse.deserializeBinary
  );

  joinGame(
    request: JoinRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/v1.GameService/JoinGame',
      request,
      metadata || {},
      this.methodInfoJoinGame);
  }

  methodInfoBuy = new grpcWeb.AbstractClientBase.MethodInfo(
    BuyResponse,
    (request: BuyRequest) => {
      return request.serializeBinary();
    },
    BuyResponse.deserializeBinary
  );

  buy(
    request: BuyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BuyResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/v1.GameService/Buy',
      request,
      metadata || {},
      this.methodInfoBuy,
      callback);
  }

  methodInfoAttack = new grpcWeb.AbstractClientBase.MethodInfo(
    AttackResponse,
    (request: AttackRequest) => {
      return request.serializeBinary();
    },
    AttackResponse.deserializeBinary
  );

  attack(
    request: AttackRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AttackResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/v1.GameService/Attack',
      request,
      metadata || {},
      this.methodInfoAttack,
      callback);
  }

}

