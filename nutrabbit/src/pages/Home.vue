<template>
  <div class="home">
    <div class="container mx-auto">
      <h1>Home</h1>
      <router-link to="/register" class="border-2 p-3">Register</router-link>
      <router-link to="/login" class="border-2 p-3">Login</router-link>
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
