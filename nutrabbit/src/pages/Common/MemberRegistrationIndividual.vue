<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap with-extra-text">
            <h1 class="login-heading">
              Sign Up
              <span>individual member</span>
            </h1>
            <span>* Required</span>
          </div>
          <form action class="signUp-form" @submit="(e) => e.preventDefault()">
            <div class="terms-sec">
              <div class="form-group" :class="error.termsCheck ? 'error' : ''">
                <div class="check-box-wrap">
                  <label class="custom-check">
                    (Required) I agree to the Terms of Use.
                    <input type="checkbox" v-model="termsCheck" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <span class="error-msg">{{ error.termsCheck }}</span>
              </div>
              <div class="form-group" :class="error.personalCheck ? 'error' : ''">
                <div class="check-box-wrap">
                  <label class="custom-check">
                    (Required) I agree to the collection and use of personal information.
                    <input type="checkbox" v-model="personalCheck" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <span class="error-msg">{{ error.personalCheck }}</span>
              </div>
            </div>
            <div class="individuals-form">
              <div class="form-group" :class="error.name ? 'error' : ''">
                <label for> <i class="icon-required"></i>name </label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter your name"
                      v-model="name"
                    />
                  </div>
                </div>
                <span class="error-msg">{{ error.name }}</span>
              </div>
              <div class="form-group" :class="error.username ? 'error' : ''">
                <label for> <i class="icon-required"></i>ID </label>
                <div class="input-group with-btn">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter ID"
                      v-model="username"
                    />
                  </div>
                  <button class="btn-green-outline" @click="checkUser">
                    Check Availability
                  </button>
                </div>
                <span class="error-msg">{{ error.username }}</span>
              </div>
              <div class="form-group" :class="error.password ? 'error' : ''">
                <label for> <i class="icon-required"></i>password </label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="password"
                      placeholder="10-20 characters including uppercase and lowercase letters, numbers, and special symbols"
                      v-model="password"
                    />
                  </div>
                </div>
                <span class="error-msg">{{ error.password }}</span>
              </div>
              <div class="form-group" :class="error.confirmPassword ? 'error' : ''">
                <label for> <i class="icon-required"></i>verify password </label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="password"
                      placeholder="verify password"
                      v-model="confirmPassword"
                    />
                  </div>
                </div>
                <span class="error-msg">{{ error.confirmPassword }}</span>
              </div>
              <div class="form-group" :class="error.email ? 'error' : ''">
                <label for> <i class="icon-required"></i>e-mail </label>
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
                    @click="sendOtp"
                    :class="{ grey: isVerification }"
                    :disabled="emailValidated"
                  >
                    Send verification code
                  </button>
                </div>
                <span class="error-msg">{{ error.email }}</span>
              </div>
              <div class="form-group" :class="error.emailOTP ? 'error' : ''">
                <label for>
                  <i class="icon-required"></i>Email Verification Number
                </label>
                <div class="input-group with-btn">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter your email verification code"
                      v-model="emailOTP"
                      maxlength="6"
                    />
                    <span
                      class="time"
                      id="timer"
                      :class="{ startTimer: startTimer }"
                    ></span>
                    <span class="time" :class="{ showTick: showTick }">
                      <i class="green-tick-circle"></i>
                    </span>
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
              <div class="form-group" :class="error.phoneNumber ? 'error' : ''">
                <label for> <i class="icon-required"></i>phone number </label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter your mobile phone number"
                      v-model="phoneNumber"
                    />
                  </div>
                </div>
                <span class="error-msg">{{ error.phoneNumber }}</span>
              </div>
              <div class="form-group" :class="error.address ? 'error' : ''">
                <label for> <i class="icon-required"></i>address </label>
                <div class="input-group with-btn dual-input">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter address"
                      v-model="address"
                      disabled
                    />
                  </div>
                  <button class="btn-green-outline" @click="getAddress">
                    Address Search
                  </button>
                </div>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter detailed address"
                      v-model="address"
                      disabled
                    />
                  </div>
                </div>
                <span class="error-msg">{{ error.address }}</span>
              </div>
              <div class="form-group">
                <label for>distribution medium</label>
                <div class="multi-checkbox">
                  <div class="check-box-wrap">
                    <label class="custom-check">
                      offline
                      <input type="checkbox" value="offline" v-model="checkName" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check">
                      online
                      <input type="checkbox" value="online" v-model="checkName" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check">
                      Network (door-to-door sales)
                      <input type="checkbox" value="network" v-model="checkName" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check">
                      SNS
                      <input type="checkbox" value="sns" v-model="checkName" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check">
                      Etc
                      <input type="checkbox" value="etc" v-model="checkName" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button class="btn-primary grenn-btn2" @click="individalRegistration">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import validateRegistration from "../../Validation/validateRegistration";
import validator from "validator";
import CommonService from "../../services/CommonService";
export default {
  name: "MemberRegistrationIndividual",
  data() {
    return {
      termsCheck: "",
      personalCheck: "",
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      emailOTP: "",
      phoneNumber: "",
      address: "",
      checkName: [],
      error: {},
      timer: 10,
      newTime: "",
      isActive: true,
      isVerification: false,
      emailValidated: false,
      otpValidate: true,
      startTimer: true,
      showTick: true,
      // remaining: 180
    };
  },
  created() {
    this.commonService = new CommonService();
    // this.currentDateTime()
  },
  watch: {
    runTime: function (val) {
      if (val) {
        return val;
      }
    },
  },
  methods: {
    currentDateTime() {
      var eventTime = 5;
      var currentTime = 0;
      var diffTime = eventTime - currentTime;
      var duration = moment.duration(diffTime * 1000, "milliseconds");
      var interval = 1000;
      setInterval(function () {
        duration = moment.duration(duration - interval, "milliseconds");
        let time = duration.minutes() + ":" + duration.seconds();
        if (duration.seconds() >= 0) {
          console.log(time);
          document.querySelector("#timer").innerHTML = time.toString();
        }
        if (duration.seconds() == 0) {
          console.log("time out");
          document.querySelector("#timer").innerHTML = "";
          this.isVerification = false;
          this.isActive = false;
          this.emailValidated = true;
          this.otpValidate = false;
          this.startTimer = true;
          console.log(this.startTimer);
        }
      }, interval);
    },
    async individalRegistration() {
      let credential = {
        termsCheck: this.termsCheck,
        personalCheck: this.personalCheck,
        name: this.name,
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email,
        emailOTP: this.emailOTP,
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
      const { isInvalid, error } = validateRegistration(credential);
      if (isInvalid) {
        this.error = error;
      } else {
        this.commonService
          .individalRegistration(
            this.name,
            this.username,
            this.password,
            this.email,
            this.phoneNumber,
            this.address,
            this.checkName.join(",")
          )
          .then((res) => {
            if (res.data.status == 200) {
              this.$router.push("member-registration-completed");
            }
          });
      }
    },
    async checkUser() {
      if (validator.isEmpty(this.username)) {
        this.error.username = "Please enter your ID";
      }
      if (!validator.isAlphanumeric(this.username)) {
        this.error.username = "Please use only letter and number";
      } else {
        this.commonService.checkUser(this.username).then((res) => {
          if (res.data.status == 200 && res.data.data.is_exist === 0) {
            this.error.username = "";
            this.$swal("User id available");
          } else if (res.data.status == 200 && res.data.data.is_exist === 1) {
            return (this.error.username = res.data.data.msg);
          }
        });
      }
    },
    async sendOtp() {
      if (!validator.isEmail(this.email)) {
        this.error.email = "Enter a valid email address";
      }
      if (validator.isEmpty(this.email)) {
        this.error.email = "Please enter your email address";
      } else {
        this.commonService.sendOTP(this.email).then((res) => {
          if (res.status == 200) {
            this.isActive = true;
            this.isVerification = true;
            this.emailValidated = false;
            this.otpValidate = true;
            this.startTimer = false;
            this.$swal("OTP has been sent to your email");
            this.error.email = "";
            this.currentDateTime();
            // setInterval(() => {
            //   console.log(this.timer);
            //   let m = Math.floor(this.timer / 60);
            //   let s = this.timer % 60;
            //   m = m < 10 ? "0" + m : m;
            //   s = s < 10 ? "0" + s : s;
            //   this.newTime = m + ":" + s;
            //   if (this.timer == 0) {
            //     clearInterval();
            //     this.isVerification = false;
            //     this.isActive = true;
            //     this.emailValidated = 0;
            //     this.otpValidate = 1;
            //     this.startTimer = true;
            //   }
            //   else if (this.timer > 0) {
            //     this.timer--;
            //   }
            // }, 1000);
          } else if (res.response.data.status == 400) {
            return (this.error.email = res.response.data.message);
          }
        });
      }
    },
    async verifyOTP() {
      if (this.emailOTP == "") {
        return (this.error.emailOTP = "Enter an valid OTP");
      } else {
        this.commonService.verifyOTP(this.email, this.emailOTP).then((res) => {
          if (res.data.status == 200 && res.data.data.otp_verify === 1) {
            this.$swal("OTP verified");
            this.startTimer = true;
            this.showTick = false;
            this.error.emailOTP = "";
            return true;
          } else if (res.data.status == 200 && res.data.data.otp_verify === 0) {
            this.error.emailOTP = "wrong otp";
          }
        });
      }
    },
    getAddress() {
      new daum.Postcode({
        oncomplete: (data) => {
          return (this.address = data.address);
        },
      }).open();
    },
  },
};
</script>
