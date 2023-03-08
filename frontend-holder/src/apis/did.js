import axios from 'axios';
import { DOMAIN } from '../utils/constant';

const URL = `${DOMAIN}/dids`;
/**
 * Send a get request to the api server.
 * @returns dids
 */
export async function getDids(userId) {
    try {
        const res = await axios.get(`${URL}/users`, {
            params: { userId },
        });
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}
/**
 * Send a post request to the api server.
 * @returns did
 */
export async function postDid(body) {
    try {
        const res = await axios.post(URL, JSON.stringify(body), {
            headers: {
                'Content-Type': `application/json`,
            },
        });

        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}
