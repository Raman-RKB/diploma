import axios from 'axios';

const API_URL = 'http://localhost:8090/';

const api = axios.create({
    baseURL: API_URL,
});

export const allAdv = async () => {
    const response = await api.get('ads?sorting=new&page=1');
    return response.data;
};

export const chosenTracks = async () => {
    const response = await api.post(`/catalog/track/${33}/favorite/`);
    return response.data;
};