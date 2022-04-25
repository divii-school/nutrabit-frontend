<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
         <div class="login-heading-wrap">
            <h1 class="login-heading">{{ $t('signup.heading') }}</h1>
            <p class="membership-desc">
           {{ $t('signup.info') }}
          </p>
         </div>
          <div class="membership-list-wrap method-selection">
            <ul>
              <li class="method-item">
                <h2 class="method-heading">{{ $t('signup.general') }}</h2>
                <p class="list-desc">{{ $t('signup.gen_info') }}</p>
                <button class="btn-primary" @click="
                $router.push({
                  name: 'MemberRegistrationIndividual',
                })
              ">{{ $t('signup.sign_btn') }}</button>
              </li>
              <li class="method-item">
                <h2 class="method-heading">{{ $t('signup.sns') }}</h2>
                <p class="list-desc">
                 {{ $t('signup.sns_info') }}
                </p>
                <button class="btn-primary with-icon yellow-btn">
                  <i class="icon-chat-black"></i>  {{ $t('signup.kakao_sign') }}
                </button>
                <button class="btn-primary with-icon green-btn">
                  <i class="icon-naver"></i> {{ $t('signup.naver_sign') }}
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