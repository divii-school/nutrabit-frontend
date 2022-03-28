<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">
              find password
            </h1>
          </div>
          <form action="" class="signUp-form">
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
            <div class="form-group">
              <label for=""><i class="icon-required"></i>Email Verification Number</label>
              <div class="input-group with-btn">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter your email verification code"
                  />
                  <span class="time">03:00</span>
                </div>
                <button class="btn-green-outline">certification</button>
              </div>
            </div>
            <button class="btn-primary grenn-btn2">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   name:'ForgotPassword'
}
</script>