<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap personal-info">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">
              Personal information management
            </h1>
          </div>
          <form action="" class="signUp-form">
           <div class="individuals-form">
              <div class="form-group">
              <label for="">Business Number</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control disabled"
                    type="text"
                   value="123-45-67890"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">Business name</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    value="New Trabit"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">Department</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    value="Marketing Department"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">Contact person</label>
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
                    class="form-control disabled"
                    type="text"
                    value="rabbit123"
                
                  />
                </div>
              </div>
            </div>
           
            <div class="form-group">
              <label for="">Password</label>
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
                    class="form-control disabled"
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
           </div>
            <button class="btn-primary grenn-btn2">Save</button>
          </form>
           <div class="logout-withdraw">
            <ul>
              <li>
              <a href="">Log out</a>
              </li>
               <li>
              <a href="">Withdrawal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "PersonalInformationBusiness",
};
</script>