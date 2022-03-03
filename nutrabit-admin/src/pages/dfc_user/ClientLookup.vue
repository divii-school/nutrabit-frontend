<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12" v-show="detailsclient">
            <div class="card p-fluid">
                <h4><strong>{{$t('dfc_user.details_header')}}</strong></h4>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="emailuser">{{$t('dfc_user.list.ReferralCode')}} :</label></strong>
                        <p>{{ clientdata.referralCode }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="emailuser">{{$t('dfc_user.list.Depositproductname')}} :</label></strong>
                        <p>{{ clientdata.depositProductName == null ? '-empty-' : clientdata.depositProductName }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="mobileuser">{{$t('dfc_user.list.CoinType')}} :</label></strong>
                        <p>{{ clientdata.coinType }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-4">
                        <strong> <label for="nameuser">{{$t('dfc_user.list.CoinAmount')}} :</label></strong>
                        <p>{{ clientdata.coinAmount }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="emailuser">{{$t('dfc_user.list.StartDate')}} :</label></strong>
                        <p>{{ clientdata.startDate }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="mobileuser">{{$t('dfc_user.list.EndDate')}}:</label></strong>
                        <p>{{ clientdata.endDate }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-4">
                        <strong> <label for="nameuser">{{$t('dfc_user.list.TotalDepositedInterest')}} :</label></strong>
                        <p>{{ clientdata.totalPayableDepositInterest }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="emailuser">{{$t('dfc_user.list.Totaladditionalinterestpaid')}} :</label></strong>
                        <p>{{ clientdata.totalAdditionalInterestPaid }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong><label for="mobileuser">{{$t('dfc_user.list.DepositWon')}} :</label></strong>
                        <p>{{ clientdata.depositWon }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-4">
                        <strong> <label for="nameuser">{{$t('dfc_user.list.Status')}} :</label></strong>
                        <p>{{ clientdata.status }}</p>
                    </div>
                </div>
                <div class="p-d-flex p-jc-end">
                    <Button @click="backList()" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-primary p-mr-2 p-mb-2" />
                </div>
            </div>
        </div>
        <div class="p-col-12" v-show="clientlist">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('search.title') }}</strong>
                </h4>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <!-- <label for="nameuser">{{ $t('Ref Id.') }}</label> -->
                        <label for="nameuser">{{ $t('dfc_user.list.RefUserCode') }}</label>
                        <InputText id="nameuser" type="text" :placeholder="$t('search ref Id')" v-model="refercode" />
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">{{ $t('search.label.startDate') }}</label>
                        <Calendar :showIcon="true"  :showButtonBar="true" v-model="calendarValue" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="verify-pass">{{ $t('search.label.lastDate') }}</label>
                        <Calendar :showIcon="true" :minDate="calendarValue" :showButtonBar="true" v-model="calendarValue1" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                    </div>
                </div>
                <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
                    <div class="p-mb-4 p-mb-lg-0"></div>
                    <div>
                        <Button :label="$t('button.search')" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchdfc"></Button>
                        <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="resetUser"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12" v-show="clientlist">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>{{ $t('dfc_user.list.header') }}</h5>
                    </div>
                </div>

                <DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="5" dataKey="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll" style="text-align: center">
                    <ConfirmDialog group="dialog" />

                    <template #empty> No Data found. </template>
                    <template #loading> Loading data. Please wait. </template>

                    <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                    <Column :header="$t('dfc_user.list.slNo')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Grade</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.slNo }}
                            </span>
                        </template>
                    </Column>
                    <Column field="ReferralCode" :header="$t('dfc_user.list.RefUserCode')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">User Id</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.refUserCode == null ? '- Empty -' : data.refUserCode }}
                            </span>
                        </template>
                    </Column>
                    <Column :header="$t('dfc_user.list.Depositproductname')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Name</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.depositProductName == null ? '-empty-' : data.depositProductName }}
                            </span>
                        </template>
                    </Column>
                    <Column :header="$t('dfc_user.list.CoinType')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Grade</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.coinType }}
                            </span>
                        </template>
                    </Column>
                    <Column :header="$t('dfc_user.list.CoinAmount')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">coin amount</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.coinAmount }}
                            </span>
                        </template>
                    </Column>
                    <Column :header="$t('dfc_user.list.StartDate')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title" style="background-color: lightblue">Start Date</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.startDate }}
                            </span>
                        </template>
                    </Column>
                    <Column :header="$t('dfc_user.list.EndDate')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">End Date</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.endDate }}
                            </span>
                        </template>
                    </Column>
                    <Column :header="$t('dfc_user.list.Totalpayabledepositinterest')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">interest</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.totalPayableDepositInterest }}
                            </span>
                        </template>
                    </Column>
                    <Column :header="$t('dfc_user.list.Totaladditionalinterestpaid')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">additional interest</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.totalAdditionalInterestPaid }}
                            </span>
                        </template>
                    </Column>
                    <Column :header="$t('dfc_user.list.DepositWon')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Deposit Won</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.depositWon }}
                            </span>
                        </template>
                    </Column>
                    <Column :header="$t('dfc_user.list.Status')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Status</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.status }}
                            </span>
                        </template>
                    </Column>
                    <Column :header="$t('dfc_user.list.ReferralCode')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Referral Code</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.referralCode }}
                            </span>
                        </template>
                    </Column>
                    <Column :header="$t('dfc_user.list.Actions')">
                        <template #body="{ data }">
                            <span class="p-column-title">Actions</span>
                            <p style="display: none">{{ data.status }}</p>
                            <div style="display: flex">
                                <!-- <router-link :to="'/client-lookup/details/' + data.slNo"> -->
                                <Button @mouseenter="detailget(data)" @click="showdetails" label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> {{ $t('button.viewDetails') }}</Button>
                                <!-- </router-link> -->
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
        <Dialog :header="$t('dfc_user.popup.header')" v-model:visible="display" :breakpoints="{ '960px': '75vw' }" :style="{ width: '30vw' }" :modal="true">
            <div class="p-field p-fluid">
                <ul>
                    <li v-for="item in records" :key="item.title">{{ item.title }} : {{ item.count }}</li>
                </ul>
            </div>
            <template #footer>
                <Button :label="$t('button.ok')" @click="close" icon="pi pi-pi-times" class="p-button-primary" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import DfcuserService from '../../service/API/DfcuserService';
export default {
    data() {
        return {
            clientlist: true,
            detailsclient: false,
            records: [],
            selectedItemss: '',
            render: true,
            display: false,
            calendarValue: '',
            calendarValue1: '',
            customer1: null,
            loading1: true,
            idFrozen: false,
            products: null,
            user: null,
            refercode: '',
            error: {},
            clientdata: '',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.dfcuserService = new DfcuserService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.loading1 = true;
        this.dfcuserService
            .getDfcList()
            .then((data) => {
                this.customer1 = data.userDataList;
                this.loading1 = false;
                localStorage.setItem('client', JSON.stringify(data.userDataList));
                this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                this.records = data.popUpInformation;
                console.log(this.records);
                this.display = true;
            })
            .catch((err) => {
                this.loading1 = false;
                this.customer1 = [];
                if (err.response.data.status == '403') {
                    localStorage.clear();
                    this.$router.push({ name: 'login' });
                }
            });
    },
    watch: {},
    methods: {
        showdetails() {
            this.clientlist = false;
            this.detailsclient = true;
        },
        backList() {
            this.clientlist = true;
            this.detailsclient = false;
        },
        detailget(myObj) {
            // localStorage.setItem('detail_dafc', JSON.stringify(myObj));
            this.clientdata = myObj;
        },
        resetUser() {
            this.refercode = '';
            this.calendarValue = '';
            this.calendarValue1 = '';
            this.loading1 = true;
            this.dfcuserService
                .getDfcList()
                .then((data) => {
                    this.customer1 = data.userDataList;
                    this.loading1 = false;
                    this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                })
                .catch((err) => {
                    if (err.response.data.status == '403') {
                        localStorage.clear();
                        this.$router.push({ name: 'login' });
                    }
                    this.customer1 = [];
                    this.loading1 = false;
                });
        },
        searchdfc() {
            if (this.refercode === '' && this.calendarValue === '' && this.calendarValue1 === '') {
               this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } else {
                if (this.refercode != '') {
                    let items = this.customer1.filter((item) => item.refUserCode.match(this.refercode));
                    this.customer1 = items;
                }
                if (this.calendarValue !== '') {
                    const items = this.customer1.filter((item) => this.formatDate(item.startDate) >= this.formatDate(this.calendarValue));
                    this.customer1 = items;
                }
                if (this.calendarValue !== '' && this.calendarValue1 !== '') {
                    const items = this.customer1.filter((item) => this.formatDate(item.startDate) >= this.formatDate(this.calendarValue) && this.formatDate(item.endDate) <= this.formatDate(this.calendarValue1));
                    this.customer1 = items;
                }
            }
        },
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
        toggle(event) {
            this.$refs.op.toggle(event);
        },

        onRowExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
        },
        onRowCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
        },
        expandAll() {
            this.expandedRows = this.products.filter((p) => p.id);
            this.$toast.add({ severity: 'success', summary: 'All Rows Expanded', life: 3000 });
        },
        collapseAll() {
            this.expandedRows = null;
            this.$toast.add({ severity: 'success', summary: 'All Rows Collapsed', life: 3000 });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        formatDate(value) {
            const date = new Date(value);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            // var hr = date.getHours();
            // var min = date.getMinutes();
            // var sec = date.getSeconds();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (value = `${yyyy}-${mm}-${dd}`);
        },
        calculateCustomerTotal(name) {
            let total = 0;
            if (this.customer3) {
                for (let customer of this.customer3) {
                    if (customer.representative.name === name) {
                        total++;
                    }
                }
            }

            return total;
        },
    },
};
</script>

<style lang="scss" scoped>
.p-datatable-tbody {
    .p-button {
        white-space: nowrap;
    }
}
.p-fluid {
    .p-button {
        width: auto;
    }
}
.flow {
    color: red;
}
</style>
