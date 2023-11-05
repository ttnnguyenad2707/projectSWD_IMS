import axios from "axios"
import { BASE_URL } from "../dataConfig"
import Cookies from "js-cookie";


export const getSettingList = async () => {
    const token = Cookies.get('accessToken');
    return axios.get(`${BASE_URL}/setting`, {
        withCredentials: true,
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    

}

export const getDetailSetting = async (id) => {
    const token = Cookies.get('accessToken');
    return axios.get(`${BASE_URL}/setting/${id}`, {
        withCredentials: true,
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    

}

export const getTypeSetting = async (id) => {
    const token = Cookies.get('accessToken');
    return axios.get(`${BASE_URL}/setting/typeSetting`, {
        withCredentials: true,
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    

}


export const editSetting = async ({id,name,type,status})=> {
    const token = Cookies.get('accessToken');
    return axios.put(`${BASE_URL}/setting/${id}/update`,{name,type,status}, {
        withCredentials: true,
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
}

export const addSetting = async ({name,type,status})=> {
    const token = Cookies.get('accessToken');
    return axios.post(`${BASE_URL}/setting/create`,{name,type,status}, {
        withCredentials: true,
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
}