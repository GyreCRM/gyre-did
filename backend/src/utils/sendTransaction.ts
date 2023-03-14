import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToWalletKey } from "ton-crypto";
import { TonClient, Address, WalletContractV3R2 } from "ton";
import { Network } from "@orbs-network/ton-access";
import DID from "../contract/did";
import config from "../config";

export default async function sendCertificateToContract(
  hash: string,
  studentId: number
) {
  // initialize ton rpc client on testnet
  const endpoint = await getHttpEndpoint({
    network: config.TON_NETWORK as Network,
  });
  const client = new TonClient({ endpoint });

  // open wallet v4 (notice the correct wallet version here)
  const mnemonic = config.MNEMONIC; // your 24 secret words
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = WalletContractV3R2.create({
    publicKey: key.publicKey,
    workchain: 0,
  });
  console.log("Wallet", wallet.address);
  if (!(await client.isContractDeployed(wallet.address))) {
    return console.log("wallet is not deployed");
  }

  // open wallet and read the current seqno of the wallet
  const walletContract = client.open(wallet);
  const walletSender = walletContract.sender(key.secretKey);
  const seqno = await walletContract.getSeqno();

  // open Counter instance by address
  const didAddress = Address.parse(config.CONTRACT_ADDRESS); // replace with your address from step 8
  const did = new DID(didAddress);
  const didContract = client.open(did);

  // send the increment transaction
  // await counterContract.sendIncrement(walletSender);

  await didContract.sendCertificate(walletSender, hash, studentId);

  // wait until confirmed
  let currentSeqno = seqno;
  while (currentSeqno == seqno) {
    console.log("waiting for transaction to confirm...");
    await sleep(1500);
    currentSeqno = await walletContract.getSeqno();
  }
  console.log("transaction confirmed!");
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
