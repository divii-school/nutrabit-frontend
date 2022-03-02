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
                  <input class="form-control" type="text" placeholder="Enter ID" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">password</label>
              <div class="input-group">
                <div class="input-inner">
                  <input class="form-control" type="text" placeholder="Enter Password" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="check-box-wrap">
                <label class="custom-check">
                  save ID
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
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
