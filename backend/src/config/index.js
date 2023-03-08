import dotenv from "dotenv";

dotenv.config();

export default {
  // Port
  PORT: parseInt(process.env.PORT, 10),

  // DB
  DB_USER_NAME: process.env.DB_USER_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_HOST: process.env.DB_HOST,

  // TON
  TON_NETWORK: process.env.TON_NETWORK,
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  KEYSTORE_PASSWORD: process.env.KEYSTORE_PASSWORD,
};
