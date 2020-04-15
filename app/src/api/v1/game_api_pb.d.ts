import * as jspb from "google-protobuf"

export class PlayRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlayRequest): PlayRequest.AsObject;
  static serializeBinaryToWriter(message: PlayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayRequest;
  static deserializeBinaryFromReader(message: PlayRequest, reader: jspb.BinaryReader): PlayRequest;
}

export namespace PlayRequest {
  export type AsObject = {
    name: string,
  }
}

export class PlayResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayResponse): PlayResponse.AsObject;
  static serializeBinaryToWriter(message: PlayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayResponse;
  static deserializeBinaryFromReader(message: PlayResponse, reader: jspb.BinaryReader): PlayResponse;
}

export namespace PlayResponse {
  export type AsObject = {
    token: string,
  }
}

export class StateRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StateRequest): StateRequest.AsObject;
  static serializeBinaryToWriter(message: StateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateRequest;
  static deserializeBinaryFromReader(message: StateRequest, reader: jspb.BinaryReader): StateRequest;
}

export namespace StateRequest {
  export type AsObject = {
    token: string,
  }
}

export class StateResponse extends jspb.Message {
  getScoresMap(): jspb.Map<string, string>;
  clearScoresMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StateResponse): StateResponse.AsObject;
  static serializeBinaryToWriter(message: StateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateResponse;
  static deserializeBinaryFromReader(message: StateResponse, reader: jspb.BinaryReader): StateResponse;
}

export namespace StateResponse {
  export type AsObject = {
    scoresMap: Array<[string, string]>,
  }
}

export class BuyRequest extends jspb.Message {
  getItem(): string;
  setItem(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BuyRequest): BuyRequest.AsObject;
  static serializeBinaryToWriter(message: BuyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyRequest;
  static deserializeBinaryFromReader(message: BuyRequest, reader: jspb.BinaryReader): BuyRequest;
}

export namespace BuyRequest {
  export type AsObject = {
    item: string,
    token: string,
  }
}

export class BuyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BuyResponse): BuyResponse.AsObject;
  static serializeBinaryToWriter(message: BuyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyResponse;
  static deserializeBinaryFromReader(message: BuyResponse, reader: jspb.BinaryReader): BuyResponse;
}

export namespace BuyResponse {
  export type AsObject = {
  }
}

export class AttackRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttackRequest): AttackRequest.AsObject;
  static serializeBinaryToWriter(message: AttackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttackRequest;
  static deserializeBinaryFromReader(message: AttackRequest, reader: jspb.BinaryReader): AttackRequest;
}

export namespace AttackRequest {
  export type AsObject = {
    token: string,
  }
}

export class AttackResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttackResponse): AttackResponse.AsObject;
  static serializeBinaryToWriter(message: AttackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttackResponse;
  static deserializeBinaryFromReader(message: AttackResponse, reader: jspb.BinaryReader): AttackResponse;
}

export namespace AttackResponse {
  export type AsObject = {
  }
}

