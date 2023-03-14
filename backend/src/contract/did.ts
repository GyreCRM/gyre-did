import {
  Contract,
  ContractProvider,
  Sender,
  Address,
  Cell,
  beginCell,
  contractAddress,
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
    student_id: number
  ) {
    const messageBody = beginCell()
      .storeUint(1, 32) // op
      .storeUint(12345, 64) // query_id
      .storeUint(student_id, 32) // key (student_id)
      // .storeStringRefTail("ddasdsa")
      // .storeSlice("wooogy") // value (hash)
      .storeRef(beginCell().storeStringRefTail(hash).endCell())
      .endCell();
    await provider.internal(via, {
      value: "0.03", // send 0.002 TON for gas
      body: messageBody,
    });
  }

  // async getCertificate(provider: ContractProvider, student_id: number) {
  //   const [stud_id, hash] = await provider.get("certificate", [student_id]);
  //   return [stud_id, hash] as const;
  // }
}
