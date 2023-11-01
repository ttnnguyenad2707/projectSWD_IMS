import axios from 'axios';
import { BASE_URL } from '../dataConfig';


export const register = async (data) => {
    return await axios.post(
        `${BASE_URL}/account/register`, data
    )
}
// console.log("${BASE_URL}/account/register",BASE_URL);


export const login = async (
    data
) => {
    return await axios.post(
        `${BASE_URL}/account/login`,
        data, {
                     withCredentials: true,}
            
    )
}
export const logout = async () => {
    return await axios.post(`${BASE_URL}/account/logout`)
}

// export const checkUser = async (token) => {
//     return await axios.post(`${URL_SERVER}/auth/check-user`, null, {
//         withCredentials: true,

//         headers: {
//             token: `Bearer ${token}`,
//         }
//     })
// }


// export const logout = async () => {
//     return await axios.post(`${URL_SERVER}/auth/logout`)
// }