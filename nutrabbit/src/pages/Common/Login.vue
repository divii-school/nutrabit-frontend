<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">{{ $t("common.title.login") }}</h1>
          </div>
          <form action @submit="(e) => e.preventDefault()">
            <div class="form-group" :class="error.email ? 'error' : ''">
              <label for>{{ $t("common.label.ID") }}</label>
              <div class="input-group">
                <div class="input-inner">
                  <input class="form-control" type="text" :placeholder="$t('common.placeholder.EnterId')"
                    v-model="email" />
                </div>
              </div>
              <span class="error-msg">{{ error.email }}</span>
            </div>
            <div class="form-group" :class="error.password ? 'error' : ''">
              <label for>{{ $t("common.label.Password") }}</label>
              <div class="input-group">
                <div class="input-inner">
                  <input class="form-control" type="password" :placeholder="$t('common.placeholder.EnterPassword')"
                    v-model="password" />
                </div>
              </div>
              <span class="error-msg">{{ error.password }}</span>
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
                <p id="token-result"></p>
                <ul>
                  <li>
                    <router-link to="/find-id">
                      {{ $t("common.QuickLinks.FindID") }}</router-link>
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
            <button id="kakao_login" v-if="!isPlatMobile" class="btn-primary with-icon yellow-btn"
              @click="loginWithKakao">
              <i class="icon-chat-black"></i>
              {{ $t("common.QuickLinks.CacaoLogin") }}
            </button>
            <!-- kakao login for App -->
            <button id="kakao_login" v-else class="btn-primary with-icon yellow-btn" @click="mbKakaoLogin">
              <i class="icon-chat-black"></i>
              <!-- {{ $t("common.QuickLinks.CacaoLogin") }} -->
              kakao mobile login
            </button>
            <!-- END kakao login for App -->

            <!-- <button id="kakao-login-btn">kakao login test</button> -->

            <button id="naver_Login" v-if="!isPlatMobile" class="btn-primary with-icon green-btn">
              <i class="icon-naver"></i>
              {{ $t("common.QuickLinks.NaverLogin") }}
            </button>
            <!-- Naver login for App -->
            <button id="naver_Login" v-else class="btn-primary with-icon green-btn" @click="mbNaverLogin">
              <i class="icon-naver"></i>
              naver mobile login
              <!-- {{ $t("common.QuickLinks.NaverLogin") }} -->
            </button>
            <!-- ENd Naver login for App -->

            <!-- social login for appale -->
            <button class="btn-primary with-icon black-btn" v-show="isAppaleId" @click="mbAppleLogin">
              <i class="icon-appale"></i>
              애플로 시작하기
            </button>
            <!-- <button
              type="button"
              class="btn-primary with-icon green-btn"
              id="naver_id_login"
              @click="naverLogin"
            >
              Naver Login
            </button> -->

            <!-- <button class="btn-primary with-icon black-btn" @click="appleLoginHandler(this.testData)">testData check</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Button.vue";
import { inject, onMounted } from "vue";
import { useCookies } from "vue3-cookies";
import CommonService from "../../services/CommonService";
import validateLogin from "../../Validation/validateLogin";
// import axios from "axios";
import { useRoute } from "vue-router";
export default {
  name: "Login",
  components: {
    Button,
  },
  data() {
    return {
      email: "",
      password: "",
      error: {},
      errorEmail: "",
      errorPassword: "",
      checkBox: "",
      loader: undefined,
      isPlatMobile: localStorage.getItem("isMobile") === "true",
      isAppaleId: localStorage.getItem("isiPhone") === "true",
      validateOnce: false,
      globalLocale: "",

      // testData: { "accesstoken": "eyjrawqioijmadzcczhdiiwiywxnijoiulmyntyifq.eyjpc3mioijodhrwczovl2fwcgxlawquyxbwbguuy29tiiwiyxvkijoiy29tlm51dhjhymjpdc5udxryatmziiwizxhwijoxnjuwnze5nzi3lcjpyxqioje2nta2mzmzmjcsinn1yii6ijawmtcyns42mjrimdy2mjnlyme0mmyzywu5odhkn2u3zgu5yjc5oc4wodi5iiwibm9uy2uioijkmziwnwnlnmrmm2iynwjjzwriyzzkngrlyzcxzmm4ode5mwzknwewyzu0mziyogjintu3mgy0ogfkmzlizmq4iiwiy19oyxnoijoirtgzuf9onhjnv3bxm3e3tjkxbhrtdyisimvtywlsijoic2f5yw50yubkaxzpas5jb20ilcjlbwfpbf92zxjpzmllzci6inrydwuilcjhdxrox3rpbwuioje2nta2mzmzmjcsim5vbmnlx3n1chbvcnrlzci6dhj1zx0.jg6_m56wsyl3tpyaa6sel3mwhextesasgvhr_oilvmac6byir66fu0oaktc-uad3lna8brdz02onm290cfeoxs8fv1o0zjywvdlml8lhzqyb5cvwivbeynyreiea16x7qqpcm8fajuthunkwjfxqu9wdmvt7avdekusgdh9vrax7bw0hbqwm7rfs19uoqyezmeckgewydnf4-cdgvg5e3tdta-bpty_tfdwrhzy7zysimpch-um51y4yh9ly4qjnmr7hqsvonejgfi1uwr8zswav5scrmi52db__f-oudv-np7bv7fzxvsq7pexxu51squftxmalidosi358gtmd5a", "emailid": "sayanta@divii.com", "socialId": "001725.624b06623eba42f3ae988d7e7de9b798.0829", "userName": " ", "loginVia": "apple" },
    };
  },
  setup() {
    const { cookies } = useCookies();
    const common = inject("common");
    onMounted(() => {
      common.methods.isFromApp();
    });
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
          (this.password = rememberUserPasswordCookie);
      }
    }

    // this.naverLogin();
    // this.createLoginButton();
    // this.kakaoAuthManage();
    // this.displayToken();

    // web view get message
    window["sendKakaoLoginData"] = (res) => {
      this.sendKakoAccessToken(res);
    };
    window["sendNaverLoginData"] = (res) => {
      this.sendNaverAccessToken(res);
    };
    window["sendAppleLoginData"] = (res) => {
      this.sendAppleAccessToken(res);
    };
    // end web view get message

    // get query for appale login
    // const route = useRoute();
    // if (route.query.isiPhone) {
    //   this.isAppaleId = true;
    // }
  },

  // updated(){
  //   this.globalLocale = this.$i18n.locale;
  // },

  // watch: {
  //   globalLocale(newVal) {
  //     if (newVal == "en" && this.validateOnce == true) {
  //       this.onSubmit();
  //     }

  //     if (newVal == "kr" && this.validateOnce == true) {
  //       this.onSubmit();
  //     }
  //   },
  // },

  methods: {
    checkError() {
      let credential = {
        email: this.email,
        password: this.password,
      };
      const { isInvalid, error } = validateLogin(credential);
      this.validateOnce = true;
      if (isInvalid) {
        this.error = error;
        return false;
      } else {
        this.error = {};
        return true;
      }
    },
    onSubmit() {
      if (!this.checkError()) {
        return;
      } else {
        this.commonService.getLogin(this.email, this.password).then((res) => {
          if (res.response) {
            if (res.response.data.status == 400) {
              if (res.response.data.message == "Password Does Not Match") {
                 this.error.password = this.$t("common.Error.checkPassword");
              }
              else if (
                res.response.data.message ==
                "User With The Email Does Not Exists"
              ) {
                 this.error.email = this.$t("common.Error.chcekId");
              }
              // this.$swal(res.response.data.message);
            }
          } else {
            if (res.data.status == 200) {
              // console.log("login res", res.data.data);
              this.common.state.userId = res.data.data.userId;
              this.common.state.name = res.data.data.name;
              localStorage.setItem("token", res.data.data.token);
              localStorage.setItem("uid", res.data.data.userId);
              localStorage.setItem("uname", res.data.data.name);
              localStorage.setItem("tokenexpiresAt", res.data.data.expiresIn);
              localStorage.setItem("userType", res.data.data.account_type);
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
    sendAccessToken(res) {
      if (res) {
        // this.testres = res;
        this.checkMbfblogin(res);
      } else {
        return false;
      }
    },
    sendKakoAccessToken(token) {
      let ftoken = token;
      // console.log("ftoken:--", ftoken);
      alert(ftoken);
    },
    sendNaverAccessToken(token) {
      let ftoken = token;
      // console.log("ftoken:--", ftoken);
      alert(ftoken);
    },
    sendAppleAccessToken(token) {
      let ftoken = token;
      console.log("ftoken:--", ftoken);
      alert(ftoken);
      this.appleLoginHandler(ftoken);
    },
    mbKakaoLogin() {
      window.parent.postMessage("kakaoLoginClicked", "*");
    },
    mbNaverLogin() {
      window.parent.postMessage("naverLoginClicked", "*");
    },
    mbAppleLogin() {
      window.parent.postMessage("appleLoginClicked", "*");
    },

    appleLoginHandler(res) {
      console.log("appleLoginHandler", res);
      if (res) {
        // let resData = JSON.parse(JSON.stringify(res));
        let resData = JSON.parse(res);
        alert(resData);
        console.log("--appleLoginHandler--", resData);
        let emailName = resData.emailId.match(/^([^@]*)@/)[1];
        localStorage.setItem("token", resData.accesstoken);
        localStorage.setItem("uid", resData.socialId);
        localStorage.setItem(
          "uname",
          !resData.userName || resData.userName == ""
            ? resData.userName
            : emailName
        );
        // localStorage.setItem("tokenexpiresAt", resData.expiresIn);
        localStorage.setItem("userType", resData.loginVia);
        this.$router.push("/");
      } else {
        return false;
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
      // const route = useRoute();
      const self = this;
      window.Kakao.init("5d14c5e0ea3ead3c0683355cba9eda57");
      console.log(Kakao.isInitialized());
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
          console.log("authObj kakao--", authObj);
          Kakao.Auth.setAccessToken(authObj.access_token);
          localStorage.setItem("token", authObj.access_token);
          // localStorage.setItem("tokenexpiresAt", authObj.expires_in);
          localStorage.setItem("tokenexpiresAt", 3600);
          Kakao.API.request({
            url: "/v2/user/me",
            success: function (res) {
              console.log("res----", res);
              localStorage.setItem("uid", res.id);
              localStorage.setItem("uname", res.kakao_account.profile.nickname);
              localStorage.setItem("userType", 'SNS');
              self.loader.hide();
              // self.$router.push("/");
              // self.socialRegistration(res.kakao_account.profile.nickname, res.kakao_account.profile.nickname, authObj.access_token, 'kakao');

            },
          });
        },
        fail: function (err) {
          console.log(err);
        },
      });
      //  window.Kakao.Auth.authorize({
      //   redirectUri: 'http://localhost:8082'
      // });
    },

    socialRegistration(name, username, email, phone, login_token, login_type) {
      this.commonService.individalRegistration(name, username, email, phone, login_token, login_type).then((res) => {
        if (res.data.status == 200) {
          console.log(res);
          this.$router.push("member-registration-completed");
        }
      });
    },


  },
};
</script>
