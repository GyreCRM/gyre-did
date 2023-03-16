import {
  Contract,
  ContractProvider,
  Sender,
  Address,
  Cell,
  beginCell,
} from "ton-core";

export default class DID implements Contract {
  constructor(
    readonly address: Address,
    readonly init?: { code: Cell; data: Cell }
  ) {}

  async sendCertificate(
    provider: ContractProvider,
    via: Sender,
    hash: string,
    studentId: number
  ) {
    const messageBody = beginCell()
      .storeUint(1, 32) // op
      .storeUint(12345, 64) // query_id
      .storeUint(studentId, 32) // key (student_id)
      .storeSlice(beginCell().storeStringRefTail(hash).endCell().asSlice()) // value (hash)
      .endCell();
    await provider.internal(via, {
      value: "0.03", // send 0.002 TON for gas
      body: messageBody,
    });
  }

  async getCertificate(provider: ContractProvider, studentId: number) {
    const result = await provider.get("certificate", [
      { type: "int", value: BigInt(studentId) },
    ]);
    return result.stack;
  }
}
