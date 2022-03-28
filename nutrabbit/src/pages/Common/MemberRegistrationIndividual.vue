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
          <form
            action=""
            class="signUp-form"
            @submit="(e) => e.preventDefault()"
          >
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
              <div
                class="form-group"
                :class="error.personalCheck ? 'error' : ''"
              >
                <div class="check-box-wrap">
                  <label class="custom-check">
                    (Required) I agree to the collection and use of personal
                    information.
                    <input type="checkbox" v-model="personalCheck" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <span class="error-msg">{{ error.personalCheck }}</span>
              </div>
            </div>
            <div class="individuals-form">
              <div class="form-group" :class="error.name ? 'error' : ''">
                <label for=""><i class="icon-required"></i>name</label>
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
                <label for=""><i class="icon-required"></i>ID</label>
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
                <label for=""><i class="icon-required"></i>password</label>
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
              <div
                class="form-group"
                :class="error.confirmPassword ? 'error' : ''"
              >
                <label for=""
                  ><i class="icon-required"></i>verify password</label
                >
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="verify password"
                      v-model="confirmPassword"
                    />
                  </div>
                </div>
                <span class="error-msg">{{ error.confirmPassword }}</span>
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
                    @click="sendOtp"
                    :class="{ grey: isVerification }"
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
                    />
                    <span class="time">{{ timer }}</span>
                    <!-- <span class="time"><i class="green-tick-circle"></i></span> -->
                  </div>
                  <button
                    class="btn-green-outline"
                    :class="{ grey: isActive }"
                    @click="verifyOTP"
                  >
                    certification
                  </button>
                </div>
                <span class="error-msg">{{ error.emailOTP }}</span>
              </div>
              <div class="form-group" :class="error.phoneNumber ? 'error' : ''">
                <label for=""><i class="icon-required"></i>phone number</label>
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
                <label for=""><i class="icon-required"></i>address</label>
                <div class="input-group with-btn dual-input">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter address"
                      v-model="address"
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
                    />
                  </div>
                </div>
                <span class="error-msg">{{ error.address }}</span>
              </div>
              <div class="form-group">
                <label for="">distribution medium</label>
                <div class="multi-checkbox">
                  <div class="check-box-wrap">
                    <label class="custom-check"
                      >offline
                      <input
                        type="checkbox"
                        value="offline"
                        v-model="checkName"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check"
                      >online
                      <input
                        type="checkbox"
                        value="online"
                        v-model="checkName"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check"
                      >Network (door-to-door sales)
                      <input
                        type="checkbox"
                        value="network"
                        v-model="checkName"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check"
                      >SNS
                      <input type="checkbox" value="sns" v-model="checkName" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check"
                      >Etc
                      <input type="checkbox" value="etc" v-model="checkName" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="btn-primary grenn-btn2"
              @click="individalRegistration"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import validateRegistration from "../../Validation/validateRegistration";
import validator from "validator";
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
      errors: {},
      timer: 130,
      isActive: true,
      isVerification: false,
      otpVerified: false,
      // timerOn: true,
    };
  },
  methods: {
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
        try {
          let checkUserStatus = await this.checkUser();
          let sendVerification = await this.sendOtp();
          let checkOtp = await this.verifyOTP();
          let checkAddress = this.getAddress();
          if (!checkUserStatus) {
            return;
          } else if (!sendVerification) {
            return;
          } else if (!checkOtp) {
            return;
          } else if (!checkAddress) {
            this.error.address = "Please enter your address";
          }
          return await axios
            .post("/v1/sites/user/individual_registration", {
              name: this.name,
              username: this.username,
              password: this.password,
              email: this.email,
              mobile: this.phoneNumber,
              address: this.address,
              distribution_medium: this.checkName.join(","),
            })
            .then((response) => {
              if (response.data.status == 200) {
                window.location = "/member-registration-completed";
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    },
    async checkUser() {
      try {
        const checkUserdata = await axios.post("/v1/sites/user/check_id", {
          uuid: this.username,
        });
        if (
          checkUserdata.data.status == 200 &&
          checkUserdata.data.data.is_exist === 0
        ) {
          console.log(checkUserdata.data.data.is_exist);
          return true;
        } else if (
          checkUserdata.data.status == 200 &&
          checkUserdata.data.data.is_exist === 1
        ) {
          return (this.error.username = checkUserdata.data.data.msg);
        }
      } catch (error) {
        this.error.username = "Please verify the user";
        return false;
      }
    },
    async sendOtp() {
      try {
        const sendOtoData = await axios.post("/v1/sites/user/send_otp", {
          email: this.email,
        });
        if (sendOtoData.data.status == 200) {
          this.isActive = false;
          this.isVerification = true;
          this.$swal("OTP has been sent to your email");
          setInterval(() => {
            if (this.timer === 0) {
              clearInterval();
              this.isVerification = false;
              this.isActive = true;
            } else {
              this.timer--;
            }
          }, 1000);
          return true;
        } else {
          return (this.error.email = sendOtoData.data.message);
        }
      } catch (error) {
        this.error.email = "hhhh";
        return false;
      }
    },
    async verifyOTP() {
      if (this.emailOTP == "") {
        return (this.error.emailOTP = "Enter an valid OTP");
      }
      try {
        const verifyOtpData = await axios.post("/v1/sites/user/verify_otp", {
          email: this.email,
          verification_code: this.emailOTP,
        });
        if (
          verifyOtpData.data.status == 200 &&
          verifyOtpData.data.data.otp_verify === 1
        ) {
          this.$swal("OTP verified");
          return true;
        } else if (
          verifyOtpData.data.status == 200 &&
          verifyOtpData.data.data.otp_verify === 0
        ) {
          console.log("wrong otp");
        }
      } catch {
        this.error.emailOTP = "Please enter your email verification code";
        return false;
      }
    },
    getAddress() {
      new daum.Postcode({
        oncomplete: (data) => {
          console.log(data);
          return (this.address = data.address);
        },
      }).open();
    },
    // timer() {
    //   let remaining = 120;
    //   let m = Math.floor(remaining / 60);
    //   let s = remaining % 60;

    //   m = m < 10 ? "0" + m : m;
    //   s = s < 10 ? "0" + s : s;
    //   document.getElementById("timer").innerHTML = m + ":" + s;
    //   remaining -= 1;

    //   if (remaining >= 0 && timerOn) {
    //     setTimeout(function () {
    //       timer(remaining);
    //     }, 1000);
    //     return;
    //   }

    //   if (!timerOn) {
    //     // Do validate stuff here
    //     return;
    //   }

    //   // Do timeout stuff here
    //   alert("Timeout for otp");
    // },
  },
};
</script>