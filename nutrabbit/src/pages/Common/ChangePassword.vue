<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">Change Password</h1>
            <p class="membership-desc">Please change your password</p>
          </div>

          
          <form
            action=""
            class="signUp-form"
            @submit="(e) => e.preventDefault()"
          >
            <div class="form-group" :class="error.password ? 'error' : ''">
              <label for=""><i class="icon-required"></i>New password</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Enter new password"
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
                ><i class="icon-required"></i>New password confirmation</label
              >
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="password"
                    placeholder="New password confirmation"
                    v-model="confirmPassword"
                   
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.confirmPassword }}</span>
            </div>
            <button class="btn-primary grenn-btn2" @click="changePassword">
              change
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import passwordValidation from "../../Validation/passwordValidation";
import CommonService from "../../services/CommonService";
export default {
  name: "ChangePassword",
  data() {
    return {
      password: "",
      confirmPassword: "",
      error: {},
      localUserData: "",
    };
  },
  created() {
    this.commonService = new CommonService();
  },
  methods: {
    checkError() {
      let credential = {
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      const { isInvalid, error } = passwordValidation(credential);
      if (isInvalid) {
        this.error = error;
        return false;
      } else {
        this.error = "";
        return true;
      }
    },
    changePassword() {
      // let credential = {
      //   password: this.password,
      //   confirmPassword: this.confirmPassword,
      // };
      // const { isInvalid, error } = passwordValidation(credential);
      if (!this.checkError()) {
        return;
      } else {
        this.commonService
          .ChangePassword(
            this.localUserData.userId,
            this.password,
            this.confirmPassword
          )
          .then((res) => {
            if (res.status == 200) {
              this.$router.push("/login");
              this.$swal(res.data.data);
            }
          });
      }
    },
  },
  mounted() {
    this.localUserData = JSON.parse(localStorage.getItem("forgetUserData"));
  },
};
</script>