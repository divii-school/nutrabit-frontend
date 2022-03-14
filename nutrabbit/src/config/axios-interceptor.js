import axios from 'axios';


window.axios = axios;
axios.defaults.baseURL = '';

axios.interceptors.request.use((config)=>{
    config.headers.common={
        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    }
    return config;
})