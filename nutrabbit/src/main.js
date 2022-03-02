import { createApp } from "vue";
import App from "./App.vue";
import router from "./routing/router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import setAuthHeader from "./utils/setAuthHeader";
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import "./Tailwind.css";
import i18n from './config/i18n';
// import axios from 'axios';

//select
import VueNextSelect from 'vue-next-select'
import "vue-next-select/dist/index.css";

// if(localStorage.token) {
//   setAuthHeader(localStorage.token);
// } else {
//   setAuthHeader(false);
// }

// axios.defaults.baseURL = 'http://demo-vuejs.dvconsulting.org/admin/api';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
// axios.defaults.baseURL = '';
// axios.defaults.headers = {
//     source:'',
//     apiKey:'',
//     token: localStorage.getItem('token'),
//     'Accept-Language':'en'
// };


const app = createApp(App);
app.use(VueLoading);
app.use(VueSweetalert2);
app.use(VueAxios, axios);
app.use(i18n);
app.use(router).mount("#app")
app.component('vue-select', VueNextSelect)

