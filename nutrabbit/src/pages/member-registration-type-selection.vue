<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
          <h1 class="login-heading">Membership type</h1>
          <p class="membership-desc">Please select a member type</p>
          </div>
          
          <div class="membership-list-wrap">
            <ul>
              <li class="membership-item active">
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
  name: "member-registration-type-selection",
};
</script>




