<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">Personal information management</h1>
            <p class="membership-desc">Please select a member type</p>
          </div>

          <div class="membership-list-wrap">
            <ul class="membership-list-inner">
              <!-- @click="active = !active"
                :class="active ? 'active' : ''" -->
              <li
                class="membership-item"
                @click="
                  $router.push({
                    name: 'method-selection',
                  })
                "
              >
                <i class="icon-user"></i>
                <h2 class="list-heading">individual membership</h2>
                <p class="list-desc">When an individual joins</p>
              </li>
              <li class="membership-item">
                <i class="icon-building-symbol"></i>
                <h2 class="list-heading">Business membership registration</h2>
                <p When class="list-desc">When a company joins</p>
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
  name: "MemberRegistrationTypeSelection",
  data() {
    return {
      active: false,
    };
  },
};
</script>




