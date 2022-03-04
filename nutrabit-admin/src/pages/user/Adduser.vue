<template>
    <div class="p-grid">
        <div class="p-col-12 p-pb-0">
            <Button @click="$router.push('/user')" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>{{$t('page.user.addUser.heading')}}</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="nameuser">Name</label>
                        <InputText id="nameuser" :class="`${error.name ? 'p-invalid' : ''}`" type="text" placeholder="Enter_Name" v-model="name" />
                        <div class="text-red">{{ error.name }}</div>
                    </div>
                    <div class="p-field p-col">
                        <label for="emailuser">Email Id</label>
                        <InputText id="emailuser" :class="`${error.email ? 'p-invalid' : ''}`" type="email" placeholder="Enter_Email" v-model="email" />
                        <div class="text-red">{{ error.email }}</div>
                    </div>
                    <div class="p-field p-col">
                        <label for="mobileuser">Phone Number</label>
                        <InputText id="mobileuser" :class="`${error.mobile ? 'p-invalid' : ''}`" type="text" placeholder="Enter_Mobile" v-model="mobile" />
                        <div class="text-red">{{ error.mobile }}</div>
                    </div>

                    <div class="p-field p-col">
                        <label for="state">gender</label>
                        <Dropdown id="state" :class="`${error.gender ? 'p-invalid' : ''}`" v-model="gender" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
                        <div class="text-red">{{ error.gender }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Password</label>
                        <InputText id="pass" :class="`${error.password ? 'p-invalid' : ''}`" type="password" placeholder="password" v-model="pass" />
                        <div class="text-red">{{ error.password }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Confirm Password</label>
                        <InputText id="pass" :class="`${error.confirmPassword ? 'p-invalid' : ''}`" type="password" placeholder="Confirm_password" v-model="confirm_pass" />
                        <div class="text-red">{{ error.confirmPassword }}</div>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end">
                    <Button label="Primary" class="p-mr-2 p-mb-2" @click="Adduser"><i class="pi pi-plus p-mr-2"></i> {{$t('button.createUser')}}</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import validateAddUser from '../../validations/user/validateAddUser';
import UserService from '../../service/API/UserService';
export default {
    data() {
        return {
            dropdownItems: [
                { name: 'male', code: 'm' },
                { name: 'female', code: 'f' },
            ],
            dropdownItem: '',
            name: '',
            mobile: '',
            email: '',
            gender: '',
            pass: '',
            confirm_pass: '',
            error: {},
        };
    },
    created() {
        this.userService = new UserService();
    },
    methods: {
        Adduser() {
            console.log(this.gender.name);

            let vcheckData = {
                name: this.name,
                email: this.email,
                mobile: this.mobile,
                gender: this.gender.name == undefined ? '' : this.gender.name,
                password: this.pass,
                confirmPassword: this.confirm_pass,
            };
            const { isInvalid, error } = validateAddUser(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.error = {};
                console.log('pass');
                this.userService.addUser(this.name, this.mobile, this.email, this.gender.code, this.pass, this.confirm_pass).then((data) => {
                    alert(data);
                    this.$router.push({ name: 'User' });
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
