import axios from 'axios';


// Create an axios instance with the base URL and default headers
// ( reusable Axios object with default settings.)
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

//API endpoints
export const login = (data) => api.post('/api/user/login',data);
export const register = (data) => api.post('/api/user/register', data);
export const getUser = () => api.get('/api/user');
export const logout = () => api.post('/api/user/logout');