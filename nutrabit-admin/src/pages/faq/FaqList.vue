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
                            <InputText id="googlurl" type="text" placeholder="검색어 입력" v-model="searchData" @keyup="resetdata" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
                <div class="p-mb-4 p-mb-lg-0"></div>
                <div>
                    <Button :label="$t('button.search')" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchFaq"></Button>
                    <!-- <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" v-on:click="reInitialize"></Button> -->
                </div>
            </div>
        </div>
        <div class="card">
            <div class="p-grid">
                <div class="p-col-12">
                    <div class="p-d-flex p-jc-between p-mb-2">
                        <div style="display: flex">
                            <h4>{{ $t('Faq.list.header') }}</h4>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Dropdown v-model="searchData1" :options="categoryDropdownValues" optionLabel="name_ko" placeholder="카테고리 선택" @change="searchcategory" />
                        </div>

                        <div>
                            <router-link to="/faq/add">
                                <Button :label="$t('Faq.addnew_faq')" icon="pi pi-plus" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button>
                            </router-link>
                        </div>
                    </div>
                    <div class="faq-table">
                        <DataTable :value="products" :paginator="true" class="p-datatable-gridlines" :rows="5" data-key="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll">
                            <ConfirmDialog group="dialog" />

                            <template #empty>데이터가 없습니다.</template>
                            <template #loading>데이터를 로드 중입니다. 기다리다.</template>

                            <Column field="Sl. No." header="번호" style="min-width: 3rem">
                                <template #body="{ data }">
                                    <span class="p-column-title">순서</span>
                                    {{ data.sl_no }}
                                </template>
                            </Column>
                            <Column field="Title" :header="$t('Faq.list.title')" style="min-width: 12rem">
                                <template #body="{ data }">
                                    <span class="p-column-title">Title</span>
                                    {{ data.title_ko }}
                                </template>
                            </Column>
                            <Column field="category" :header="$t('Faq.list.category')" style="min-width: 12rem">
                                <template #body="{ data }">
                                    <span class="p-column-title">Category</span>
                                    {{ data.category_name_ko }}
                                </template>
                            </Column>
                            <Column field="Status" :header="$t('Faq.list.status')" style="min-width: 12rem">
                                <template #body="{ data }">
                                    <span class="p-column-title">Status</span>
                                    <!-- {{ data.id }}
                                {{ data.status }}-->
                                    {{ $t(data.status) }}
                                </template>
                            </Column>

                            <Column field="Order" :header="$t('Faq.list.Order')" style="min-width: 12rem">
                                <template #body="{ data }">
                                    <span class="p-column-title">Order</span>

                                    <Button label="info" class="n-wrap p-button-outlined p-button-info p-mr-2 p-mb-2" style="display: flex" @click="up(data.id)">
                                        <i class="pi pi-caret-up p-mr-2"></i>
                                    </Button>

                                    <Button label="info" class="n-wrap p-button-outlined p-button-info p-mr-2 p-mb-2" style="display: flex" @click="down(data.id)">
                                        <i class="pi pi-caret-down p-mr-2"></i>
                                    </Button>
                                </template>
                            </Column>

                            <Column field="Actions" header="기능">
                                <template #body="{ data }">
                                    <span class="p-column-title">Actions</span>
                                    <p style="display: none">{{ data.status }}</p>
                                    <div style="display: flex">
                                        <router-link :to="'/faq/view/' + data.id">
                                            <Button label="info" class="n-wrap p-button-outlined p-button-info p-mr-2 p-mb-2">
                                                <i class="pi pi-eye p-mr-2"></i>
                                            </Button>
                                        </router-link>
                                        <router-link :to="'/faq/edit/' + data.id">
                                            <Button label="help" class="n-wrap p-button-outlined p-button-help p-mr-2 p-mb-2">
                                                <i class="pi pi-pencil p-mr-2"></i>
                                            </Button>
                                        </router-link>
                                        <a :href="'/admin/banner/delete/' + data.id" @click.prevent="deleteNote(data.id)" data-toggle="tooltip" data-placement="right" title="메모 삭제">
                                            <Button icon="pi pi-trash" class="n-wrap p-button-danger p-button-outlined p-mr-2 p-mb-2" />
                                        </a>
                                        <!-- <Button :label="$t('button.delete')" icon="pi pi-trash" class="n-wrap p-button-danger p-button-outlined p-mr-2 p-mb-2" @click="confirm(data.id)" /> -->
                                    </div>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import FaqService from '../../service/API/FaqService';
import axios from 'axios';
import moment from 'moment';
export default {
    data() {
        return {
            // dropdownValues: [{ name: 'nft',code:'NFT' }, { name: 'card_news',code:'Card News' }, { name: 'media_press',code:'Media press' }, { name: 'de_fi_services',code:'De-Fi Services' }],
            dropdownValues: [{ name: '활동적인' }, { name: '비활성' }],
            serial: 0,
            // filtercategory:'',
            id: '',
            selectedFilter: '',
            dropdownValue: '',
            calendarValue1: '',
            calendarValue2: '',
            link: '',
            status: '',
            createdDate: '',
            isModalVisible: false,
            products: null,
            title: '',
            loading1: true,
            deletedID: null,
            searchData: '',
            searchData1: '',
            startDate: '',
            endDate: '',
            sortBy: '',
            sortOrder: '',
            total: '',
            sl_no: '',
            title_ko: '',
            category_name_ko: '',
            categoryDropdownValues: '',
            categoryDropdownValue: null,
            category_id: '',
            name_ko: '',
        };
    },
    created() {
        this.faqService = new FaqService();
    },
    // computed: {
    //         filtercategory() {
    //             if (!this.selectedFilter) {
    //             return this.searchData;
    //         }
    //         let categoryname,name, name_ko;
    //         switch(this.selectedFilter.name_ko) {
    //            // one hour milliseconds
    //            case name_ko:
    //            categoryname = name_ko; break;
    //            }
    //         name =  Date.now() - this.selectedFilter.value * categoryname;
    //         return this.searchData.filter((item) => Date.parse(item.name) >= name);
    //         }
    // },

    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.faqService.getFaqCategoryDropdown().then((data) => {
            this.categoryDropdownValues = data;
            //this.products = data;
            this.loading1 = false;
            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            console.log(this.products);
            console.log(data);
        });
        this.faqService
            .getFaqList(this.searchData, this.status, this.startDate, this.endDate, this.sortBy, this.sortOrder)
            .then((res) => {
                this.products = res.data.data.faq;
                //  this.total = res.data.data.total;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));

                console.log(res.data.data.faq);
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
            axios({ method: 'post', url: '/admin/faq/up', data: { id: ids } }).then(function (response) {
                console.log(response);
            });
            setTimeout(() => {
                this.faqService.getFaqList().then((res) => {
                    this.products = res.data.data.faq;
                    console.log(res);
                    this.loading1 = false;
                });
            }, 500);
        },
        down(ids) {
            axios({ method: 'post', url: '/admin/faq/down', data: { id: ids } }).then(function (response) {
                console.log(response);
            });
            setTimeout(() => {
                this.faqService.getFaqList().then((res) => {
                    this.products = res.data.data.faq;
                    console.log(res);
                    this.loading1 = false;
                });
            }, 500);
        },
        searchcategory() {
            console.log(this.searchData1 ? this.searchData1.id : this.searchData1);
            this.faqService.getFaqSearch(this.searchData1 ? this.searchData1.id : this.searchData1, this.status, this.startDate, this.endDate, this.sortBy, this.sortOrder).then((res) => {
                // this.products = res.data.data.faq;
                //  this.total = res.data.data.total;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                // let items = res.data.data.faq.filter((item) => item.category_name_ko.match(this.searchData1));
                this.products = res.data.data.faq;
                // alert(this.searchData1)
                console.log(res.data.data.faq);
            });
            //   if (this.refercode != '') {

            // }
        },

        resetdata() {
            if (this.searchData === '') {
                this.faqService.getFaqList(this.searchData, this.status, this.startDate, this.endDate, this.sortBy, this.sortOrder).then((res) => {
                    this.products = res.data.data.faq;
                    this.loading1 = false;
                    //console.log(data);
                });
            }
        },
        searchFaq() {
            if (this.searchData === '') {
                // this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } else {
                this.faqService
                    .getFaqList(this.searchData, this.status, this.startDate, this.endDate, this.sortBy, this.sortOrder)
                    .then((res) => {
                        this.products = res.data.data.faq;
                        // this.total = res.data.data.total;
                        this.loading1 = false;
                        //console.log(data);
                    })
                    .catch(() => {
                        this.products = [];
                        this.loading1 = false;
                    });
            }
        },
        reInitialize() {
            this.title_ko = null;
            this.category_name_ko = null;
            this.status = null;

            this.faqService
                .getFaqList(this.searchData, this.status, this.startDate, this.endDate, this.sortBy, this.sortOrder)
                .then((res) => {
                    this.products = res.data.data.faq;
                    //this.total = res.data.data.total;
                    this.loading1 = false;
                    // console.log(data);
                })
                .catch((err) => console.log(err));
        },
        dateformat(value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY - hh:mm:ss');
            }
        },

        deleteNote: function (id) {
            console.log(id);
            var self = this;
            this.$confirm.require({
                group: 'dialog',
                header: '확인',
                message: '삭제하시겠습니까?',
                icon: 'pi pi-trash',
                acceptLabel: '확인',
                rejectLabel: '취소',
                accept: () => {
                    axios({ method: 'delete', url: '/admin/faq/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                        self.faqService
                            .getFaqList(self.title_ko, self.category_name_ko, self.status)
                            .then((res) => {
                                self.products = res.data.data.faq;
                                // self.total = res.data.data.total;
                                self.loading1 = false;
                                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));

                                //console.log(data);
                            })
                            .catch((err) => console.log(err));

                        // let i = this.products.map(data => data.id).indexOf(id);

                        // this.products.splice(i, 1)
                    });
                    this.$toast.add({ severity: 'info', summary: '삭제됨', detail: '성공적으로 삭제되었습니다.', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '당신은 거부했습니다', life: 3000 });
                },
            });
            //  setTimeout(() => {
            //     this.bannerService.getBannerList().then((data) => {
            //         this.products = data;
            //         console.log(data);
            //         this.loading1 = false;
            //     });
            // }, 500);
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

.p-ink .p-ink-active {
    border: 0px solid;
}
</style>
