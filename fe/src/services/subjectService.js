import axios from 'axios';
import { BASE_URL } from '../dataConfig';
import Cookies from "js-cookie";
export const getSubjectlist = async () => {
    const token = Cookies.get('accessToken');
    return await axios.get(
        `${BASE_URL}/subject`,

        {
            withCredentials: true,
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    )
}

export const newSubject = async (data) => {
    const token = Cookies.get('accessToken');
    return await axios.post(
        `${BASE_URL}/subject/newsubject`,data,

        {
            withCredentials: true,
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    )
}
export const getSubject = async (id) => {
    const token = Cookies.get('accessToken');
    return await axios.get(
        `${BASE_URL}/subject/${id}`,
        {
            withCredentials: true,
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    )
}

export const updateSubject = async (data) => {
    const token = Cookies.get('accessToken');
    return await axios.post(
        `${BASE_URL}/subject/updatesubject`,data,

        {
            withCredentials: true,
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    )
}

export const removeSubject = async (data) => {
    const token = Cookies.get('accessToken');
    console.log(data);
    return await axios.post(
        `${BASE_URL}/subject/delete`,data,
        {
            withCredentials: true,
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    )
}