import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = (loginData) => request.post(`${baseUrl}/login`, loginData);

// export const login = async (email, password) => {
//     const result = await request.post(`${baseUrl}/login`, {
//         email,
//         password,
//     });

//     return result;
// };

// export const register = (registerData) => request.post(`${baseUrl}/register`, registerData);

// export const logout = () => {

//     request.get(`${baseUrl}/logout`);

//     localStorage.removeItem('user');
// }
