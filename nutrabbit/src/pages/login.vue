<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">{{ $t("login") }}</h1>
          </div>
          <form action="" @submit="(e) => e.preventDefault()">
            <div class="form-group" :class="errorEmail ? 'error' : ''">
              <label for="">{{ $t("ID") }}</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter ID"
                    v-model="email"
                  />
                </div>
              </div>
              <span class="error-msg">{{ errorEmail }}</span>
            </div>
            <div class="form-group" :class="errorPassword ? 'error' : ''">
              <label for="">{{ $t("password") }}</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Enter Password"
                    v-model="password"
                  />
                </div>
              </div>
              <span class="error-msg">{{ errorPassword }}</span>
            </div>
            <div class="form-group">
              <div class="check-box-wrap">
                <label class="custom-check">
                  {{ $t("saveID") }}
                  <input type="checkbox" v-model="checkBox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="form-links">
              <div class="form-links-left">
                <ul>
                  <li>
                    <a href="">{{ $t("findID") }}</a>
                  </li>
                  <li>
                    <a href="">{{ $t("findpassword") }}</a>
                  </li>
                </ul>
              </div>
              <div class="form-link-right">
                <a href="">{{ $t("SignUp") }}</a>
              </div>
            </div>
            <button class="btn-primary" @click="onSubmit">
              {{ $t("login") }}
            </button>
          </form>
          <div class="getting-started">
            <button class="btn-primary with-icon yellow-btn">
              <i class="icon-chat-black"></i>{{ $t("Startwithcacao") }}
            </button>
            <button class="btn-primary with-icon green-btn">
              <i class="icon-naver"></i> {{ $t("GettingStartedwithNaver") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import axios from "axios";
import { useCookies } from "vue3-cookies";
export default {
  name: "Login",
  components: {
    Button,
  },
  data() {
    return {
      email: "",
      password: "",
      errorEmail: "",
      errorPassword: "",
      checkBox: "",
    };
  },
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  methods: {
    async onSubmit() {
      const setEmail = this.email;
      const setPassword = this.password;
      try {
        const data = await axios
          .post("/v1/sites/auth/login", {
            login_id: setEmail,
            password: setPassword,
          })
          .then((response) => {
            if (response.data.status == 200) {
              console.log(response.data.status);
              localStorage.setItem(
                "logedInUserDetails",
                JSON.stringify(response.data.data)
              );
              if (this.checkBox) {
                this.cookies.set("rememberUserEmail", setEmail);
                this.cookies.set("rememberUserPassword", setPassword);
              } else {
                this.cookies.set("rememberUserEmail", "");
                this.cookies.set("rememberUserPassword", "");
              }
              window.location = "/";
            }
          });
      } catch (error) {
        let text = error && error.response && error.response.data ? error.response.data.message : '';
        let result = text.match("Password");
        let result1 = text.match("Email");
        if (result == "Password") {
          this.errorPassword = "Enter a valid password.";
          this.errorEmail = "";
        } else if (result1 == "Email") {
          this.errorPassword = "";
          this.errorEmail = "Enter a valid email.";
        } else {
          alert("Email or, password is incorrect");
        }
        console.log(text);
      }
    },
  },
  mounted() {
    if (this.cookies) {
      const rememberUserPasswordCookie = this.cookies.get(
        "rememberUserPassword"
      );
      
      const rememberUserEmailCookie = this.cookies.get("rememberUserEmail");
      
      if (rememberUserPasswordCookie && rememberUserEmailCookie) {
        (this.email = rememberUserEmailCookie),
          (this.password = rememberUserEmailCookie);
      }
    }
  },
};
</script>
