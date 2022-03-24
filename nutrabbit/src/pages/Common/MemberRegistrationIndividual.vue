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
              <div
                class="form-group"
                :class="error.username || errorUser ? 'error' : ''"
              >
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
                <span class="error-msg">{{ errorUser }}</span>
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
              <div
                class="form-group"
                :class="error.email || errorEmail ? 'error' : ''"
              >
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
                  <button class="btn-green-outline" @click="sendOtp">
                    Send verification code
                  </button>
                </div>
                <span class="error-msg">{{ error.email }}</span>
                <span class="error-msg">{{ errorEmail }}</span>
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
                  <button class="btn-green-outline grey">certification</button>
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
                    />
                  </div>
                  <button class="btn-green-outline">Address Search</button>
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
              :class="checkFields ? '' : 'curDisabled' "
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
      errorUser: "",
      errorEmail: "",
      timer: 180,
      checkFields: false
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
                console.log(response.data);
                // window.location = "/";
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    },
    async checkUser() {
      if (this.errorUser == "") {
        this.errorUser = "Please enter your ID";
      } else {
        try {
          return await axios
            .post("/v1/sites/user/check_id", {
              uuid: this.username,
            })
            .then((response) => {
              if (
                response.data.status == 200 &&
                response.data.data.is_exist === 0
              ) {
                console.log(response.data.data.is_exist);
              } else if (
                response.data.status == 200 &&
                response.data.data.is_exist === 1
              ) {
                return (this.errorUser = response.data.data.msg);
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    },
    async sendOtp() {
      // let timer = 10;
      if (this.email == "") {
        console.log("error");
        this.errorEmail = "Enter a valid email address";
      } else {
        try {
          return await axios
            .post("v1/sites/user/send_otp", {
              email: this.email,
            })
            .then((response) => {
              if (response.data.status == 200) {
                this.$swal("OTP has been sent to your email");
                setInterval(() => {
                  if (this.timer === 0) {
                    clearInterval();
                  } else {
                    this.timer--;
                    console.log(this.timer);
                  }
                }, 1000);
              } else {
                console.log("0");
                return (this.errorEmail = response.data.message);
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>