import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URI || "http://localhost:3001",
    withCredentials: true
});

export default instance;
