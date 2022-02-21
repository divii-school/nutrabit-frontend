<template>
   <div class="Auth-wrap">
       <Header/>
       <h1>Membership</h1>
       <Footer/>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default { 
   name:'Membership',
   components: {
    Header,
    Button,
    Footer,

  },
}
</script>
<style>

</style>