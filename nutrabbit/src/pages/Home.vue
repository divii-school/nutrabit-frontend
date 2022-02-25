<template>
  <div class="home">
    <div class="container mx-auto">
       <h1>Home</h1>
      <router-link to="/register" class="border-2 p-3">Register</router-link>
      <router-link to="/login" class="border-2 p-3">Login</router-link>
      <router-link to="/membership" class="border-2 p-3">Membership</router-link>
      <router-link to="/business" class="border-2 p-3">Business</router-link>
       <router-link to="/registrationComp" class="border-2 p-3">RegistrationComp</router-link>
       <router-link to="/findID" class="border-2 p-3">FindID</router-link>
       <router-link to="/changePassword" class="border-2 p-3">ChangePassword</router-link>
       <router-link to="/findPassword" class="border-2 p-3">FindPassword</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
h1 {
    font-weight: bold;
    font-size: 43px;
    line-height: 59px;
    margin-bottom: 48px;
    text-align: center;
  }
</style>
