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
                    type="text"
                    placeholder="Enter new password"
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
                    type="text"
                    placeholder="New password confirmation"
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
export default {
  name: "ChangePassword",
  data() {
    return {
      password: "",
      confirmPassword: "",
      error: {},
    };
  },
  methods: {
    changePassword() {
      let credential = {
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      const { isInvalid, error } = passwordValidation(credential);
      if (isInvalid) {
        this.error = error;
      } else {
        console.log("hhhhh")
      }
    },
  },
};
</script>