import axios from './axios';

export const register = async (userData) => {
    const response = await axios.post('/auth/register', userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post('/auth/login', userData);
    return response.data;
};

export const getUserProfile = async (token) => {
    const response = await axios.get('/users/profile', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
