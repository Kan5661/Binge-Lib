import { api_server } from './api.index.js';

export const loginUser = async (userData) => {
    const res = await api_server.post('/login', userData)
    if (res.status === 200) {
        console.log(res)
        return res
    }
    else {
        return res
    }

}


export const registerUser = async (userData) => {
    const res = await api_server.post('/register', userData)
    if (res.status === 200) {
        return res
    }
    else {
        console.log("register account failed");
    }
}

export const account_verification = async (data) => {
    const res = await api_server.post('/code_verification', data)
    if (res.status === 200) {
        return res
    }
    else {
        console.log("code verification failed");
    }
}



export const verifyUser = async (token) => {
    const res = await api_server.post('/verify', {}, {
        headers: { 'Authorization': 'Bearer ' + token }
    });
    if (res.status === 200) {
        console.log(res);
        return res;
    } else {
        console.log("Authentication failed");
    }
}