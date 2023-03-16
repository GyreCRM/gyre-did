import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient, Address, serializeTuple, Cell } from "ton";
import DID from "../contract/did";

export default async function getCertificateFromContract(studentId) {
  // initialize ton rpc client on testnet
  const endpoint = await getHttpEndpoint({ network: "testnet" });
  const client = new TonClient({ endpoint });

  // open Counter instance by address
  const counterAddress = Address.parse(
    "kQBL10y2kZY7KJSeShi0D_UOcNbtirrAJBMQi9R1_huKox2O"
  ); // replace with your address from step 8
  const did = new DID(counterAddress);
  const didContract = client.open(did);

  // call the getter on chain
  const certificateTuple = await didContract.getCertificate(studentId);

  const _studentID = certificateTuple.readBigNumber();
  const _bits = certificateTuple.readBigNumber();
  const certificate = certificateTuple.readCell().asSlice().loadStringTail();
  return { certificate };
}
