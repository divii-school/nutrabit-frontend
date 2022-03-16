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
              <div class="form-group">
                <div class="check-box-wrap">
                  <label class="custom-check">
                    (Required) I agree to the Terms of Use.
                    <input type="checkbox" v-model="termsCheck" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="check-box-wrap">
                  <label class="custom-check">
                    (Required) I agree to the collection and use of personal
                    information.
                    <input type="checkbox" v-model="personalCheck" />
                    <span class="checkmark"></span>
                  </label>
                </div>
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
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter ID"
                      v-model="username"
                    />
                  </div>
                </div>
                <span class="error-msg">{{ error.username }}</span>
              </div>
              <div class="form-group" :class="error.password ? 'error' : ''">
                <label for=""><i class="icon-required"></i>password</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
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
                <!-- <span class="error-msg" v-if="this.password !== this.confirmPassword">{{ error.confirmPassword }}</span> -->
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
                  <button class="btn-green-outline">
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
                    <span class="time">02:10</span>
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
                      <input type="checkbox" v-model="checkOffline"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check"
                      >online
                      <input type="checkbox" v-model="checkOnline"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check"
                      >Network (door-to-door sales)
                      <input type="checkbox" v-model="checkNetwork"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check"
                      >SNS
                      <input type="checkbox" v-model="checkSNS"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check"
                      >Etc
                      <input type="checkbox" v-model="checkETC"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button class="btn-primary grenn-btn2" @click="onSubmit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import validateRegistration from "../Validation/validateRegistration";
export default {
  name: "member-registration-individual",
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
      checkOffline: "",
      checkOnline: "",
      checkNetwork: "",
      checkSNS: "",
      checkETC: "",
      error: {},
      errors: {},
    };
  },
  methods: {
    onSubmit() {
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
        console.log(error);
      }
    },
  },
};
</script>