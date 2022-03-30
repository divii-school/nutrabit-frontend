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
                    v-model="business_number"
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
                    v-model="business_name"
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
                    v-model="department"
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
                    v-model="contact_person"
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
                    v-model="id"
                
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
                   maxlength="20"
                   v-model="password"
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
                    v-model="confirm_password"
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
                    v-model="email"
                
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
                    v-model="mobile"
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
                   v-model="address"
                  />
                </div>
                <button class="btn-green-outline">Address Search</button>
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
import axios from "axios";
import { inject } from "vue";
import PersonalInfoService from "../../services/PersonalInfoService";
export default {
  name: "PersonalInformationBusiness",
  data(){
    return{
      userId: this.common.state.userId,
      business_number:"",
      business_name:"",
      department:"",
      contact_person:"",
      id:"",
      password:"",
      confirm_password:"",
      email:"",
      mobile:"",
      address:"",
    }
  },

  setup() {
    const common = inject("common");
    return { common };
  },

  methods: {

      async personalInfo() {

      this.personalInfoservice.getBusinessData(this.userId).then((res) => {
        console.log(res.data.status); 
        let data = res.data;
        console.log("data",data);
        this.business_number = data.data[0].business_number;
        this.business_name = data.data[0].business_name;        
        this.department = data.data[0].department;
        this.contact_person = data.data[0].name;
        this.id = data.data[0].uuid;
        this.email = data.data[0].email;
        this.mobile = data.data[0].mobile;
        this.address = data.data[0].address;
      });

    },

  },


    created() {
      this.personalInfoservice = new PersonalInfoService();
    },

  mounted() {
    this.personalInfo();
  },

};
</script>