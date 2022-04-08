<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap personal-info inquery">
        <h1 class="inquiry-heading">1.1 Inquiry</h1>
        <div class="login-signup-inner">
          <form
            action=""
            class="signUp-form"
            @submit="(e) => e.preventDefault()"
          >
            <div class="individuals-form">
              <div class="form-group">
                <label for="">Inquiry subject</label>
                <div class="input-group">
                  <div class="header-dropdown dropdown">
                    <select v-model="selected">
                      <option
                        v-for="(item, index) of EnqueryTypeList"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.title }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="">Inquiry</label>
                <div class="input-group">
                  <div class="input-inner">
                    <textarea
                      class="form-control inquiry-textarea"
                      placeholder="Please enter the reason for withdrawal"
                      v-model="InqDesc"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="">file upload</label>
                <div class="input-group">
                  <div class="file-input">
                    <input
                      type="file"
                      class="select-file"
                      v-on:change="onFileChange"
                    />
                    <label for="file">
                      Select file
                      <img src="../../assets/icons/upload.png" />
                    </label>
                  </div>
                  <span>{{ fileName }}</span>
                </div>
              </div>
            </div>
            <div class="btn-wrap flex dual-btn">
              <button class="btn-primary grey-btn-solid">cancellation</button>
              <button class="btn-primary grenn-btn2" @click="submitData">
                Enrollment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomerCenterService from "../../services/CustomerCenterService";
export default {
  name: "InquiryContactUs",
  data() {
    return {
      EnqueryTypeList: "",
      render: false,
      fileName: "",
      file: "",
      files: null,
      selected: "",
      InqDesc: "",
    };
  },
  created() {
    this.CustomerCenterService = new CustomerCenterService();
  },
  mounted() {
    this.allEnqueryType();
  },
  methods: {
    allEnqueryType() {
      this.CustomerCenterService.getEnqueryType()
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data.data.inqueryType);
            this.EnqueryTypeList = res.data.data.inqueryType;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file = files[0];
      let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(this.file.name)) {
        this.render = true;
        return false;
      } else {
        this.render = false;
        this.fileName = this.file.name;
      }
      this.fileExtension = this.fileName.replace(/^.*\./, "");
      console.log(this.fileName);
    },
    async submitData() {
      let formData = new FormData();
      formData.append("type_id", this.selected);
      formData.append("description", this.InqDesc);
      formData.append("attachment", this.file);
      // const data1 = await axios.post("/inquery/add", formData);
      try {
        const res = await axios.post("/inquery/add", formData);
      } catch (error) {
        console.log(error);
      }
      console.log(formData);
    },
  },
};
</script>