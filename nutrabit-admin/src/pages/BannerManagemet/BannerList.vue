<template>
    <div>
        <Toast />
        <div class="card">
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('Banner.s-header') }}</h5>
                    <div class="p-formgrid p-grid">
                        <div class="p-field p-col-12 p-md-3">
                            <label for="type">{{ $t('Banner.search.type') }}</label>
                            <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="code" :placeholder="$t('Banner.placeholder.select')" />
                        </div>

                        <div class="p-field p-col-12 p-md-3">
                            <label for="name2">{{ $t('search.label.startDate') }}</label>
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue1" placeholder="YYYY.MM.DD" dateFormat="yy.mm.dd"></Calendar>
                        </div>
                        <div class="p-field p-col-12 p-md-3">
                            <label for="email2">{{ $t('search.label.lastDate') }}</label>
                            <Calendar :showIcon="true" :showButtonBar="true" :minDate="calendarValue1" v-model="calendarValue2" placeholder="YYYY.MM.DD" dateFormat="yy.mm.dd"></Calendar>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
                <div class="p-mb-4 p-mb-lg-0"></div>
                <div>
                    <Button :label="$t('button.search')" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchBannner"></Button>
                    <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" v-on:click="reInitialize"></Button>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="p-grid">
                <div class="p-col-12">
                    <div class="p-d-flex p-jc-between p-mb-2">
                        <h4>{{ $t('Banner.list.header') }}</h4>
                        <div>
                            <router-link to="/add-banner">
                                <Button :label="$t('Banner.addnew_banner')" icon="pi pi-plus" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button>
                            </router-link>
                        </div>
                    </div>
                    <DataTable :value="products" :paginator="true" class="p-datatable-gridlines" :rows="5" data-key="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll">
                        <ConfirmDialog group="dialog" />

                        <template #empty>No Banners found.</template>
                        <template #loading>Loading banner data. Please wait.</template>

                        <Column field="Sl. No." header="No." style="min-width: 3rem">
                            <template #body="{ index }">
                                <span class="p-column-title">Sl. No.</span>
                                {{ index + 1 }}
                            </template>
                        </Column>
                        <Column field="Change Order" :header="$t('Banner.list.changeorder')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Change Order</span>
                                <p style="display: none">{{ data.status }}</p>
                                <div style="display: flex">
                                    <Button label="" icon="pi pi-arrow-up" class="p-button-plain p-button-text p-mr-2 p-mb-2" @click="up(data.id)" />
                                    <Button label="" icon="pi pi-arrow-down" class="p-button-plain p-button-text p-mr-2 p-mb-2" @click="down(data.id)" />
                                </div>
                            </template>
                        </Column>
                        <Column field="Image" :header="$t('Banner.list.image')">
                            <template #body="{ data }">
                                <span class="p-column-title">Image</span>
                                <img :src="'http://da-lab-admin.dvconsulting.org:4040/' + data.imageUrl" :alt="data.imageUrl" class="product-image" />
                            </template>
                        </Column>
                        <Column field="Title" :header="$t('Banner.list.title')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Title</span>
                                {{ data.title }}
                            </template>
                        </Column>
                        <Column field="Type" :header="$t('Banner.list.type')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Type</span>
                                {{ data.type }}
                            </template>
                        </Column>

                        <Column field="URL" :header="$t('Banner.list.url')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">URL</span>
                                {{ data.link }}
                            </template>
                        </Column>
                        <Column field="Exposure" :header="$t('Banner.list.status')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Exposure</span>
                                <!-- {{ data.id }}
                                {{ data.status }} -->
                                <InputSwitch v-model="data.status" trueValue="active" @change="switchValue(data.id, data.status)" />
                            </template>
                        </Column>
                        <Column field="Creation-Date" :header="$t('Banner.list.created_dt')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Creation-Date</span>
                                {{ formatDate(data.createdDate) }}
                            </template>
                        </Column>
                        <Column field="Actions" :header="$t('Banner.list.see_more')">
                            <template #body="{ data }">
                                <span class="p-column-title">Actions</span>
                                <p style="display: none">{{ data.status }}</p>
                                <div style="display: flex">
                                    <router-link :to="'/view-banner/' + data.id"
                                        ><Button label="info" class="n-wrap p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> {{ $t('button.view') }}</Button>
                                    </router-link>
                                    <router-link :to="'/edit-banner/' + data.id">
                                        <Button label="help" class="n-wrap p-button-outlined p-button-help p-mr-2 p-mb-2"> <i class="pi pi-user-edit p-mr-2"></i>{{ $t('button.edit') }} </Button>
                                    </router-link>
                                    <Button :label="$t('button.delete')" icon="pi pi-trash" class="n-wrap p-button-danger p-button-outlined p-mr-2 p-mb-2" @click="confirm(data.id)" />
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
            dropdownValues: [{ name: 'nft',code:'NFT' }, { name: 'card_news',code:'Card News' }, { name: 'media_press',code:'Media press' }, { name: 'de_fi_services',code:'De-Fi Services' }],
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
        switchValue(ids, switchstatus) {
            console.log(ids, switchstatus);
            axios({ method: 'put', url: '/admin/banner/activate-deactivate', data: { id: ids, status: switchstatus === false ? 'inactive' : 'active' } }).then(function (response) {
                console.log(response);
            });
        },
        up(ids) {
            axios({ method: 'post', url: '/admin/banner/up', data: { id: ids } }).then(function (response) {
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
            axios({ method: 'post', url: '/admin/banner/down', data: { id: ids } }).then(function (response) {
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
            if (this.dropdownValue === '' && this.calendarValue1 === '' && this.calendarValue2 === '') {
                this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } else {
                console.log(this.dropdownValue?.name);
                this.bannerService
                    .getBannerList(this.dropdownValue?.name, this.calendarValue1, this.calendarValue2)
                    .then((data) => {
                        this.products = data;
                        this.loading1 = false;
                        console.log(data);
                    })
                    .catch(() => {
                        this.products = [];
                        this.loading1 = false;
                    });
            }
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
            this.$confirm.require({
                group: 'dialog',
                header: '확인',
                message: '삭제하시겠습니까?',
                icon: 'pi pi-trash',
                acceptLabel:"확인",
                rejectLabel:"취소",
                accept: () => {
                    axios({ method: 'delete', url: '/admin/banner/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                    });
                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: '성공적으로 삭제되었습니다.', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: 'You have rejected', life: 3000 });
                },
            });
            setTimeout(() => {
                this.bannerService.getBannerList().then((data) => {
                    this.products = data;
                    console.log(data);
                    this.loading1 = false;
                });
            }, 2000);
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
    height: 50px;
    // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
