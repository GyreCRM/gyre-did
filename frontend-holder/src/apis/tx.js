import axios from 'axios';
import { DOMAIN } from '../utils/constant';

const URL = `${DOMAIN}/txs`;
/**
 * Send a get request to the api server.
 * @returns dids
 */
export async function getTx(didId) {
    try {
        const res = await axios.get(`${URL}`, {
            params: { didId },
        });
        return res.data.result;
    } catch (error) {
        throw new Error(error);
    }
}
