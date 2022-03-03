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
                </div>

                <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
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
                        <h5>{{ $t('Cms List') }}</h5>
                    </div>
                    <div>
                        <!-- <Button label="Primary" class="p-mr-2 p-mb-2" @click="exceldownload"><i class="pi pi-download p-mr-2"></i>{{ $t('button.downloadExcel') }}</Button> -->
                        <router-link to="/cms/add">
                            <Button label="Primary" class="p-mr-2 p-mb-2"><i class="pi pi-plus p-mr-2"></i> {{ $t('button.new') }}</Button>
                        </router-link>
                    </div>
                </div>

                <DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="5" dataKey="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll" v-model:selection="selected">
                    <!-- v-model:selection="selected" -->
                    <ConfirmDialog group="dialog" />

                    <template #empty> No customers found. </template>
                    <template #loading> Loading customers data. Please wait. </template>

                    <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                    <!-- <Column :header="$t('table.userlist.thead.id')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Id</span>
                            {{ data.id }}
                        </template>
                    </Column> -->
                    <Column field="name" :header="$t('Title')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Title</span>
                            {{ data.title }}
                        </template>
                    </Column>
                    <!-- <Column field="name" :header="$t('Status')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Status</span>
                            {{ data.status }}
                        </template>
                    </Column> -->

                    <!-- <Column :header="$t('Description')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Description</span>
                            {{ data.description }}
                        </template>
                    </Column> -->

                    <Column :header="$t('table.userlist.thead.createdDate')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Created-Date</span>
                            {{ formatDate(data.createdDate) }}
                        </template>
                    </Column>
                    <Column :header="$t('Updated-Date')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Updated-Date</span>
                            {{ data.updatedDate == null ? 'Not Available' : formatDate(data.updatedDate) }}
                        </template>
                    </Column>
                    <Column :header="$t('Management')">
                        <template #body="{ data }">
                            <span class="p-column-title">Management</span>
                            <p style="display: none">{{ data.id }}</p>
                            <div style="display: flex">
                                <router-link @mouseenter="editcms(data.id)" :to="'/cms/view/' + data.id"
                                    ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> {{ $t('button.view') }}</Button>
                                </router-link>
                                <router-link @mouseenter="editcms(data.id)" :to="'/cms/edit/' + data.id"
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
import CmsService from '../../service/API/CmsService';
import axios from 'axios';
// import ProductService from '../service/ProductService';
// import axios from 'axios';
export default {
    data() {
        return {
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
            customer1: null,
            loading1: true,
            idFrozen: false,
            products: null,
            expandedRows: [],
            user: null,
            error: {},
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.cmsService = new CmsService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.cmsService.getCmsList(this.title).then((data) => {
            this.customer1 = data;
            this.loading1 = false;
            this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
        });
    },
    watch: {},
    methods: {
        editcms(ids) {
            this.cmsService.viewCms(ids).then((res) => {
                localStorage.setItem('desc', res.description);
            });
        },
        resetUser() {
            this.title = '';
            this.cmsService.getCmsList(this.title).then((data) => {
                this.customer1 = data;
                this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            });
        },
        searchuser() {
            this.cmsService.getCmsList(this.title).then((data) => {
                this.customer1 = data;
                console.log(data);
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            });
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
                    axios({ method: 'delete', url: '/cms/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                    });

                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
            setTimeout(() => {
                this.cmsService.getCmsList().then((data) => {
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
