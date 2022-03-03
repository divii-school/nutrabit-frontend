<template>
    <div class="p-grid">
        <!-- <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" label="Go Back" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div> -->
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>More Information</strong></h4>
                <div class="p-formgrid p-grid p-mb-3">
                     <div class="p-field p-col-12 p-md-4">
                        <strong><label for="emailuser">Referral Code:</label></strong>
                        <p>{{ dfc.referralCode }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="emailuser">Deposit product name:</label></strong>
                        <p>{{ dfc.depositProductName == null ? '-empty-' : dfc.depositProductName }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="mobileuser">Coin Type:</label></strong>
                        <p>{{ dfc.coinType }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-4">
                        <strong> <label for="nameuser">Coin Amount :</label></strong>
                        <p>{{ dfc.coinAmount }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="emailuser">Start Date:</label></strong>
                        <p>{{ dfc.startDate }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="mobileuser">End Date:</label></strong>
                        <p>{{ dfc.endDate }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-4">
                        <strong> <label for="nameuser">Total Deposited Interest :</label></strong>
                        <p>{{ dfc.totalPayableDepositInterest }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="emailuser">Total additional interest paid:</label></strong>
                        <p>{{ dfc.totalAdditionalInterestPaid }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="mobileuser">Deposit Won:</label></strong>
                        <p>{{ dfc.depositWon }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-4">
                        <strong> <label for="nameuser">Status :</label></strong>
                        <p>{{ dfc.status }}</p>
                    </div>
                   
                </div>
                <div class="p-d-flex p-jc-end">
                    <Button @click="back()" label="Go Back" icon="pi pi-angle-left" class="p-button-primary p-mr-2 p-mb-2" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
// import UserService from '../../service/API/UserService';
// import {useRouter} from 'vue-router'
export default {
    data() {
        return {
            dfc: '',
            dropdownItems: [
                { name: 'male', code: 'male' },
                { name: 'female', code: 'female' },
                { name: 'others', code: 'others' },
            ],
            dropdownItem: null,
        };
    },
    methods: {
        back() {
            localStorage.removeItem('detail_dafc');
            this.$router.go(-1);
        },
    },
    mounted() {
        this.dfc = JSON.parse(localStorage.getItem('detail_dafc'));
        console.log(this.dfc);
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
