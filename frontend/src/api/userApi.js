import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', 
  withCredentials: true, 
});

export const loginUser = (user) => API.post('/api/users/login', user);
export const checkSession = () => API.get('/api/users/check-session');
export const logoutUser = () => API.post('/api/users/logout');
export const fetchUserProfile = () => API.get('/api/users/profile'); 
