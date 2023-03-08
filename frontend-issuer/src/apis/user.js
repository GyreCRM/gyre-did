import axios from "axios";
import { DOMAIN } from "../utils/constant";

const URL = `${DOMAIN}/users`;
/**
 * Send a get request to the api server.
 * @returns user
 */
export async function getUser(id) {
  try {
    const res = await axios.get(URL, {
      params: { id },
    });
    return res.data.result;
  } catch (error) {
    throw new Error(error);
  }
}
