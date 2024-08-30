import axios from 'axios';


const apiClient = axios.create({
    baseURL: import.meta.env.APP_API_URL || 'http://localhost:3000',
    timeout: 10000,
});

export default apiClient;
