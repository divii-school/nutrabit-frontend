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
                    <Button :label="$t('button.search')" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchBannner"></Button>
                   <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-sm  p-mr-2 p-mb-2" @click="resetUser"></Button>
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

                        <template #empty>배너를 찾을 수 없습니다.</template>
                        <template #loading>Loading banner data. Please wait.</template>

                        <Column field="Sl. No." header="번호" style="min-width: 3rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Sl. No.</span>
                                {{ data.sl_no }}
                            </template>
                        </Column>
                         <Column field="Title" :header="$t('Banner.list.title')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Title</span>
                                {{ data.title }}
                            </template>
                        </Column>
                        <Column field="URL" :header="$t('Banner.list.url')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">URL</span>
                                {{ data.link }}
                            </template>
                        </Column>
                        <Column field="Status" :header="$t('Banner.list.status')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Status</span>
                                <!-- {{ data.id }}
                                {{ data.status }} -->
                                {{ data.status }}
                            </template>
                        </Column>
                         
                        <Column field="Creation-Date" :header="$t('Banner.list.created_dt')" style="min-width: 12rem">
                            <template #body="{ data }">
                                <span class="p-column-title">Creation-Date</span>
                                {{ dateformat(data.createdDate) }}
                            </template>
                        </Column>
                       

                       
                       
                        
                        <Column field="Actions" :header="$t('Banner.list.see_more')">
                            <template #body="{ data }">
                                <span class="p-column-title">Actions</span>
                                <p style="display: none">{{ data.status }}</p>
                                <div style="display: flex">
                                    <router-link :to="'/view-banner/' + data.id"
                                        ><Button label="info" class="n-wrap p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> </Button>
                                    </router-link>
                                    <router-link :to="'/edit-banner/' + data.id">
                                        <Button label="help" class="n-wrap p-button-outlined p-button-help p-mr-2 p-mb-2"> <i class="pi pi-pencil p-mr-2"></i> </Button>
                                    </router-link>
                                    <a :href="'/admin/banner/delete/' + data.id" @click.prevent="deleteNote(data.id)"  data-toggle="tooltip" data-placement="right" title="메모 삭제">
                   <Button  icon="pi pi-trash" class="n-wrap p-button-danger p-button-outlined p-mr-2 p-mb-2"  />
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
import BannerService from '../../service/API/BannerService';
import axios from 'axios';
import moment from 'moment';
export default {
    data() {
        return {
            // dropdownValues: [{ name: 'nft',code:'NFT' }, { name: 'card_news',code:'Card News' }, { name: 'media_press',code:'Media press' }, { name: 'de_fi_services',code:'De-Fi Services' }],
            dropdownValues: [{ name: '활동적인' }, { name: '비활성' }],
            serial: 0,
            dropdownValue: '',
            calendarValue1: '',
            calendarValue2: '',
            link:'',
            status:'',
            createdDate:'',
            isModalVisible: false,
            products: null,
            title: '',
            loading1: true,
            deletedID: null,
            searchData: '',
            startDate: '',
            endDate: '',
            sortBy: '',
            sortOrder: '',
            total:'',
            sl_no:'',

        };
    },
    created() {
        this.bannerService = new BannerService();
    },
    mounted() {
         const route = useRoute();
         console.log(route.params);
        this.bannerService
            .getBannerList(this.title,this.link,this.status,this.createdDate)
            .then((res) => {
                this.products = res.data.data.banners;
                 this.total = res.data.data.total;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
           
                 console.log(res.data.data.total);
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
        resetUser() {
            this.searchData = '';
           
            this.loading1 = true;
            this.bannerService
                 .getBannerList(this.status,this.searchData,this.startDate,this.endDate,this.sortBy,this.sortOrder)
                    .then((res) => {
                        this.products = res.data.data.banners;
                        this.total = res.data.data.total;
                        this.loading1 = false;
                        //console.log(data);
                    })
                    .catch(() => {
                        this.products = [];
                        this.loading1 = false;
                    });
        },
        resetdata(){
            if (this.searchData === ''){
                this.bannerService
                .getBannerList(this.status,this.searchData,this.startDate,this.endDate,this.sortBy,this.sortOrder)
                .then((res) => {
                        this.products = res.data.data.banners;
                        this.total = res.data.data.total;
                        this.loading1 = false;
                        //console.log(data);
                    })
                    
            }
        },
        searchBannner() {
            if (this.searchData === '') {
            //    this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } else {
                this.bannerService
                    .getBannerList(this.status,this.searchData,this.startDate,this.endDate,this.sortBy,this.sortOrder)
                    .then((res) => {
                        this.products = res.data.data.banners;
                        this.total = res.data.data.total;
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
            this.link = null;
            this.status = null;
            this.createdDate = null;
            this.bannerService
                .getBannerList(this.title,this.link,this.status,this.createdDate)
                .then((res) => {
                    this.products = res.data.data.banners;
                        this.total = res.data.data.total;
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
                acceptLabel:"확인",
                rejectLabel:"취소",
                accept: () => 
                {
                    axios({ method: 'delete', url: '/admin/banner/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                        self.bannerService 
                        .getBannerList(self.title,self.link,self.status,self.createdDate)
                        .then((res) => {
                            self.products = res.data.data.banners;
                            self.total = res.data.data.total;
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

.p-button{
    background: #000000;
    border: 1px solid #0a0a0a;
}

.p-button.p-button-info.p-button-outlined, .p-buttonset.p-button-info > .p-button.p-button-outlined, .p-splitbutton.p-button-info > .p-button.p-button-outlined{
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}


.p-button.p-button-info.p-button-outlined:hover , .p-buttonset.p-button-info > .p-button.p-button-outlined, .p-splitbutton.p-button-info > .p-button.p-button-outlined:hover{
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-info.p-button-outlined:enabled:active, .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:active {
    background: rgba(2, 136, 209, 0.16);
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-help.p-button-outlined, .p-buttonset.p-button-help > .p-button.p-button-outlined, .p-splitbutton.p-button-help > .p-button.p-button-outlined {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-help.p-button-outlined:hover, .p-buttonset.p-button-help > .p-button.p-button-outlined, .p-splitbutton.p-button-help > .p-button.p-button-outlined:hover {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-danger.p-button-outlined, .p-buttonset.p-button-danger > .p-button.p-button-outlined, .p-splitbutton.p-button-danger > .p-button.p-button-outlined {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-danger.p-button-outlined:hover, .p-buttonset.p-button-danger > .p-button.p-button-outlined, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:hover {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}
</style>
