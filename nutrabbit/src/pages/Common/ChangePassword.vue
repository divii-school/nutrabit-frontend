<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">
              Change Password
            </h1>
            <p class="membership-desc">Please change your password</p>
          </div>
          <form action="" class="signUp-form">
           <div class="form-group">
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
            </div>
            <div class="form-group">
              <label for=""><i class="icon-required"></i>New password confirmation</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="New password confirmation"
                  />
                </div>
              </div>
            </div>
            <button class="btn-primary grenn-btn2">change</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   name:'ChangePassword'
}
</script>