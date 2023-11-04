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
export const getProductByTeacher = async (token,teacherid) => {
    return await axios.get(
        `${BASE_URL}/project/getProjectByTeacher/${teacherid}`,

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
// {
//     "ProjectName": "Tên dự án",
//     "classId": 1,
//     "TeamLeader": 1,
//     "Status": false,
//     "Description": "Mô tả dự án"
// }
export const updateProject = async (data,id, token) => {
    return await axios.post(
        `${BASE_URL}/project/updateProject/${id}`, data,

        {
            withCredentials: true,

            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    )

};
export const getDetailProject = async (token,projectid) => {
    return await axios.get(
        `${BASE_URL}/project/getDetailProject/${projectid}`,

        {
            withCredentials: true,

            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    )
}
