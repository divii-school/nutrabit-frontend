<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
         <div class="login-heading-wrap">
            <h1 class="login-heading">How to sign up</h1>
         </div>
          <p class="membership-desc">
            Please select a method to proceed when registering as a member
          </p>
          <div class="membership-list-wrap method-selection">
            <ul>
              <li class="method-item">
                <h2 class="method-heading">General membership registration</h2>
                <p class="list-desc">Sign up as a member via email.</p>
                <button class="btn-primary">Sign Up</button>
              </li>
              <li class="method-item">
                <h2 class="method-heading">GSNS membership registration</h2>
                <p class="list-desc">
                  Sign up as a member through your SNS ID.
                </p>
                <button class="btn-primary with-icon yellow-btn">
                  <i class="icon-chat-black"></i> Start with cacao
                </button>
                <button class="btn-primary with-icon green-btn">
                  <i class="icon-naver"></i> Getting Started with Naver
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "member-registration-method",
};
</script>