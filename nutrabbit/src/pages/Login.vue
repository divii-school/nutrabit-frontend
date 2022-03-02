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
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter ID"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">password</label>
              <div class="input-group">
                <div class="input-inner">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter Password"
                  />
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
            <div class="form-links">
              <div class="form-links-left">
                <ul>
                  <li><a href="javascript:void(0)">find ID</a></li>
                  <li><a href="javascript:void(0)">find password</a></li>
                </ul>
              </div>
              <div class="form-link-right">
                <a href="javascript:void(0)">Sign Up</a>
              </div>
            </div>
            <button class="btn-primary">login</button>
          </form>
          <div class="getting-started">
            <button class="btn-primary with-icon yellow"><i class="icon-chat-black"></i> Start with cacao</button>
            <button class="btn-primary with-icon green"><i class="icon-naver"></i> Getting Started with Naver</button>
          </div>
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
