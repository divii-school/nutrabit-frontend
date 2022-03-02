<template>
  <Header />
  <div class="main-body">
    <div class="container-small">
      <div class="login-wrap">
        <div class="login-inner">
          <h1 class="login-heading">login</h1>
          <form action="">
            <div class="form-group">
              <label for="">ID</label>
              <div class="input-group">
                <div class="input-inner">
                  <input class="form-control" type="text" placeholder="Enter ID">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Login",
  components: {
    Header,
  },
};
</script>
