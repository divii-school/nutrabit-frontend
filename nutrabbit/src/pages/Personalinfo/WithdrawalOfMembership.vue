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
                  <textarea class="form-control textarea" placeholder="Please enter the reason for withdrawal" v-model="reason"></textarea>
                </div>
              </div>
              <span class="error-msg">{{ error.reason }}</span>
            </div>
           </div>
            <button class="btn-primary grenn-btn2" @click="businessWithdraw">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PersonalBusinessService from "../../services/PersonalBusinessService";
import personalBusinessValidation from "../../Validation/personalBusinessValidation";
export default {
  name: "WithdrawalOfMembership",
  data() {
    return{
      reason:"",
      error: {},
    }
  },

  created() {
    this.personalBusinessService = new PersonalBusinessService();
  },

  methods:{
    // async withdraw() {

    //   this.personalBusinessService.businessWithdraw(this.reason).then((res) => {
    //     console.log(res.data.status); 
    //   });
    // },

    async businessWithdraw() {
      console.log("aaaaaa");
      let credential = {
        reason: this.reason,
      };
      const { isInvalid, error } = personalBusinessValidation(credential);
      if (isInvalid) {
        console.log("bbbbb");
        this.error = error;
      } else {
        console.log("ccccc");
        this.personalBusinessService
          .businessWithdraw(
            this.reason,
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

  },
};
</script>

