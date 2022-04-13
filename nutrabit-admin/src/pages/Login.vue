<template>
    <Toast />
    <div class="login-body">
        <div class="login-wrapper">
            <div class="login-panel">
                <a @click="goDashboard" class="logo">
                    <!-- <img src="assets/layout/images/site-logo.svg" alt="DA LAB" /> -->
                    <h2 style="color: #000000;">Nutrabbit Admin</h2>
                </a>
                <form class="login">
                    <h2 class="header"> Welcome Admin</h2>
                    <p>Please sign-in to your account.</p>
                     <div class="form-group">
                        <h2 class="user">Username</h2>
                        <InputText class="p-invalid" id="email" placeholder="이메일" v-model="email" />
                        <div class="text-redx">{{ error.email }}</div>
                        <div class="text-redx">{{ email_err }}</div>
                    </div>
                    <div class="form-group">
                        <h2 class="user">Password</h2>
                        <input type="password" class="p-password" @keyup.enter='Login' id="password" placeholder="비밀번호" :feedback="false" v-model="password" :class="`${error.password ? 'p-invalid' : ''}`" />
                        <div class="text-redx">{{ error.password }}</div>
                        <div class="text-redx">{{ pass_err }}</div>
                    </div>
                <Button :label="$t('button.login')"  type="button" @click="Login" class="formsubmit"></Button>
                <a href="#" @click="open" class="forget-pass">{{$t('password.foget_dfc_pass')}}</a>
                </form>
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
                            localStorage.setItem('userType', response.data.data.userType);
                            localStorage.setItem('UserName', response.data.data.name);
                            if (response.data.data.userType === 'admin') {
                                window.location = '/individual-member';
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
                    url: '/admin/auth/resetPassword',
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

<style scoped>
.login{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;

position: static;
width: 410px;
height: 470px;
left: 0px;
top: 52px;

background: #FFFFFF;
/* Gray 8 */

border: 1px solid #E0E0E0;
box-sizing: border-box;
border-radius: 14px;

/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
margin: 0px 0px;
}

.header{
    position: static;
width: 183px;
height: 29px;
left: 113.5px;
top: 30px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 29px;
/* identical to box height */

text-align: center;

/* Primary-text-color */

color: rgba(0, 0, 0, 0.8);


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 20px 0px
}

.user{
    position: static;
width: 83px;
height: 19px;
left: 0px;
top: 0px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 120%;
/* or 19px */

display: flex;
align-items: center;

color: #020202;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 5px 0px;
margin-right: 85px;
}

.formsubmit{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14.5px;

position: static;
width: 350px;
height: 50px;
left: 30px;
top: 284px;

/* Gray 2 */

background: #4C4C4C;
border-radius: 5px;

/* Inside auto layout */

flex: none;
order: 4;
flex-grow: 0;
margin: 20px 0px;
}

.forget-pass{
    position: static;
width: 350px;
height: 20px;
left: 30px;
top: 354px;

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 18px;
text-align: center;

color: #7D7D7D;


/* Inside auto layout */

flex: none;
order: 5;
align-self: stretch;
flex-grow: 0;
margin: 20px 0px;
}

.p-invalid{
    display: flex;
flex-direction: row;
align-items: center;
padding: 8px 6px 8px 15px;

position: static;
width: 343px;
height: 40px;
left: 0px;
top: 24px;
}


.p-password {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 6px 8px 15px;
    position: static;
    width: 343px;
    height: 40px;
    left: 0px;
    top: 24px;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    color: #69707A;
    background: #ffffff;

    border: 1px solid #f44336;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    appearance: none;
    border-radius: 6px;
}

</style>