/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmwasm.wasm.v1";
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
  /** Grants for contract executions */
  grants: ContractGrant[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
  /** Grants for contract migrations */
  grants: ContractGrant[];
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
  /** Contract is the bech32 address of the smart contract */
  contract: string;
  /**
   * Limit defines execution limits that are enforced and updated when the grant
   * is applied. When the limit lapsed the grant is removed.
   */
  limit: Any;
  /**
   * Filter define more fine-grained control on the message payload passed
   * to the contract in the operation. When no filter applies on execution, the
   * operation is prohibited.
   */
  filter: Any;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
  /** Remaining number that is decremented on each execution */
  remaining: bigint;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: Coin[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
  /** Remaining number that is decremented on each execution */
  callsRemaining: bigint;
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: Coin[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
  /** Messages is the list of unique keys */
  keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
  /** Messages is the list of raw contract messages */
  messages: Uint8Array[];
}
function createBaseContractExecutionAuthorization(): ContractExecutionAuthorization {
  return {
    grants: [],
  };
}
export const ContractExecutionAuthorization = {
  typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
  encode(
    message: ContractExecutionAuthorization,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractExecutionAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractExecutionAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractExecutionAuthorization {
    const obj = createBaseContractExecutionAuthorization();
    if (Array.isArray(object?.grants)) obj.grants = object.grants.map((e: any) => ContractGrant.fromJSON(e));
    return obj;
  },
  toJSON(message: ContractExecutionAuthorization): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) => (e ? ContractGrant.toJSON(e) : undefined));
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ContractExecutionAuthorization>, I>>(
    object: I,
  ): ContractExecutionAuthorization {
    const message = createBaseContractExecutionAuthorization();
    message.grants = object.grants?.map((e) => ContractGrant.fromPartial(e)) || [];
    return message;
  },
};
function createBaseContractMigrationAuthorization(): ContractMigrationAuthorization {
  return {
    grants: [],
  };
}
export const ContractMigrationAuthorization = {
  typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
  encode(
    message: ContractMigrationAuthorization,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractMigrationAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractMigrationAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractMigrationAuthorization {
    const obj = createBaseContractMigrationAuthorization();
    if (Array.isArray(object?.grants)) obj.grants = object.grants.map((e: any) => ContractGrant.fromJSON(e));
    return obj;
  },
  toJSON(message: ContractMigrationAuthorization): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) => (e ? ContractGrant.toJSON(e) : undefined));
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ContractMigrationAuthorization>, I>>(
    object: I,
  ): ContractMigrationAuthorization {
    const message = createBaseContractMigrationAuthorization();
    message.grants = object.grants?.map((e) => ContractGrant.fromPartial(e)) || [];
    return message;
  },
};
function createBaseContractGrant(): ContractGrant {
  return {
    contract: "",
    limit: Any.fromPartial({}),
    filter: Any.fromPartial({}),
  };
}
export const ContractGrant = {
  typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
  encode(message: ContractGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.limit !== undefined) {
      Any.encode(message.limit, writer.uint32(18).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      Any.encode(message.filter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.limit = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.filter = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractGrant {
    const obj = createBaseContractGrant();
    if (isSet(object.contract)) obj.contract = String(object.contract);
    if (isSet(object.limit)) obj.limit = Any.fromJSON(object.limit);
    if (isSet(object.filter)) obj.filter = Any.fromJSON(object.filter);
    return obj;
  },
  toJSON(message: ContractGrant): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.limit !== undefined && (obj.limit = message.limit ? Any.toJSON(message.limit) : undefined);
    message.filter !== undefined && (obj.filter = message.filter ? Any.toJSON(message.filter) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ContractGrant>, I>>(object: I): ContractGrant {
    const message = createBaseContractGrant();
    message.contract = object.contract ?? "";
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Any.fromPartial(object.limit);
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = Any.fromPartial(object.filter);
    }
    return message;
  },
};
function createBaseMaxCallsLimit(): MaxCallsLimit {
  return {
    remaining: BigInt(0),
  };
}
export const MaxCallsLimit = {
  typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
  encode(message: MaxCallsLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remaining !== BigInt(0)) {
      writer.uint32(8).uint64(message.remaining);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MaxCallsLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxCallsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remaining = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MaxCallsLimit {
    const obj = createBaseMaxCallsLimit();
    if (isSet(object.remaining)) obj.remaining = BigInt(object.remaining.toString());
    return obj;
  },
  toJSON(message: MaxCallsLimit): unknown {
    const obj: any = {};
    message.remaining !== undefined && (obj.remaining = (message.remaining || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MaxCallsLimit>, I>>(object: I): MaxCallsLimit {
    const message = createBaseMaxCallsLimit();
    if (object.remaining !== undefined && object.remaining !== null) {
      message.remaining = BigInt(object.remaining.toString());
    }
    return message;
  },
};
function createBaseMaxFundsLimit(): MaxFundsLimit {
  return {
    amounts: [],
  };
}
export const MaxFundsLimit = {
  typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
  encode(message: MaxFundsLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MaxFundsLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxFundsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MaxFundsLimit {
    const obj = createBaseMaxFundsLimit();
    if (Array.isArray(object?.amounts)) obj.amounts = object.amounts.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MaxFundsLimit): unknown {
    const obj: any = {};
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MaxFundsLimit>, I>>(object: I): MaxFundsLimit {
    const message = createBaseMaxFundsLimit();
    message.amounts = object.amounts?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseCombinedLimit(): CombinedLimit {
  return {
    callsRemaining: BigInt(0),
    amounts: [],
  };
}
export const CombinedLimit = {
  typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
  encode(message: CombinedLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.callsRemaining !== BigInt(0)) {
      writer.uint32(8).uint64(message.callsRemaining);
    }
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CombinedLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCombinedLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callsRemaining = reader.uint64();
          break;
        case 2:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CombinedLimit {
    const obj = createBaseCombinedLimit();
    if (isSet(object.callsRemaining)) obj.callsRemaining = BigInt(object.callsRemaining.toString());
    if (Array.isArray(object?.amounts)) obj.amounts = object.amounts.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: CombinedLimit): unknown {
    const obj: any = {};
    message.callsRemaining !== undefined &&
      (obj.callsRemaining = (message.callsRemaining || BigInt(0)).toString());
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CombinedLimit>, I>>(object: I): CombinedLimit {
    const message = createBaseCombinedLimit();
    if (object.callsRemaining !== undefined && object.callsRemaining !== null) {
      message.callsRemaining = BigInt(object.callsRemaining.toString());
    }
    message.amounts = object.amounts?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseAllowAllMessagesFilter(): AllowAllMessagesFilter {
  return {};
}
export const AllowAllMessagesFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
  encode(_: AllowAllMessagesFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowAllMessagesFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowAllMessagesFilter();
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
  fromJSON(_: any): AllowAllMessagesFilter {
    const obj = createBaseAllowAllMessagesFilter();
    return obj;
  },
  toJSON(_: AllowAllMessagesFilter): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllowAllMessagesFilter>, I>>(_: I): AllowAllMessagesFilter {
    const message = createBaseAllowAllMessagesFilter();
    return message;
  },
};
function createBaseAcceptedMessageKeysFilter(): AcceptedMessageKeysFilter {
  return {
    keys: [],
  };
}
export const AcceptedMessageKeysFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
  encode(message: AcceptedMessageKeysFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessageKeysFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessageKeysFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AcceptedMessageKeysFilter {
    const obj = createBaseAcceptedMessageKeysFilter();
    if (Array.isArray(object?.keys)) obj.keys = object.keys.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: AcceptedMessageKeysFilter): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AcceptedMessageKeysFilter>, I>>(
    object: I,
  ): AcceptedMessageKeysFilter {
    const message = createBaseAcceptedMessageKeysFilter();
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};
function createBaseAcceptedMessagesFilter(): AcceptedMessagesFilter {
  return {
    messages: [],
  };
}
export const AcceptedMessagesFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
  encode(message: AcceptedMessagesFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessagesFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessagesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AcceptedMessagesFilter {
    const obj = createBaseAcceptedMessagesFilter();
    if (Array.isArray(object?.messages)) obj.messages = object.messages.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: AcceptedMessagesFilter): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AcceptedMessagesFilter>, I>>(object: I): AcceptedMessagesFilter {
    const message = createBaseAcceptedMessagesFilter();
    message.messages = object.messages?.map((e) => e) || [];
    return message;
  },
};
