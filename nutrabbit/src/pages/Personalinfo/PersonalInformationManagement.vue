<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap personal-info">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">Personal information management</h1>
          </div>
          <form action class="signUp-form">
            <div class="individuals-form">
              <div class="form-group" :class="error.name ? 'error' : ''">
                <label for>name</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input class="form-control" type="text" v-model="name" />
                  </div>
                </div>
                <span class="error-msg">{{ error.name }}</span>
              </div>
              <div class="form-group">
                <label for>ID</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input class="form-control disabled" type="text" v-model="userID" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for>password</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter a new password (10-20 characters including uppercase and lowercase letters, numbers, and special symbols)"
                      v-model="password"
                      maxlength="20"
                    />
                  </div>
                </div>
                <!-- <span class="error-msg">{{ error.password }}</span> -->
              </div>
              <div class="form-group">
                <label for>verify password</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Sankyu password confirmation"
                      v-model="confirmPassword"
                    />
                  </div>
                </div>
                <!-- <span class="error-msg">{{ error.confirmPassword }}</span> -->
              </div>
              <div class="form-group">
                <label for>e-mail</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input class="form-control disabled" type="text" v-model="email" />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for>phone number</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input class="form-control" type="text" v-model="phoneNumber" />
                  </div>
                </div>
                <!-- <span class="error-msg">{{ error.phoneNumber }}</span> -->
              </div>
              <div class="form-group">
                <label for>address</label>
                <div class="input-group with-btn dual-input">
                  <div class="input-inner">
                    <input class="form-control" type="text" v-model="address" />
                  </div>
                  <button class="btn-green-outline">Address Search</button>
                </div>
                <div class="input-group">
                  <div class="input-inner">
                    <input class="form-control" type="text" v-model="address" />
                  </div>
                </div>
                <!-- <span class="error-msg">{{ error.address }}</span> -->
              </div>
              <div class="form-group">
                <label for>distribution medium</label>
                <div class="multi-checkbox">
                  <div class="check-box-wrap">
                    <label class="custom-check">
                      offline
                      <input type="checkbox" value="offline" v-model="checkName" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check">
                      online
                      <input type="checkbox" value="online" v-model="checkName" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check">
                      Network (door-to-door sales)
                      <input
                        type="checkbox"
                        value="network"
                        v-model="checkName"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check">
                      SNS
                      <input type="checkbox" value="sns" v-model="checkName" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="check-box-wrap">
                    <label class="custom-check">
                      Etc
                      <input type="checkbox" value="etc" v-model="checkName" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- <p>{{common.state.userId}}</p> -->
            <button class="btn-primary grenn-btn2" @click="personalInfo">Save</button>
          </form>
          <div class="logout-withdraw">
            <ul>
              <li>
                <a href>Log out</a>
              </li>
              <li>
                <a href>Withdrawal</a>
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
// import validateRegistration from "../../Validation/validateRegistration";
export default {
  name: "PersonalInformationManagement",
  data() {
    return {
      userId: this.common.state.userId,
      name: "",
      userID: "",
      password: "",
      confirmPassword: "",
      email: "",
      phoneNumber: "",
      address: "",
      checkName: [],
      error: {},
    };
  },

  setup() {
    const common = inject("common");
    return { common };
  },

  methods: {
    save() {
      console.log("success");
    },

    async personalInfo() {

      this.personalInfoservice.getPersonalData(5).then((res) => {
        console.log(res.data);
      });




      // try {
      //   const personalData = await axios.post("/profile/personal_information", {
      //     userID: this.common.state.userId,
      //     // name: this.name,
      //     // password: this.password,
      //     // confirm_password: this.confirmPassword,
      //     // mobile: this.phoneNumber,
      //     // address: this.address,
      //     // distribution_medium: this.checkName.join(","),
      //   })
      //   console.log(personalData);
      // } catch (error) {
      //   console.log(error);
      // }
      // }
    },

    //     async apiFunctionName(){
    //   try{
    //     const personalData = await axios.post('url',{
    //       userId: this.common.state.userId,
    //     })
    //     .then((response)=>{
    //       console.log(response)
    //     })
    //   }
    //   catch(error){
    //     console.log(error)
    //   }
    // }

  },

  created() {
    this.personalInfoservice = new PersonalInfoService();
  },

  mounted() {
    console.log("this.common.state.userId", this.common.state.userId);
    this.personalInfo();
  },
};
</script>