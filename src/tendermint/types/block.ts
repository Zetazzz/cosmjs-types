/* eslint-disable */
import { Header, Data, Commit } from "./types";
import { EvidenceList } from "./evidence";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "tendermint.types";
export interface Block {
  header: Header;
  data: Data;
  evidence: EvidenceList;
  lastCommit: Commit;
}
function createBaseBlock(): Block {
  return {
    header: Header.fromPartial({}),
    data: Data.fromPartial({}),
    evidence: EvidenceList.fromPartial({}),
    lastCommit: Commit.fromPartial({}),
  };
}
export const Block = {
  typeUrl: "/tendermint.types.Block",
  encode(message: Block, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== undefined) {
      Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Block {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastCommit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Block {
    const obj = createBaseBlock();
    if (isSet(object.header)) obj.header = Header.fromJSON(object.header);
    if (isSet(object.data)) obj.data = Data.fromJSON(object.data);
    if (isSet(object.evidence)) obj.evidence = EvidenceList.fromJSON(object.evidence);
    if (isSet(object.lastCommit)) obj.lastCommit = Commit.fromJSON(object.lastCommit);
    return obj;
  },
  toJSON(message: Block): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.data !== undefined && (obj.data = message.data ? Data.toJSON(message.data) : undefined);
    message.evidence !== undefined &&
      (obj.evidence = message.evidence ? EvidenceList.toJSON(message.evidence) : undefined);
    message.lastCommit !== undefined &&
      (obj.lastCommit = message.lastCommit ? Commit.toJSON(message.lastCommit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromPartial(object.data);
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceList.fromPartial(object.evidence);
    }
    if (object.lastCommit !== undefined && object.lastCommit !== null) {
      message.lastCommit = Commit.fromPartial(object.lastCommit);
    }
    return message;
  },
};
