<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>{{$t('DFC.details.header')}}</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <strong> <label for="nameuser">{{ $t('DFC.details.name') }}:</label></strong>
                        <p>{{ mydata.name }}</p>
                    </div>
                    <div class="p-field p-col">
                        <strong><label for="emailuser">{{ $t('DFC.details.email') }}:</label></strong>
                        <p>{{ mydata.Email }}</p>
                    </div>
                    <div class="p-field p-col">
                        <strong><label for="emailuser">{{ $t('DFC.details.grade') }}:</label></strong>
                        <p>{{ mydata.grade }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <strong><label for="mobileuser">{{ $t('DFC.details.mobile') }}:</label></strong>
                        <p>{{ mydata.phone }}</p>
                    </div>

                    <div class="p-field p-col">
                        <strong><label for="state">{{ $t('DFC.details.location') }}:</label></strong>
                        <p>{{ mydata.location }}</p>
                    </div>
                    <div class="p-field p-col">
                        <strong><label for="state">{{ $t('DFC.details.designation') }}:</label></strong>
                        <p>{{ mydata.designation }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <strong><label for="state">{{ $t('DFC.details.Referralcode') }}:</label></strong>
                        <p>{{ mydata.refcode }}</p>
                    </div>
                    <div class="p-field p-col">
                        <strong><label for="state">{{ $t('DFC.details.created_dt') }}:</label></strong>
                        <p>{{ formatDate(mydata.createdDate) }}</p>
                    </div>
                   <div class="p-field p-col">
                        <strong><label for="state">{{ $t('DFC.details.address') }}:</label></strong>
                        <p>{{ mydata.address1===null?'- No data -': mydata.address1 }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                     <div class="p-field p-col">
                        <strong><label for="state">{{ $t('DFC.details.remark') }}:</label></strong>
                        <p>{{ mydata.remark===null?'- No data -': mydata.remark}}</p>
                    </div>
                    
                </div>

                <div class="p-d-flex p-jc-end">
                    <!-- <router-link to="/view-user"
                        ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2" disabled><i class="pi pi-eye p-mr-2"></i>point</Button>
                    </router-link> -->
                    <router-link :to="'/edit-dfc/' + $route.params.id"
                        ><Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> {{ $t('button.edit') }}</Button></router-link
                    >
                    <Button @click="del($route.params.id)" label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"><i class="pi pi-trash p-mr-2"></i> {{ $t('button.delete') }}</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import DfcService from '../../service/API/DfcService';
// import {useRouter} from 'vue-router'
export default {
    data() {
        return {
            dropdownItems: [
                { name: 'male', code: 'male' },
                { name: 'female', code: 'female' },
                { name: 'others', code: 'others' },
            ],
            dropdownItem: null,
            mydata: {
                name: '',
                Email: '',
                phone: '',
                grade: '',
                location: '',
                designation: '',
                refcode: '',
                createdDate: '',
                remark: '',
                address1:''
            },
        };
    },
    created() {
        this.dfcService = new DfcService();
    },
    methods: {
        del(id) {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: `/admin/dfc/delete`, data: { deleteIdArray: id } }).then((res) => {
                        console.warn(res);
                        this.$router.push({ name: 'Dfc' });
                    });

                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
        formatDate(value) {
            const date = new Date(value);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            var hr = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (value = yyyy + '/' + mm + '/' + dd + '-' + hr + ':' + min + ':' + sec);
        },
    },
    mounted() {
        this.dfcService.viewDfc(this.$route.params.id).then((res) => {
            this.mydata.name = res.name;
            this.mydata.Email = res.email;
            this.mydata.phone = res.mobile;
            this.mydata.grade = res.grade;
            this.mydata.location = res.location;
            this.mydata.refcode = res.referralCode;
            this.mydata.createdDate = res.createdDate;
            this.mydata.remark = res.note;
            this.mydata.address1 = res.address;
        });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
