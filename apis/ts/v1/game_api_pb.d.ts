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

  getName(): string;
  setName(value: string): void;

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
    name: string,
  }
}

export class JoinRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinRequest): JoinRequest.AsObject;
  static serializeBinaryToWriter(message: JoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinRequest;
  static deserializeBinaryFromReader(message: JoinRequest, reader: jspb.BinaryReader): JoinRequest;
}

export namespace JoinRequest {
  export type AsObject = {
    token: string,
  }
}

export class Player extends jspb.Message {
  getResources(): number;
  setResources(value: number): void;

  getProductionlevel(): number;
  setProductionlevel(value: number): void;

  getDefenselevel(): number;
  setDefenselevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    resources: number,
    productionlevel: number,
    defenselevel: number,
  }
}

export class PlayerStat extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getScore(): string;
  setScore(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerStat.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerStat): PlayerStat.AsObject;
  static serializeBinaryToWriter(message: PlayerStat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerStat;
  static deserializeBinaryFromReader(message: PlayerStat, reader: jspb.BinaryReader): PlayerStat;
}

export namespace PlayerStat {
  export type AsObject = {
    name: string,
    score: string,
  }
}

export class StateResponse extends jspb.Message {
  getMe(): Player | undefined;
  setMe(value?: Player): void;
  hasMe(): boolean;
  clearMe(): void;

  getScoresList(): Array<PlayerStat>;
  setScoresList(value: Array<PlayerStat>): void;
  clearScoresList(): void;
  addScores(value?: PlayerStat, index?: number): PlayerStat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StateResponse): StateResponse.AsObject;
  static serializeBinaryToWriter(message: StateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateResponse;
  static deserializeBinaryFromReader(message: StateResponse, reader: jspb.BinaryReader): StateResponse;
}

export namespace StateResponse {
  export type AsObject = {
    me?: Player.AsObject,
    scoresList: Array<PlayerStat.AsObject>,
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
  getDefender(): string;
  setDefender(value: string): void;

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
    defender: string,
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

