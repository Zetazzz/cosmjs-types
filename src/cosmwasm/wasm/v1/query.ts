/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractCodeHistoryEntry, Model, AccessConfig, Params } from "./types";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmwasm.wasm.v1";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
  /** address is the address of the contract to query */
  address: string;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
  /** address is the address of the contract */
  address: string;
  contractInfo: ContractInfo;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
  /** address is the address of the contract to query */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
  entries: ContractCodeHistoryEntry[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
  /**
   * grpc-gateway_out does not support Go style CodID
   * pagination defines an optional pagination for the request.
   */
  codeId: Long;
  pagination?: PageRequest;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
  /** contracts are a set of contract addresses */
  contracts: string[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
  models: Model[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
  /** address is the address of the contract */
  address: string;
  queryData: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
  /** Data contains the raw store data */
  data: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** QueryData contains the query data passed to the contract */
  queryData: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: Long;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
  codeId: Long;
  creator: string;
  dataHash: Uint8Array;
  instantiatePermission: AccessConfig;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
  codeInfo: CodeInfoResponse;
  data: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
  codeInfos: CodeInfoResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
  codeIds: Long[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequest {
  /** CreatorAddress is the address of contract creator */
  creatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponse {
  /** ContractAddresses result set */
  contractAddresses: string[];
  /** Pagination defines the pagination in the response. */
  pagination: PageResponse;
}
function createBaseQueryContractInfoRequest(): QueryContractInfoRequest {
  return {
    address: "",
  };
}
export const QueryContractInfoRequest = {
  encode(message: QueryContractInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractInfoRequest {
    const obj = createBaseQueryContractInfoRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryContractInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractInfoRequest>, I>>(
    object: I,
  ): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    address: "",
    contractInfo: ContractInfo.fromPartial({}),
  };
}
export const QueryContractInfoResponse = {
  encode(message: QueryContractInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractInfoResponse {
    const obj = createBaseQueryContractInfoResponse();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.contractInfo)) obj.contractInfo = ContractInfo.fromJSON(object.contractInfo);
    return obj;
  },
  toJSON(message: QueryContractInfoResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.contractInfo !== undefined &&
      (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractInfoResponse>, I>>(
    object: I,
  ): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.address = object.address ?? "";
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
    }
    return message;
  },
};
function createBaseQueryContractHistoryRequest(): QueryContractHistoryRequest {
  return {
    address: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryContractHistoryRequest = {
  encode(message: QueryContractHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractHistoryRequest {
    const obj = createBaseQueryContractHistoryRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractHistoryRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractHistoryRequest>, I>>(
    object: I,
  ): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryContractHistoryResponse(): QueryContractHistoryResponse {
  return {
    entries: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryContractHistoryResponse = {
  encode(message: QueryContractHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractHistoryResponse {
    const obj = createBaseQueryContractHistoryResponse();
    if (Array.isArray(object?.entries))
      obj.entries = object.entries.map((e: any) => ContractCodeHistoryEntry.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractHistoryResponse): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? ContractCodeHistoryEntry.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractHistoryResponse>, I>>(
    object: I,
  ): QueryContractHistoryResponse {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map((e) => ContractCodeHistoryEntry.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryContractsByCodeRequest(): QueryContractsByCodeRequest {
  return {
    codeId: Long.UZERO,
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryContractsByCodeRequest = {
  encode(message: QueryContractsByCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractsByCodeRequest {
    const obj = createBaseQueryContractsByCodeRequest();
    if (isSet(object.codeId)) obj.codeId = Long.fromValue(object.codeId);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractsByCodeRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractsByCodeRequest>, I>>(
    object: I,
  ): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Long.fromValue(object.codeId);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryContractsByCodeResponse(): QueryContractsByCodeResponse {
  return {
    contracts: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryContractsByCodeResponse = {
  encode(message: QueryContractsByCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractsByCodeResponse {
    const obj = createBaseQueryContractsByCodeResponse();
    if (Array.isArray(object?.contracts)) obj.contracts = object.contracts.map((e: any) => String(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractsByCodeResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractsByCodeResponse>, I>>(
    object: I,
  ): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map((e) => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllContractStateRequest(): QueryAllContractStateRequest {
  return {
    address: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryAllContractStateRequest = {
  encode(message: QueryAllContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllContractStateRequest {
    const obj = createBaseQueryAllContractStateRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllContractStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllContractStateRequest>, I>>(
    object: I,
  ): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllContractStateResponse(): QueryAllContractStateResponse {
  return {
    models: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryAllContractStateResponse = {
  encode(message: QueryAllContractStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.models) {
      Model.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.models.push(Model.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllContractStateResponse {
    const obj = createBaseQueryAllContractStateResponse();
    if (Array.isArray(object?.models)) obj.models = object.models.map((e: any) => Model.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllContractStateResponse): unknown {
    const obj: any = {};
    if (message.models) {
      obj.models = message.models.map((e) => (e ? Model.toJSON(e) : undefined));
    } else {
      obj.models = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllContractStateResponse>, I>>(
    object: I,
  ): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map((e) => Model.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryRawContractStateRequest(): QueryRawContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array(),
  };
}
export const QueryRawContractStateRequest = {
  encode(message: QueryRawContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRawContractStateRequest {
    const obj = createBaseQueryRawContractStateRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.queryData)) obj.queryData = bytesFromBase64(object.queryData);
    return obj;
  },
  toJSON(message: QueryRawContractStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.queryData !== undefined &&
      (obj.queryData = base64FromBytes(
        message.queryData !== undefined ? message.queryData : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRawContractStateRequest>, I>>(
    object: I,
  ): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
};
function createBaseQueryRawContractStateResponse(): QueryRawContractStateResponse {
  return {
    data: new Uint8Array(),
  };
}
export const QueryRawContractStateResponse = {
  encode(message: QueryRawContractStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRawContractStateResponse {
    const obj = createBaseQueryRawContractStateResponse();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: QueryRawContractStateResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRawContractStateResponse>, I>>(
    object: I,
  ): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
function createBaseQuerySmartContractStateRequest(): QuerySmartContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array(),
  };
}
export const QuerySmartContractStateRequest = {
  encode(message: QuerySmartContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySmartContractStateRequest {
    const obj = createBaseQuerySmartContractStateRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.queryData)) obj.queryData = bytesFromBase64(object.queryData);
    return obj;
  },
  toJSON(message: QuerySmartContractStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.queryData !== undefined &&
      (obj.queryData = base64FromBytes(
        message.queryData !== undefined ? message.queryData : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySmartContractStateRequest>, I>>(
    object: I,
  ): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
};
function createBaseQuerySmartContractStateResponse(): QuerySmartContractStateResponse {
  return {
    data: new Uint8Array(),
  };
}
export const QuerySmartContractStateResponse = {
  encode(message: QuerySmartContractStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySmartContractStateResponse {
    const obj = createBaseQuerySmartContractStateResponse();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: QuerySmartContractStateResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySmartContractStateResponse>, I>>(
    object: I,
  ): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    codeId: Long.UZERO,
  };
}
export const QueryCodeRequest = {
  encode(message: QueryCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeRequest {
    const obj = createBaseQueryCodeRequest();
    if (isSet(object.codeId)) obj.codeId = Long.fromValue(object.codeId);
    return obj;
  },
  toJSON(message: QueryCodeRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCodeRequest>, I>>(object: I): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Long.fromValue(object.codeId);
    }
    return message;
  },
};
function createBaseCodeInfoResponse(): CodeInfoResponse {
  return {
    codeId: Long.UZERO,
    creator: "",
    dataHash: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({}),
  };
}
export const CodeInfoResponse = {
  encode(message: CodeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(26).bytes(message.dataHash);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64() as Long;
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.dataHash = reader.bytes();
          break;
        case 6:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodeInfoResponse {
    const obj = createBaseCodeInfoResponse();
    if (isSet(object.codeId)) obj.codeId = Long.fromValue(object.codeId);
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.dataHash)) obj.dataHash = bytesFromBase64(object.dataHash);
    if (isSet(object.instantiatePermission))
      obj.instantiatePermission = AccessConfig.fromJSON(object.instantiatePermission);
    return obj;
  },
  toJSON(message: CodeInfoResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.dataHash !== undefined &&
      (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
    message.instantiatePermission !== undefined &&
      (obj.instantiatePermission = message.instantiatePermission
        ? AccessConfig.toJSON(message.instantiatePermission)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CodeInfoResponse>, I>>(object: I): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Long.fromValue(object.codeId);
    }
    message.creator = object.creator ?? "";
    message.dataHash = object.dataHash ?? new Uint8Array();
    if (object.instantiatePermission !== undefined && object.instantiatePermission !== null) {
      message.instantiatePermission = AccessConfig.fromPartial(object.instantiatePermission);
    }
    return message;
  },
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    codeInfo: CodeInfoResponse.fromPartial({}),
    data: new Uint8Array(),
  };
}
export const QueryCodeResponse = {
  encode(message: QueryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeInfo !== undefined) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeResponse {
    const obj = createBaseQueryCodeResponse();
    if (isSet(object.codeInfo)) obj.codeInfo = CodeInfoResponse.fromJSON(object.codeInfo);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: QueryCodeResponse): unknown {
    const obj: any = {};
    message.codeInfo !== undefined &&
      (obj.codeInfo = message.codeInfo ? CodeInfoResponse.toJSON(message.codeInfo) : undefined);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCodeResponse>, I>>(object: I): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfoResponse.fromPartial(object.codeInfo);
    }
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
function createBaseQueryCodesRequest(): QueryCodesRequest {
  return {
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryCodesRequest = {
  encode(message: QueryCodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodesRequest {
    const obj = createBaseQueryCodesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryCodesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCodesRequest>, I>>(object: I): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryCodesResponse(): QueryCodesResponse {
  return {
    codeInfos: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryCodesResponse = {
  encode(message: QueryCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodesResponse {
    const obj = createBaseQueryCodesResponse();
    if (Array.isArray(object?.codeInfos))
      obj.codeInfos = object.codeInfos.map((e: any) => CodeInfoResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryCodesResponse): unknown {
    const obj: any = {};
    if (message.codeInfos) {
      obj.codeInfos = message.codeInfos.map((e) => (e ? CodeInfoResponse.toJSON(e) : undefined));
    } else {
      obj.codeInfos = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCodesResponse>, I>>(object: I): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map((e) => CodeInfoResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryPinnedCodesRequest(): QueryPinnedCodesRequest {
  return {
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryPinnedCodesRequest = {
  encode(message: QueryPinnedCodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPinnedCodesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPinnedCodesRequest {
    const obj = createBaseQueryPinnedCodesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryPinnedCodesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPinnedCodesRequest>, I>>(object: I): QueryPinnedCodesRequest {
    const message = createBaseQueryPinnedCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryPinnedCodesResponse(): QueryPinnedCodesResponse {
  return {
    codeIds: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryPinnedCodesResponse = {
  encode(message: QueryPinnedCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPinnedCodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64() as Long);
            }
          } else {
            message.codeIds.push(reader.uint64() as Long);
          }
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPinnedCodesResponse {
    const obj = createBaseQueryPinnedCodesResponse();
    if (Array.isArray(object?.codeIds)) obj.codeIds = object.codeIds.map((e: any) => Long.fromValue(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryPinnedCodesResponse): unknown {
    const obj: any = {};
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.codeIds = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPinnedCodesResponse>, I>>(
    object: I,
  ): QueryPinnedCodesResponse {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.codeIds?.map((e) => Long.fromValue(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryContractsByCreatorRequest(): QueryContractsByCreatorRequest {
  return {
    creatorAddress: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryContractsByCreatorRequest = {
  encode(message: QueryContractsByCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorAddress !== "") {
      writer.uint32(10).string(message.creatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractsByCreatorRequest {
    const obj = createBaseQueryContractsByCreatorRequest();
    if (isSet(object.creatorAddress)) obj.creatorAddress = String(object.creatorAddress);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractsByCreatorRequest): unknown {
    const obj: any = {};
    message.creatorAddress !== undefined && (obj.creatorAddress = message.creatorAddress);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractsByCreatorRequest>, I>>(
    object: I,
  ): QueryContractsByCreatorRequest {
    const message = createBaseQueryContractsByCreatorRequest();
    message.creatorAddress = object.creatorAddress ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryContractsByCreatorResponse(): QueryContractsByCreatorResponse {
  return {
    contractAddresses: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryContractsByCreatorResponse = {
  encode(message: QueryContractsByCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractsByCreatorResponse {
    const obj = createBaseQueryContractsByCreatorResponse();
    if (Array.isArray(object?.contractAddresses))
      obj.contractAddresses = object.contractAddresses.map((e: any) => String(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractsByCreatorResponse): unknown {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map((e) => e);
    } else {
      obj.contractAddresses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractsByCreatorResponse>, I>>(
    object: I,
  ): QueryContractsByCreatorResponse {
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = object.contractAddresses?.map((e) => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
/** Query provides defines the gRPC querier service */
export interface Query {
  /** ContractInfo gets the contract meta data */
  ContractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
  /** ContractHistory gets the contract code history */
  ContractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
  /** ContractsByCode lists all smart contracts for a code id */
  ContractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
  /** AllContractState gets all raw store data for a single contract */
  AllContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
  /** RawContractState gets single key from the raw store data of a contract */
  RawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
  /** SmartContractState get smart query result from the contract */
  SmartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
  /** Code gets the binary code and metadata for a singe wasm code */
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /** Codes gets the metadata for all stored wasm codes */
  Codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
  /** PinnedCodes gets the pinned code ids */
  PinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
  /** Params gets the module params */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ContractsByCreator gets the contracts by creator */
  ContractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ContractInfo = this.ContractInfo.bind(this);
    this.ContractHistory = this.ContractHistory.bind(this);
    this.ContractsByCode = this.ContractsByCode.bind(this);
    this.AllContractState = this.AllContractState.bind(this);
    this.RawContractState = this.RawContractState.bind(this);
    this.SmartContractState = this.SmartContractState.bind(this);
    this.Code = this.Code.bind(this);
    this.Codes = this.Codes.bind(this);
    this.PinnedCodes = this.PinnedCodes.bind(this);
    this.Params = this.Params.bind(this);
    this.ContractsByCreator = this.ContractsByCreator.bind(this);
  }
  ContractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse> {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
    return promise.then((data) => QueryContractInfoResponse.decode(new _m0.Reader(data)));
  }
  ContractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> {
    const data = QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
    return promise.then((data) => QueryContractHistoryResponse.decode(new _m0.Reader(data)));
  }
  ContractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
    return promise.then((data) => QueryContractsByCodeResponse.decode(new _m0.Reader(data)));
  }
  AllContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
    return promise.then((data) => QueryAllContractStateResponse.decode(new _m0.Reader(data)));
  }
  RawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
    return promise.then((data) => QueryRawContractStateResponse.decode(new _m0.Reader(data)));
  }
  SmartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> {
    const data = QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
    return promise.then((data) => QuerySmartContractStateResponse.decode(new _m0.Reader(data)));
  }
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
    return promise.then((data) => QueryCodeResponse.decode(new _m0.Reader(data)));
  }
  Codes(
    request: QueryCodesRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryCodesResponse> {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
    return promise.then((data) => QueryCodesResponse.decode(new _m0.Reader(data)));
  }
  PinnedCodes(
    request: QueryPinnedCodesRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryPinnedCodesResponse> {
    const data = QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
    return promise.then((data) => QueryPinnedCodesResponse.decode(new _m0.Reader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  ContractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse> {
    const data = QueryContractsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCreator", data);
    return promise.then((data) => QueryContractsByCreatorResponse.decode(new _m0.Reader(data)));
  }
}
