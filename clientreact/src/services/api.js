import axios from 'axios';

const api = axios.create({
    baseURL : "https://localhost:44354/"
})

export default api;