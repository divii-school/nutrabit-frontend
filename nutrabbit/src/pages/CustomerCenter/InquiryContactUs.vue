<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap personal-info inquery">
        <h1 class="inquiry-heading">1:1 문의</h1>
        <div class="login-signup-inner">
          <form
            action=""
            class="signUp-form"
            @submit="(e) => e.preventDefault()"
          >
            <div class="individuals-form">
              <div class="form-group">
                <label for="">문의 제목</label>
                <div class="input-group">
                  <div class="header-dropdown dropdown">
                    <select v-model="selected">
                      <option value="" disabled hidden>
                        문의 제목 선택
                      </option>
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
                      placeholder="문의 내용을 입력해주세요."
                      v-model="InqDesc"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="">파일 업로드</label>
                <div class="input-group">
                  <div class="file-input">
                    <input
                      type="file"
                      class="select-file"
                      v-on:change="onFileChange"
                    />
                    <label for="file">
                      파일 업로드
                      <img src="../../assets/icons/upload.png" />
                    </label>
                  </div>
                  <div class="file-name-details" v-if="fileName">
                    <span>{{ fileName }}</span>
                    <i class="icon-close-gry" @click="removeFile"></i>
                  </div>
                  <span class="fileErrorMsg">{{ errorMsg }}</span>
                </div>
              </div>
            </div>
            <div class="btn-wrap flex dual-btn">
              <button class="btn-primary grey-btn-solid" @click="resetForm">
                취소
              </button>
              <button class="btn-primary grenn-btn2" @click="submitData">
                등록
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Modal
    v-show="isModalVisible"
    @close="closeModal"
    bodytext1="1:1 inquiry registration has been completed."
    btnText2="Confirm"
    link="/inquiry"
  />
</template>
<script>
import Modal from "../../components/Modal.vue";
import CustomerCenterService from "../../services/CustomerCenterService";
export default {
  name: "InquiryContactUs",
  components: {
    Modal,
  },
  data() {
    return {
      EnqueryTypeList: "",
      render: false,
      fileName: "",
      file: "",
      files: null,
      selected: "",
      InqDesc: "",
      isModalVisible: false,
      errorMsg: "",
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
            this.EnqueryTypeList = res.data.data.inqueryType;
          }
        })
        .catch((err) => {
          return err;
        });
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file = files[0];
      let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(this.file.name)) {
        this.render = true;
        this.errorMsg = "please upload .jpg, .jpeg and .png only";
        return false;
      } else if (allowedExtensions.exec(this.file.name)) {
        this.errorMsg = '';
        this.render = false;
        this.fileName = this.file.name;
      } 
      this.fileExtension = this.fileName.replace(/^.*\./, "");
      this.this.errorMsg = "";
    },
    async submitData() {
      let formData = new FormData();
      formData.append("type_id", this.selected);
      formData.append("description", this.InqDesc);
      formData.append("attachment", this.file);
      // const data1 = await axios.post("/inquery/add", formData);
      try {
        const res = await axios.post("/inquery/add", formData);
        this.isModalVisible = true;
      } catch (error) {
        return;
      }
    },
    removeFile() {
      this.fileName = "";
    },
    resetForm() {
      this.fileName = "";
      this.InqDesc = "";
      this.selected = "";
    },
  },
};
</script>