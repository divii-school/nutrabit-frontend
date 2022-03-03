<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        <!-- <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" label="Go Back" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div> -->
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('dfc_user.personal_info') }}</strong>
                </h4>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <strong>
                            <label for="nameuser">{{ $t('dfc_user.p_Info.name') }} :</label></strong
                        >
                        <p>{{ detail.name }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <strong>
                            <label for="nameuser">{{ $t('dfc_user.p_Info.Grade') }} :</label></strong
                        >
                        <p>{{ detail.grade }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <strong>
                            <label for="nameuser">{{ $t('dfc_user.p_Info.Location') }} :</label></strong
                        >
                        <p>{{ detail.location }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <strong
                            ><label for="emailuser">{{ $t('dfc_user.p_Info.E-mail') }} :</label></strong
                        >
                        <p>{{ detail.email }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <strong
                            ><label for="mobileuser">{{ $t('dfc_user.p_Info.PhoneNumber') }} :</label></strong
                        >
                        <p>{{ detail.mobile }}</p>
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <strong
                            ><label for="state">{{ $t('dfc_user.p_Info.ReferralCode') }} :</label></strong
                        >
                        <p>{{ detail.referralCode }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <strong
                            ><label for="state">{{ $t('dfc_user.p_Info.RegDate') }}:</label></strong
                        >
                        <p>{{ formatDate(detail.createdDate) }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <strong
                            ><label for="state">{{ $t('dfc_user.p_Info.RecentPerfomance') }} :</label></strong
                        >
                        <p>{{ detail.designation }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <strong
                            ><label for="mobileuser">{{ $t('dfc_user.p_Info.remark') }} :</label></strong
                        >
                        <p>{{ detail.note == null ? '- Empty -' : detail.note }}</p>
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <strong
                            ><label for="state">{{ $t('dfc_user.p_Info.address') }} :</label></strong
                        >
                        <p>{{ detail.address }}</p>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end">
                    <Button @click="$router.go(-1)" class="p-button-primary p-mr-2 p-mb-2"><i class="pi pi-angle-left p-mr-2"></i>{{ $t('button.back') }} </Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
import DfcuserService from '../../service/API/DfcuserService';
// import {useRouter} from 'vue-router'
export default {
    data() {
        return {
            detail: {},
        };
    },
    created() {
        this.dfcuserService = new DfcuserService();
    },
    methods: {
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
            return (value = yyyy + '/' + mm + '/' + dd + ' - ' + hr + ':' + min + ':' + sec);
        },
    },
    mounted() {
        this.dfcuserService
            .personalInfo()
            .then((data) => {
                this.detail = data;
            })
            .catch((err) => {
                if (err.response.data.status == '403') {
                    localStorage.clear();
                    this.$router.push({ name: 'login' });
                }
            });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
