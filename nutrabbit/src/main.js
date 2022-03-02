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

const app = createApp(App);
app.use(VueLoading);
app.use(VueSweetalert2);
app.use(VueAxios, axios);
app.use(router).mount("#app")
app.component('vue-select', VueNextSelect)