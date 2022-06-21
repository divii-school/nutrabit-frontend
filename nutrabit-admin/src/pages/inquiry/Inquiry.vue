<template>
    <div class="p-grid">
        <Toast />

        <div class="p-col-12" v-show="clientlist">
            <div class="card p-fluid">
                <h4>
                    <strong>검색</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-4">
                        <label for="type">{{ $t('Inquiry.list.inqury1') }}</label>
                        <Dropdown v-model="inquiry_id" :options="businessDropdownValues" optionLabel="title_ko" optionValue="id" placeholder="선택" />

                        <!-- <Dropdown v-model="inquiry_id"  :options="businessDropdownValues"  optionLabel="title_ko" placeholder="유저명 입력"   optionValue="id" /> -->
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="type">{{ $t('Inquiry.list.appname') }}</label>
                        <InputText id="googlurl" type="text" placeholder="유저명 입력" v-model="name" @keyup="resetdata" />

                        <!-- <Dropdown v-model="name"  :options="businessDropdownValues"  optionLabel="business_name" placeholder="유저명 입력" /> -->
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="type">상태</label>

                        <Dropdown v-model="status" modelValue="statusDropdownValues[0].status" :options="statusDropdownValues" optionLabel="name" placeholder="선택" />
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3"></div>
                <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
                    <div class="p-mb-4 p-mb-lg-0"></div>
                    <div>
                        <Button :label="$t('button.search')" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchInquiry"></Button>
                        <!-- <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="resetUser"></Button> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12" v-show="clientlist">
            <div class="card">
                <div class="p-grid">
                    <div class="p-col-12">
                        <div class="p-d-flex p-jc-between p-mb-2">
                            <h5>{{ $t('Inquiry.list.header') }}</h5>
                            <div></div>
                        </div>

                        <DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="5" data-key="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll" style="text-align: center">
                            <ConfirmDialog group="dialog" />

                            <template #empty>데이터가 없습니다.</template>
                            <template #loading>데이터를 로드 중입니다. 기다리다.</template>

                            <Column header="번호">
                                <template #body="{ data }">
                                    <span class="p-column-title">SlNo</span>

                                    {{ data.sl_no }}
                                </template>
                            </Column>

                            <!-- <Column
                                field="ReferralCode"
                                :header="$t('Inquiry.list.title')"
                                
                            >
                                <template #body="{ data }">
                                    <span class="p-column-title">Title</span>
                                    
                                    {{ data.title }}
                                </template>
                            </Column> -->

                            <Column :header="$t('Inquiry.list.QuestionType')">
                                <template #body="{ data }">
                                    <span class="p-column-title">Quetion Type</span>

                                    {{ data.type_title_ko }}
                                </template>
                            </Column>

                            <Column :header="$t('Inquiry.list.appname')">
                                <template #body="{ data }">
                                    <span class="p-column-title">Applicant name/Business NAme</span>
                                    <span v-if="data.business_name != null">{{data.business_name }}</span>
                                    <span v-else>{{ data.name }}</span>
                                   
                                </template>
                            </Column>
                            <Column :header="$t('Inquiry.list.Reopenby')">
                                <template #body="{ data }">
                                    <span class="p-column-title">Responded by</span>
                                    <span v-if="data.status == 'answered'">
                                        {{ data.repliedBy }}
                                    </span>
                                    <span v-else>-</span>
                                </template>
                            </Column>
                            <Column field="Exposure" :header="$t('Inquiry.list.status')">
                                <template #body="{ data }">
                                    <span class="p-column-title">Exposure</span>

                                    {{ $t(data.status) }}
                                </template>
                            </Column>
                            <Column :header="$t('Inquiry.list.inqurydate')">
                                <template #body="{ data }">
                                    <span class="p-column-title">Registration Date</span>

                                    {{ dateformat(data.createdDate) }}
                                </template>
                            </Column>

                            <Column header="기능">
                                <template #body="{ data }">
                                    <span class="p-column-title">Balance</span>
                                    <p style="display: none">{{ data.mobile }}</p>
                                    <div style="display: flex">
                                       
                                            <span v-if="data.status == 'not_answered'" >
                                                <router-link :to="'/reply-inquiry/' + data.id">
                                                    <Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2">
                                                        <i class="pi pi-reply p-mr-2"></i>
                                                    </Button>
                                                </router-link>
                                            </span>
                                            <span v-else-if="data.status == 'answered'">
                                                
                                                    <Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2" disabled>
                                                        <i class="pi pi-reply p-mr-2"></i>
                                                    </Button>
                                                
                                            </span>
                                       
                                        <Button icon="pi pi-trash" class="p-button-danger p-button-outlined p-mr-2 p-mb-2" @click="confirm(data.id)" />
                                    </div>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
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
import InquiryService from '../../service/API/InquiryService';
import moment from 'moment';
export default {
    data() {
        return {
            name: '',
            item: '',
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
            inquiry_id: '',
            status: '',
            id: '',
            email: '',
            startDate: '',
            endDate: '',
            sortBy: '',
            sortOrder: '',
            createdDate: '',
            business_name: '',
            applicant_name:'',
            title_ko: '',
            title: '',
            type_id: '',
            repliedBy: '',
            sl_no: '',
            dropdownValue: null,
            dropdownValues: '',
            statusDropdownValues: [
                { name: '답변', value: 'answered' },
                { name: '미답변', value: 'not_answered' },
            ],
            statusDropdownValue: null,

            businessDropdownValues: '',
            businessDropdownValue: null,
            searchData: '',
            type_title: '',
            statusitem: '',
            type_title_ko: '',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.inquiryService = new InquiryService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.loading1 = true;
        this.inquiryService.getInquryList(this.inquiry_id, this.title, this.name, this.status, this.startDate, this.endDate, this.sortBy, this.sortOrder).then((data) => {
            this.customer1 = data;
            this.loading1 = false;
            //this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            console.log(this.customer1);
        });
        this.loading1 = true;
        this.inquiryService

            .dropdownBusiness()
            .then((data) => {
                this.businessDropdownValues = data;
                // this.products = data;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                console.log(this.customer1);
                console.log(data);
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
        dateformat(value) {
            if (value) {
                return moment(String(value)).locale('ko').format('ll - h:mm:ss');
            }
        },

        resetdata() {
            if (this.title === '') {
                this.inquiryService.getInquryList(this.inquiry_id, this.title, this.name?.business_name, this.status?.status, this.startDate, this.endDate, this.sortBy, this.sortOrder).then((data) => {
                    this.customer1 = data;
                    this.loading1 = false;
                    //console.log(data);
                });
            }
        },
        searchInquiry() {
            // console.log(this.name);
            // console.log(this.id);

            if (this.inquiry_id === '' && this.name === '' && this.title === '' && this.status === '') {
                // this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } else {
                // console.log(this.inquiry_id)
                this.inquiryService
            
                    .getInquryList(this.inquiry_id, this.name, this.title, this.status?.value, this.startDate, this.endDate, this.sortBy, this.sortOrder)
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
                acceptLabel: '확인',
                rejectLabel: '취소',
                accept: () => {
                    axios({ method: 'delete', url: '/admin/inquery/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                        self.inquiryService.getInquryList(self.status, self.title, self.business_name, self.repliedBy, self.startDate, self.endDate, self.sortBy, self.sortOrder).then((data) => {
                            this.customer1 = data;
                            this.loading1 = false;
                            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                            //console.log(data);
                        });
                    });
                    this.$toast.add({ severity: 'info', summary: '삭제됨', detail: '성공적으로 삭제됨', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: '거부됨', detail: '당신은 거부했습니다', life: 3000 });
                },
            });
            setTimeout(() => {
                this.inquiryService.getInquryList().then((data) => {
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
.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
}
.p-button.p-button-info.p-button-outlined,
.p-buttonset.p-button-info > .p-button.p-button-outlined,
.p-splitbutton.p-button-info > .p-button.p-button-outlined {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}
.p-button.p-button-info.p-button-outlined:hover,
.p-buttonset.p-button-info > .p-button.p-button-outlined,
.p-splitbutton.p-button-info > .p-button.p-button-outlined:hover {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}
.p-button.p-button-info.p-button-outlined:enabled:active,
.p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:active,
.p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:active {
    background: rgba(2, 136, 209, 0.16);
    color: #171718;
    border: 0px solid;
}
.p-button.p-button-help.p-button-outlined,
.p-buttonset.p-button-help > .p-button.p-button-outlined,
.p-splitbutton.p-button-help > .p-button.p-button-outlined {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}
.p-button.p-button-help.p-button-outlined:hover,
.p-buttonset.p-button-help > .p-button.p-button-outlined,
.p-splitbutton.p-button-help > .p-button.p-button-outlined:hover {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}
.p-button.p-button-danger.p-button-outlined,
.p-buttonset.p-button-danger > .p-button.p-button-outlined,
.p-splitbutton.p-button-danger > .p-button.p-button-outlined {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}
.p-button.p-button-danger.p-button-outlined:hover,
.p-buttonset.p-button-danger > .p-button.p-button-outlined,
.p-splitbutton.p-button-danger > .p-button.p-button-outlined:hover {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}
</style>
