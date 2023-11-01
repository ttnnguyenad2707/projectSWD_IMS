import axios from 'axios';
import { BASE_URL } from '../dataConfig';


export const register = async (
    data
) => {
    return await axios.post(
        `${BASE_URL}/register`,
        data, {
        withCredentials: true
    }
    )
}


// export const login = async (
//     email,
//     password
// ) => {
//     return await axios.post(
//         `${URL_SERVER}/auth/login`,
//         {
//             email: email,
//             password: password
//         }, {
//         withCredentials: true
//     }
//     )
// }

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