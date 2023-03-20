import axios from 'axios';

const API_URL = 'https://painassasin.online';

const api = axios.create({
    baseURL: API_URL,
});

export const register = async (userData) => {
    const response = await api.post('/user/signup/', userData);
    return response.data;
};

export const token = async (userData) => {
    const response = await api.post('/user/token/', userData);
    return response.data;
};

export const login = async (userData) => {
    try {
        const response = await api.post('/user/login/', userData);
        console.log('Response:', response);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};