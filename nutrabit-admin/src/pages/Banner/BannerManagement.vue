<template>
    <div>
        <Toast />
        <div class="card">
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>Search</h5>
                    <div class="p-formgrid p-grid">
                        <!-- <div class="p-field p-col-12 p-md-3">
                            <label for="name2">Title</label>
                            <InputText id="name2" type="text" placeholder="Search" :modelValue="title" v-model="title" />
                        </div>
                        <div class="p-field p-col-12 p-md-3">
                            <label for="email2">state</label>
                            <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />
                        </div> -->
                    </div>
                    <div class="p-formgrid p-grid">
                        <div class="p-field p-col-12 p-md-3">
                            <label for="name2">Start Date</label>
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue1" placeholder="YYYY.MM.DD" dateFormat="yy.mm.dd"></Calendar>
                        </div>
                        <div class="p-field p-col-12 p-md-3">
                            <label for="email2">End Date</label>
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue2" placeholder="YYYY.MM.DD" dateFormat="yy.mm.dd"></Calendar>
                        </div>
                    </div>
                </div>
                <!-- <div class="p-col-12 p-md-6">
                    <h1>{{ title }}</h1>
                    <h1>{{ dropdownValue }}</h1>
                    <h1>{{ calendarValue1 }}</h1>
                    <h1>{{ calendarValue2 }}</h1>
                </div> -->
            </div>
            <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
                <div class="p-mb-4 p-mb-lg-0">
                    <Button label="today" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="today"></Button>
                    <Button label="last week" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastweek"></Button>
                    <Button label="last month" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastmonth"></Button>
                    <Button label="last 6 months" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastsixmonth"></Button>
                    <Button label="last year" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastyear"></Button>
                </div>
                <div>
                    <Button label="reset" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" v-on:click="reInitialize"></Button>
                    <Button label="search" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchBannner"></Button>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="p-grid">
                <div class="p-col-12">
                    <div class="p-d-flex p-jc-between p-mb-2">
                        <h4>Banner Management</h4>
                        <div>
                            <router-link to="/create-banner">
                                <Button label="New" icon="pi pi-plus" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button>
                            </router-link>
                        </div>
                    </div>
                    <DataTable :value="products" :paginator="true" class="p-datatable-gridlines" :rows="5" dataKey="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll">
                        <ConfirmDialog group="dialog" />

                        <template #empty> No customers found. </template>
                        <template #loading> Loading customers data. Please wait. </template>

                        <!-- <Column field="Number" header="Number" style="min-width: 3rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Number</span>
                                {{ data.length }}
                            </template>
                        </Column> -->
                        <Column field="Change Order" header="Change Order" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Change Order</span>
                                <p style="display: none">{{ data.status }}</p>
                                <div style="display: flex">
                                    <Button label="" icon="pi pi-arrow-up" class="p-button-plain p-button-text p-mr-2 p-mb-2" @click="up(data.id)" />
                                    <Button label="" icon="pi pi-arrow-down" class="p-button-plain p-button-text p-mr-2 p-mb-2" @click="down(data.id)" />
                                </div>
                            </template>
                        </Column>
                        <Column field="Title" header="Title" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Title</span>
                                {{ data.title }}
                            </template>
                        </Column>
                        <Column field="Image" header="Image">
                            <template #body="{ data }">
                                <span class="p-column-title">Image</span>
                                <img :src="'http://dvcon-admin-nodejs.dvconsulting.org:4545' + data.bannerImage" :alt="data.image" class="product-image" />
                            </template>
                        </Column>
                        <Column field="Type" header="Type" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Type</span>
                                {{ data.bannerPostion }}
                            </template>
                        </Column>

                        <Column field="Creation-Date" header="Creation-Date" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Creation-Date</span>
                                {{ formatDate(data.createdDate) }}
                            </template>
                        </Column>
                        <Column field="State" header="State" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">State</span>
                                {{ data.status }}
                            </template>
                        </Column>
                        <Column field="Management" header="Management" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Management</span>
                                <p style="display: none">{{ data.status }}</p>
                                <div style="display: flex">
                                    <router-link :to="'/edit-banner/' + data.id"
                                        ><Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> Edit</Button></router-link
                                    >
                                    <Button label="Delete" icon="pi pi-trash" class="p-button-danger p-button-outlined p-mr-2 p-mb-2" @click="confirm(data.id)" />
                                </div>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import BannerService from '../../service/API/BannerService';
import axios from 'axios';
export default {
    data() {
        return {
            dropdownValues: [{ name: 'active' }, { name: 'inactive' }],
            serial: 0,
            dropdownValue: '',
            calendarValue1: '',
            calendarValue2: '',
            isModalVisible: false,
            products: null,
            title: null,
            loading1: true,
            deletedID: null,
        };
    },
    created() {
        this.bannerService = new BannerService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.bannerService
            .getBannerList(this.title, this.dropdownValue, this.calendarValue1, this.calendarValue2)
            .then((data) => {
                this.products = data;
                this.loading1 = false;
                this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                console.log(data);
            })
            .catch((err) => console.log(err));
    },
    methods: {
        up(ids) {
            axios({ method: 'post', url: '/banner/up', data: { id: ids } }).then(function (response) {
                console.log(response);
            });
            setTimeout(() => {
                this.bannerService.getBannerList().then((data) => {
                    this.products = data;
                    console.log(data);
                    this.loading1 = false;
                });
            }, 500);
        },
        down(ids) {
            axios({ method: 'post', url: '/banner/down', data: { id: ids } }).then(function (response) {
                console.log(response);
            });
            setTimeout(() => {
                this.bannerService.getBannerList().then((data) => {
                    this.products = data;
                    console.log(data);
                    this.loading1 = false;
                });
            }, 500);
        },
        searchBannner() {
            console.log(this.dropdownValue?.name);
            this.bannerService
                .getBannerList(this.title, this.dropdownValue?.name, this.calendarValue1, this.calendarValue2)
                .then((data) => {
                    this.products = data;
                    this.loading1 = false;
                    console.log(data);
                })
                .catch((err) => console.log(err));
        },
        reInitialize() {
            this.dropdownValue = null;
            this.calendarValue1 = null;
            this.calendarValue2 = null;
            this.title = null;
            this.bannerService
                .getBannerList(this.title, this.dropdownValue, this.calendarValue1, this.calendarValue2)
                .then((data) => {
                    this.products = data;
                    this.loading1 = false;
                    console.log(data);
                })
                .catch((err) => console.log(err));
        },
        today() {
            const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '.');
            this.calendarValue1 = utc;
            this.calendarValue2 = utc;
        },
        lastweek() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 7);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.calendarValue1 = startDate;
            this.calendarValue2 = edate;
        },
        lastmonth() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 31);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.calendarValue1 = startDate;
            this.calendarValue2 = edate;
        },
        lastsixmonth() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 182);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.calendarValue1 = startDate;
            this.calendarValue2 = edate;
        },
        lastyear() {
            const date = new Date();
            const edate = new Date();
            date.setDate(date.getDate() - 365);
            const startDate = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            this.calendarValue1 = startDate;
            this.calendarValue2 = edate;
        },
        confirm(id) {
            var self=this;
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: '/banner/delete', data: { deleteIdArray: id } }).then(function () {
                        self.bannerService.getBannerList().then((data) => {
                            self.products = data;
                            console.log(data);
                            self.loading1 = false;
                        });
                    });
                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
        onRowExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
        },
        onRowCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
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
            return (value = yyyy + '.' + mm + '.' + dd + ' ' + ' ' + hr + ':' + min + ':' + sec);
        },
        showModal(id) {
            console.log(id);
            this.isModalVisible = true;
            this.deletedID = id;
        },
        closeModal() {
            this.$toast.add({ severity: 'warn', summary: 'Canceled', detail: 'Message Detail', life: 3000 });
            this.isModalVisible = false;
        },
    },
};
</script>

<style scoped lang="scss">
::v-deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}
::v-deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}
::v-deep(.p-progressbar) {
    height: 0.5rem;
    background-color: #d8dadc;
    .p-progressbar-value {
        background-color: #607d8b;
    }
}
::v-deep(.p-datatable .p-sortable-column .p-column-title) {
    display: block;
}
.p-datatable .p-column-filter {
    display: none;
}
.table-header {
    display: flex;
    justify-content: space-between;
}
.customer-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.3px;
    &.status-qualified {
        background: #c8e6c9;
        color: #256029;
    }
    &.status-unqualified {
        background: #ffcdd2;
        color: #c63737;
    }
    &.status-negotiation {
        background: #feedaf;
        color: #8a5340;
    }
    &.status-new {
        background: #b3e5fc;
        color: #23547b;
    }
    &.status-renewal {
        background: #eccfff;
        color: #694382;
    }
    &.status-proposal {
        background: #ffd8b2;
        color: #805b36;
    }
}
.p-progressbar-value.ui-widget-header {
    background: #607d8b;
}
@media (max-width: 640px) {
    .p-progressbar {
        margin-top: 0.5rem;
    }
}
.product-image {
    width: 100px;
    height: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.orders-subtable {
    padding: 1rem;
}
.product-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.3px;
    &.status-instock {
        background: #c8e6c9;
        color: #256029;
    }
    &.status-outofstock {
        background: #ffcdd2;
        color: #c63737;
    }
    &.status-lowstock {
        background: #feedaf;
        color: #8a5340;
    }
}
.order-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.3px;
    &.order-delivered {
        background: #c8e6c9;
        color: #256029;
    }
    &.order-cancelled {
        background: #ffcdd2;
        color: #c63737;
    }
    &.order-pending {
        background: #feedaf;
        color: #8a5340;
    }
    &.order-returned {
        background: #eccfff;
        color: #694382;
    }
}
.p-datatable {
    .p-sortable-column {
        &.p-highlight {
            &:hover {
                background: rgb(216 217 243);
                color: #464df2;
            }
        }
    }
}
.true-icon {
    color: #256029;
}
.false-icon {
    color: #c63737;
}
.w-100 {
    width: 100%;
}
</style>
