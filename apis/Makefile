TOPDIR=$(shell pwd)

gen: gen-go

gen-go:
	protoc -Iproto -I3rdparty \
		proto/v1/game_api.proto \
		--gogoslick_out=plugins=grpc,paths=source_relative:go \
		--js_out=import_style=commonjs,binary:ts \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:ts
