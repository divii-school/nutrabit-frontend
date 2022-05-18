<template>
    <div class="p-grid">
        <Toast />
        
        <div class="p-col-12" v-show="clientlist">
            <div class="card p-fluid">
                <h4>
                    <strong>검색</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-4">
                        <label for="type">{{ $t('RawMaterialadd.list.RawMaterial') }}</label>
                        <!-- <label for="type">Raw Material Name</label> -->
                        <InputText
                            id="googlurl"
                            type="text"
                            placeholder="원료명"
                            v-model="searchData"
                            @keyup="resetdata"
                        />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="type">카테고리</label>
                       
                        <Dropdown v-model="sub_category_id"  :options="dropdownValues"   optionLabel="category_name_ko" placeholder="카테고리"  name="sub_category_id"
                            id="sub_category_id" />
                    </div>
                    <!-- <div class="p-field p-col-12 p-md-3">
                        <label for="pass">{{ $t('RawMaterialadd.list.startDate') }}</label>
                        <Calendar
                            :showIcon="true"
                            :showButtonBar="true"
                            v-model="from_date"
                            dateFormat="yy.mm.dd"
                            :placeholder="$t('RawMaterialadd.list.startDate')"
                        ></Calendar>
                    </div> -->
                </div>
                <div class="p-formgrid p-grid p-mb-3">
                    
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
                            @click="searchRaw"
                        ></Button>
                        <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-sm  p-mr-2 p-mb-2" @click="resetUser"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12" v-show="clientlist">
            <div class="card">
                <div class="p-grid">
                    <div class="p-col-12">
                        <div class="p-d-flex p-jc-between p-mb-2">
                            <h5>{{ $t('RawMaterialadd.list.header') }}</h5>
                            <div>
                                <router-link to="/excelrawmaterial">
                                    <Button
                                        :label="$t('RawMaterialadd.list.excel_raw')"
                                        icon="pi pi-download"
                                        iconPos="left"
                                        class="p-button p-button-sm p-mr-2 p-mb-2"
                                    ></Button>
                                </router-link>
                                <router-link to="/addRawMaterial">
                                    <Button
                                        :label="$t('RawMaterialadd.list.addnew_rawmaterial')"
                                        icon="pi pi-plus"
                                        iconPos="left"
                                        class="p-button p-button-sm p-mr-2 p-mb-2"
                                    ></Button>
                                </router-link>
                            </div>
                        </div>

                        <DataTable
                            :value="customer1"
                            :paginator="true"
                            class="p-datatable-gridlines"
                            :rows="5"
                            data-key="id"
                            :rowHover="true"
                            :loading="loading1"
                            :filters="filters1"
                            responsiveLayout="scroll"
                            style="text-align: center"
                        >
                            <ConfirmDialog group="dialog" />

                            <template #empty>데이터가 없습니다</template>
                            <template #loading>Loading data. Please wait.</template>

                            <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                            <Column
                                header="번호"
                                
                            >
                                <template #body="{ data }">
                                    <span class="p-column-title">SlNo</span>
                                  
                                    {{ data.sl_no }}
                                </template>
                            </Column>

                            <Column
                                field="ReferralCode"
                                :header="$t('RawMaterialadd.list.name')"
                               
                            >
                                <template #body="{ data }">
                                    <span class="p-column-title">Name</span>
                                  
                                    {{ data.material_name_ko }}
                                </template>
                            </Column>
                            <Column
                                :header="$t('RawMaterialadd.list.Categories')"
                                
                            >
                                <template #body="{ data }">
                                    <span class="p-column-title">Category</span>
                                 
                                    {{ data.category_name_ko }}
                                </template>
                            </Column>
                            <Column
                                field="Exposure"
                                header="상태"
                                
                            >
                                <template #body="{ data }">
                                    <span class="p-column-title">Exposure</span>
                                   
                                    {{ $t(data.status) }}
                                    <!-- <InputSwitch v-model="data.status" trueValue="active" @change="switchValue(data.id, data.status)" /> -->
                                </template>
                            </Column>

                            <Column header="기능">
                                <template #body="{ data }">
                                    <span class="p-column-title">Balance</span>
                                    <p style="display: none">{{ data.mobile }}</p>
                                    <div style="display: flex">
                                        <router-link
                                            :to="'/viewraw-material-registration/' + data.id"
                                        >
                                            <Button
                                                label="info"
                                                class="p-button-outlined p-button-info p-mr-2 p-mb-2"
                                            >
                                                <i class="pi pi-eye p-mr-2"></i>
                                            </Button>
                                        </router-link>
                                        <router-link
                                            :to="'/editraw-material-registration/' + data.id"
                                        >
                                            <Button
                                                label="help"
                                                class="p-button-outlined p-button-help p-mr-2 p-mb-2"
                                            >
                                                <i class="pi pi-pencil p-mr-2"></i>
                                            </Button>
                                        </router-link>
                                        <Button
                                            icon="pi pi-trash"
                                            class="p-button-danger p-button-outlined p-mr-2 p-mb-2"
                                            @click="confirm(data.id)"
                                        />
                                    </div>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
        <Dialog
            :header="$t('dfc_user.popup.header')"
            v-model:visible="display"
            :breakpoints="{ '960px': '75vw' }"
            :style="{ width: '30vw' }"
            :modal="true"
        >
            <div class="p-field p-fluid">
                <ul>
                    <li
                        v-for="item in records"
                        :key="item.title"
                    >{{ item.title }} : {{ item.count }}</li>
                </ul>
            </div>
            <template #footer>
                <Button
                    :label="$t('button.ok')"
                    @click="close"
                    icon="pi pi-pi-times"
                    class="p-button-primary"
                />
            </template>
        </Dialog>
    </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import RawService from '../../service/API/RawService';
export default {
    data() {
        return {
            clientlist: true,
            detailsclient: false,
            records: [],
            selectedItemss: '',
            render: true,
            display: false,
            calendarValue: '',
            calendarValue1: '',
            customer1: null,
            loading1: true,
            idFrozen: false,
            products: null,
            user: null,
            refercode: '',
            error: {},
            clientdata: '',
            sub_category_id:'',
            status: '',
            id: '',
            email: '',
            startDate: '',
            from_date:'',
            endDate: '',
            sortBy: '',
            sortOrder: '',
            createdDate: '',
            material_name_ko: '',
            searchdate:'',
            category_id: '',
            dropdownValue: null,
            dropdownValues: '',
            searchData: '',
            sl_no: '',

        };
    },
    customerService: null,
    productService: null,
    created() {
        this.rawService = new RawService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.loading1 = true;
        this.rawService
            .getRawList(this.status, this.material_name_ko, this.category_id, this.startDate, this.endDate, this.sortBy, this.sortOrder)
            .then((data) => {
                this.customer1 = data;
                this.loading1 = false;
                //this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            })
        this.rawService
            .getRawCategoryDropdown()
            .then((data) => {
                this.dropdownValues = data;
                // this.products = data;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                console.log(this.dropdownValues);
                console.log(data);
            })


        
            .catch((err) => {
                this.loading1 = false;
                this.customer1 = [];
                if (err.response.data.status == '403') {
                    localStorage.clear();
                    this.$router.push({ name: 'login' });
                }
            });
    },
    watch: {},
    methods: {
         addDay(val){
            const date = new Date(val);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (val = yyyy + '-' + mm + '-' + dd );
        },
        showdetails() {
            this.clientlist = false;
            this.detailsclient = true;
        },
        dropdownCategory() {
            axios({ method: 'get', url: '/admin/product_category/category2Dropdown/' }).then(function (response) {
                console.log(response);
                this.dropdownValue = response.data.data.productCategory;
            });
        },
        backList() {
            this.clientlist = true;
            this.detailsclient = false;
        },
        detailget(myObj) {
            // localStorage.setItem('detail_dafc', JSON.stringify(myObj));
            this.clientdata = myObj;
        },
         resetUser() {
            this.searchData = '';
            this.sub_category_id = '';
            this.from_date = '';
           
            this.loading1 = true;
            if(this.from_date!=''){
                    this.searchdate = this.addDay(this.from_date)
                } else {
                    this.searchdate = ""
                }
           this.rawService
                    .getRawList(this.status, this.searchData, this.sub_category_id?this.sub_category_id.id:this.sub_category_id,  this.searchdate, this.endDate, this.sortBy, this.sortOrder)
                    .then((data) => {
                        this.customer1 = data;
                        this.loading1 = false;
                        console.log(data);
                    })
                    .catch(() => {
                        this.customer1 = [];
                        this.loading1 = false;
                    });
        },

        resetdata(){
            if (this.searchData === ''){
                this.rawService
                .getRawList(this.status, this.searchData, this.sub_category_id?this.sub_category_id.id:this.sub_category_id, this.from_date, this.endDate, this.sortBy, this.sortOrder)
                    .then((data) => {
                        this.customer1 = data;
                        this.loading1 = false;
                        //console.log(data);
                    })
                    
            } 
        },
        searchRaw() {
            // console.log(this.name);
            // console.log(this.id);

            if (this.searchData === '' && this.sub_category_id === '' ) {
                // this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } else {
                // if(this.from_date!=''){
                //     this.searchdate = this.addDay(this.from_date)
                // } else {
                //     this.searchdate = ""
                // }
                console.log(  this.sub_category_id)
                this.rawService
                
                    .getRawList(this.status,this.page,this.limit, this.searchData, this.sub_category_id?this.sub_category_id.id:this.sub_category_id,this.sortBy, this.sortOrder, this.to_date)
                    .then((data) => {
                        this.customer1 = data;
                        this.loading1 = false;
                        console.log(data);
                    })
                    .catch(() => {
                        this.customer1 = [];
                        this.loading1 = false;
                    });
            }
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
            return (value = `${yyyy}-${mm}-${dd}`);
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
                header: '확인',
                message: '삭제하시겠습니까?',
                icon: 'pi pi-trash',
                acceptLabel:"확인",
                rejectLabel:"취소",
                accept: () => {
                    axios({ method: 'delete', url: '/admin/product_raw_material/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                       self.rawService
                            .getRawList(self.status, self.material_name_ko, self.category_id, self.startDate, self.endDate, self.sortBy, self.sortOrder)
                            .then((data) => {
                                self.customer1 = data;
                                self.loading1 = false;
                            })
                    });
                    this.$toast.add({ severity: 'info', summary: '삭제됨', detail: '성공적으로 삭제되었습니다.', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '당신은 거부했습니다', life: 3000 });
                },
            });
         
            setTimeout(() => {
                this.rawService.getRawList().then((data) => {
                    this.customer1 = data;
                    console.log(data);
                    this.loading1 = false;
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
.flow {
    color: red;
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
</style>
