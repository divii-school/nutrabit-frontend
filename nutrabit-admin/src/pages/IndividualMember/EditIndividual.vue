<template>
    <div class="p-grid">
        <Toast />

        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>회원 정보 수정</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="nameuser">{{ $t('DFC.details.name') }}</label>
                        <InputText id="nameuser" :class="`${error.name ? 'p-invalid' : ''}`" type="text" placeholder="Name" :modelValue="mydata.name" v-model="mydata.name" />
                        <div class="text-red">{{ error.name }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="id">{{ $t('DFC.details.grade') }}</label>
                        <InputText id="id" :class="`${error.uuid ? 'p-invalid' : ''}`" type="text" placeholder="ID" v-model="mydata.uuid" disabled />
                        <div class="text-red">{{ error.uuid }}</div>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="emailuser">{{ $t('DFC.details.email') }}</label>
                        <InputText id="emailuser" :class="`${error.email ? 'p-invalid' : ''}`" type="email" placeholder="Email" :modelValue="mydata.email" v-model="mydata.email" disabled />
                        <div class="text-red">{{ error.email }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="mobileuser">{{ $t('DFC.details.mobile') }}</label>
                        <InputText id="mobileuser" :class="`${error.mobile ? 'p-invalid' : ''}`" type="text" placeholder="Phone No" :modelValue="mydata.mobile" v-model="mydata.mobile" />
                        <div class="text-red">{{ error.mobile }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="address">주소</label>
                        <Textarea id="address" type="text" placeholder="address" v-model="mydata.address" />
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="detailaddress">상세 주소</label>
                        <Textarea id="detailaddress" type="text" placeholder="detail address" v-model="mydata.detail_address"  disabled/>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="date">{{ $t('DFC.details.location') }}</label>
                        <InputText id="date" :class="`${error.createdDate ? 'p-invalid' : ''}`" type="text" placeholder="Registration Date and Time:" v-model="mydata.createdDate" disabled />
                        <div class="text-red">{{ error.createdDate }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="medium">{{ $t('DFC.details.designation') }}</label>
                        <InputText id="medium" type="text" placeholder="distribution medium" v-model="mydata.findings" disabled />
                    </div>
                </div>

                <div class="p-d-flex p-jc-end" style="float: left">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button ref="popup" @click="editIndividual" icon="pi pi-check" :label="$t('DFC.details.confirm')" class="p-mr-2"></Button>
                </div>
                <div class="p-d-flex p-jc-end">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <!-- <Button @click="cancel" icon="pi pi-times" :label="$t('DFC.details.Cancel')" class="p-mr-2"></Button> -->
                    <Button :label="$t('button.back')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
import validateEditIndividual from '../../validations/individual/EditIndividual';

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
                limit: '',
                name: '',
                id: '',
                email: '',
                username: '',
                detail_address:'',
                uuid: '',
                mobile: '',
                findings: '',
                createdDate: '',
                address: '',
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
        editIndividual() {
            this.userservice.updateIndividualUser(this.$route.params.id, this.mydata.name, this.mydata.mobile, this.mydata.address, this.mydata.detail_address).then(() => {
                alert('업데이트 완료');
                this.$router.push({ name: 'IndividualMember' });
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
                    const { isInvalid, error } = validateEditIndividual(vcheckData);
                    if (isInvalid) {
                        this.error = error;
                        console.log(error);
                    } else {
                        this.error = {};
                        console.log('pass');

                        this.userservice.updateIndividualUser(this.$route.params.id, this.mydata.name, this.mydata.mobile, this.mydata.email, this.mydata.uuid, this.mydata.findings, this.mydata.address, this.mydata.createdDate).then((res) => {
                            console.warn(res);

                            this.$router.push({ name: 'IndividualMember' });
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
        this.userservice.viewIndividualUser(this.$route.params.id).then((res) => {
            this.mydata.name = res.data.data[0].name;
            this.mydata.email = res.data.data[0].email;
            this.mydata.mobile = res.data.data[0].mobile;
            this.mydata.uuid = res.data.data[0].uuid;
            this.mydata.address = res.data.data[0].address;
            this.mydata.detail_address = res.data.data[0].detail_address;
            this.mydata.createdDate = this.dateformat(res.data.data[0].createdDate);
            this.mydata.findings = res.data.data[0].findings;
            this.mydata.account_type = res.data.data[0].account_type;
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
