<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
         <div class="login-heading-wrap">
            <h1 class="login-heading">How to sign up</h1>
            <p class="membership-desc">
            Please select a method to proceed when registering as a member
          </p>
         </div>
          <div class="membership-list-wrap method-selection">
            <ul>
              <li class="method-item">
                <h2 class="method-heading">General Sign up</h2>
                <p class="list-desc">Sign up via email.</p>
                <button class="btn-primary" @click="
                $router.push({
                  name: 'MemberRegistrationIndividual',
                })
              ">Sign Up</button>
              </li>
              <li class="method-item">
                <h2 class="method-heading">SNS Sign Up</h2>
                <p class="list-desc">
                  Sign up via your SNS ID.
                </p>
                <button class="btn-primary with-icon yellow-btn">
                  <i class="icon-chat-black"></i> Sign up with Kakao
                </button>
                <button class="btn-primary with-icon green-btn">
                  <i class="icon-naver"></i> Sign up with Naver
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
  name: "MemberRegistrationMethod",
};
</script>