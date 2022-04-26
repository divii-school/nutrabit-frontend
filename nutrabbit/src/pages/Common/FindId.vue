<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading"> {{$t("common.QuickLinks.FindID")}}</h1>
          </div>
          <form
            action=""
            class="signUp-form"
            @submit="(e) => e.preventDefault()"
          >
            <div class="form-group" :class="error.email ? 'error' : ''">
              <label for=""><i class="icon-required"></i>{{$t("common.label.Email")}}</label>
              <div class="input-group with-btn">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="email"
                    :placeholder="$t('common.placeholder.Email')"
                    v-model="email"
                    
                  />
                </div>
                <button
                  class="btn-green-outline"
                  @click="userFindId"
                  :class="{ grey: isVerification }"
                  :disabled="emailValidated"
                >
                 {{$t("button.sendVerification")}}
                </button>
              </div>
              <span class="error-msg">{{ error.email }}</span>
            </div>
            <div class="form-group" :class="error.emailOTP ? 'error' : ''">
              <label for=""
                ><i class="icon-required"></i>{{$t("common.label.EmailVerification")}}</label
              >
              <div class="input-group with-btn">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                   :placeholder="
                        $t('common.placeholder.EnterVerificationCode')
                      "
                    v-model="emailOTP"
                    maxlength="6"
                    
                  />
                  <span class="time" :class="{ startTimer: startTimer }">{{
                    newTime
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
                   {{ $t("button.verify") }}
                </button>
              </div>
               <span class="success-msg" v-if="isConfirmOTP==1">{{ isOtpSuccess }}</span>
              <span class="error-msg" >{{ error.emailOTP }}</span>
            </div>
            <button class="btn-primary grenn-btn2" @click="confirmFindId">
               {{ $t("button.Confirm") }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import validator from "validator";
import CommonService from "../../services/CommonService";
import forgotPassword from "../../Validation/forgotPassword";
export default {
  name: "FindId",
  data() {
    return {
      email: "",
      emailOTP: "",
      error: {},
      timer: 130,
      isActive: true,
      isVerification: false,
      emailValidated: 0,
      otpValidate: 1,
      startTimer: true,
      showTick: true,
      storeSetInterval: null,
      newTime: "",
      isConfirmOTP:0,
      isOtpSuccess : '',
    };
  },
  created() {
    this.commonService = new CommonService();
  },
  methods: {
     checkError() {
      let credential = {
        email: this.email,
        emailOTP: this.emailOTP,
        isConfirmOTP: this.isConfirmOTP,
      };
      const { isInvalid, error } = forgotPassword(credential);
      if (isInvalid) {
        this.error = error;
        return false;
      } else {
        this.error = "";
        return true;
      }
    },
    async confirmFindId() {
      if (!this.checkError()) {
        return;
      }
      else {
        //console.log(this.otpValidate)
       
          this.$router.push("/login");
        
      }
    },
    async userFindId() {
      if (!validator.isEmail(this.email)) {
        this.error.email = "Enter a valid email address";
      }
      if (validator.isEmpty(this.email)) {
        this.error.email = this.$t("common.Error.EnterEmail");
      } else {
        this.commonService.userFindId(this.email).then((res) => {
          if (res.status == 200) {
            this.isActive = false;
            this.isVerification = true;
            this.emailValidated = 1;
            this.otpValidate = 0;
            this.startTimer = false;
            this.showTick = true;
            this.emailOTP="";
            this.error.email = "";

            if (this.storeSetInterval) {
              clearInterval(this.storeSetInterval);
            }
            // asign new time again
            this.timer = 180;

            this.storeSetInterval = setInterval(() => {
              let m = Math.floor(this.timer / 60);
              let s = this.timer % 60;
              m = m < 10 ? "0" + m : m;
              s = s < 10 ? "0" + s : s;
              this.newTime = m + ":" + s;
              if (this.timer > 0) {
                return this.timer--;
              }
            }, 1000);
            setTimeout(() => {
              this.isVerification = false;
              this.isActive = true;
              this.emailValidated = 0;
              this.otpValidate = 1;
              this.startTimer = true;
            }, (this.timer + 1) * 1000);
          } else if (res.response.data.status == 400) {
            return (this.error.email = res.response.data.message);
            //return (this.error.email = res.response.data.message);
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
            this.isOtpSuccess = 'OTP verified';
            // this.$swal("OTP verified");
            this.startTimer = true;
            this.showTick = false;
            this.isActive = true;
            this.isVerification = false;
            this.emailValidated = 0;
            this.otpValidate = 1;
            this.isConfirmOTP=1;
            this.error.emailOTP = "";
            return true;
          }
        } catch (error) {
          this.error.emailOTP = this.$t("common.Error.OTPCheck");
          return false;
        }
      }
    },
  },
};
</script>