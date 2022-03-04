<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('search.title') }}</strong>
                </h4>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">{{ $t('search.label.startDate') }}</label>
                        <Calendar :class="`${error.calendarValue ? 'p-invalid' : ''}`" :showIcon="true" :showButtonBar="true" v-model="calendarValue" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                        <div class="text-red">{{ error.calendarValue }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="nameuser">{{ $t('Contents') }}</label>
                        <InputText id="nameuser" :class="`${error.name ? 'p-invalid' : ''}`" type="text" :placeholder="$t('search.placeholder.search')" v-model="content" />
                        <div class="text-red">{{ error.name }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="s-state">Type</label>
                        <Dropdown id="s-state" v-model="contenttype" :options="contenttypes" optionLabel="name" placeholder="Select Content-Type"></Dropdown>
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="verify-pass">{{ $t('search.label.lastDate') }}</label>
                        <Calendar :class="`${error.calendarValue1 ? 'p-invalid' : ''}`" :showIcon="true" :showButtonBar="true" v-model="calendarValue1" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                        <div class="text-red">{{ error.calendarValue1 }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="s-state">Status</label>
                        <Dropdown id="s-state" v-model="state" :options="states" optionLabel="name" placeholder="Select State"></Dropdown>
                    </div>
                </div>
                <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
                    <div class="p-mb-4 p-mb-lg-0">
                        <Button :label="$t('button.today')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="today"></Button>
                        <Button :label="$t('button.lastWeek')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastweek"></Button>
                        <Button :label="$t('button.lastMonth')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastmonth"></Button>
                        <Button :label="$t('button.last6Months')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastsixmonth"></Button>
                        <Button :label="$t('button.lastYear')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastyear"></Button>
                    </div>
                    <div>
                        <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="resetUser"></Button>
                        <Button :label="$t('button.search')" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchuser"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>
                            <b>{{ $t('Inquiry List') }}</b>
                        </h5>
                    </div>
                    <div class="p-field p-col-12 p-md-3"></div>
                    <div></div>
                </div>
                <div class="p-formgroup-inline">
                    <div class="p-field">
                        <Dropdown id="s-state" v-model="operation" :options="operations" optionLabel="name" placeholder="select"></Dropdown>
                    </div>
                    <Button label="Apply" @click="selects"></Button>
                </div>
                <DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="5" dataKey="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll" v-model:selection="selected">
                    <!-- v-model:selection="selected" -->
                    <ConfirmDialog group="dialog" />

                    <template #empty> No customers found. </template>
                    <template #loading> Loading customers data. Please wait. </template>

                    <column selectionMode="multiple" style="width: 16px; text-align: center" />
                    <Column field="name" :header="$t('Number')" style="min-width: 12rem">
                        <template #body="{ index }">
                            <span class="p-column-title">Number</span>
                            {{ index + 1 }}
                        </template>
                    </Column>
                    <Column :header="$t('Inquiry Type')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Inquiry Type</span>
                            {{ data.inqueryTypeTitle }}
                        </template>
                    </Column>
                    <Column :header="$t('Contents')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Contents</span>
                            {{ data.description }}
                        </template>
                    </Column>
                    <Column :header="$t('state')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">state</span>
                            {{ data.status }}
                        </template>
                    </Column>
                    <Column :header="$t('registration date')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">registration date</span>
                            {{ formatDate(data.createdDate) }}
                        </template>
                    </Column>
                    <Column :header="$t('Reply date')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Reply date</span>
                            {{ formatDate(data.updatedDate) }}
                        </template>
                    </Column>
                    <Column :header="$t('See More')">
                        <template #body="{ data }">
                            <span class="p-column-title">See More</span>
                            <p style="display: none">{{ data.id }}</p>
                            <div style="display: flex">
                                <router-link :to="'/edit-inquiry/' + data.id"
                                    ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> {{ $t('Change') }}</Button>
                                </router-link>
                                <!-- <router-link :to="'/user/edit-user/' + data.id"
                                    ><Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> {{ $t('button.edit') }}</Button></router-link
                                > -->
                                <Button :label="$t('button.delete')" icon="pi pi-trash" class="p-button-danger p-button-outlined p-mr-2 p-mb-2" @click="confirm(data.id)" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
// import validateUsersearch from '../../validations/user/validateUserSearch';
// import { FilterMatchMode, FilterOperator } from 'primevue/api';
import InquiryService from '../../service/API/InquiryService';
import axios from 'axios';
// import ProductService from '../service/ProductService';
// import axios from 'axios';
export default {
    data() {
        return {
            contenttypes: '',
            contenttype: '',
            selected: [],
            selectedItemss: '',
            render: true,
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            calendarValue: '',
            calendarValue1: '',
            customer1: null,
            loading1: true,
            idFrozen: false,
            products: null,
            expandedRows: [],
            user: null,
            statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
            operations: [{ name: 'delete', code: 'delete' }],
            operation: null,
            states: [
                { name: 'open', code: 'open' },
                { name: 'close', code: 'closed' },
            ],
            state: '',
            content: '',
            dropdownItem: null,
            error: {},
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
        this.inquiryService.getInquiryList(this.state, this.contenttype, this.content, this.calendarValue, this.calendarValue1).then((data) => {
            this.customer1 = data;
            this.loading1 = false;
            this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
        });
        this.inquiryService.getInquiryType().then((data) => {
            this.contenttypes = data;
        });
    },
    watch: {},
    methods: {
        selects() {
            if (this.operation == null) {
                this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'Please Select one dropdown Option.', life: 3000 });
            } else {
                let xyz = [];
                let data = this.selected;
                for (var a = 0; a < data.length; a++) {
                    xyz.push(data[a].id);
                }
                // this.selectedItemss = xyz.toString();
                this.selectedItemss = xyz;
                if (xyz.length < 1) {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'Please Select items from list to perform this operation.', life: 3000 });
                }
                if (this.operation.code == 'delete' && xyz.length > 0) {
                    this.confirm(this.selectedItemss);
                }
            }
        },
        resetUser() {
            this.content = '';
            this.contenttype = '';
            this.state = '';
            this.calendarValue = '';
            this.calendarValue1 = '';
            this.inquiryService.getInquiryList(this.state, this.contenttype, this.content, this.calendarValue, this.calendarValue1).then((data) => {
                this.customer1 = data;
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            });
        },
        searchuser() {
            console.log(this.content);
            console.log(this.contenttype);
            console.log(this.state);
            console.log(this.calendarValue);
            console.log(this.calendarValue1);
            this.inquiryService
                .getInquiryList(this.state.code == undefined ? this.state : this.state.code, this.contenttype.id == undefined ? this.contenttype : this.contenttype.id, this.content, this.calendarValue, this.calendarValue1)
                .then((data) => {
                    this.customer1 = data;
                    this.loading1 = false;
                    this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                });
        },
        today() {
            const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '.');
            this.calendarValue = utc;
            this.calendarValue1 = utc;
        },
        lastweek() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 7);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.calendarValue = startDate;
            this.calendarValue1 = edate;
        },
        lastmonth() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 31);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.calendarValue = startDate;
            this.calendarValue1 = edate;
        },
        lastsixmonth() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 182);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.calendarValue = startDate;
            this.calendarValue1 = edate;
        },
        lastyear() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 365);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.calendarValue = startDate;
            this.calendarValue1 = edate;
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
            // return value.toLocaleDateString('en-US', {
            //     year: 'numeric',
            //     month: '2-digit',
            //     day: '2-digit',
            // });
            const date = new Date(value);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (value = yyyy + '.' + mm + '.' + dd);
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
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: '/inquery/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                    });

                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
            setTimeout(() => {
                this.inquiryService
                    .getInquiryList(this.state.code == undefined ? this.state : this.state.code, this.contenttype.id == undefined ? this.contenttype : this.contenttype.id, this.content, this.calendarValue, this.calendarValue1)
                    .then((data) => {
                        this.customer1 = data;
                        this.loading1 = false;
                        this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
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
</style>
