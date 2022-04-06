<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12" v-show="detailsclient">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('dfc_user.details_header') }}</strong>
                </h4>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-4">
                        <strong>
                            <label for="emailuser">{{ $t('dfc_user.list.ReferralCode') }} :</label>
                        </strong>
                        <p>{{ clientdata.referralCode }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong>
                            <label for="emailuser">{{ $t('dfc_user.list.Depositproductname') }} :</label>
                        </strong>
                        <p>{{ clientdata.depositProductName == null ? '-empty-' : clientdata.depositProductName }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong>
                            <label for="mobileuser">{{ $t('dfc_user.list.CoinType') }} :</label>
                        </strong>
                        <p>{{ clientdata.coinType }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-4">
                        <strong>
                            <label for="nameuser">{{ $t('dfc_user.list.CoinAmount') }} :</label>
                        </strong>
                        <p>{{ clientdata.coinAmount }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong>
                            <label for="emailuser">{{ $t('dfc_user.list.StartDate') }} :</label>
                        </strong>
                        <p>{{ clientdata.startDate }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong>
                            <label for="mobileuser">{{ $t('dfc_user.list.EndDate') }}:</label>
                        </strong>
                        <p>{{ clientdata.endDate }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-4">
                        <strong>
                            <label for="nameuser">{{ $t('dfc_user.list.TotalDepositedInterest') }} :</label>
                        </strong>
                        <p>{{ clientdata.totalPayableDepositInterest }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong>
                            <label
                                for="emailuser"
                            >{{ $t('dfc_user.list.Totaladditionalinterestpaid') }} :</label>
                        </strong>
                        <p>{{ clientdata.totalAdditionalInterestPaid }}</p>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <strong>
                            <label for="mobileuser">{{ $t('dfc_user.list.DepositWon') }} :</label>
                        </strong>
                        <p>{{ clientdata.depositWon }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-4">
                        <strong>
                            <label for="nameuser">{{ $t('dfc_user.list.Status') }} :</label>
                        </strong>
                        <p>{{ clientdata.status }}</p>
                    </div>
                </div>
                <div class="p-d-flex p-jc-end">
                    <Button
                        @click="backList()"
                        :label="$t('button.back')"
                        icon="pi pi-angle-left"
                        class="p-button-primary p-mr-2 p-mb-2"
                    />
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
                        <label for="type">{{ $t('Inquiry.list.inqury1') }}</label>
                        <!-- <label for="type">Raw Material Name</label> -->
                        <InputText
                            id="googlurl"
                            type="text"
                            placeholder="input text"
                            v-model="title"
                        />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="type">{{ $t('Inquiry.list.appname') }}</label>
                        <!-- <label for="type">ID</label> -->
                        <!-- <select
                            class="p-dropdown-label p-inputtext "
                            name="business_name"
                            id="business_name"
                            v-model="name"
                        >
                            <option value>Select </option>
                            <option
                                v-for="(item, index) in businessDropdownValues"
                                v-bind:key="index"
                                :value="item.id"
                            >{{ item.business_name }}</option>
                        </select> -->
                        <Dropdown v-model="name"  :options="businessDropdownValues"  optionLabel="business_name" :placeholder="$t('Inquiry.list.appname')" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="type">{{ $t('Inquiry.list.status') }}</label>
                        <!-- <label for="type">ID</label> -->
                      
                        <Dropdown v-model="status"  :options="statusDropdownValues"  optionLabel="status" :placeholder="$t('Inquiry.list.status')" />
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <!-- <div class="p-field p-col-12 p-md-3">
                        <label for="verify-pass">{{ $t('search.label.lastDate') }}</label>
                        <Calendar :showIcon="true" :minDate="calendarValue" :showButtonBar="true" v-model="calendarValue1" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                    </div>-->
                </div>
                <div
                    class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row"
                >
                    <div class="p-mb-4 p-mb-lg-0"></div>
                    <div>
                        <Button
                            :label="$t('button.search')"
                            icon="pi pi-search"
                            iconPos="left"
                            class="p-button p-button-sm p-mr-2 p-mb-2"
                            @click="searchInquiry"
                        ></Button>
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
                            <div>
                                <!-- <router-link to="/excelrawmaterial">
                                <Button :label="$t('rawmaterial.excel_raw')" icon="pi pi-download" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button>
                            </router-link>
                            <router-link to="/addrawmaterial">
                                <Button :label="$t('rawmaterial.addnew_rawmaterial')" icon="pi pi-plus" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button>
                                </router-link>-->
                            </div>
                        </div>

                        <DataTable
                            :value="customer1"
                            :paginator="true"
                            class="p-datatable-gridlines"
                            :rows="5"
                            data-key="id"
                            :rowHover="true"
                            :loading="loading1"
                            :filters="filters1"
                            responsiveLayout="scroll"
                            style="text-align: center"
                        >
                            <ConfirmDialog group="dialog" />

                            <template #empty>데이터가 없습니다.</template>
                            <template #loading>Loading data. Please wait.</template>

                            <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                            <Column :header="$t('Inquiry.list.slNo')" style="min-width: 12rem">
                                <template #body="{ index }">
                                    <span class="p-column-title">SlNo</span>
                                    <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.id }}
                                    </span>-->
                                    {{ index + 1 }}
                                </template>
                            </Column>

                            <Column
                                field="ReferralCode"
                                :header="$t('Inquiry.list.title')"
                                style="min-width: 12rem"
                            >
                                <template #body="{ data }">
                                    <span class="p-column-title">Title</span>
                                    <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.username == null ? '- Empty -' : data.username }}
                                    </span>-->
                                    {{ data.title }}
                                </template>
                            </Column>

                            <Column
                                :header="$t('Inquiry.list.QuestionType')"
                                style="min-width: 12rem"
                            >
                                <template #body="{ data }">
                                    <span class="p-column-title">Quetion Type</span>
                                    <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.email == null ? '-empty-' : data.email }}
                                    </span>-->
                                    {{ data.type_title }}
                                </template>
                            </Column>

                            <Column :header="$t('Inquiry.list.appname')" style="min-width: 12rem">
                                <template #body="{ data }">
                                    <span class="p-column-title">Applicant name/Business NAme</span>
                                    <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.email == null ? '-empty-' : data.email }}
                                    </span>-->
                                    {{ data.business_name }}
                                </template>
                            </Column>
                            <Column :header="$t('Inquiry.list.Reopenby')" style="min-width: 12rem">
                                <template #body="{ data }">
                                    <span class="p-column-title">Responded by</span>
                                    <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.email == null ? '-empty-' : data.email }}
                                    </span>-->
                                    {{ data.repliedBy }}
                                </template>
                            </Column>
                            <Column
                                :header="$t('Inquiry.list.inqurydate')"
                                style="min-width: 12rem"
                            >
                                <template #body="{ data }">
                                    <span class="p-column-title">Registration Date</span>
                                    <!-- <span :class="data.popupNotification.length == 0 ? '' : 'flow'">
                                {{ data.createdDate }}
                                    </span>-->
                                    {{ dateformat(data.createdDate) }}
                                </template>
                            </Column>
                            <Column
                                field="Exposure"
                                :header="$t('Inquiry.list.status')"
                                style="min-width: 12rem"
                            >
                                <template #body="{ data }">
                                    <span class="p-column-title">Exposure</span>
                                    <!-- {{ data.id }}-->
                                    {{ data.status }}
                                    <!-- <InputSwitch v-model="data.status" trueValue="active" @change="switchValue(data.id, data.status)" /> -->
                                </template>
                            </Column>

                            <Column :header="$t('Inquiry.list.Action')">
                                <template #body="{ data }">
                                    <span class="p-column-title">Balance</span>
                                    <p style="display: none">{{ data.mobile }}</p>
                                    <div style="display: flex">
                                        <!-- <router-link :to="'/viewraw-material-registration/' + data.id"
                                    ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> {{ $t('button.view') }}</Button>
                                        </router-link>-->
                                        <router-link :to="'/reply-inquiry/' + data.id">
                                            <Button
                                                label="help"
                                                class="p-button-outlined p-button-help p-mr-2 p-mb-2"
                                            >
                                                <i class="pi pi-reply p-mr-2"></i>
                                            </Button>
                                        </router-link>
                                        <Button
                                            icon="pi pi-trash"
                                            class="p-button-danger p-button-outlined p-mr-2 p-mb-2"
                                            @click="confirm(data.id)"
                                        />
                                    </div>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
        <Dialog
            :header="$t('dfc_user.popup.header')"
            v-model:visible="display"
            :breakpoints="{ '960px': '75vw' }"
            :style="{ width: '30vw' }"
            :modal="true"
        >
            <div class="p-field p-fluid">
                <ul>
                    <li
                        v-for="item in records"
                        :key="item.title"
                    >{{ item.title }} : {{ item.count }}</li>
                </ul>
            </div>
            <template #footer>
                <Button
                    :label="$t('button.ok')"
                    @click="close"
                    icon="pi pi-pi-times"
                    class="p-button-primary"
                />
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
            status: '',
            id: '',
            email: '',
            startDate: '',
            endDate: '',
            sortBy: '',
            sortOrder: '',
            createdDate: '',
            business_name: '',
            title: '',
            type_id: '',
            repliedBy: '',
            dropdownValue: null,
            dropdownValues: '',
            statusDropdownValue: null,
            statusDropdownValues: '',
            businessDropdownValues: '',
            businessDropdownValue: null,
            searchData: '',
            type_title: '',
            statusitem: '',

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
        this.inquiryService
            .getInquryList(this.status, this.title, this.business_name, this.type_title, this.repliedBy, this.startDate, this.endDate, this.sortBy, this.sortOrder)
            .then((data) => {
                this.customer1 = data;
                this.loading1 = false;
                //this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            })
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
        this.loading1 = true;
        this.inquiryService
            .dropdownStatus()
            .then((data) => {
                this.statusDropdownValues = data;
                // this.products = data;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                console.log(this.customer1);
                console.log(data);
            })

            //  this.inquiryService
            // .getRawCategoryDropdown()
            //     .then((data) => {
            //         this.dropdownValues = data;
            //         // this.products = data;
            //         this.loading1 = false;
            //         // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            //         console.log(this.dropdownValues);
            //         console.log(data);
            //     })


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
        // dropdownCategory() {
        //     axios({ method: 'get', url: '/admin/product_category/category2Dropdown/' }).then(function (response) {
        //         console.log(response);
        //         this.dropdownValue = response.data.data.productCategory;
        //     });
        // },
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
                return moment(String(value)).format('LL - hh:mm:ss')
            }
        },
        searchInquiry() {
            // console.log(this.name);
            // console.log(this.id);

            if (this.title === '') {
                // this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } 
            else {
                this.inquiryService
                    .getInquryList(this.status, this.title, this.name, this.type_title, this.repliedBy, this.startDate, this.endDate, this.sortBy, this.sortOrder)
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
                acceptLabel: "확인",
                rejectLabel: "취소",
                accept: () => {
                    axios({ method: 'delete', url: '/admin/product_raw_material/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                        self.inquiryService
                            .getInquryList(self.status, self.title, self.business_name, self.repliedBy, self.startDate, self.endDate, self.sortBy, self.sortOrder)
                            .then((data) => {
                                this.customer1 = data;
                                this.loading1 = false;
                                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                                //console.log(data);
                            })
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
