<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">{{ $t("common.title.login") }}</h1>
          </div>
          <form action @submit="(e) => e.preventDefault()">
            <div class="form-group" :class="errorEmail ? 'error' : ''">
              <label for>{{ $t("common.label.ID") }}</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    :placeholder="$t('common.placeholder.EnterId')"
                    v-model="email"
                  />
                </div>
              </div>
              <span class="error-msg">{{ errorEmail }}</span>
            </div>
            <div class="form-group" :class="errorPassword ? 'error' : ''">
              <label for>{{ $t("common.label.Password") }}</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="password"
                    :placeholder="$t('common.placeholder.EnterPassword')"
                    v-model="password"
                  />
                </div>
              </div>
              <span class="error-msg">{{ errorPassword }}</span>
            </div>
            <div class="form-group">
              <div class="check-box-wrap">
                <label class="custom-check">
                  {{ $t("common.QuickLinks.RememberId") }}
                  <input type="checkbox" v-model="checkBox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="form-links">
              <div class="form-links-left">
                <ul>
                  <li>
                    <router-link to="/find-id">
                      {{ $t("common.QuickLinks.FindID") }}</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/forgot-password">{{
                      $t("common.QuickLinks.FindPassword")
                    }}</router-link>
                  </li>
                </ul>
              </div>
              <div class="form-link-right">
                <router-link to="/member-registration-type-selection">
                  {{ $t("common.QuickLinks.SignUp") }}
                </router-link>
              </div>
            </div>
            <button class="btn-primary" @click="onSubmit">
              {{ $t("common.title.login") }}
            </button>
          </form>
          <div class="getting-started">
            <button class="btn-primary with-icon yellow-btn">
              <i class="icon-chat-black"></i>
              {{ $t("common.QuickLinks.CacaoLogin") }}
            </button>
            <button class="btn-primary with-icon green-btn">
              <i class="icon-naver"></i>
              {{ $t("common.QuickLinks.NaverLogin") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Button.vue";
import { inject } from "vue";
import { useCookies } from "vue3-cookies";
import CommonService from "../../services/CommonService";

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
    const common = inject("common");
    return { cookies, common };
  },
  created() {
    this.commonService = new CommonService();
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
  methods: {
    onSubmit() {
      const setEmail = this.email;
      const setPassword = this.password;
      if (setEmail == "") {
        this.errorEmail = "Please enter an email id";
      } else if (setPassword == "") {
        this.errorPassword = "Please enter password";
      } else {
        this.commonService.getLogin(setEmail, setPassword).then((res) => {
          if (res.response) {
            if (res.response.data.status == 400) {
              this.$swal(res.response.data.message);
            }
          } else {
            if (res.data.status == 200) {
              console.log("login res", res.data.data);
              this.common.state.userId = res.data.data.userId;
              this.common.state.name = res.data.data.name;
              localStorage.setItem("token", res.data.data.token);
              localStorage.setItem("uid", res.data.data.userId);
              localStorage.setItem("uname", res.data.data.name);
              localStorage.setItem("tokenexpiresAt", res.data.data.expiresIn);
              if (this.checkBox) {
                this.cookies.set("rememberUserEmail", setEmail);
                this.cookies.set("rememberUserPassword", setPassword);
              }
              this.$router.push("/");
            }
          }
        });
      }
    },
  },
};
</script>
