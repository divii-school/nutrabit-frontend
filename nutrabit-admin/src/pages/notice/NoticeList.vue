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
                        <label for="nameuser">{{ $t('Title') }}</label>
                        <InputText id="nameuser" :class="`${error.name ? 'p-invalid' : ''}`" type="text" :placeholder="$t('search.placeholder.search')" v-model="title" />
                        <div class="text-red">{{ error.name }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="email2">state</label>
                        <Dropdown v-model="status" :options="dropdownValues" optionLabel="name" placeholder="Select" />
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <!-- <div class="p-field p-col">
                        <label for="state">gender</label>
                        <Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
                    </div> -->
                    <!-- <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Password</label>
                        <InputText id="pass" type="password" placeholder="password" />
                    </div> -->
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">{{ $t('search.label.startDate') }}</label>
                        <Calendar :class="`${error.calendarValue ? 'p-invalid' : ''}`" :showIcon="true" :showButtonBar="true" v-model="startdate" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                        <div class="text-red">{{ error.calendarValue }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="verify-pass">{{ $t('search.label.lastDate') }}</label>
                        <Calendar :class="`${error.calendarValue1 ? 'p-invalid' : ''}`" :showIcon="true" :showButtonBar="true" v-model="enddate" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                        <div class="text-red">{{ error.calendarValue1 }}</div>
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
                        <!-- <h5>{{ $t('table.userlist.heading') }}</h5> -->
                        <h5>Notice</h5>
                    </div>
                    <div>
                        <router-link to="/add-notice">
                            <Button label="Primary" class="p-mr-2 p-mb-2"><i class="pi pi-plus p-mr-2"></i> {{ $t('button.new') }}</Button>
                        </router-link>
                    </div>
                </div>

                <DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="5" dataKey="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll" v-model:selection="selected">
                    <!-- v-model:selection="selected" -->
                    <ConfirmDialog group="dialog" />

                    <template #empty> No customers found. </template>
                    <template #loading> Loading customers data. Please wait. </template>

                    <column selectionMode="multiple" style="width: 16px; text-align: center" />
                    <Column field="name" :header="$t('Number')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Number</span>
                            {{ data.id }}
                        </template>
                    </Column>
                    <Column :header="$t('Title')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Title</span>
                            {{ data.title }}
                        </template>
                    </Column>
                    <Column :header="$t('Date Created')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Date Created</span>
                            {{ formatDate(data.createdDate) }}
                        </template>
                    </Column>
                    <Column :header="$t('State')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">State</span>
                            {{ data.status }}
                        </template>
                    </Column>

                    <Column :header="$t('Management')">
                        <template #body="{ data }">
                            <span class="p-column-title">Management</span>
                            <p style="display: none">{{ data.status }}</p>
                            <div style="display: flex">
                                <router-link :to="'/view-notice/' + data.id"
                                    ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> {{ $t('button.view') }}</Button>
                                </router-link>
                                <router-link @mouseenter="editnotice(data.id)" :to="'/edit-notice/' + data.id"
                                    ><Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> {{ $t('button.edit') }}</Button></router-link
                                >

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
// import validateUsersearch from '../../validations/validateUserSearch';
// import { FilterMatchMode, FilterOperator } from 'primevue/api';
import NoticeService from '../../service/API/NoticeService';
import axios from 'axios';
// import ProductService from '../service/ProductService';
// import axios from 'axios';
export default {
    data() {
        return {
            dropdownValues: [{ name: 'active',id:1 }, { name: 'inactive' }],
            selected: [],
            selectedItemss: '',
            render: true,
            title: '',
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            status: '',
            startdate: '',
            enddate: '',
            customer1: null,
            loading1: true,
            idFrozen: false,
            products: null,
            expandedRows: [],
            user: null,
            statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
            dropdownItems: [
                { name: 'male', code: 'male' },
                { name: 'female', code: 'female' },
                { name: 'others', code: 'others' },
            ],
            dropdownItem: null,
            error: {},
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.noticeService = new NoticeService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.noticeService.getNoticeList(this.title, this.status, this.startdate, this.enddate).then((data) => {
            this.customer1 = data;
            this.loading1 = false;
            this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
        });
    },
    watch: {},
    methods: {
        selects() {
            let xyz = [];
            let data = this.selected;
            for (var a = 0; a < data.length; a++) {
                xyz.push(data[a].id);
            }
            this.selectedItemss = xyz.toString();
            if (this.calendarValue !== '') {
                this.calendarValue = this.calendarValue.toISOString().slice(0, 10);
                console.log(this.calendarValue);
            }
            if (this.calendarValue1 !== '') {
                this.calendarValue1 = this.calendarValue1.toISOString().slice(0, 10) + 1;
                console.log(this.calendarValue1);
            }
        },
        editnotice(ids) {
            this.noticeService.viewNotice(ids).then((res) => {
                localStorage.setItem('desc', res.description);
            });
        },
        resetUser() {
            this.title = '';
            this.status = '';
            this.error = {};
            this.startdate = '';
            this.enddate = '';
            this.noticeService.getNoticeList(this.title, this.status, this.startdate, this.enddate).then((data) => {
                this.customer1 = data;
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            });
        },
        searchuser() {
            this.noticeService.getNoticeList(this.title, this.status?.name, this.startdate, this.enddate).then((data) => {
                this.customer1 = data;
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            });
        },
        today() {
            const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '.');
            this.startdate = utc;
            this.enddate = utc;
        },
        lastweek() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 7);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.startdate = startDate;
            this.enddate = edate;
        },
        lastmonth() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 31);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.startdate = startDate;
            this.enddate = edate;
        },
        lastsixmonth() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 182);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.startdate = startDate;
            this.enddate = edate;
        },
        lastyear() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 365);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.startdate = startDate;
            this.enddate = edate;
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
                    axios({ method: 'delete', url: '/notice/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                    });

                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
            setTimeout(() => {
                this.noticeService.getNoticeList(this.title, this.status, this.startdate, this.enddate).then((data) => {
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
