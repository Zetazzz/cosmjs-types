/* eslint-disable */
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.feegrant.v1beta1";
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
  /**
   * spend_limit specifies the maximum amount of coins that can be spent
   * by this allowance and will be updated as coins are spent. If it is
   * empty, there is no spend limit and any amount of coins can be spent.
   */
  spendLimit: Coin[];
  /** expiration specifies an optional time when this allowance expires */
  expiration: Timestamp;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
  /** basic specifies a struct of `BasicAllowance` */
  basic: BasicAllowance;
  /**
   * period specifies the time duration in which period_spend_limit coins can
   * be spent before that allowance is reset
   */
  period: Duration;
  /**
   * period_spend_limit specifies the maximum number of coins that can be spent
   * in the period
   */
  periodSpendLimit: Coin[];
  /** period_can_spend is the number of coins left to be spent before the period_reset time */
  periodCanSpend: Coin[];
  /**
   * period_reset is the time at which this period resets and a new one begins,
   * it is calculated from the start time of the first transaction after the
   * last period ended
   */
  periodReset: Timestamp;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
  /** allowance can be any of basic and periodic fee allowance. */
  allowance: Any;
  /** allowed_messages are the messages for which the grantee has the access. */
  allowedMessages: string[];
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance: Any;
}
function createBaseBasicAllowance(): BasicAllowance {
  return {
    spendLimit: [],
    expiration: Timestamp.fromPartial({}),
  };
}
export const BasicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
  encode(message: BasicAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BasicAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BasicAllowance {
    const obj = createBaseBasicAllowance();
    if (Array.isArray(object?.spendLimit))
      obj.spendLimit = object.spendLimit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.expiration)) obj.expiration = fromJsonTimestamp(object.expiration);
    return obj;
  },
  toJSON(message: BasicAllowance): unknown {
    const obj: any = {};
    if (message.spendLimit) {
      obj.spendLimit = message.spendLimit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.spendLimit = [];
    }
    message.expiration !== undefined && (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BasicAllowance>, I>>(object: I): BasicAllowance {
    const message = createBaseBasicAllowance();
    message.spendLimit = object.spendLimit?.map((e) => Coin.fromPartial(e)) || [];
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = Timestamp.fromPartial(object.expiration);
    }
    return message;
  },
};
function createBasePeriodicAllowance(): PeriodicAllowance {
  return {
    basic: BasicAllowance.fromPartial({}),
    period: Duration.fromPartial({}),
    periodSpendLimit: [],
    periodCanSpend: [],
    periodReset: Timestamp.fromPartial({}),
  };
}
export const PeriodicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
  encode(message: PeriodicAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.basic !== undefined) {
      BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.periodSpendLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periodCanSpend) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.periodReset !== undefined) {
      Timestamp.encode(message.periodReset, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeriodicAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basic = BasicAllowance.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.periodSpendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.periodCanSpend.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.periodReset = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeriodicAllowance {
    const obj = createBasePeriodicAllowance();
    if (isSet(object.basic)) obj.basic = BasicAllowance.fromJSON(object.basic);
    if (isSet(object.period)) obj.period = Duration.fromJSON(object.period);
    if (Array.isArray(object?.periodSpendLimit))
      obj.periodSpendLimit = object.periodSpendLimit.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.periodCanSpend))
      obj.periodCanSpend = object.periodCanSpend.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.periodReset)) obj.periodReset = fromJsonTimestamp(object.periodReset);
    return obj;
  },
  toJSON(message: PeriodicAllowance): unknown {
    const obj: any = {};
    message.basic !== undefined &&
      (obj.basic = message.basic ? BasicAllowance.toJSON(message.basic) : undefined);
    message.period !== undefined &&
      (obj.period = message.period ? Duration.toJSON(message.period) : undefined);
    if (message.periodSpendLimit) {
      obj.periodSpendLimit = message.periodSpendLimit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.periodSpendLimit = [];
    }
    if (message.periodCanSpend) {
      obj.periodCanSpend = message.periodCanSpend.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.periodCanSpend = [];
    }
    message.periodReset !== undefined && (obj.periodReset = fromTimestamp(message.periodReset).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PeriodicAllowance>, I>>(object: I): PeriodicAllowance {
    const message = createBasePeriodicAllowance();
    if (object.basic !== undefined && object.basic !== null) {
      message.basic = BasicAllowance.fromPartial(object.basic);
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = Duration.fromPartial(object.period);
    }
    message.periodSpendLimit = object.periodSpendLimit?.map((e) => Coin.fromPartial(e)) || [];
    message.periodCanSpend = object.periodCanSpend?.map((e) => Coin.fromPartial(e)) || [];
    if (object.periodReset !== undefined && object.periodReset !== null) {
      message.periodReset = Timestamp.fromPartial(object.periodReset);
    }
    return message;
  },
};
function createBaseAllowedMsgAllowance(): AllowedMsgAllowance {
  return {
    allowance: Any.fromPartial({}),
    allowedMessages: [],
  };
}
export const AllowedMsgAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
  encode(message: AllowedMsgAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowedMessages) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowedMsgAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedMsgAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowedMessages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllowedMsgAllowance {
    const obj = createBaseAllowedMsgAllowance();
    if (isSet(object.allowance)) obj.allowance = Any.fromJSON(object.allowance);
    if (Array.isArray(object?.allowedMessages))
      obj.allowedMessages = object.allowedMessages.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: AllowedMsgAllowance): unknown {
    const obj: any = {};
    message.allowance !== undefined &&
      (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
    if (message.allowedMessages) {
      obj.allowedMessages = message.allowedMessages.map((e) => e);
    } else {
      obj.allowedMessages = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllowedMsgAllowance>, I>>(object: I): AllowedMsgAllowance {
    const message = createBaseAllowedMsgAllowance();
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = Any.fromPartial(object.allowance);
    }
    message.allowedMessages = object.allowedMessages?.map((e) => e) || [];
    return message;
  },
};
function createBaseGrant(): Grant {
  return {
    granter: "",
    grantee: "",
    allowance: Any.fromPartial({}),
  };
}
export const Grant = {
  typeUrl: "/cosmos.feegrant.v1beta1.Grant",
  encode(message: Grant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Grant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Grant {
    const obj = createBaseGrant();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.allowance)) obj.allowance = Any.fromJSON(object.allowance);
    return obj;
  },
  toJSON(message: Grant): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.allowance !== undefined &&
      (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Grant>, I>>(object: I): Grant {
    const message = createBaseGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = Any.fromPartial(object.allowance);
    }
    return message;
  },
};
