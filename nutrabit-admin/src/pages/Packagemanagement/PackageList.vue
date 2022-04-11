<template>
    <div class="p-grid">
        <Toast />
        
       
        <div class="p-col-12" v-show="clientlist">
            <div class="card">
                <div class="p-grid">
                    <div class="p-col-12">
                        <div class="p-d-flex p-jc-between p-mb-2">
                            <h5>{{ $t('PackageType.list.header') }}</h5>
                            <div>
                            
                                <router-link to="/addpackagetype">
                                    <Button
                                        :label="$t('PackageType.list.addnew_packagetype')"
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

                            <template #empty>No Data found.</template>
                            <template #loading>Loading data. Please wait.</template>

                            <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                            <Column header="번호" style="min-width: 12rem">
                                <template #body="{ data }">
                                    <span class="p-column-title">번호</span>
                                    
                                    {{ data.sl_no }}
                                </template>
                            </Column>

                            <Column
                                field="image"
                                :header="$t('PackageType.list.Image')"
                                style="min-width: 12rem"
                            >
                                <template #body="{ data }">
                                    <span class="p-column-title">Image</span>
                                    <img
                                        :src="'http://api-nutrabbit-dev.dvconsulting.org/public' + data.image_path"
                                        :alt="data.image_path"
                                        class="product-image"
                                    />
                                    <!-- {{ data.image }} -->
                                </template>
                            </Column>
                            <Column
                                :header="$t('PackageType.list.PackageName')"
                                style="min-width: 12rem"
                            >
                                <template #body="{ data }">
                                    <span class="p-column-title">Package Name</span>
                                  
                                    {{ data.name_ko }}
                                </template>
                            </Column>
                   

                            <Column :header="$t('PackageType.list.Actions')">
                                <template #body="{ data }">
                                    <span class="p-column-title">Balance</span>
                                    <p style="display: none">{{ data.mobile }}</p>
                                    <div style="display: flex">
                                        <router-link :to="'/view-package-type/' + data.id">
                                            <Button
                                                label="info"
                                                class="p-button-outlined p-button-info p-mr-2 p-mb-2"
                                            >
                                                <i class="pi pi-eye p-mr-2"></i>
                                            </Button>
                                        </router-link>
                                        <router-link :to="'/edit-package-type/' + data.id">
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
import PackageTypeService from '../../service/API/PackageTypeService';
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
            sl_no:'',
            status: '',
            id: '',
            email: '',
            startDate: '',
            endDate: '',
            sortBy: '',
            sortOrder: '',
            createdDate: '',
            name_ko: '',
            name_en: '',
            image: '',
            image_path: '',
            dropdownValue: null,
            dropdownValues: '',

        };
    },
    customerService: null,
    productService: null,
    created() {
        this.packageTypeService = new PackageTypeService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.loading1 = true;
        this.packageTypeService
            .getPackageList(this.name_ko, this.image_path)
            .then((data) => {
                this.customer1 = data;
                this.loading1 = false;
                //this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
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
        showdetails() {
            this.clientlist = false;
            this.detailsclient = true;
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
            this.refercode = '';
            this.calendarValue = '';
            this.calendarValue1 = '';
            this.loading1 = true;
            this.dfcuserService
                .getDfcList()
                .then((data) => {
                    this.customer1 = data.userDataList;
                    this.loading1 = false;
                    this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                })
                .catch((err) => {
                    if (err.response.data.status == '403') {
                        localStorage.clear();
                        this.$router.push({ name: 'login' });
                    }
                    this.customer1 = [];
                    this.loading1 = false;
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
                acceptLabel: "확인",
                rejectLabel: "취소",
                accept: () => {
                    axios({ method: 'delete', url: '/admin/package/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);

                        self.dfcuserService
                            .getDfcList(self.name_ko, self.image_path)
                            .then((data) => {
                                self.customer1 = data.userDataList;
                                self.loading1 = false;
                            })
                    });
                    this.$toast.add({ severity: 'info', summary: '삭제됨', detail: '성공적으로 삭제되었습니다', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '당신은 거부했습니다', life: 3000 });
                },
            });
            setTimeout(() => {
                this.packageTypeService.getPackageList().then((data) => {
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

.product-image {
    padding-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    height: 100px;
    margin-left: 25%;
}
</style>
