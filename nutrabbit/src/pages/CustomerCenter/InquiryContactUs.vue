<template>
    <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap personal-info inquery">
          <h1 class="inquiry-heading">1.1 Inquiry</h1>
        <div class="login-signup-inner">
          <form action="" class="signUp-form">
           <div class="individuals-form">
               <div class="form-group">
              <label for="">Inquiry subject</label>
              <div class="input-group">
             <div class="header-dropdown">
            <vue-select  class="inquiry-select" :options="['', '']" placeholder="Choose the subject of your inquiry" close-on-select> </vue-select>
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
                <!-- <div class="input-inner">
                  <input
                    class="form-control custom-file-input"
                    type="file"
                   placeholder="file upload"
                  />
                </div> -->

                <div class="file-input">
                  <input type="file" id="file" class="file">
                  <label for="file">
                    Select file <img src="src/assets/icons/upload.png">
                    <p class="file-name"></p>
                  </label>
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
  methods() {
    // upload file
    const file = document.querySelector('#file');
    file.addEventListener('change', (e) => {
      const [file] = e.target.files;
      const { name: fileName, size } = file;
      const fileSize = (size / 1000).toFixed(2);
      const fileNameAndSize = `${fileName} - ${fileSize}KB`;
      document.querySelector('.file-name').textContent = fileNameAndSize;
    });
  }
};
</script>