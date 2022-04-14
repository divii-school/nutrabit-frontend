import axios from 'axios';


window.axios = axios;
axios.defaults.baseURL = 'https://api-nutrabbit-dev.dvconsulting.org/nutrabbit-dev/api/v1/sites/';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.source = 'nutrabbit';
    config.headers.apiKey = 'coN21di1202VII01Ed0OnNiMDa2P3p0M';
    config.headers['Accept-Language'] = 'en';
    if (token) {
        config.headers.token = `${token}`;
    }
    return config;
}, function (err) {
    return Promise.reject(err);
});