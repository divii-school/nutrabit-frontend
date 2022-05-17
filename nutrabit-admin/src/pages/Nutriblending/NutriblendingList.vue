<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('Blending.s-header') }}</strong>
                </h4>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="nameuser">{{ $t('Blending.search.blending') }}</label>
                        <InputText id="nameuser" type="text" :placeholder="$t('Blending.search.blending')"
                            v-model="name" @keyup="resetdata" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="nameuser">{{ $t('Blending.search.category') }}</label>

                        <Dropdown v-model="sub_category_id" :options="categoryDropdownValues"
                            optionLabel="category_name_ko" :placeholder="$t('RawMaterialadd.list.category')"
                            name="sub_category_id" id="sub_category_id" />
                    </div>
                </div>

                <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
                    <div class="p-mb-4 p-mb-lg-0"></div>
                    <div>
                        <Button :label="$t('button.search')" icon="pi pi-search" iconPos="left"
                            class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchNewtriBlending"></Button>
                        <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left"
                            class="p-button p-button-sm  p-mr-2 p-mb-2" @click="resetUser"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>{{ $t('Blending.list.header') }}</h5>
                    </div>
                    <div>



                        <router-link to="/addnutri-blending">
                            <Button label="Primary" class="p-mr-2 p-mb-2"><i class="pi pi-plus p-mr-2"></i> {{
                                $t('Blending.addnew_blending')
                            }}</Button>
                        </router-link>
                    </div>
                </div>

                <DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="5" dataKey="id"
                    :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll"
                    v-model:selection="selected">
                    <ConfirmDialog group="dialog" />

                    <template #empty>데이터가 없습니다 </template>
                    <template #loading> Loading data. Please wait. </template>
                    <Column field="name" header="번호">
                        <template #body="{ data }">
                            <span class="p-column-title">Sl.No.</span>
                            {{ data.sl_no }}
                        </template>
                    </Column>
                    <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                    <Column field="ReferralCode" :header="$t('Blending.search.blending')" >
                        <template #body="{ data }">
                            <span class="p-column-title">Name</span>
                            {{ data.name_ko }}
                        </template>
                    </Column>
                    <Column :header="$t('Blending.search.category')" >
                        <template #body="{ data }">
                            <span class="p-column-title">Name</span>
                            {{ data.category_name_ko }}
                        </template>
                    </Column>
                    <Column field="Status" :header="$t('Blending.list.status')" >
                        <template #body="{ data }">
                            <span class="p-column-title">Status</span>
                            <!-- {{ data.id }} -->
                            {{ data.status }}
                            <!-- <InputSwitch v-model="data.status" trueValue="active" @change="switchValue(data.id, data.status)" /> -->
                        </template>
                    </Column>





                    <Column :header="$t('Blending.list.see_more')">
                        <template #body="{ data }">
                            <span class="p-column-title">Balance</span>
                            <p style="display: none">{{ data.mobile }}</p>
                            <div style="display: flex">
                                <router-link :to="'/viewnutri-blending/' + data.id"><Button label="info"
                                        class="p-button-outlined p-button-info p-mr-2 p-mb-2"><i
                                            class="pi pi-eye p-mr-2"></i> </Button>
                                </router-link>
                                <router-link :to="'/editnutri-blending/' + data.id"><Button label="help"
                                        class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i
                                            class="pi pi-pencil p-mr-2"></i> </Button></router-link>
                                <Button icon="pi pi-trash" class="p-button-danger p-button-outlined p-mr-2 p-mb-2"
                                    @click="confirm(data.id)" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import BlendingService from '../../service/API/BlendingService';
import axios from 'axios';
export default {
    data() {
        return {
            selected: [],
            selectedItemss: '',
            render: true,
            name: '',
            email: '',
            mobile: '',
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            calendarValue: '',
            calendarValue1: '',
            customer1: null,
            loading1: true,
            idFrozen: false,
            products: null,
            expandedRows: [],
            user: null,
            refercode: '',
            dropdownItem: null,
            error: {},
            name_ko: '',
            sl_no: '',
            name_en: '',
            category_id: '',
            sub_category_id: '',
            categoryDropdownValues: '',
            categoryDropdownValue: null,
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.blendingService = new BlendingService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.blendingService
            .getBlendingCategoryDropdown()
            .then((data) => {
                this.categoryDropdownValues = data;
                // this.products = data;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                console.log(this.customer1);
                console.log(data);
            })
        this.blendingService
            .getBlendingList(this.name, this.category_id)
            .then((data) => {
                this.customer1 = data;
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            })
            .catch(() => {
                this.customer1 = [];
                this.loading1 = false;
            });
    },
    watch: {},
    methods: {
        selects() {
            let xyz = [];
            let data = this.selected;
            for (var a = 0; a < data.length; a++) {
                xyz.push(data[a].id);
            }
            this.selectedItemss = xyz.toString();
            if (this.calendarValue !== '') {
                this.calendarValue = this.calendarValue.toISOString().slice(0, 10);
                console.log(this.calendarValue);
            }
            if (this.calendarValue1 !== '') {
                this.calendarValue1 = this.calendarValue1.toISOString().slice(0, 10) + 1;
                console.log(this.calendarValue1);
            }
        },

        resetUser() {
            this.name = '';
            this.sub_category_id = '';
            this.loading1 = true;
             this.blendingService
                    .getBlendingList(this.name, this.sub_category_id ? this.sub_category_id.id : this.sub_category_id)
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
        resetdata() {
            if (this.name === '') {
                this.blendingService
                    .getBlendingList(this.name, this.category_id ? this.category_id.id : this.category_id)
                    .then((data) => {
                        this.customer1 = data;
                        this.loading1 = false;
                        //console.log(data);
                    })

            }
        },
        searchNewtriBlending() {
            // console.log(this.name);
            // console.log(this.id);

            if (this.name === '' && this.sub_category_id === '') {
                //    this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '검색 필드를 입력해주세요.', life: 2000 });
            } else {
                console.log(this.sub_category_id)
                this.blendingService
                    .getBlendingList(this.name, this.sub_category_id ? this.sub_category_id.id : this.sub_category_id)
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
            var hr = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (value = yyyy + '/' + mm + '/' + dd + '-' + hr + ':' + min + ':' + sec);
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
            var self = this;
            this.$confirm.require({
                group: 'dialog',
                header: '확인',
                message: '삭제하시겠습니까?',
                icon: 'pi pi-trash',
                acceptLabel: "확인",
                rejectLabel: "취소",
                accept: () => {
                    axios({ method: 'delete', url: '/admin/blending/delete', data: { deleteIdArray: id } }).then(function (response) {
                        self.blendingService
                            .getBlendingList(self.name, self.category_id)
                            .then((data) => {
                                self.customer1 = data;
                                self.loading1 = false;
                                self.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                            })
                            .catch(() => {
                                self.customer1 = [];
                                self.loading1 = false;
                            });
                        console.log(response);
                    });

                    this.$toast.add({ severity: 'info', summary: '삭제됨', detail: '성공적으로 삭제되었습니다.', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '당신은 거부했습니다', life: 3000 });
                },
            });
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

.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
}

.p-button.p-button-info.p-button-outlined,
.p-buttonset.p-button-info>.p-button.p-button-outlined,
.p-splitbutton.p-button-info>.p-button.p-button-outlined {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}


.p-button.p-button-info.p-button-outlined:hover,
.p-buttonset.p-button-info>.p-button.p-button-outlined,
.p-splitbutton.p-button-info>.p-button.p-button-outlined:hover {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-info.p-button-outlined:enabled:active,
.p-buttonset.p-button-info>.p-button.p-button-outlined:enabled:active,
.p-splitbutton.p-button-info>.p-button.p-button-outlined:enabled:active {
    background: rgba(2, 136, 209, 0.16);
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-help.p-button-outlined,
.p-buttonset.p-button-help>.p-button.p-button-outlined,
.p-splitbutton.p-button-help>.p-button.p-button-outlined {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-help.p-button-outlined:hover,
.p-buttonset.p-button-help>.p-button.p-button-outlined,
.p-splitbutton.p-button-help>.p-button.p-button-outlined:hover {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-danger.p-button-outlined,
.p-buttonset.p-button-danger>.p-button.p-button-outlined,
.p-splitbutton.p-button-danger>.p-button.p-button-outlined {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}

.p-button.p-button-danger.p-button-outlined:hover,
.p-buttonset.p-button-danger>.p-button.p-button-outlined,
.p-splitbutton.p-button-danger>.p-button.p-button-outlined:hover {
    background-color: transparent;
    color: #171718;
    border: 0px solid;
}
</style>
