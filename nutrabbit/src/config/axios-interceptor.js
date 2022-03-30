import axios from 'axios';

var token = localStorage.getItem('token');
// window.axios = axios;
axios.defaults.baseURL = 'http://api-nutrabbit-dev.dvconsulting.org:3000/nutrabbit-dev/api/v1/sites/';

axios.defaults.headers = {
    source:'nutrabbit',
    apiKey:'coN21di1202VII01Ed0OnNiMDa2P3p0M',
    token: token,
    'Accept-Language':'en'
};