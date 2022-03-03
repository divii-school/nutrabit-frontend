<template>
    <div>
        <Toast />
        <!-- <div class="card">
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('popup.s-header') }}</h5>
                    <div class="p-formgrid p-grid">
                        <div class="p-field p-col-12 p-md-3">
                            <label for="type">Type</label>
                            <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />
                        </div>
                        <div class="p-field p-col-12 p-md-3">
                            <label for="type">{{ $t('popup.search.title') }}</label>
                            <InputText id="googlurl" type="text" placeholder="search title" v-model="title" />
                        </div>

                        <div class="p-field p-col-12 p-md-3">
                            <label for="name2">{{ $t('search.label.startDate') }}</label>
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue1" placeholder="YYYY.MM.DD" dateFormat="yy.mm.dd"></Calendar>
                        </div>
                        <div class="p-field p-col-12 p-md-3">
                            <label for="email2">{{ $t('search.label.lastDate') }}</label>
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue2" placeholder="YYYY.MM.DD" dateFormat="yy.mm.dd" :minDate="calendarValue1"></Calendar>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
                <div class="p-mb-4 p-mb-lg-0"></div>
                <div>
                    <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="reInitialize"></Button>
                    <Button :label="$t('button.search')" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchBannner"></Button>
                </div>
            </div>
        </div> -->
        <div class="card">
            <div class="p-grid">
                <div class="p-col-12">
                    <div class="p-d-flex p-jc-between p-mb-2">
                        <h4>{{ $t('popup.list.header') }}</h4>
                    </div>
                    <DataTable :value="products" :paginator="true" class="p-datatable-gridlines" :rows="10" data-key="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll">
                        <ConfirmDialog group="dialog" />

                        <template #empty>No customers found.</template>
                        <template #loading>Loading customers data. Please wait.</template>

                        <Column field="SL. No." header="SL. No." style="min-width: 3rem">
                            <template #body="{ index }">
                                <span class="p-column-title">SL. No.</span>
                                {{ index + 1 }}
                            </template>
                        </Column>

                        <Column field="Title" :header="$t('popup.list.title')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Title</span>
                                {{ data.title }}
                            </template>
                        </Column>
                        <Column field="Status" :header="$t('popup.list.status')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Status</span>
                                <!-- {{ data.id }}
                                {{ data.status }} -->
                                <InputSwitch v-model="data.status" trueValue="active" @change="switchValue(data.id, data.status)" />
                            </template>
                        </Column>
                        <Column field="Period-Date" :header="$t('popup.list.p_date')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Period-Date</span>
                                {{ data.periodStartDate == null ? 'Not given' : `${formatDate(data.periodStartDate)} - ${formatDate(data.periodEndDate)}` }}
                            </template>
                        </Column>

                        <Column field="Management" :header="$t('popup.list.see_more')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Management</span>
                                <p style="display: none">{{ data.status }}</p>
                                <div style="display: flex">
                                    <router-link @mouseenter="sendpopupdesc(data.id)" :to="'/view-popup/' + data.id">
                                        <Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> {{ $t('button.view') }}</Button>
                                    </router-link>
                                    <router-link @mouseenter="sendpopupdesc(data.id)" :to="'/edit-popup/' + data.id">
                                        <Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"> <i class="pi pi-user-edit p-mr-2"></i> {{ $t('button.edit') }}</Button>
                                    </router-link>
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
import PopupService from '../../service/API/PopupService';
import axios from 'axios';
export default {
    data() {
        return {
            dropdownValues: [{ name: 'active' }, { name: 'inactive' }],
            serial: 0,
            calendarValue1: '',
            calendarValue2: '',
            isModalVisible: false,
            products: null,
            title: '',
            loading1: true,
            deletedID: null,
        };
    },
    created() {
        this.popupService = new PopupService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.popupService.getPopupList(this.title, this.calendarValue1, this.calendarValue2).then((data) => {
            this.products = data;
            this.loading1 = false;
            this.products.forEach((customer) => (customer.createdDate = new Date(customer.periodStartDate)));
            console.log(data);
        });
    },
    methods: {
        sendpopupdesc(ids) {
            this.popupService.viewPopup(ids).then((res) => {
                localStorage.setItem('desc', res.description);
            });
        },
        switchValue(ids, switchstatus) {
            console.log(ids, switchstatus);
            axios({ method: 'put', url: '/admin/popUpSetting/activate-deactivate', data: { id: ids, status: switchstatus === false ? 'inactive' : 'active' } }).then(function (response) {
                console.log(response);
            });
        },
        searchBannner() {
            console.log(this.dropdownValue?.name);
            if (this.title == '' && this.calendarValue1 == '' && this.calendarValue2 == '') {
                this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } else {
                this.popupService
                    .getPopupList(this.title, this.calendarValue1, this.calendarValue2)
                    .then((data) => {
                        this.products = data;
                        this.loading1 = false;
                        this.products.forEach((customer) => (customer.createdDate = new Date(customer.periodStartDate)));
                        console.log(data);
                    })
                    .catch(() => {
                        this.products = [];
                        this.loading1 = false;
                    });
            }
        },
        reInitialize() {
            this.title = null;
            this.calendarValue1 = null;
            this.calendarValue2 = null;
            this.title = null;
            this.popupService.getPopupList(this.title, this.calendarValue1, this.calendarValue2).then((data) => {
                this.products = data;
                this.loading1 = false;
                this.products.forEach((customer) => (customer.createdDate = new Date(customer.periodStartDate)));
                console.log(data);
            });
        },
        confirm(id) {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: '/admin/banner/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                    });
                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
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
            // var hr = date.getHours();
            // var min = date.getMinutes();
            // var sec = date.getSeconds();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (value = yyyy + '/' + mm + '/' + dd + ' ');
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
