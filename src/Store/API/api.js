import axios from 'axios';

const API_URL = 'https://painassasin.online';

const api = axios.create({
    baseURL: API_URL,
});

// api.interceptors.request.use(async (config) => {
//     // const token = JSON.parse(localStorage.getItem('token'));
//      const token = localStorage.getItem('token');

//     if (token && config.url !== '/user/signup/') {
//         try {
//             const response = await axios.post(`${API_URL}/user/token/refresh/`, {
//                 refresh: token.refresh,
//             });

//             const newToken = response.data;
//             localStorage.setItem('token', JSON.stringify(newToken));
//             config.headers.Authorization = `Bearer ${newToken.refresh}`;
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return config;
// });

export const tracks = async () => {
    const response = await api.get('/catalog/track/all/');
    return response.data;
};

export const chosenTracks = async (id) => {
    const response = await api.post(`/catalog/track/${id}/favorite/`);
    return response.data;
};

export const selections = async (id) => {
    const response = await api.get(`/catalog/selection/${id}/`);
    return response.data;
};

export const trackById = async (id) => {
    const response = await api.get(`/catalog/track/${id}/`);
    return response.data;
};