<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap personal-info">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">Personal information management</h1>
          </div>
          <form action class="signUp-form" @submit="(e) => e.preventDefault()">
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
                    <input class="form-control disabled" type="text" v-model="uuid" />
                  </div>
                </div>
                <!-- <span class="error-msg">{{ error.userID }}</span> -->
              </div>
              <div class="form-group" :class="error.password ? 'error' : ''">
                <label for>password</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter a new password (10-20 characters including uppercase and lowercase letters, numbers, and special symbols)"
                      v-model="password"
                    />
                  </div>
                </div>
                <span class="error-msg">{{ error.password }}</span>
              </div>
              <div class="form-group" :class="error.confirmPassword ? 'error' : ''">
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
                <span class="error-msg">{{ error.confirmPassword }}</span>
              </div>
              <div class="form-group">
                <label for>e-mail</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input class="form-control disabled" type="text" v-model="email" />
                  </div>
                </div>
              </div>

              <div class="form-group" :class="error.phoneNumber ? 'error' : ''">
                <label for>phone number</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input class="form-control" type="text" v-model="phoneNumber" />
                  </div>
                </div>
                <span class="error-msg">{{ error.phoneNumber }}</span>
              </div>
              <div class="form-group" :class="error.address ? 'error' : ''">
                <label for>address</label>
                <div class="input-group with-btn dual-input">
                  <div class="input-inner">
                    <input class="form-control" type="text" v-model="address" />
                  </div>
                  <button class="btn-green-outline" @click="getAddress">Address Search</button>
                </div>
                <div class="input-group">
                  <div class="input-inner">
                    <input class="form-control" type="text" v-model="address" />
                  </div>
                </div>
                <span class="error-msg">{{ error.address }}</span>
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
            <button class="btn-primary grenn-btn2" @click="updatePersonalInfo">Save</button>
          </form>
          <div class="logout-withdraw">
            <ul>
              <li>
                <a href>Log out</a>
              </li>
              <li><router-link to="/withdrawal-of-membership">Withdrawal</router-link>
                <!-- <a href>Withdrawal</a> -->
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
import PersonalInfoService from "../../services/PersonalInfoService";
import personalInfoValidation from "../../Validation/personalInfoValidation";
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
      uuid:"",
    };
  },

  setup() {
    const common = inject("common");
    return { common };
  },

   created() {
    this.personalInfoservice = new PersonalInfoService();
  },

  methods: {
    // async save() {
    //   this.personalInfoservice.updatePersonalInfo(
    //     this.userID, 
    //     this.name, 
    //     this.password, 
    //     this.confirmPassword, 
    //     this.mobile, 
    //     this.address, 
    //     this.checkName.join(",")
    //     )
    //     .then((res) => {
    //       console.warn(res);
    //       console.log("response",res);
    //   });
    // },

    async updatePersonalInfo() {
      console.log("aaaaaa");
      let credential = {
        name: this.name,
        // username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email,
        // emailOTP: this.emailOTP,
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
      const { isInvalid, error } = personalInfoValidation(credential);
      if (isInvalid) {
        console.log("bbbbb");
        this.error = error;
      } else {
        console.log("ccccc");
        this.personalInfoservice
          .updatePersonalInfo(
            this.userID,
            this.name,
            this.password,
            this.confirmPassword,
            this.email,
            this.phoneNumber,
            this.address,
            this.checkName.join(",")
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

    async personalInfo() {

      this.personalInfoservice.getPersonalData(this.userId).then((res) => {
        console.log(res.data); 
        let data = res.data;
        this.name = data.data[0].name;
        this.uuid = data.data[0].uuid;
        this.email = data.data[0].email;
        this.phoneNumber = data.data[0].mobile;
        this.address = data.data[0].address;
        this.userID = this.common.state.userId;
      });

    },

    getAddress() {
      new daum.Postcode({
        oncomplete: (data) => {
          console.log(data);
          return (this.address = data.address);
        },
      }).open();
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

  mounted() {
    this.personalInfo();
  },
};
</script>