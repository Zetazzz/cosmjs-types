/* eslint-disable */
import { Vote, LightBlock } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export const protobufPackage = "tendermint.types";
export interface Evidence {
  duplicateVoteEvidence?: DuplicateVoteEvidence;
  lightClientAttackEvidence?: LightClientAttackEvidence;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
  voteA: Vote;
  voteB: Vote;
  totalVotingPower: bigint;
  validatorPower: bigint;
  timestamp: Timestamp;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
  conflictingBlock: LightBlock;
  commonHeight: bigint;
  byzantineValidators: Validator[];
  totalVotingPower: bigint;
  timestamp: Timestamp;
}
export interface EvidenceList {
  evidence: Evidence[];
}
function createBaseEvidence(): Evidence {
  return {
    duplicateVoteEvidence: undefined,
    lightClientAttackEvidence: undefined,
  };
}
export const Evidence = {
  typeUrl: "/tendermint.types.Evidence",
  encode(message: Evidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.duplicateVoteEvidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.lightClientAttackEvidence !== undefined) {
      LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicateVoteEvidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;
        case 2:
          message.lightClientAttackEvidence = LightClientAttackEvidence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Evidence {
    const obj = createBaseEvidence();
    if (isSet(object.duplicateVoteEvidence))
      obj.duplicateVoteEvidence = DuplicateVoteEvidence.fromJSON(object.duplicateVoteEvidence);
    if (isSet(object.lightClientAttackEvidence))
      obj.lightClientAttackEvidence = LightClientAttackEvidence.fromJSON(object.lightClientAttackEvidence);
    return obj;
  },
  toJSON(message: Evidence): unknown {
    const obj: any = {};
    message.duplicateVoteEvidence !== undefined &&
      (obj.duplicateVoteEvidence = message.duplicateVoteEvidence
        ? DuplicateVoteEvidence.toJSON(message.duplicateVoteEvidence)
        : undefined);
    message.lightClientAttackEvidence !== undefined &&
      (obj.lightClientAttackEvidence = message.lightClientAttackEvidence
        ? LightClientAttackEvidence.toJSON(message.lightClientAttackEvidence)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Evidence>, I>>(object: I): Evidence {
    const message = createBaseEvidence();
    if (object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null) {
      message.duplicateVoteEvidence = DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence);
    }
    if (object.lightClientAttackEvidence !== undefined && object.lightClientAttackEvidence !== null) {
      message.lightClientAttackEvidence = LightClientAttackEvidence.fromPartial(
        object.lightClientAttackEvidence,
      );
    }
    return message;
  },
};
function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return {
    voteA: Vote.fromPartial({}),
    voteB: Vote.fromPartial({}),
    totalVotingPower: BigInt(0),
    validatorPower: BigInt(0),
    timestamp: Timestamp.fromPartial({}),
  };
}
export const DuplicateVoteEvidence = {
  typeUrl: "/tendermint.types.DuplicateVoteEvidence",
  encode(message: DuplicateVoteEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteA !== undefined) {
      Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== undefined) {
      Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.totalVotingPower);
    }
    if (message.validatorPower !== BigInt(0)) {
      writer.uint32(32).int64(message.validatorPower);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DuplicateVoteEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteA = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteB = Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = reader.int64();
          break;
        case 4:
          message.validatorPower = reader.int64();
          break;
        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DuplicateVoteEvidence {
    const obj = createBaseDuplicateVoteEvidence();
    if (isSet(object.voteA)) obj.voteA = Vote.fromJSON(object.voteA);
    if (isSet(object.voteB)) obj.voteB = Vote.fromJSON(object.voteB);
    if (isSet(object.totalVotingPower)) obj.totalVotingPower = BigInt(object.totalVotingPower.toString());
    if (isSet(object.validatorPower)) obj.validatorPower = BigInt(object.validatorPower.toString());
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(message: DuplicateVoteEvidence): unknown {
    const obj: any = {};
    message.voteA !== undefined && (obj.voteA = message.voteA ? Vote.toJSON(message.voteA) : undefined);
    message.voteB !== undefined && (obj.voteB = message.voteB ? Vote.toJSON(message.voteB) : undefined);
    message.totalVotingPower !== undefined &&
      (obj.totalVotingPower = (message.totalVotingPower || BigInt(0)).toString());
    message.validatorPower !== undefined &&
      (obj.validatorPower = (message.validatorPower || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DuplicateVoteEvidence>, I>>(object: I): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    if (object.voteA !== undefined && object.voteA !== null) {
      message.voteA = Vote.fromPartial(object.voteA);
    }
    if (object.voteB !== undefined && object.voteB !== null) {
      message.voteB = Vote.fromPartial(object.voteB);
    }
    if (object.totalVotingPower !== undefined && object.totalVotingPower !== null) {
      message.totalVotingPower = BigInt(object.totalVotingPower.toString());
    }
    if (object.validatorPower !== undefined && object.validatorPower !== null) {
      message.validatorPower = BigInt(object.validatorPower.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
};
function createBaseLightClientAttackEvidence(): LightClientAttackEvidence {
  return {
    conflictingBlock: LightBlock.fromPartial({}),
    commonHeight: BigInt(0),
    byzantineValidators: [],
    totalVotingPower: BigInt(0),
    timestamp: Timestamp.fromPartial({}),
  };
}
export const LightClientAttackEvidence = {
  typeUrl: "/tendermint.types.LightClientAttackEvidence",
  encode(message: LightClientAttackEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.conflictingBlock !== undefined) {
      LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.commonHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.commonHeight);
    }
    for (const v of message.byzantineValidators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(32).int64(message.totalVotingPower);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LightClientAttackEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightClientAttackEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictingBlock = LightBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.commonHeight = reader.int64();
          break;
        case 3:
          message.byzantineValidators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalVotingPower = reader.int64();
          break;
        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LightClientAttackEvidence {
    const obj = createBaseLightClientAttackEvidence();
    if (isSet(object.conflictingBlock)) obj.conflictingBlock = LightBlock.fromJSON(object.conflictingBlock);
    if (isSet(object.commonHeight)) obj.commonHeight = BigInt(object.commonHeight.toString());
    if (Array.isArray(object?.byzantineValidators))
      obj.byzantineValidators = object.byzantineValidators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.totalVotingPower)) obj.totalVotingPower = BigInt(object.totalVotingPower.toString());
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(message: LightClientAttackEvidence): unknown {
    const obj: any = {};
    message.conflictingBlock !== undefined &&
      (obj.conflictingBlock = message.conflictingBlock
        ? LightBlock.toJSON(message.conflictingBlock)
        : undefined);
    message.commonHeight !== undefined && (obj.commonHeight = (message.commonHeight || BigInt(0)).toString());
    if (message.byzantineValidators) {
      obj.byzantineValidators = message.byzantineValidators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.byzantineValidators = [];
    }
    message.totalVotingPower !== undefined &&
      (obj.totalVotingPower = (message.totalVotingPower || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LightClientAttackEvidence>, I>>(
    object: I,
  ): LightClientAttackEvidence {
    const message = createBaseLightClientAttackEvidence();
    if (object.conflictingBlock !== undefined && object.conflictingBlock !== null) {
      message.conflictingBlock = LightBlock.fromPartial(object.conflictingBlock);
    }
    if (object.commonHeight !== undefined && object.commonHeight !== null) {
      message.commonHeight = BigInt(object.commonHeight.toString());
    }
    message.byzantineValidators = object.byzantineValidators?.map((e) => Validator.fromPartial(e)) || [];
    if (object.totalVotingPower !== undefined && object.totalVotingPower !== null) {
      message.totalVotingPower = BigInt(object.totalVotingPower.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
};
function createBaseEvidenceList(): EvidenceList {
  return {
    evidence: [],
  };
}
export const EvidenceList = {
  typeUrl: "/tendermint.types.EvidenceList",
  encode(message: EvidenceList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvidenceList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvidenceList {
    const obj = createBaseEvidenceList();
    if (Array.isArray(object?.evidence)) obj.evidence = object.evidence.map((e: any) => Evidence.fromJSON(e));
    return obj;
  },
  toJSON(message: EvidenceList): unknown {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => (e ? Evidence.toJSON(e) : undefined));
    } else {
      obj.evidence = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EvidenceList>, I>>(object: I): EvidenceList {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map((e) => Evidence.fromPartial(e)) || [];
    return message;
  },
};
