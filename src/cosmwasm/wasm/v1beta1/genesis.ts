/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params, CodeInfo, ContractInfo, Model } from "../../../cosmwasm/wasm/v1beta1/types";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "../../../cosmwasm/wasm/v1beta1/tx";

export const protobufPackage = "cosmwasm.wasm.v1beta1";

/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
  params?: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
  genMsgs: GenesisState_GenMsgs[];
}

/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgs {
  storeCode?: MsgStoreCode | undefined;
  instantiateContract?: MsgInstantiateContract | undefined;
  executeContract?: MsgExecuteContract | undefined;
}

/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  codeId: Long;
  codeInfo?: CodeInfo;
  codeBytes: Uint8Array;
  /** Pinned to wasmvm cache */
  pinned: boolean;
}

/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractAddress: string;
  contractInfo?: ContractInfo;
  contractState: Model[];
}

/** Sequence key and value of an id generation counter */
export interface Sequence {
  idKey: Uint8Array;
  value: Long;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.genMsgs) {
      GenesisState_GenMsgs.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.codes = [];
    message.contracts = [];
    message.sequences = [];
    message.genMsgs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;
        case 5:
          message.genMsgs.push(GenesisState_GenMsgs.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromJSON(object.params) : undefined;
    message.codes = (object.codes ?? []).map((e: any) => Code.fromJSON(e));
    message.contracts = (object.contracts ?? []).map((e: any) => Contract.fromJSON(e));
    message.sequences = (object.sequences ?? []).map((e: any) => Sequence.fromJSON(e));
    message.genMsgs = (object.genMsgs ?? []).map((e: any) => GenesisState_GenMsgs.fromJSON(e));
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.codes) {
      obj.codes = message.codes.map((e) => (e ? Code.toJSON(e) : undefined));
    } else {
      obj.codes = [];
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => (e ? Contract.toJSON(e) : undefined));
    } else {
      obj.contracts = [];
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => (e ? Sequence.toJSON(e) : undefined));
    } else {
      obj.sequences = [];
    }
    if (message.genMsgs) {
      obj.genMsgs = message.genMsgs.map((e) => (e ? GenesisState_GenMsgs.toJSON(e) : undefined));
    } else {
      obj.genMsgs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.codes = object.codes?.map((e) => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map((e) => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map((e) => Sequence.fromPartial(e)) || [];
    message.genMsgs = object.genMsgs?.map((e) => GenesisState_GenMsgs.fromPartial(e)) || [];
    return message;
  },
};

const baseGenesisState_GenMsgs: object = {};

export const GenesisState_GenMsgs = {
  encode(message: GenesisState_GenMsgs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storeCode !== undefined) {
      MsgStoreCode.encode(message.storeCode, writer.uint32(10).fork()).ldelim();
    }
    if (message.instantiateContract !== undefined) {
      MsgInstantiateContract.encode(message.instantiateContract, writer.uint32(18).fork()).ldelim();
    }
    if (message.executeContract !== undefined) {
      MsgExecuteContract.encode(message.executeContract, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_GenMsgs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState_GenMsgs } as GenesisState_GenMsgs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeCode = MsgStoreCode.decode(reader, reader.uint32());
          break;
        case 2:
          message.instantiateContract = MsgInstantiateContract.decode(reader, reader.uint32());
          break;
        case 3:
          message.executeContract = MsgExecuteContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_GenMsgs {
    const message = { ...baseGenesisState_GenMsgs } as GenesisState_GenMsgs;
    message.storeCode =
      object.storeCode !== undefined && object.storeCode !== null
        ? MsgStoreCode.fromJSON(object.storeCode)
        : undefined;
    message.instantiateContract =
      object.instantiateContract !== undefined && object.instantiateContract !== null
        ? MsgInstantiateContract.fromJSON(object.instantiateContract)
        : undefined;
    message.executeContract =
      object.executeContract !== undefined && object.executeContract !== null
        ? MsgExecuteContract.fromJSON(object.executeContract)
        : undefined;
    return message;
  },

  toJSON(message: GenesisState_GenMsgs): unknown {
    const obj: any = {};
    message.storeCode !== undefined &&
      (obj.storeCode = message.storeCode ? MsgStoreCode.toJSON(message.storeCode) : undefined);
    message.instantiateContract !== undefined &&
      (obj.instantiateContract = message.instantiateContract
        ? MsgInstantiateContract.toJSON(message.instantiateContract)
        : undefined);
    message.executeContract !== undefined &&
      (obj.executeContract = message.executeContract
        ? MsgExecuteContract.toJSON(message.executeContract)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState_GenMsgs>, I>>(object: I): GenesisState_GenMsgs {
    const message = { ...baseGenesisState_GenMsgs } as GenesisState_GenMsgs;
    message.storeCode =
      object.storeCode !== undefined && object.storeCode !== null
        ? MsgStoreCode.fromPartial(object.storeCode)
        : undefined;
    message.instantiateContract =
      object.instantiateContract !== undefined && object.instantiateContract !== null
        ? MsgInstantiateContract.fromPartial(object.instantiateContract)
        : undefined;
    message.executeContract =
      object.executeContract !== undefined && object.executeContract !== null
        ? MsgExecuteContract.fromPartial(object.executeContract)
        : undefined;
    return message;
  },
};

const baseCode: object = { codeId: Long.UZERO, pinned: false };

export const Code = {
  encode(message: Code, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }
    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Code {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCode } as Code;
    message.codeBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64() as Long;
          break;
        case 2:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.codeBytes = reader.bytes();
          break;
        case 4:
          message.pinned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Code {
    const message = { ...baseCode } as Code;
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromString(object.codeId) : Long.UZERO;
    message.codeInfo =
      object.codeInfo !== undefined && object.codeInfo !== null
        ? CodeInfo.fromJSON(object.codeInfo)
        : undefined;
    message.codeBytes =
      object.codeBytes !== undefined && object.codeBytes !== null
        ? bytesFromBase64(object.codeBytes)
        : new Uint8Array();
    message.pinned = object.pinned !== undefined && object.pinned !== null ? Boolean(object.pinned) : false;
    return message;
  },

  toJSON(message: Code): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.codeInfo !== undefined &&
      (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined &&
      (obj.codeBytes = base64FromBytes(
        message.codeBytes !== undefined ? message.codeBytes : new Uint8Array(),
      ));
    message.pinned !== undefined && (obj.pinned = message.pinned);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Code>, I>>(object: I): Code {
    const message = { ...baseCode } as Code;
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.codeInfo =
      object.codeInfo !== undefined && object.codeInfo !== null
        ? CodeInfo.fromPartial(object.codeInfo)
        : undefined;
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    return message;
  },
};

const baseContract: object = { contractAddress: "" };

export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contractState) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContract } as Contract;
    message.contractState = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.contractState.push(Model.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Contract {
    const message = { ...baseContract } as Contract;
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? String(object.contractAddress)
        : "";
    message.contractInfo =
      object.contractInfo !== undefined && object.contractInfo !== null
        ? ContractInfo.fromJSON(object.contractInfo)
        : undefined;
    message.contractState = (object.contractState ?? []).map((e: any) => Model.fromJSON(e));
    return message;
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractInfo !== undefined &&
      (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
    if (message.contractState) {
      obj.contractState = message.contractState.map((e) => (e ? Model.toJSON(e) : undefined));
    } else {
      obj.contractState = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Contract>, I>>(object: I): Contract {
    const message = { ...baseContract } as Contract;
    message.contractAddress = object.contractAddress ?? "";
    message.contractInfo =
      object.contractInfo !== undefined && object.contractInfo !== null
        ? ContractInfo.fromPartial(object.contractInfo)
        : undefined;
    message.contractState = object.contractState?.map((e) => Model.fromPartial(e)) || [];
    return message;
  },
};

const baseSequence: object = { value: Long.UZERO };

export const Sequence = {
  encode(message: Sequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSequence } as Sequence;
    message.idKey = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;
        case 2:
          message.value = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Sequence {
    const message = { ...baseSequence } as Sequence;
    message.idKey =
      object.idKey !== undefined && object.idKey !== null ? bytesFromBase64(object.idKey) : new Uint8Array();
    message.value =
      object.value !== undefined && object.value !== null ? Long.fromString(object.value) : Long.UZERO;
    return message;
  },

  toJSON(message: Sequence): unknown {
    const obj: any = {};
    message.idKey !== undefined &&
      (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Sequence>, I>>(object: I): Sequence {
    const message = { ...baseSequence } as Sequence;
    message.idKey = object.idKey ?? new Uint8Array();
    message.value =
      object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
