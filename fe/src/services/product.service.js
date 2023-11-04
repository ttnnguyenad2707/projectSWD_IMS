import axios from 'axios';
import { BASE_URL } from '../dataConfig';

export const getListClass = async () => {
    return await axios.get(
        `${BASE_URL}/class/list`
    )
}