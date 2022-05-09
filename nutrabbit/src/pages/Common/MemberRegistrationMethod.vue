<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap membership-wrap">
        <div class="login-signup-inner">
         <div class="login-heading-wrap type-2">
            <h1 class="login-heading">{{$t('common.title.HowToSignUp')}}</h1>
            <p class="membership-desc">{{$t('common.SubTitle.RegistrationProcess')}}</p>
         </div>
          <div class="membership-list-wrap method-selection">
            <ul>
              <li class="method-item">
                <h2 class="method-heading">{{$t('common.title.GeneralSignUp')}}</h2>
                <p class="list-desc">{{$t('common.SubTitle.EmailSignUp')}}</p>
                <button class="btn-primary" @click="
                $router.push({
                  name: 'MemberRegistrationIndividual',
                })
              ">{{$t('common.QuickLinks.SignUp')}}</button>
              </li>
              <li class="method-item">
                <h2 class="method-heading">{{$t('common.title.SnsSignUp')}}</h2>
                <p class="list-desc">
                  {{$t('common.SubTitle.SnsSignUp')}}
                </p>
                <button class="btn-primary with-icon yellow-btn">
                  <i class="icon-chat-black"></i> {{$t('common.QuickLinks.CacaoLogin')}}
                </button>
                <button class="btn-primary with-icon green-btn">
                  <i class="icon-naver"></i> {{$t('common.QuickLinks.NaverLogin')}}
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