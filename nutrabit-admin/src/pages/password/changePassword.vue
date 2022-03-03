<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('password.header') }}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="current_pass">{{ $t('password.current') }}</label>
                        <Password id="current_pass" :class="`${error.current ? 'p-invalid' : ''}`"  placeholder="Enter current-password" v-model="Current_pass" />
                        <div class="text-red">{{ error.current }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="new_pass">{{ $t('password.new') }}</label>
                        <Password id="new_pass" :class="`${error.newp ? 'p-invalid' : ''}`"  placeholder="Example: Admin@dfc" v-model="new_pass" />
                        <div class="text-red">{{ error.newp }}</div>
                        <small v-show="helptxt" style="color:#17a2b8">{{ $t('validation.pass') }}</small>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="confirm_pass">{{ $t('password.confirm') }}</label>
                        <Password @keyup="cnfpass" id="confirm_pass" :class="`${error.confi ? 'p-invalid' : ''}`" placeholder="Example: Admin@dfc" v-model="confirm_pass" />
                        <div class="text-red">{{ error.confi }}</div>
                        <div v-show="render" class="text-red">Password not Matching</div>
                        <div v-show="render1" class="text-green">Password Matched</div>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end">
                    <Button label="Primary" class="p-mr-2 p-mb-2" @click="Changepass">{{ $t('password.header') }}</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import validatePass from '../../validations/password/validatePassword';
import PasswordService from '../../service/API/PasswordService';
export default {
    data() {
        return {
            helptxt:true,
            render:false,
            render1:false,
            Current_pass: '',
            new_pass: '',
            confirm_pass: '',
            error: {},
            errpassconfi: null,
        };
    },
    created() {
        this.passwordService = new PasswordService();
    },
    methods: {
        cnfpass() {
            if (this.new_pass != this.confirm_pass) {
                 this.render=true;
                  this.render1=false;
            } else {
                this.render1=true;
                this.render=false;
            }
        },
        Changepass() {
            let vcheckData = {
                current: this.Current_pass,
                newp: this.new_pass,
                confi: this.confirm_pass,
            };
            const { isInvalid, error } = validatePass(vcheckData);
            if (isInvalid) {
                this.error = error;
                this.helptxt=false;
                console.log(error);
            } else {
                this.error = {};
                this.passwordService
                    .changePassword(this.Current_pass, this.new_pass, this.confirm_pass)
                    .then(() => {
                        this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'password changed Succesfully.', life: 3000 });
                        setTimeout(() => {
                            localStorage.clear();
                            this.$router.push({ name: 'login' });
                        }, 3000);
                    })
                    .catch((err) => {
                        this.$toast.add({ severity: 'error', summary: 'Rejected', detail: err.response.data.message, life: 3000 });
                        // console.log('error',err.response.data.message);
                    });
            }
        },
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
