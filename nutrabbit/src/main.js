import { createApp } from "vue";
import App from "./App.vue";
import router from "./routing/router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import setAuthHeader from "./utils/setAuthHeader";
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import "./Tailwind.css";
// import i18n from './config/i18n';
// import axios from 'axios';
import { createI18n } from "vue-i18n";

//select
import VueNextSelect from 'vue-next-select';
import "vue-next-select/dist/index.css";
import './config/axios-interceptor';
import "../src/assets/js/postcode.v2.js";

// cookie
import { globalCookiesConfig } from "vue3-cookies";



const i18n = createI18n({
    locale: "en",
    messages: {
        en: {
            login: "login",
            ID: "ID",
            password: "password",
            saveID: "save ID",
            findID: "find ID",
            findpassword: "find password",
            SignUp: "Sign Up",
            Startwithcacao: " Start with cacao",
            GettingStartedwithNaver: "Getting Started with Naver"

        },
        ko: {
            login: "로그인",
            ID: "ID",
            password: "비밀번호",
            saveID: "저장ID",
            findID: "아이디 찾기",
            findpassword: "비밀번호 찾기",
            SignUp: "가입하기",
            Startwithcacao: "카카오로 시작",
            GettingStartedwithNaver: "네이버 시작하기"

        }
    }
})
globalCookiesConfig({
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
});


const app = createApp(App);
app.use(VueLoading);
app.use(VueSweetalert2);
app.use(VueAxios, axios);
app.use(i18n);
app.use(router).mount("#app")
app.component('vue-select', VueNextSelect)

