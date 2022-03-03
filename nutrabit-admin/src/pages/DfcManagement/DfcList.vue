<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('DFC.s-header') }}</strong>
                </h4>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="nameuser">{{ $t('DFC.search.Referralcode') }}</label>
                        <InputText id="nameuser" type="text" :placeholder="$t('DFC.placeholder.refcode')" v-model="refercode" />
                    </div>
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">{{ $t('search.label.startDate') }}</label>
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="verify-pass">{{ $t('search.label.lastDate') }}</label>
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue1" :minDate="calendarValue" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
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
        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>{{ $t('DFC.list.header') }}</h5>
                    </div>
                    <div>
                        <router-link to="/add-dfc">
                            <Button label="Primary" class="p-mr-2 p-mb-2"><i class="pi pi-plus p-mr-2"></i> {{ $t('DFC.addnew_dfc') }}</Button>
                        </router-link>
                    </div>
                </div>

                <DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="5" dataKey="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll" v-model:selection="selected">
                    <ConfirmDialog group="dialog" />

                    <template #empty> No Data found. </template>
                    <template #loading> Loading data. Please wait. </template>
                    <Column field="name" :header="$t('Sl.No.')">
                        <template #body="{ index }">
                            <span class="p-column-title">Sl.No.</span>
                            {{ index + 1 }}
                        </template>
                    </Column>
                    <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                    <Column field="ReferralCode" :header="$t('DFC.list.Referralcode')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Referral Code</span>
                            {{ data.referralCode == null ? '- Empty -' : data.referralCode }}
                        </template>
                    </Column>
                    <Column :header="$t('DFC.list.name')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Name</span>
                            {{ data.name }}
                        </template>
                    </Column>
                    <Column :header="$t('DFC.list.grade')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Grade</span>
                            {{ data.grade }}
                        </template>
                    </Column>
                    <Column :header="$t('DFC.list.email')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Email</span>
                            {{ data.email }}
                        </template>
                    </Column>
                    <Column :header="$t('DFC.list.location')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title" style="background-color: lightblue">Location</span>
                            {{ data.location }}
                        </template>
                    </Column>
                    <Column :header="$t('DFC.list.address')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title" style="background-color: lightblue">Location</span>
                            {{ data.address }}
                        </template>
                    </Column>
                    <Column :header="$t('DFC.list.mobile')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Mobile</span>
                            {{ data.mobile }}
                        </template>
                    </Column>
                    <Column :header="$t('DFC.list.rec-perfomance')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Recent Performance</span>
                            {{ data.designation == null ? '- Empty -' : data.designation }}
                        </template>
                    </Column>
                    <Column :header="$t('DFC.list.created_dt')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Created(Date & Time)</span>
                            {{ formatDate(data.createdDate) }}
                        </template>
                    </Column>
                    <Column :header="$t('DFC.list.see_more')">
                        <template #body="{ data }">
                            <span class="p-column-title">Balance</span>
                            <p style="display: none">{{ data.mobile }}</p>
                            <div style="display: flex">
                                <router-link :to="'/view-dfc/' + data.id"
                                    ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> {{ $t('button.view') }}</Button>
                                </router-link>
                                <router-link :to="'/edit-dfc/' + data.id"
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
import DfcService from '../../service/API/DfcService';
import axios from 'axios';
export default {
    data() {
        return {
            selected: [],
            selectedItemss: '',
            render: true,
            name: '',
            email: '',
            mobile: '',
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
            refercode: '',
            dropdownItem: null,
            error: {},
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.dfcService = new DfcService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.dfcService
            .getDfcList(this.refercode, this.calendarValue, this.calendarValue1)
            .then((data) => {
                this.customer1 = data;
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            })
            .catch(() => {
                this.customer1 = [];
                this.loading1 = false;
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
        resetUser() {
            this.refercode = '';
            this.calendarValue = '';
            this.calendarValue1 = '';
            this.dfcService.getDfcList(this.refercode, this.calendarValue, this.calendarValue1).then((data) => {
                this.customer1 = data;
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            });
        },
        searchdfc() {
            if (this.refercode === '' && this.calendarValue === '' && this.calendarValue1 === '') {
                this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } else {
                this.dfcService
                    .getDfcList(this.refercode, this.calendarValue, this.calendarValue1)
                    .then((data) => {
                        this.customer1 = data;
                        this.loading1 = false;
                        this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
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
            var self = this;
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: '/admin/dfc/delete', data: { deleteIdArray: id } }).then(function (response) {
                        self.dfcService
                            .getDfcList(self.refercode, self.calendarValue, self.calendarValue1)
                            .then((data) => {
                                self.customer1 = data;
                                self.loading1 = false;
                                self.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                            })
                            .catch(() => {
                                self.customer1 = [];
                                self.loading1 = false;
                            });
                        console.log(response);
                    });

                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
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
