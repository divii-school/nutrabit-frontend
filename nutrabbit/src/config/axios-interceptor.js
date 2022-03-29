import axios from 'axios';


window.axios = axios;
axios.defaults.baseURL = 'http://api-nutrabbit-dev.dvconsulting.org:3000/nutrabbit-dev/api';

axios.defaults.headers = {
    source:'nutrabbit',
    apiKey:'coN21di1202VII01Ed0OnNiMDa2P3p0M',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjQ4NTUyMjczLCJleHAiOjE2NDg1NTU4NzN9.nSfO9WeAd1TTv0cJxrZHQbumcssfEEdZKpS1NkA15s4',
    'Accept-Language':'en'
};