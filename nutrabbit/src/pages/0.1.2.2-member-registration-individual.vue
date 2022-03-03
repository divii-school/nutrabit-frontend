<template>
  <Header />
  <div class="main-body">
    <div class="container-small">
      <div class="login-wrap">
        <div class="login-inner">
          <div class="login-heading-wrap">
          <h1 class="login-heading">login</h1>
          </div>
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
                  <li><a href="">find ID</a></li>
                  <li><a href="">find password</a></li>
                </ul>
              </div>
              <div class="form-link-right">
                <a href="">Sign Up</a>
              </div>
            </div>
            <button class="btn-primary">login</button>
          </form>
          <div class="getting-started">
            <button class="btn-primary with-icon yellow-btn"><i class="icon-chat-black"></i> Start with cacao</button>
            <button class="btn-primary with-icon green-btn"><i class="icon-naver"></i> Getting Started with Naver</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Login",
  components: {
    Header,
    Footer,
  },
};
</script>
