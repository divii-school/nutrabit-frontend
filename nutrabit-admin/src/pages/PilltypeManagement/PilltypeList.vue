<template>
    <div>
        <Toast />
        
        <div class="card">
            <div class="p-grid">
                <div class="p-col-12">
                    <div class="p-d-flex p-jc-between p-mb-2">
                        <h4>{{ $t('PillType.list.header') }}</h4>
                        <div>
                            <router-link to="/addpilltype">
                                <Button :label="$t('PillType.addnew_pilltype')" icon="pi pi-plus" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button>
                            </router-link>
                        </div>
                    </div>
                    <DataTable :value="products" :paginator="true" class="p-datatable-gridlines" :rows="5" data-key="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll">
                        <ConfirmDialog group="dialog" />

                        <template #empty>데이터가 없습니다.</template>
                        <template #loading>데이터를 로드 중입니다. 기다리다..</template>

                        <Column field="Sl. No." :header="$t('PillType.list.sr')" >
                            <template #body="{ data }">
                                <span class="p-column-title">Sl. No.</span>
                                {{ data.sl_no }}
                            </template>
                        </Column>
                           <Column field="Image" :header="$t('PillType.list.image')">
                            <template #body="{ data }">
                                <span class="p-column-title">Image</span>
                                 <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public' + data.pillImage" alt="이미지를 사용할 수 없음" class="product-image" />
                                <!-- <img :src="'https://back.nutri33.co.kr/public' + data.pillImage" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                            </template>
                        </Column>
                        <Column field="name" :header="$t('PillType.list.name')" >
                            <template #body="{ data }">
                                <span class="p-column-title">Name</span>
                                {{ data.name_ko }}
                            </template>
                        </Column>
                       

                       
                       
                        
                        <Column field="Actions" :header="$t('Banner.list.see_more')">
                            <template #body="{ data }">
                                <span class="p-column-title">Actions</span>
                                <p style="display: none">{{ data.status }}</p>
                                <div style="display: flex">
                                    <router-link :to="'/pilltypeView/' + data.id"
                                        ><Button label="info" class="n-wrap p-button-outlined p-button-info p-mr-2 p-mb-2"><i class="pi pi-eye p-mr-2"></i> </Button>
                                    </router-link>
                                    <router-link :to="'/editpilltype/' + data.id">
                                        <Button label="help" class="n-wrap p-button-outlined p-button-help p-mr-2 p-mb-2"> <i class="pi pi-pencil p-mr-2"></i> </Button>
                                    </router-link>
                                    <a :href="'/admin/pill/delete/' + data.id" @click.prevent="deleteNote(data.id)"  data-toggle="tooltip" data-placement="right" title="메모 삭제">
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
import PillTypeService from '../../service/API/PillTypeService';
import axios from 'axios';
import moment from 'moment';
export default {
    data() {
        return {
            // dropdownValues: [{ name: 'nft',code:'NFT' }, { name: 'card_news',code:'Card News' }, { name: 'media_press',code:'Media press' }, { name: 'de_fi_services',code:'De-Fi Services' }],
            dropdownValues: [{ name: 'active' }, { name: 'inactive' }],
            serial: 0,
            dropdownValue: '',
            calendarValue1: '',
            calendarValue2: '',
            name_ko:'',
            status:'',
            createdDate:'',
            isModalVisible: false,
            products: null,
            pillImage: '',
            loading1: true,
            deletedID: null,
            searchData: '',
            startDate: '',
            endDate: '',
            sortBy: '',
            sortOrder: '',
            sl_no:'',

        };
    },
    created() {
        this.pillTypeService = new PillTypeService();
    },
    mounted() {
         const route = useRoute();
         console.log(route.params);
        this.pillTypeService
            .getPillTypeList(this.name_ko,this.pillImage)
            .then((data) => {
                this.products = data;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
           
                console.log(data);
            })
            .catch((err) => console.log(err));
    },
    methods: {
       
        reInitialize() {
            this.name_ko = null;
            this.pillImage = null;
            // this.status = null;
            // this.createdDate = null;
            this.pillTypeService
                .getPillTypeList(this.name_ko,this.pillImage)
                .then((data) => {
                    this.products = data;
                    this.loading1 = false;
                    console.log(data);
                })
                .catch((err) => console.log(err));
        },
        dateformat(value) {
             if (value) {
            return moment(String(value)).format('MM/DD/YYYY - hh:mm')
            }
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
                    axios({ method: 'delete', url: '/admin/pill/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                        self.pillTypeService
                        .getPillTypeList(self.name_ko,self.pillImage)
                        .then((data) => {
                            self.products = data;
                            self.loading1 = false;
                            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                    
                            console.log(data);
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
