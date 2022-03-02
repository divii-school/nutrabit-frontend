<template>
  <Header />
  <div class="main-body">
    <div class="container-small">
      <div class="login-wrap membership-wrap">
        <div class="login-inner">
           <h1 class="login-heading">How to sign up</h1>
          <p class="membership-desc">Please select a method to proceed when registering as a member</p>
          <div class="membership-list-wrap">
            <ul>
              <li class="method-item">
                <h2 class="method-heading">General membership registration</h2>
                <p class="list-desc">Sign up as a member via email.</p>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  name: "Method",
  components: {
    Header,
  },
};
</script>