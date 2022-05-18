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
                            <InputText
                                id="googlurl"
                                type="text"
                                placeholder="제목입력"
                                v-model="title"
                                 @keyup="resetdata"
                            />
                        </div>

                      
                    </div>
                </div>
            </div>
            <div
                class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row"
            >
                <div class="p-mb-4 p-mb-lg-0"></div>
                <div>
                    <Button
                        :label="$t('button.search')"
                        icon="pi pi-search"
                        iconPos="left"
                        class="p-button p-button-sm p-mr-2 p-mb-2"
                        @click="searchNotice"
                    ></Button>
                    <!-- <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" v-on:click="reInitialize"></Button> -->
                </div>
            </div>
        </div>
        <div class="card">
            <div class="p-grid">
                <div class="p-col-12">
                    <div class="p-d-flex p-jc-between p-mb-2">
                        <h4>{{ $t('Notice.list.header') }}</h4>
                       

                        <div>
                            <router-link to="/add-notice">
                                <Button
                                    label="추가"
                                    icon="pi pi-plus"
                                    iconPos="left"
                                    class="p-button p-button-sm p-mr-2 p-mb-2"
                                ></Button>
                            </router-link>
                        </div>
                    </div>
                    <DataTable
                        :value="products"
                        :paginator="true"
                        class="p-datatable-gridlines"
                        :rows="5"
                        data-key="id"
                        :rowHover="true"
                        :loading="loading1"
                        :filters="filters1"
                        responsiveLayout="scroll"
                    >
                        <ConfirmDialog group="dialog" />

                        <template #empty>공지사항을 찾을 수 없습니다</template>
                        <template #loading>Loading Notice data. Please wait.</template>

                        <Column field="Sl. No." header="번호" style="min-width: 3rem">
                            <template #body="{ data }">
                                <span class="p-column-title">번호</span>
                                {{ data.sl_no }}
                            </template>
                        </Column>
                        <Column
                            field="Title"
                            :header="$t('Notice.list.title')"
                            style="min-width: 12rem"
                        >
                            <template #body="{ data }">
                                <span class="p-column-title">Title</span>
                                {{ data.title_ko }}
                            </template>
                        </Column>
                        <Column
                            field="status"
                            :header="$t('Notice.list.status')"
                            style="min-width: 12rem"
                        >
                            <template #body="{ data }">
                                <span class="p-column-title">status</span>
                                {{ $t(data.status) }}
                            </template>
                        </Column>
                        <Column
                            field="createddate"
                            :header="$t('Notice.list.createddate')"
                            style="min-width: 12rem"
                        >
                            <template #body="{ data }">
                                <span class="p-column-title">Createddate</span>
                                <!-- {{ data.id }}
                                {{ data.status }}-->
                               {{ dateformat(data.createdDate) }}
                            </template>
                        </Column>

                        <Column
                            field="Order"
                            :header="$t('Notice.list.Order')"
                            style="min-width: 12rem"
                        >
                            <template #body="{ data }">
                                <span class="p-column-title">Order</span>

                                <Button
                                    label="info"
                                    class="n-wrap p-button-outlined p-button-info p-mr-2 p-mb-2"
                                    style="display: flex; "
                                    @click="up(data.id)"
                                >
                                    <i class="pi pi-caret-up p-mr-2"></i>
                                    
                                </Button>

                                <Button
                                    label="info"
                                    class="n-wrap p-button-outlined p-button-info p-mr-2 p-mb-2"
                                     style="display: flex; "
                                     @click="down(data.id)"
                                >
                                    <i class="pi pi-caret-down p-mr-2"></i>
                                </Button>
                            </template>
                        </Column>
                       

                        <Column field="Actions" header="기능">
                            <template #body="{ data }">
                                <span class="p-column-title">Actions</span>
                                <p style="display: none">{{ data.status }}</p>
                                <div style="display: flex">
                                   
                                    <router-link :to="'/edit-notice/' + data.id">
                                        <Button
                                            label="help"
                                            class="n-wrap p-button-outlined p-button-help p-mr-2 p-mb-2"
                                        >
                                            <i class="pi pi-pencil p-mr-2"></i>
                                        </Button>
                                    </router-link>
                                    <a
                                        :href="'/admin/banner/delete/' + data.id"
                                        @click.prevent="deleteNote(data.id)"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="메모 삭제"
                                    >
                                        <Button
                                            icon="pi pi-trash"
                                            class="n-wrap p-button-danger p-button-outlined p-mr-2 p-mb-2"
                                        />
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
</template>

<script>
import { useRoute } from 'vue-router';
import NoticeService from '../../service/API/NoticeService';
import axios from 'axios';
import moment from 'moment';
export default {
    data() {
        return {
            // dropdownValues: [{ name: 'nft',code:'NFT' }, { name: 'card_news',code:'Card News' }, { name: 'media_press',code:'Media press' }, { name: 'de_fi_services',code:'De-Fi Services' }],
            dropdownValues: [{ name: '활동적인' }, { name: '비활성' }],
            serial: 0,
            // filtercategory:'',
            selectedFilter:'',
            dropdownValue: '',
            calendarValue1: '',
            calendarValue2: '',
            link: '',
            id:'',
           
            isModalVisible: false,
            products: null,
            title: '',
            loading1: true,
            deletedID: null,
            sl_no: '',
            title_ko: '',
            status: '',
            createdDate: '',
           

        };
    },
    created() {
        this.noticeService = new NoticeService();
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
        
        this.noticeService
            .getNoticeList(this.title)
            .then((res) => {
                this.products = res.data.data.notice;
                //  this.total = res.data.data.total;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));

                console.log(res.data.data.notice);
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
            axios({ method: 'post', url: '/admin/notice/up', data: { id: ids } }).then(function (response) {
                console.log(response);
            });
            setTimeout(() => {
                this.noticeService.getNoticeList().then((res) => {
                    this.products = res.data.data.notice;
                    console.log(res);
                    this.loading1 = false;
                });
            }, 500);
        },
        down(ids) {
            axios({ method: 'post', url: '/admin/notice/down', data: { id: ids } }).then(function (response) {
                console.log(response);
            });
            setTimeout(() => {
                this.noticeService.getNoticeList().then((res) => {
                    this.products = res.data.data.notice;
                    console.log(res);
                    this.loading1 = false;
                });
            }, 500);
        },

         resetdata(){
            if (this.title === ''){
                this.noticeService
                .getNoticeList(this.title)
                    .then((res) => {
                        this.products = res.data.data.notice;
                        this.loading1 = false;
                        //console.log(data);
                    })
                    
            } 
        },
      
        searchNotice() {
            if (this.title === '') {
                // this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } else {
                this.noticeService
                    .getNoticeList(this.title)
                    .then((res) => {
                        this.products = res.data.data.notice;
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
            this.title = null;
            

            this.noticeService
                .getNoticeList(this.title)
                .then((res) => {
                    this.products = res.data.data.notice;
                    //this.total = res.data.data.total;
                    this.loading1 = false;
                    // console.log(data);
                })
                .catch((err) => console.log(err));
        },
        dateformat(value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY - hh:mm:ss')
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
                acceptLabel: "확인",
                rejectLabel: "취소",
                accept: () => {
                    axios({ method: 'delete', url: '/admin/notice/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                        self.noticeService
                            .getNoticeList(self.title)
                            .then((res) => {
                                self.products = res.data.data.notice;
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
