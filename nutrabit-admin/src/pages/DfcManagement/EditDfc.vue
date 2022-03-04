<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('button.edit') }}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="nameuser">{{ $t('DFC.details.name') }}</label>
                        <InputText id="nameuser" :class="`${error.name ? 'p-invalid' : ''}`" type="text" placeholder="Name" :modelValue="mydata.name" v-model="mydata.name" />
                        <div class="text-red">{{ error.name }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="grade">{{ $t('DFC.details.grade') }}</label>
                        <InputText id="grade" :class="`${error.email ? 'p-invalid' : ''}`" type="email" placeholder="Grade" v-model="mydata.grade" />
                        <div class="text-red">{{ error.email }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="mobileuser">{{ $t('DFC.details.mobile') }}</label>
                        <InputText id="mobileuser" :class="`${error.mobile ? 'p-invalid' : ''}`" type="text" placeholder="Phone_No" :modelValue="mydata.phone" v-model="mydata.phone" />
                        <div class="text-red">{{ error.mobile }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="locate">{{ $t('DFC.details.location') }}</label>
                        <InputText id="locate" :class="`${error.email ? 'p-invalid' : ''}`" type="email" placeholder="location" v-model="mydata.location" />
                        <div class="text-red">{{ error.email }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="designn">{{ $t('DFC.details.designation') }}</label>
                        <InputText id="designn" type="text" placeholder="designation" v-model="mydata.designation" />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="address">{{ $t('DFC.details.address') }}</label>
                        <Textarea id="address" type="email" placeholder="address" v-model="mydata.address1" />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="remark">{{ $t('DFC.details.remark') }}</label>
                        <Textarea id="remark" type="text" placeholder="write your remark" v-model="mydata.remark" />
                    </div>
                </div>
                <div class="p-d-flex p-jc-end">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button @click="cancel" icon="pi pi-times" :label="$t('button.Cancel')" class="p-mr-2"></Button>
                    <Button ref="popup" @click="confirm($event)" icon="pi pi-check" :label="$t('button.confirm')" class="p-mr-2"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import validateEditDfc from '../../validations/dfc/Editdfc';
import DfcService from '../../service/API/DfcService';
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
                grade: '',
                phone: '',
                location: '',
                designation: '',
                address1: '',
                remark: '',
            },
            error: {},
        };
    },
    created() {
        this.dfcService = new DfcService();
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
                    const { isInvalid, error } = validateEditDfc(vcheckData);
                    if (isInvalid) {
                        this.error = error;
                        console.log(error);
                    } else {
                        this.error = {};
                        console.log('pass');
                        this.dfcService.updateDfc(this.$route.params.id, this.mydata.name, this.mydata.phone, this.mydata.grade, this.mydata.location, this.mydata.designation, this.mydata.address1, this.mydata.remark).then((res) => {
                            console.warn(res);
                            this.$router.push({ name: 'Dfc' });
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
        this.dfcService.viewDfc(this.$route.params.id).then((res) => {
            this.mydata.name = res.name;
            this.mydata.grade = res.grade;
            this.mydata.phone = res.mobile;
            this.mydata.location = res.location;
            this.mydata.designation = res.designation;
            this.mydata.address1 = res.address;
            this.mydata.remark = res.note;
        });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
