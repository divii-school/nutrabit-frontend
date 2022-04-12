<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">{{ $t("login") }}</h1>
          </div>
          <form action @submit="(e) => e.preventDefault()">
            <div class="form-group" :class="errorEmail ? 'error' : ''">
              <label for>{{ $t("ID") }}</label>
              <div class="input-group">
                <div class="input-inner">
                  <input class="form-control" type="text" placeholder="Enter ID" v-model="email" />
                </div>
              </div>
              <span class="error-msg">{{ errorEmail }}</span>
            </div>
            <div class="form-group" :class="errorPassword ? 'error' : ''">
              <label for>{{ $t("password") }}</label>
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
                <p id="token-result"></p>
                <ul>
                  <li>
                    <router-link to="/find-id">{{ $t("findID") }}</router-link>
                  </li>
                  <li>
                    <router-link to="/forgot-password">{{ $t("findpassword") }}</router-link>
                  </li>
                </ul>
              </div>
              <div class="form-link-right">
                <router-link to="/member-registration-type-selection">{{ $t("SignUp") }}</router-link>
              </div>
            </div>
            <button class="btn-primary" @click="onSubmit">{{ $t("login") }}</button>
          </form>
          <div class="getting-started">
            <button
              id="kakao_login"
              class="btn-primary with-icon yellow-btn"
              @click="loginWithKakao"
            >
              <i class="icon-chat-black"></i>
              {{ $t("Startwithcacao") }}
            </button>

            <!-- <button id="kakao-login-btn">kakao login test</button> -->

            <button id="naver_Login" class="btn-primary with-icon green-btn">
              <i class="icon-naver"></i>
              {{ $t("GettingStartedwithNaver") }}
            </button>
            <button
              type="button"
              class="btn-primary with-icon green-btn"
              id="naver_id_login"
              @click="naverLogin"
            >
              Naver
              Login
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
// import axios from "axios";

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
      loader: undefined,
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
    // this.naverLogin();
    // this.createLoginButton();
    // this.kakaoAuthManage();
    // this.displayToken();
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



    // naver login
    // naverLogin() {
    //   // var naver_id_login = new window.naver_id_login("RzAKRIVkiYS3ETx4MlTd", "http://localhost:8082/login");
    //   // var state = naver_id_login.getUniqState();
    //   // naver_id_login.setButton("green", 5, 50);
    //   // naver_id_login.setDomain("http://localhost:8082/login");
    //   // naver_id_login.setState(state);
    //   // // naver_id_login.setPopup();
    //   // naver_id_login.init_naver_id_login();
    //   // // this.naverLoginCallback();



    //   var naverLogin = new window.naver_Login("RzAKRIVkiYS3ETx4MlTd", "http://localhost:8082/login");
    //   var state = naverLogin.getUniqState();

    //   naverLogin.setButton(); //initialize Naver Login Button
    //   naverLogin.setDomain("http://localhost:8082/login");
    //   naverLogin.setState(state);
    //   naverLogin.init_naver_id_login();

    //   $(document).on("click", "#naver_Login", function () {
    //     var btnNaverLogin = document.getElementById("naver_Login");
    //     btnNaverLogin.click();
    //   });









    // },

    // naverLoginCallback() {
    //   var naver_id_login = new window.naver_id_login("RzAKRIVkiYS3ETx4MlTd", "http://localhost:8082/login");
    //   // 접근 토큰 값 출력
    //   alert(naver_id_login.oauthParams.access_token);
    //   // 네이버 사용자 프로필 조회
    //   naver_id_login.get_naver_userprofile(`this.naverSignInCallback()`);
    //   // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
    //   this.naverSignInCallback();
    // },

    // naverSignInCallback() {
    //   alert(naver_id_login.getProfileData('email'));
    //   alert(naver_id_login.getProfileData('nickname'));
    //   alert(naver_id_login.getProfileData('age'));
    // },


    // kakao
    loginWithKakao() {
      window.Kakao.init('5d14c5e0ea3ead3c0683355cba9eda57');
      this.loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        width: 30,
        height: 30,
        onCancel: this.onCancel,
      });
      window.Kakao.Auth.login({
        success: function (authObj) {
          console.log(authObj)
          Kakao.Auth.setAccessToken(authObj.access_token);
          localStorage.setItem("token", authObj.access_token);
          localStorage.setItem("tokenexpiresAt", authObj.expires_in);
          Kakao.API.request({
            url: '/v2/user/me',
            success: function (res) {
              console.log('res-', res);
              localStorage.setItem("uid", res.id);
              localStorage.setItem("uname", res.kakao_account.profile.nickname);
            }
          });
          this.loader.hide();
        },
        fail: function (err) {
          console.log(err)
        },
      })
    }








  },
};
</script>
