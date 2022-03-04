<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap with-extra-text">
            <h1 class="login-heading">
              Personal information management
            </h1>
          </div>
          <form action="" class="signUp-form">
           <div class="individuals-form">
              <div class="form-group">
              <label for="">name</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                   value="Hong Gil Dong"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">ID</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    value="rabbit123"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">password</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter a new password (10-20 characters including uppercase and lowercase letters, numbers, and special symbols)"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">verify password</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Sankyu password confirmation"
                  />
                </div>
              </div>
            </div>
             <div class="form-group">
              <label for="">e-mail</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    value="rabbit123@gmail.com"
                
                  />
                </div>
              </div>
            </div>
           
            <div class="form-group">
              <label for="">phone number</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    value="010-1234-1234"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">address</label>
              <div class="input-group with-btn dual-input">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                   value="15, Hyoryeong-ro 33-gil, Seocho-gu, Seoul"
                  />
                </div>
                <button class="btn-green-outline">Address Search</button>
              </div>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    value="First floor"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">distribution medium</label>
              <div class="multi-checkbox">
                <div class="check-box-wrap">
                  <label class="custom-check"
                    >offline
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box-wrap">
                  <label class="custom-check"
                    >online
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box-wrap">
                  <label class="custom-check"
                    >Network (door-to-door sales)
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box-wrap">
                  <label class="custom-check"
                    >SNS
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="check-box-wrap">
                  <label class="custom-check"
                    >Etc
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
           </div>

            <button class="btn-primary grenn-btn2">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "personal-information-management",
};
</script>