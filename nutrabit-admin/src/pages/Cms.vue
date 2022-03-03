<template>
    <div class="p-grid cms_wrap">
        <div class="p-col-12">
            <div class="card">
                <h5>Search</h5>
                <p>Title</p>
                <div class="p-grid p-formgrid">
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <InputText type="text" placeholder="Title"></InputText>
                    </div>
                </div>
                <div class="button_wrap">
                    <div class="p-grid p-formgrid">
                        <div class="p-col-12 p-mb-12 p-lg-12 p-mb-lg-12">
                            <!-- <Button label="initialization" icon="pi pi-refresh"  class="p-button-outlined p-mr-2 p-mb-2" /> -->
                            <Button type="button" class="p-mr-2 p-mb-2" label="Search" icon="pi pi-search"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="p-grid cms_table_wrap">
        <div class="p-col-12">
            <div class="card">
                <div class="heading_wrap">
                    <h5>Content Management</h5>
                    <!-- <Button label="New" icon="pi pi-plus" class="p-mr-2 p-mb-2"></Button> -->
                </div>
                <DataTable
                    :value="content1"
                    :paginator="true"
                    class="p-datatable-gridlines"
                    :rows="10"
                    dataKey="id"
                    :rowHover="true"
                    v-model:filters="filters1"
                    filterDisplay="menu"
                    :loading="loading1"
                    :filters="filters1"
                    responsiveLayout="scroll"
                    :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']"
                >
                    <template #empty> No customers found. </template>
                    <template #loading> Loading customers data. Please wait. </template>
                    <Column field="status" header="Number" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Status</span>
                            <span :class="'customer-badge status-' + data.status">{{ data.status }}</span>
                        </template>
                    </Column>
                    <Column field="name" header="Title" style="min-width: 12rem">
                        <template #body="{ data }">
                            <router-link to="/cms/edit"><span class="p-column-title"></span> {{ data.name }}</router-link>
                        </template>
                    </Column>
                    <Column header="Date of modification" filterField="date" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Date</span>
                            {{ formatDate(data.date) }}
                        </template>
                    </Column>

                    <Column header="management" filterField="exra" dataType="numeric">
                        <template #body="{ data }">
                            <span class="p-column-title">management</span>
                            <p style="display: none">{{ formatCurrency(data.balance) }}</p>
                            <div style="display: flex">
                                <router-link to="/cms/edit"
                                    ><Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> Edit</Button></router-link
                                >
                                <Button label="Delete" icon="pi pi-trash" class="p-button-danger p-button-outlined p-mr-2 p-mb-2" @click="del" />
                                <ConfirmDialog group="dialog" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import CustomerService from '../service/CustomerService';
import ProductService from '../service/ProductService';
export default {
    name: 'cms',
    data() {
        return {
            customer1: null,
            customer2: null,
            customer3: null,
            content1: null,
            filters1: null,
            filters2: {},
            loading1: true,
            loading2: true,
            idFrozen: false,
            products: null,
            expandedRows: [],
            statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],

            dropdownItems: [
                { name: 'male', code: 'male' },
                { name: 'female', code: 'female' },
                { name: 'others', code: 'others' },
            ],
            dropdownItem: null,

            representatives: [
                { name: 'Amy Elsner', image: 'amyelsner.png' },
                { name: 'Anna Fali', image: 'annafali.png' },
                { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
                { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
                { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
                { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
                { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
                { name: 'Onyama Limba', image: 'onyamalimba.png' },
                { name: 'Stephen Shaw', image: 'stephenshaw.png' },
                { name: 'XuXue Feng', image: 'xuxuefeng.png' },
            ],
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.customerService = new CustomerService();
        this.productService = new ProductService();
        this.initFilters1();
    },
    mounted() {
        this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));
        this.customerService.getcontentlarge().then((data) => {
            this.content1 = data;
            // console.log(data) ;
            this.loading1 = false;
            this.content1.forEach((customer) => (customer.date = new Date(customer.date)));
        });
        this.customerService.getcontentlarge().then((data) => (this.customer2 = data));
        this.customerService.getCustomersMedium().then((data) => (this.customer3 = data));
        this.loading2 = false;
    },
    methods: {
        initFilters1() {
            this.filters1 = {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
                balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS },
            };
        },
        clearFilter1() {
            this.initFilters1();
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
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            });
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

<style scoped>
.button_wrap {
    width: 100%;
    text-align: right;
    margin-top: 30px;
}
.heading_wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
