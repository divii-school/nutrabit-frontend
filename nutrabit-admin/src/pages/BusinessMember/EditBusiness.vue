<template>
    <div class="p-grid">
        <Toast />

        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>사업자 회원 정보 수정</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="nameuser">{{ $t('Business.list.BusinessNumber') }}</label>
                        <InputText id="nameuser" :class="`${error.business_number ? 'p-invalid' : ''}`" type="text" placeholder="Business Number" :modelValue="mydata.business_number" v-model="mydata.business_number" disabled />
                        <div class="text-red">{{ error.business_number }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="id">{{ $t('Business.list.BusinessName') }}</label>
                        <InputText id="id" :class="`${error.business_name ? 'p-invalid' : ''}`" type="text" placeholder="Business Name" v-model="mydata.business_name" />
                        <div class="text-red">{{ error.business_name }}</div>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="emailuser">{{ $t('Business.list.Departmentname') }}</label>
                        <InputText id="emailuser" :class="`${error.department ? 'p-invalid' : ''}`" type="text" placeholder="Department Name" :modelValue="mydata.department" v-model="mydata.department" />
                        <div class="text-red">{{ error.department }}</div>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="mobileuser">{{ $t('Business.list.Personincharge') }}</label>
                        <InputText id="mobileuser" :class="`${error.person_in_charge ? 'p-invalid' : ''}`" type="text" placeholder="Person in charge" :modelValue="mydata.person_in_charge" v-model="mydata.person_in_charge" />
                        <div class="text-red">{{ error.person_in_charge }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="address">{{ $t('Business.list.ID') }}</label>
                        <InputText id="mobileuser" :class="`${error.uuid ? 'p-invalid' : ''}`" type="text" placeholder="ID" :modelValue="mydata.uuid" v-model="mydata.uuid" disabled />
                        <div class="text-red">{{ error.uuid }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="date">{{ $t('Business.list.Email') }}</label>
                        <InputText id="date" :class="`${error.email ? 'p-invalid' : ''}`" type="email" placeholder="Email" v-model="mydata.email" />
                        <div class="text-red">{{ error.email }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="medium">{{ $t('Business.list.mobile') }}</label>
                        <InputText id="medium" type="text" placeholder="Phone Number" v-model="mydata.mobile" />
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="medium">{{ $t('Business.list.EditAdress') }}</label>
                        <InputText id="medium" type="text" placeholder="Address" v-model="mydata.address" />
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="medium">{{ $t('Business.list.detailaddress') }}</label>
                        <InputText id="medium" type="text" placeholder="Detail Address" v-model="mydata.detail_address"  disabled/>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="remark">등록 날짜 및 시간</label>
                        <InputText id="remark" type="text" placeholder="Registration Date & Time" v-model="mydata.createdDate" disabled />
                    </div>
                </div>
                <div class="p-d-flex p-jc-end" style="float: left">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button ref="popup" @click="editBusiness" icon="pi pi-check" :label="$t('DFC.details.confirm')" class="p-mr-2"></Button>
                </div>
                <div class="p-d-flex p-jc-end">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button :label="$t('button.back')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
import validateEditBusiness from '../../validations/business/EditBusiness';

import UserService from '../../service/API/UserService';
import moment from 'moment';
export default {
    data() {
        return {
            dropdownItems: [
                { name: 'male', code: 'm' },
                { name: 'female', code: 'f' },
            ],
            dropdownItem: null,
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            products: null,
            selectedProduct: null,
            mydata: {
                name: '',

                id: '',
                business_number: '',
                business_name: '',
                department: '',
                person_in_charge: '',
                uuid: '',
                //password:'',
                email: '',
                mobile: '',
                address: '',
                detail_address: '',
                createdDate: '',
            },
            error: {},
        };
    },
    created() {
        this.userservice = new UserService();
    },
    methods: {
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
        cancel() {
            this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            setTimeout(() => {
                this.$router.go(-1);
            }, 2000);
        },
        dateformat(value) {
            if (value) {
                console.log();
                // return moment(String(value)).locale('ko').format('LLL')
                return moment(String(value)).format('YYYY/MM/DD h:mm:ss');
            }
        },
        editBusiness() {
            this.userservice.updateBusinessUser(this.$route.params.id, this.mydata.name, this.mydata.mobile, this.mydata.email, this.mydata.address, this.mydata.business_name, this.mydata.department, this.mydata.person_in_charge).then(() => {
                alert('업데이트 완료');
                this.$router.push({ name: 'BusinessMember' });
            });
        },
        confirm(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    console.log(this.mydata.gender);
                    let vcheckData = {
                        name: this.mydata.name,
                        mobile: this.mydata.phone,
                    };
                    console.log(vcheckData);
                    const { isInvalid, error } = validateEditBusiness(vcheckData);
                    if (isInvalid) {
                        this.error = error;
                        console.log(error);
                    } else {
                        this.error = {};
                        console.log('pass');

                        this.userservice
                            .updateBusinessUser(this.$route.params.id, this.mydata.name, this.mydata.mobile, this.mydata.email, this.mydata.address, this.mydata.business_name, this.mydata.department, this.mydata.person_in_charge)
                            .then((res) => {
                                console.warn(res);
                                this.$router.push({ name: 'BusinessMember' });
                            });

                        this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                    }
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
    },
    mounted() {
        this.userservice.viewBusinessUser(this.$route.params.id).then((res) => {
            this.mydata.business_number = res.data.data[0].business_number;
            this.mydata.business_name = res.data.data[0].business_name;
            this.mydata.department = res.data.data[0].department;
            this.mydata.person_in_charge = res.data.data[0].person_in_charge;
            this.mydata.uuid = res.data.data[0].uuid;
            // this.mydata.password = res.data.data[0].password;
            this.mydata.email = res.data.data[0].email;
            this.mydata.mobile = res.data.data[0].mobile;
            this.mydata.address = res.data.data[0].address;
            this.mydata.detail_address = res.data.data[0].detail_address;
            this.mydata.createdDate = this.dateformat(res.data.data[0].createdDate);
            // this.mydata.account_type = res.data.data[0].account_type;
            //console.log(res.data.data[0]);
            //console.log(res)
        });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}
</style>
