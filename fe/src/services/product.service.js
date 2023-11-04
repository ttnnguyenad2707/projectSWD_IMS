import axios from 'axios';
import { BASE_URL } from '../dataConfig';

export const getListClass = async (token) => {
    return await axios.get(
        `${BASE_URL}/class/list`,

        {
            withCredentials: true,

            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    )
}
export const createProject = async (data, token) => {
    return await axios.post(
        `${BASE_URL}/project/createProject`, data,

        {
            withCredentials: true,

            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    )

};