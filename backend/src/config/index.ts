import dotenv from "dotenv";

dotenv.config();

export default {
  // Port
  PORT: process.env.PORT || 80,

  // TON
  TON_NETWORK: process.env.TON_NETWORK || "testnet",
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS || "",
  MNEMONIC: process.env.MNEMONIC || "",

  // NFT Storage
  NFT_STORAGE_API_KEY: process.env.NFT_STORAGE_API_KEY || "",
};
