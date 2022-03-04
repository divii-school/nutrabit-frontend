<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap with-extra-text">
            <h1 class="login-heading">
              Sign Up
              <span>business member</span>
            </h1>
            <span>* Required</span>
          </div>
          <form action="" class="signUp-form">
            <div class="terms-sec">
              <div class="form-group">
                <div class="check-box-wrap">
                  <label class="custom-check">
                    (Required) I agree to the Terms of Use.
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="check-box-wrap">
                  <label class="custom-check">
                    (Required) I agree to the collection and use of personal
                    information.
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="business-form">
              <div class="form-group">
                <label for=""><i class="icon-required"></i>Business Number</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter business number"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for=""><i class="icon-required"></i>Business name</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter business name"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for=""><i class="icon-required"></i>Department</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter department name"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for=""
                  ><i class="icon-required"></i>Contact person</label
                >
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter the person in charge"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="individuals-form">
              <div class="form-group">
                <label for=""><i class="icon-required"></i>name</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for=""><i class="icon-required"></i>ID</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter ID"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for=""><i class="icon-required"></i>password</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="10-20 characters including uppercase and lowercase letters, numbers, and special symbols"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for=""
                  ><i class="icon-required"></i>verify password</label
                >
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="verify password"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for=""><i class="icon-required"></i>e-mail</label>
                <div class="input-group with-btn">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button class="btn-green-outline">
                    Send verification code
                  </button>
                </div>
              </div>
              <div class="form-group error">
                <label for=""
                  ><i class="icon-required"></i>Email Verification Number</label
                >
                <div class="input-group with-btn">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter your email verification code"
                    />
                    <!-- <span class="time">02:10</span> -->
                    <span class="time"><i class="green-tick-circle"></i></span>
                  </div>
                  <button class="btn-green-outline grey">certification</button>
                </div>
                <span class="error-msg"
                  >The verification code does not match.</span
                >
              </div>
              <div class="form-group">
                <label for=""><i class="icon-required"></i>phone number</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter your mobile phone number"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
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
                    />
                  </div>
                </div>
              </div>
            </div>
            <button class="btn-primary grenn-btn2">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "membership-registration-business",
};
</script>