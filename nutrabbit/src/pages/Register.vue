<template>
  <div class="Auth-wrap">
    <Header/>
    <h1>Register</h1>
    <Footer/>
  </div>
  
</template>

<script>
import Header from "../components/Header.vue";
import Button from "../components/Button.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Register",
  components: {
    Header,
    Button,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>