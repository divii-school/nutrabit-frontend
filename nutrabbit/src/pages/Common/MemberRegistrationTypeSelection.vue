<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
            <h1 class="login-heading">{{ $t('memberType.title') }}</h1>
            <p class="membership-desc">{{ $t('memberType.info') }}</p>
          </div>

          <div class="membership-list-wrap">
            <ul class="membership-list-inner">
              <!-- @click="active = !active"
                :class="active ? 'active' : ''" -->
              <li class="membership-item" @click="this.$router.push('/method-selection')">
                <i class="icon-user"></i>
                <h2 class="list-heading">{{ $t('memberType.type1') }}</h2>
                <p class="list-desc">{{ $t('memberType.type1Info') }}</p>
              </li>
              <li class="membership-item" @click="this.$router.push('/membership-registration-business')">
                <i class="icon-building-symbol"></i>
                <h2 class="list-heading">{{ $t('memberType.type2') }}</h2>
                <p When class="list-desc">{{ $t('memberType.type2Info') }}</p>
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




