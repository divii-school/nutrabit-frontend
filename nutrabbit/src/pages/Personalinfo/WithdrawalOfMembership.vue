<template>
    <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap membership-wrap personal-info">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">
              Withdrawal
            </h1>
          </div>
          <form action="" class="signUp-form" @submit="(e) => e.preventDefault()">
           <div class="individuals-form">
              <div class="form-group" :class="error.reason ? 'error' : ''">
              <label for="">Reason for withdrawal</label>
              <div class="input-group">
                <div class="input-inner">
                  <textarea class="form-control textarea" @keyup="reasonkeyup" placeholder="Please enter the reason for withdrawal" v-model="reason"></textarea>
                </div>
              </div>
              <span class="error-msg">{{ error.reason }}</span>
            </div>
           </div>
            <button class="btn-primary grenn-btn2" @click="modalWithdraw">Confirm</button>
          </form>
          <!-- <modal/> -->
        </div>
      </div>
    </div>
    </div>
        <div>
          <Modal 
            v-show="isModalVisible"
            @close="closeModal"
            @confirm = "confirm"
            bodytext1="Are you sure you want to close this account?"
            btnText1="cancellation"
            btnText2="Confirm"
            link = ''
          />
        </div>

      <div>
        <Modal
        v-show="confirmModal"
        @close="closeModal1"
        bodytext1="Your Withdrawal is complete."
        btnText2="Confirm"
        link = '/'
      />
      </div>

</template>
<script>
import Modal from "../../components/Modal.vue";
import PersonalBusinessService from "../../services/PersonalBusinessService";
export default {
  name: "WithdrawalOfMembership",
  components: {
    // "vue-select": VueNextSelect,
    Modal,
  },
  data() {
    return{
      reason:"",
      error: {},
      isModalVisible: false,
      confirmModal: false,
      saveModal: false,
    }
  },

  created() {
    this.personalBusinessService = new PersonalBusinessService();
  },

  methods:{

    reasonkeyup(){
      if (this.reason == "") {
        this.error.reason = "Please enter the reason";
      } else {
        this.error.reason = ""
      }
    },

    modalWithdraw(){
      if (this.reason == "") {
        this.error.reason = "Please enter the reason";
      } else {
        this.isModalVisible =  true;
      }
    },

    async businessWithdraw() {
        this.personalBusinessService
          .businessWithdraw(
            this.reason
          )
          .then((res) => {
            console.log(res);
            if (res.data.status == 200) {
              console.log("res.data.status",res.data.status);
            }
          });
    },


    closeModal() {
      this.isModalVisible = false;
    },

    closeModal1() {
      this.confirmModal = false;
    },

    confirm(){
      this.confirmModal = true;
      this.businessWithdraw();
    }

  },
 
};
</script>

