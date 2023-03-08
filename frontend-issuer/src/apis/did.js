import axios from "axios";
import { DOMAIN } from "../utils/constant";

const URL = `${DOMAIN}/dids`;
/**
 * Send a get request to the api server.
 * @returns dids
 */
export async function getDids() {
  try {
    const res = await axios.get(`${URL}`);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}
