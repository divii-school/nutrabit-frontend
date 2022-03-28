<template>
  <div class="main-body">
    <div class="signUp-container">
      <div class="login-signup-wrap registration-completed">
        <div class="login-signup-inner">
          <div class="circle-tick">
            <img src="../assets/icons/green-tick-circle.svg" alt="" />
          </div>
          <h2 class="text-center">Membership registration completed</h2>
          <div class="reg-desc">
            <p class="text-center">Sign up is complete.</p>
            <p class="text-center">
              Experience the various features of nutri 3.3 from now on!
            </p>
          </div>
          <div class="btn-wrap flex dual-btn">
            <button
              class="btn-primary grey-btn-outline"
              @click="
                $router.push({
                  name: '/',
                })
              "
            >
              home
            </button>
            <button
              class="btn-primary grenn-btn2"
              @click="
                $router.push({
                  name: 'login',
                })
              "
            >
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MemberRegistrationCompleted",
};
</script>