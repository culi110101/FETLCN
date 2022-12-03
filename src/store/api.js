import axios from 'axios';

import { apiUrl } from '../common/consts';

const instance = axios.create({
    baseURL: apiUrl,
});


instance.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('accessToken'));

    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default instance;
