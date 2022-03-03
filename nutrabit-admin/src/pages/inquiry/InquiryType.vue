<template>
    <div class="p-grid">
        <Toast />

        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>
                            <b>{{ $t('Inquiry Type') }}</b>
                        </h5>
                    </div>
                    <div>
                        <router-link to="/add-inquiry-type">
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
                    <Column field="name" :header="$t('Title')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Title</span>
                            {{ data.title }}
                        </template>
                    </Column>
                    <Column :header="$t('Status')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Status</span>
                            {{ data.status }}
                        </template>
                    </Column>
                    <Column :header="$t('table.userlist.thead.createdDate')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Created-Date</span>
                            {{ formatDate(data.createdDate) }}
                        </template>
                    </Column>
                    <Column :header="$t('table.userlist.thead.actions')">
                        <template #body="{ data }">
                            <span class="p-column-title">Balance</span>
                            <p style="display: none">{{ data.id }}</p>
                            <div style="display: flex">
                                <router-link :to="'/edit-inquiry-type/' + data.id"
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
// import validateUsersearch from '../../validations/user/validateUserSearch';
// import { FilterMatchMode, FilterOperator } from 'primevue/api';
// import UserService from '../../service/API/UserService';
import InquiryService from '../../service/API/InquiryService';
import axios from 'axios';
// import ProductService from '../service/ProductService';
// import axios from 'axios';
export default {
    data() {
        return {
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
        this.inquiryService.getInquirytypeList().then((data) => {
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
            return (value = yyyy + '-' + mm + '-' + dd + ' ' + ' ' + hr + ':' + min + ':' + sec);
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
                    axios({ method: 'delete', url: '/inquery_type/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                    });

                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
            setTimeout(() => {
                this.inquiryService.getInquirytypeList().then((data) => {
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
