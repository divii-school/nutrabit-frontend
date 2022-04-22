<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap personal-info">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">
              개인정보 관리
            </h1>
          </div>
          <form action="" class="signUp-form" @submit="(e) => e.preventDefault()">
           <div class="individuals-form">
              <div class="form-group" :class="error.business_number ? 'error' : ''">
              <label for="">사업자번호</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control disabled"
                    disabled
                    type="text"
                    v-model="business_number"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.business_number }}</span>
            </div>
            <div class="form-group" :class="error.business_name ? 'error' : ''">
              <label for="">사업자명</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text" 
                    v-model="business_name"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.business_name }}</span>
            </div>
            <div class="form-group" :class="error.depertment ? 'error' : ''">
              <label for="">부서명</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    v-model="department"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.department }}</span>
            </div>
            <div class="form-group" :class="error.contactPerson ? 'error' : ''">
              <label for="">담당자명</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    v-model="contactPerson"
                  />
                </div>
              </div>
               <span class="error-msg">{{ error.contactPerson }}</span>
            </div>
             <div class="form-group">
              <label for="">아이디</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control disabled"
                    disabled
                    type="text"
                    v-model="uuid"
                
                  />
                </div>
              </div>
            </div>
           
            <div class="form-group" :class="error.password ? 'error' : ''">
              <label for="">비밀번호</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="password"
                   placeholder="신규 비밀번호 입력(10~20자 영문 대소문자, 숫자, 특수기호 포함)"
                   maxlength="20"
                   v-model="password"
                   autocomplete="off"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.password }}</span>
            </div>
            <div class="form-group" :class="error.confirmPassword ? 'error' : ''">
              <label for="">비밀번호 확인</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="password"
                    placeholder="산규 비밀번호 확인"
                    v-model="confirmPassword"
                    autocomplete="off"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.confirmPassword }}</span>
            </div>
             <div class="form-group">
              <label for="">이메일</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control disabled"
                    disabled
                    type="text"
                    v-model="email"
                
                  />
                </div>
              </div>
            </div>
           
            <div class="form-group" :class="error.phoneNumber ? 'error' : ''">
              <label for="">휴대폰번호</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    v-model="phoneNumber"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.phoneNumber }}</span>
            </div>
            <div class="form-group" :class="error.address ? 'error' : ''">
              <label for="">주소</label>
              <div class="input-group with-btn dual-input">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                   v-model="address"
                   disabled
                  />
                </div>
                <button class="btn-green-outline" @click="getAddress">주소 검색</button>
              </div>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    v-model="Detailaddress"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.address }}</span>
            </div>
           </div>
            <button class="btn-primary grenn-btn2" @click="updateBusinessInfo">저장</button>
          </form>
           <div class="logout-withdraw">
            <ul>
              <li><router-link to @click="logOut()">로그아웃</router-link>
              </li>
              <li><router-link to="/withdrawal-of-membership">회원탈퇴</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal 
    v-show="isModalVisible"
    @close="closeModal"
    bodytext1="저장되었습니다."
    btnText2="확인"
    link = '/'
  />
</template>
<script>
import { inject } from "vue";
import Modal from "../../components/Modal.vue";
import PersonalBusinessService from "../../services/PersonalBusinessService";
import personalBusinessValidation from "../../Validation/personalBusinessValidation";
export default {
  name: "PersonalInformationBusiness",
  components: {
    // "vue-select": VueNextSelect,
    Modal
  },
  data(){
    return{
      userId: this.common.state.userId,
      userID: "",
      business_number:"",
      business_name:"",
      department:"",
      contactPerson:"",
      uuid:"",
      password:"",
      confirmPassword:"",
      email:"",
      phoneNumber:"",
      address:"",
      error: {},
      isModalVisible:false,
      Detailaddress:"",
    }
  },

  setup() {
    const common = inject("common");
    return { common };
  },

  created() {
    this.personalBusinessService = new PersonalBusinessService();
  },

  methods: {

    async personalInfo() {

      this.personalBusinessService.getBusinessData(this.userId).then((res) => {
        
        let data = res.data;
        // console.log("data",data);
        this.business_number = data.data[0].business_number;
        this.business_name = data.data[0].business_name;        
        this.department = data.data[0].department;
        this.contactPerson = data.data[0].name;
        this.uuid = data.data[0].uuid;
        this.email = data.data[0].email;
        this.phoneNumber = data.data[0].mobile;
        this.address = data.data[0].address;
        this.userID = this.common.state.userId;
        this.Detailaddress = data.data[0].address;
      });
    },

    async updateBusinessInfo() {
      
      let credential = {
        business_number: this.business_number,
        business_name: this.business_name,
        department: this.department,
        contactPerson: this.contactPerson,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
      const { isInvalid, error } = personalBusinessValidation(credential);
      if (isInvalid) {
        
        this.error = error;
      } else {
        
        this.personalBusinessService
          .updateBusinessInfo(
            this.userID,
            this.business_number,
            this.business_name,
            this.department,
            this.contactPerson,
            this.password,
            this.confirmPassword,
            this.email,
            this.phoneNumber,
            this.address
          )
          .then((res) => {
            if (res.data.status == 200) {
              console.log(res.data.status);
              this.openmodal();
            }
          });
      }
    },

    openmodal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    getAddress() {
      new daum.Postcode({
        oncomplete: (data) => {
          console.log(data);
          return (this.address = data.address);
        },
      }).open();
    },

    logOut() {
        localStorage.clear();
        window.location = "/login";
    },

  },

  mounted() {
    this.personalInfo();
  },

};
</script>