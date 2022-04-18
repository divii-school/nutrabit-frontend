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
                    <input class="form-control disabled" disabled type="text" v-model="uuid" />
                  </div>
                </div>
                <!-- <span class="error-msg">{{ error.userID }}</span> -->
              </div>
              <div class="form-group" :class="error.password ? 'error' : ''">
                <label for="">password</label>
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
                <label for>verify password</label>
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
                <label for>e-mail</label>
                <div class="input-group">
                  <div class="input-inner">
                    <input class="form-control disabled" disabled type="text" v-model="email" />
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
            <button class="btn-primary grenn-btn2" @click="updatePersonalInfo">Save
              <!-- <router-link to="/withdrawal-of-membership"></router-link> -->
            </button>
          </form>
          <div class="logout-withdraw">
            <ul>
              <li>
                <router-link to @click="logOut()">Log out</router-link>
              </li>
              <li><router-link to="/withdrawal-of-membership">Withdrawal</router-link>
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
    bodytext1="Saved"
    btnText2="Confirm"
    link = '/'
  />
</template>
<script>
import { inject } from "vue";
import PersonalInfoService from "../../services/PersonalInfoService";
import personalInfoValidation from "../../Validation/personalInfoValidation";
import Modal from "../../components/Modal.vue";
export default {
  name: "PersonalInformationManagement",
  components: {
    Modal
  },
  data() {
    return {
      // userId: 21,
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
      isModalVisible:false,
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

    async updatePersonalInfo() {
      
      let credential = {
        name: this.name,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
      const { isInvalid, error } = personalInfoValidation(credential);
      if (isInvalid) {
        
        this.error = error;
      } else {
        
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