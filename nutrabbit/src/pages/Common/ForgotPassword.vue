<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">find password</h1>
          </div>
          <form
            action=""
            class="signUp-form"
            @submit="(e) => e.preventDefault()"
          >
            <div class="form-group" :class="error.userId ? 'error' : ''">
              <label for=""><i class="icon-required"></i>ID</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter ID"
                    v-model="userId"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.userId }}</span>
            </div>
            <div class="form-group" :class="error.email ? 'error' : ''">
              <label for=""><i class="icon-required"></i>e-mail</label>
              <div class="input-group with-btn">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter your email"
                    v-model="email"
                  />
                </div>
                <button
                  class="btn-green-outline"
                  @click="userFindId"
                  :class="{ grey: isVerification }"
                  :disabled="emailValidated"
                >
                  Send verification code
                </button>
              </div>
              <span class="error-msg">{{ error.email }}</span>
            </div>
            <div class="form-group" :class="error.emailOTP ? 'error' : ''">
              <label for=""
                ><i class="icon-required"></i>Email Verification Number</label
              >
              <div class="input-group with-btn">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter your email verification code"
                    v-model="emailOTP"
                    maxlength="6"
                  />
                  <span class="time" :class="{ startTimer: startTimer }">{{
                    timer
                  }}</span>
                  <span class="time" :class="{ showTick: showTick }"
                    ><i class="green-tick-circle"></i
                  ></span>
                </div>
                <button
                  class="btn-green-outline"
                  :class="{ grey: isActive }"
                  @click="verifyOTP"
                  :disabled="otpValidate"
                >
                  certification
                </button>
              </div>
              <span class="error-msg">{{ error.emailOTP }}</span>
            </div>
            <button class="btn-primary grenn-btn2" @click="confirmFindId">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonService from "../../services/CommonService";
import validator from "validator";
export default {
  name: "ForgotPassword",
  data() {
    return {
      userId: "",
      email: "",
      emailOTP: "",
      error: {},
      errors: {},
      timer: 130,
      isActive: true,
      isVerification: false,
      emailValidated: 0,
      otpValidate: 1,
      startTimer: true,
      showTick: true,
    };
  },
  created() {
    this.commonService = new CommonService();
  },
  methods: {
    confirmFindId() {
      if (!validator.isEmpty(this.userId)) {
        this.error.userId = "Enter a valid user id";
      }
      if (!validator.isEmail(this.email)) {
        this.error.email = "Enter a valid email address";
      }
      if (validator.isEmpty(this.email)) {
        this.error.email = "Please enter your email address";
      }
      if (validator.isEmpty(this.emailOTP)) {
        this.error.emailOTP = "Please enter your email verification code";
      } else {
        this.$router.push("/login");
      }
    },
    async userFindId() {
      if (!validator.isEmail(this.email)) {
        this.error.email = "Enter a valid email address";
      }
      if (validator.isEmpty(this.email)) {
        this.error.email = "Please enter your email address";
      } else {
        this.commonService.userFindId(this.email).then((res) => {
          console.log(res);

          if (res.status == 200) {
            this.isActive = false;
            this.isVerification = true;
            this.emailValidated = 1;
            this.otpValidate = 0;
            this.startTimer = false;
            this.$swal("OTP has been sent to your email");
            this.error.email = "";
            setInterval(() => {
              if (this.timer === 0) {
                clearInterval();
                this.isVerification = false;
                this.isActive = true;
                this.emailValidated = 0;
                this.otpValidate = 1;
              } else {
                this.timer--;
              }
            }, 1000);
          }
          if (res.response.data.status == 400) {
            return (this.error.email = res.response.data.message);
          }
        });
      }
    },
    async verifyOTP() {
      if (this.emailOTP == "") {
        return (this.error.emailOTP = "Enter an valid OTP");
      } else {
        try {
          const verifyOtpData = await axios.post("/user/find_id_post", {
            email: this.email,
            verification_code: this.emailOTP,
            btn_type: "certification",
          });
          if (verifyOtpData.data.status == 200) {
            this.$swal("OTP verified");
            this.startTimer = true;
            this.showTick = false;
            this.error.emailOTP = "";
            return true;
          }
        } catch (error) {
          this.error.emailOTP = "wrong otp";
          return false;
        }
      }
    },
  },
};
</script>