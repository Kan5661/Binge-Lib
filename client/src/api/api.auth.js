// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Flask backend URL
  withCredentials: true, // Enable sending cookies for authentication
});
export const registerUser = (userData) => {
    api.post('/register', userData)
    .then(res => {
        console.log(res)
    })
}


export const loginUser = async (userData) => {
    const res = await api.post('/login', userData)
    if (res.status === 200) {
        console.log(res)
        return res
    }
    else {
        console.log("Authentication failed");
    }
}

export const verifyUser = async (token) => {
    const res = await api.post('/verify', {}, {
        headers: { 'Authorization': 'Bearer ' + token }
    });
    if (res.status === 200) {
        console.log(res);
        return res;
    } else {
        console.log("Authentication failed");
    }
}