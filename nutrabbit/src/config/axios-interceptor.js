import axios from 'axios';


window.axios = axios;
axios.defaults.baseURL = 'http://api-nutrabbit-dev.dvconsulting.org:3000/nutrabbit-dev/api';

axios.defaults.headers = {
    source:'nutrabbit',
    apiKey:'coN21di1202VII01Ed0OnNiMDa2P3p0M',
    token: localStorage.getItem('token'),
    'Accept-Language':'en'
};