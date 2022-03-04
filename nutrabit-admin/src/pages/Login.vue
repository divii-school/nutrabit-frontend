<template>
    <Toast />
    <div class="login-body">
        <div class="login-wrapper">
            <div class="login-panel">
                <a @click="goDashboard" class="logo">
                    <img src="assets/layout/images/site-logo.svg" alt="DA LAB" />
                </a>
                <InputText class="p-invalid" id="email" placeholder="이메일" v-model="email" />
                <div class="text-redx">{{ error.email }}</div>
                <div class="text-redx">{{ email_err }}</div>
                <Password @keyup.enter='Login' id="password" placeholder="비밀번호" :feedback="false" v-model="password" :class="`${error.password ? 'p-invalid' : ''}`" />
                <div class="text-redx">{{ error.password }}</div>
                <div class="text-redx">{{ pass_err }}</div>
                <Button :label="$t('button.login')"  type="button" @click="Login"></Button>
                <a href="#" @click="open">{{$t('password.foget_dfc_pass')}}</a>
                <!-- <a href="#">forget dfc password?</a> -->
                <!-- <p>Don’t you have an account, <a href="#">sign up</a></p> -->
            </div>
        </div>
        <Dialog :header="$t('password.recovery_DFC')" v-model:visible="display" :breakpoints="{ '960px': '75vw' }" :style="{ width: '30vw' }" :modal="true">
            <div class="p-field p-fluid">
                <label for="username">{{$t('password.p_email')}}:</label>
                <InputText :class="`${error.resetemail ? 'p-invalid' : ''}`" id="username" type="email" v-model="resetemail" />
                <small v-show="helptxt">{{$t('password.help')}}</small>
                <div class="text-redx">{{ error.resetemail }}{{ errmsg }}</div>
            </div>
            <template #footer>
                <Button :label="$t('password.send_mail')" @click="resetpass" icon="pi pi-check" class="p-button-primary" />
                <!-- <Button label="Dismiss" @click="close" icon="pi pi-pi-times" class="p-button-danger" /> -->
            </template>
        </Dialog>
    </div>
</template>

<script>
import validateLogin from '../validations/validateLogin';
import validateReset from '../validations/validateReset';
import axios from 'axios';
export default {
    data() {
        return {
            errmsg: '',
            helptxt: true,
            resetemail: '',
            display: false,
            email_err: '',
            pass_err: '',
            email: '',
            password: '',
            error: {},
            errors: {},
        };
    },
    methods: {
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
        async Login() {
            let credentials = {
                email: this.email,
                password: this.password,
            };
            const { isInvalid, error } = validateLogin(credentials);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                var self = this;
                this.error = {};
                // console.log('pass');
                await axios({
                    method: 'post',
                    url: '/admin/auth/login',
                    data: credentials,
                })
                    .then(function (response) {
                        console.log(response);
                        if (response.data.status === 200) {
                            console.log(response.data.status);
                            // localStorage.removeItem("expirytoken");
                            // this.$router.push({ name: 'dashboard' });
                            localStorage.setItem('token', response.data.data.token);
                            localStorage.setItem('admin-type', response.data.data.userType);
                            localStorage.setItem('UserName', response.data.data.name);
                            if (response.data.data.userType === 'admin') {
                                window.location = '/dfc-management';
                            } else {
                                localStorage.setItem('refcode', response.data.data.referralCode);
                                localStorage.setItem('dfc_Id', response.data.data.userId);
                                window.location = '/client-lookup';
                            }
                        }
                    })
                    .catch(function (err) {
                        let text = err.response.data.message;
                        let result = text.match('Password');
                        let result1 = text.match('Email Does Not Exists');
                        console.log(text);
                        if (result == 'Password') {
                            self.pass_err = 'invalid password.';
                            self.email_err = '';
                        } else if (result1 == 'Email Does Not Exists') {
                            self.pass_err = '';
                            self.email_err = 'invalid email.';
                        } else {
                            alert('Email or, password is incorrect');
                        }
                    });
            }
        },
        resetpass() {
            let vcheckData = {
                resetemail: this.resetemail,
            };
            const { isInvalid, error } = validateReset(vcheckData);
            if (isInvalid) {
                this.error = error;
                this.helptxt = false;
                console.log(error);
            } else {
                this.errmsg = '';
                var self = this;
                this.helptxt = true;
                this.error = {};
                axios({
                    method: 'post',
                    url: '/admin/dfc/resetPassword',
                    data: { email: this.resetemail },
                })
                   .then(function () {
                        self.close();
                        self.$toast.add({ severity: 'success', summary: '비밀번호가 성공적으로 변경되었습니다', detail: ` 새로운 비밀번호가 ${self.resetemail}로 발송되었습니다  `, life: 5000 });
                    })
                    .catch((err) => {
                        this.helptxt = false;
                        this.errmsg = err.response.data.message;
                    });
            }
        },
        goDashboard() {
            window.location = '/';
        },
    },
};
</script>
