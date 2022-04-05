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
                    <strong>{{ $t('search') }}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                        <div class="p-field p-col-12 p-md-4">
                            <!-- <label for="type">{{ $t('individual.list.UserName') }}</label> -->
                            <label for="type">사업자명/담당자명</label>
                            <InputText id="googlurl" type="text" placeholder="유형 이름" v-model="username" />
                        </div>
                        <div class="p-field p-col-12 p-md-4">
                            <!-- <label for="type">{{ $t('individual.list.ID') }}</label> -->
                            <label for="type">ID</label>
                            <InputText id="googlurl" type="text" placeholder="ID 번호" v-model="id" />
                        </div>
                    </div>
                <!-- <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">{{ $t('search.label.startDate') }}</label>
                        <Calendar :showIcon="true"  :showButtonBar="true" v-model="calendarValue" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="verify-pass">{{ $t('search.label.lastDate') }}</label>
                        <Calendar :showIcon="true" :minDate="calendarValue" :showButtonBar="true" v-model="calendarValue1" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                    </div>
                </div> -->
                <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
                    <div class="p-mb-4 p-mb-lg-0"></div>
                    <div>
                        <Button :label="$t('button.search')" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchBusiness"></Button>
                        <!-- <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="resetUser"></Button> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12" v-show="clientlist">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>{{ $t('Business.list.header') }}</h5>
                    </div>
                </div>

                <DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="5" dataKey="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll" style="text-align: center">
                    <ConfirmDialog group="dialog" />

                    <template #empty> 데이터가 없습니다 </template>
                    <template #loading> Loading data. Please wait. </template>

                    <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                    <Column :header="$t('Business.list.slNo')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">#</span>
                            <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.slNo }}
                            </span> -->
                              {{ data.sl_no }}
                        </template>
                    </Column>
                    <Column field="ReferralCode" :header="$t('Business.list.BusinessNumber')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Business Number</span>
                            <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'"> -->
                                <!-- {{ data.refUserCode == null ? '- Empty -' : data.refUserCode }} -->
                                <!-- {{ data.business_number }}
                            </span> -->
                            {{ data.business_number }}
                        </template>
                    </Column>
                    <Column :header="$t('Business.list.BusinessName')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Business Name</span>
                            <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.depositProductName == null ? '-empty-' : data.depositProductName }}
                                {{ data.business_name }}
                            </span> -->
                            {{ data.business_name }}
                        </template>
                    </Column>
                    <Column :header="$t('Business.list.Username')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Name</span>
                            <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.name }}
                            </span> -->
                             {{ data.username }}
                        </template>
                    </Column>
                    <Column :header="$t('Business.list.Email')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Email</span>
                            <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.email }}
                            </span> -->
                            {{ data.email }}
                        </template>
                    </Column>
                    <Column :header="$t('Business.list.ID')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title" style="background-color: lightblue">ID</span>
                            <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.uuid }}
                            </span> -->
                            {{ data.uuid }}
                        </template>
                    </Column>
                    <Column :header="$t('Business.list.RegistrationDate')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Registration Date</span>
                            <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.createdDate }}
                            </span> -->
                             {{ dateformat(data.createdDate) }}
                        </template>
                    </Column>
                    <!--<Column :header="$t('dfc_user.list.Totalpayabledepositinterest')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">interest</span>
                            <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.totalPayableDepositInterest }}
                            </span>
                        </template>
                    </Column> -->
                    <!-- <Column :header="$t('dfc_user.list.Totaladditionalinterestpaid')" style="min-width: 12rem">
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
                    </Column> -->
                    <Column :header="$t('Business.list.Function')">
                        <template #body="{ data }">
                            <span class="p-column-title">Balance</span>
                            <p style="display: none">{{ data.mobile }}</p>
                            <div style="display: flex">
                                <router-link :to="'/business-view/' + data.id"
                                    ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> </Button>
                                </router-link>
                                <router-link :to="'/business-edit/' + data.id"
                                    ><Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-pencil p-mr-2"></i> </Button></router-link
                                >
                                <Button  icon="pi pi-trash" class="p-button-danger p-button-outlined p-mr-2 p-mb-2" @click="confirm(data.id)" />
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
import axios from 'axios';
import { useRoute } from 'vue-router';
import UserService from '../../service/API/UserService';
import moment from 'moment';
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
            status:'',
            page:'',
            limit:'',
            name:'',
            id:'',
            email:'',
            startDate:'',
            endDate:'',
            sortBy:'',
            sortOrder:'',
            account_type:'',
            username:'',
            uuid:'',
            createdDate:'',
            business_number :'',
            business_name:'',
            sl_no:'',
            
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.userservice = new UserService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.loading1 = true;
        this.userservice
            .getBusinessUserList(this.username, this.email, this.uuid,this.business_number,this.business_name, this.createdDate)
             .then((data) => {
            this.customer1 = data;
            this.loading1 = false;
            //this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
        })


            // .then((data) => {
            //     this.customer1 = data.userDataList;
            //     this.loading1 = false;
            //     localStorage.setItem('client', JSON.stringify(data.userDataList));
            //     this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            //     this.records = data.popUpInformation;
            //     console.log(this.records);
            //     this.display = true;
            // })
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
        dateformat(value) {
             if (value) {
            return moment(String(value)).format('YYYY-MM-DD')
            }
        },
        searchBusiness() {
            if (this.username === '' && this.id === '') {
               this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } else {
                this.userservice
                    .getBusinessUserList(this.account_type,this.status,this.page,this.limit,this.username,this.id,this.email,this.business_number,this.business_name,this.startDate,this.endDate,this.sortBy,this.sortOrder)
                    .then((data) => {
                        this.customer1 = data;
                        this.loading1 = false;
                        console.log(data);
                    })
                    .catch(() => {
                        this.customer1 = [];
                        this.loading1 = false;
                    });
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
        confirm(id) {
            this.$confirm.require({
                group: 'dialog',
                header: '확인',
                message: '삭제하시겠습니까?',
                icon: 'pi pi-trash',
                acceptLabel:"확인",
                rejectLabel:"취소",
                accept: () => {
                    axios({ method: 'delete', url: '/admin/user/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                        self.userservice
                        .getBusinessUserList(self.account_type,self.status,self.page,self.limit,self.username,self.id,self.email,self.business_number,self.business_name,self.startDate,self.endDate,self.sortBy,self.sortOrder)
                        .then((data) => {
                            self.customer1 = data
                            self.loading1 = false; 
                             })
                    });
                    this.$toast.add({ severity: 'info', summary: '삭제됨', detail: '성공적으로 삭제되었습니다', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '당신은 거부했습니다', life: 3000 });
                },
            });
             setTimeout(() => {
                this.userservice.getBusinessUserList().then((data) => {
                    this.customer1 = data;
                    console.log(data);
                    this.loading1 = false;
                });
            }, 2000);
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

.p-button{
    background: #000000;
    border: 1px solid #0a0a0a;
}
.p-button.p-button-info.p-button-outlined, .p-buttonset.p-button-info > .p-button.p-button-outlined, .p-splitbutton.p-button-info > .p-button.p-button-outlined{
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}


.p-button.p-button-info.p-button-outlined:hover , .p-buttonset.p-button-info > .p-button.p-button-outlined, .p-splitbutton.p-button-info > .p-button.p-button-outlined:hover{
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-info.p-button-outlined:enabled:active, .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:active {
    background: rgba(2, 136, 209, 0.16);
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-help.p-button-outlined, .p-buttonset.p-button-help > .p-button.p-button-outlined, .p-splitbutton.p-button-help > .p-button.p-button-outlined {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-help.p-button-outlined:hover, .p-buttonset.p-button-help > .p-button.p-button-outlined, .p-splitbutton.p-button-help > .p-button.p-button-outlined:hover {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-danger.p-button-outlined, .p-buttonset.p-button-danger > .p-button.p-button-outlined, .p-splitbutton.p-button-danger > .p-button.p-button-outlined {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-danger.p-button-outlined:hover, .p-buttonset.p-button-danger > .p-button.p-button-outlined, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:hover {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}
</style>
