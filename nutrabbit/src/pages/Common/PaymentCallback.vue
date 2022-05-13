<template>
  <div>
    <h>Payment Callback</h>
  </div>
</template>

<script>
export default {
  name: 'PaymentCallback',
  mounted() {
    console.log('NaverLoginCallback');
    this.payCallBack();
  },
  methods: {
    payCallBack() {
      console.log('payCallBack');
      var queryString = window.location.search;
      console.log('queryString', queryString);
      const urlParams = new URLSearchParams(queryString);
      var imp_success = urlParams.get('imp_success');
      console.log('imp_success', imp_success);
      if (imp_success == false) {
        this.$router.push({ name: "MyRecipe" });
      } else {
        this.$router.push({ name: "MyApplicationDetails" });
      }
    }
  }
}
</script>