<template>
  <div class="main-body">
    <div class="container-small">
      <div class="login-signup-wrap">
        <div class="login-signup-inner">
          <div class="login-heading-wrap">
          <h1 class="login-heading">{{$t("login")}}</h1>
          </div>
          <form action="">
            <div class="form-group">
              <label for="">{{$t('ID')}}</label>
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
              <label for="">{{$t('password')}}</label>
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
                  {{$t('saveID')}}
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="form-links">
              <div class="form-links-left">
                <ul>
                  <li><a href="">{{$t('findID')}}</a></li>
                  <li><a href="">{{$t('findpassword')}}</a></li>
                </ul>
              </div>
              <div class="form-link-right">
                <a href="">{{$t('SignUp')}}</a>
              </div>
            </div>
            <button class="btn-primary">{{$t("login")}}</button>
          </form>
          <div class="getting-started">
            <button class="btn-primary with-icon yellow-btn"><i class="icon-chat-black"></i>{{$t("Startwithcacao")}}</button>
            <button class="btn-primary with-icon green-btn"><i class="icon-naver"></i> {{$t("GettingStartedwithNaver")}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal/>
</template>

<script>
import Modal from '../pages/modal.vue';
import Button from '../components/Button.vue';
export default {
  name: "Login",
  components:{
    Button
  }
};
</script>
