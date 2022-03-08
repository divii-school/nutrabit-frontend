<template>
    <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap inquiry-contact">
        <div class="login-signup-inner ">
          <form action="" class="signUp-form">
           <div class="individuals-form">
               <div class="form-group">
              <label for="">Inquiry subject</label>
              <div class="input-group">
             <div class="header-dropdown">
            <vue-select :options="['EN', 'KO']" placeholder="EN" close-on-select> </vue-select>
          </div>
              </div>
            </div>
              <div class="form-group">
              <label for="">Inquiry</label>
              <div class="input-group">
                <div class="input-inner">
                  <textarea class="form-control inquiry-textarea" placeholder="Please enter the reason for withdrawal"></textarea>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">file upload</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                   placeholder="file upload"
                  />
                </div>
              </div>
            </div>
           </div>
           <div class="btn-wrap flex dual-btn">
            <button class="btn-primary grey-btn-solid">cancellation</button>
            <button class="btn-primary grenn-btn2">Enrollment</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "InquiryContactUs",
};
</script>

