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
          <form action="" class="signUp-form" @submit="(e) => e.preventDefault()">
           <div class="individuals-form">
              <div class="form-group" :class="error.business_number ? 'error' : ''">
              <label for="">Business Number</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control disabled"
                    type="text"
                    v-model="business_number"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.business_number }}</span>
            </div>
            <div class="form-group" :class="error.business_name ? 'error' : ''">
              <label for="">Business name</label>
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
              <label for="">Department</label>
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
              <label for="">Contact person</label>
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
              <label for="">ID</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control disabled"
                    type="text"
                    v-model="uuid"
                
                  />
                </div>
              </div>
            </div>
           
            <div class="form-group" :class="error.password ? 'error' : ''">
              <label for="">Password</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="password"
                   placeholder="Enter a new password (10-20 characters including uppercase and lowercase letters, numbers, and special symbols)"
                   maxlength="20"
                   v-model="password"
                   autocomplete="off"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.password }}</span>
            </div>
            <div class="form-group" :class="error.confirmPassword ? 'error' : ''">
              <label for="">verify password</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Sankyu password confirmation"
                    v-model="confirmPassword"
                    autocomplete="off"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.confirmPassword }}</span>
            </div>
             <div class="form-group">
              <label for="">e-mail</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control disabled"
                    type="text"
                    v-model="email"
                
                  />
                </div>
              </div>
            </div>
           
            <div class="form-group" :class="error.phoneNumber ? 'error' : ''">
              <label for="">phone number</label>
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
              <label for="">address</label>
              <div class="input-group with-btn dual-input">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                   v-model="address"
                  />
                </div>
                <button class="btn-green-outline" @click="getAddress">Address Search</button>
              </div>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    v-model="address"
                  />
                </div>
              </div>
              <span class="error-msg">{{ error.address }}</span>
            </div>
           </div>
            <button class="btn-primary grenn-btn2" @click="updateBusinessInfo">Save</button>
          </form>
           <div class="logout-withdraw">
            <ul>
              <li><router-link to @click="logOut()">Log out</router-link>
              </li>
              <li><router-link to="/withdrawal-of-membership">Withdrawal</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { inject } from "vue";
// import Modal from "./Modal.vue";
import PersonalBusinessService from "../../services/PersonalBusinessService";
import personalBusinessValidation from "../../Validation/personalBusinessValidation";
export default {
  name: "PersonalInformationBusiness",
  // components: {
  //   "vue-select": VueNextSelect,
  //   Modal,
  // },
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
        console.log(res.data.status); 
        let data = res.data;
        console.log("data",data);
        this.business_number = data.data[0].business_number;
        this.business_name = data.data[0].business_name;        
        this.department = data.data[0].department;
        this.contactPerson = data.data[0].name;
        this.uuid = data.data[0].uuid;
        this.email = data.data[0].email;
        this.phoneNumber = data.data[0].mobile;
        this.address = data.data[0].address;
        this.userID = this.common.state.userId;
      });
    },

    async updateBusinessInfo() {
      console.log("aaaaaa");
      let credential = {
        business_number: this.business_number,
        business_name: this.business_name,
        department: this.department,
        contactPerson: this.contactPerson,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email,
        // emailOTP: this.emailOTP,
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
      const { isInvalid, error } = personalBusinessValidation(credential);
      if (isInvalid) {
        console.log("bbbbb");
        this.error = error;
      } else {
        console.log("ccccc");
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
            console.log(res);
            if (res.data.status == 200) {
              console.log("ddddd");
              console.log(res.data.status);
              // this.$router.push("member-registration-completed");
            }
          });
      }
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
    console.log("userId", this.userId);
  },

};
</script>