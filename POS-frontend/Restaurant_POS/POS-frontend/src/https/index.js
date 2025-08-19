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

//API endpoints user
export const login = (data) => api.post('/api/user/login',data);
export const register = (data) => api.post('/api/user/register', data);
export const getUser = () => api.get('/api/user');
export const logout = () => api.post('/api/user/logout');

//order

export const addOrder = (data) => api.post('/api/order/', data);
export const getOrders = () => api.get('/api/order');
export const updateOrders = ({orderId, orderStatus}) => api.put(`/api/order/${orderId}`,{orderStatus})

//tables
export const addTable = (data) => api.post('/api/table', data);
export const getTables = () => api.get('/api/table');
export const updateTable = ({tableId, ...tableData}) => api.put(`/api/table/${tableId}`, tableData);

//payments
export const createOrder = (data) => api.post('/api/payment/create-order', data);