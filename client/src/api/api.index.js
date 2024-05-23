import axios from 'axios';

const api_server = axios.create({
  baseURL: 'http://localhost:3001', // Flask backend URL
  withCredentials: true, // Enable sending cookies for authentication
});

const api_consumet = axios.create({
  baseURL: 'http://localhost:3002'
});


export { api_server, api_consumet }