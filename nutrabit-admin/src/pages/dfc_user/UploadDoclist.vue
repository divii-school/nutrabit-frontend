<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('search.title') }}</strong>
                </h4>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="nameuser">{{ $t('upload-doc.doc_title') }}</label>
                        <InputText id="nameuser" :class="`${error.name ? 'p-invalid' : ''}`" type="text" :placeholder="$t('enter title')" v-model="title" />
                        <div class="text-red">{{ error.name }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="email2">{{ $t('upload-doc.doc_type') }}</label>
                        <Dropdown v-model="type" :options="dropdownValues" optionLabel="name" placeholder="Select" />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">{{ $t('upload-doc.upload_dt') }}</label>
                        <Calendar :class="`${error.calendarValue ? 'p-invalid' : ''}`" :showIcon="true" :showButtonBar="true" v-model="uploaddate" dateFormat="yy.mm.dd" :placeholder="$t('search.placeholder.date')"></Calendar>
                        <div class="text-red">{{ error.calendarValue }}</div>
                    </div>
                </div>

                <div class="p-d-flex p-jc-between p-ai-center p-mt-6">
                    <div class=""></div>
                    <div>
                        <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="reset"></Button>
                        <Button :label="$t('button.search')" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchdoc"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <!-- <h5>{{ $t('table.userlist.heading') }}</h5> -->
                        <h5><strong>Document List</strong></h5>
                    </div>
                    <div>
                        <router-link to="/upload-document">
                            <Button label="Primary" class="p-mr-2 p-mb-2"><i class="pi pi-upload p-mr-2"></i> {{ $t('upload-doc.uploadNewdoc') }}</Button>
                        </router-link>
                    </div>
                </div>

                <DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="5" dataKey="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll" v-model:selection="selected">
                    <!-- v-model:selection="selected" -->
                    <ConfirmDialog group="dialog" />

                    <template #empty> No data found. </template>
                    <template #loading> Loading data. Please wait. </template>

                    <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                    <Column field="name" :header="$t('upload-doc.list.slNo')">
                        <template #body="{ index }">
                            <span class="p-column-title">Sl.No.</span>
                            {{ index + 1 }}
                        </template>
                    </Column>
                    <Column :header="$t('upload-doc.doc_title')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Doc name</span>
                            {{ data.title }}
                        </template>
                    </Column>
                    <Column :header="$t('upload-doc.doc_type')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Document type</span>
                            {{ data.docType }}
                        </template>
                    </Column>
                    <Column :header="$t('upload-doc.upload_dt')" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Date Created</span>
                            {{ formatDate(data.createdDate) }}
                        </template>
                    </Column>
                    <Column :header="$t('upload-doc.list.Actions')">
                        <template #body="{ data }">
                            <span class="p-column-title">Actions</span>
                            <p style="display: none">{{ data.status }}</p>
                            <div style="display: flex">
                                <Button label="Primary" class="p-mr-2 p-mb-2" @click="downloadFile(data.id, data.fileName)"><i class="pi pi-download p-mr-2"></i>{{ $t('upload-doc.download') }}</Button>
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
// import { useRoute } from 'vue-router';
import DfcuserService from '../../service/API/DfcuserService';
export default {
    data() {
        return {
            //jpg,png,hwp,docs,pdf,xls
            dropdownValues: [{ name: 'jpg' }, { name: 'png' }, { name: 'hwp' }, { name: 'docs' }, { name: 'pdf' }, { name: 'xls' }],
            render: true,
            title: '',
            type: '',
            uploaddate: '',
            customer1: null,
            loading1: true,
            idFrozen: false,
            products: null,
            user: null,
            error: {},
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.dfcuserService = new DfcuserService();
    },
    mounted() {
        this.dfcuserService
            .getDocumentList()
            .then((data) => {
                this.customer1 = data;
                this.loading1 = false;
                this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                // console.log(data);
            })
            .catch((err) => {
                 this.customer1 = [];
                this.loading1 = false;
                if (err.response.data.status == '403') {
                    localStorage.clear();
                    this.$router.push({ name: 'login' });
                }
               
            });
    },
    methods: {
        downloadFile(ids, fname) {
            console.log(ids, fname);
            this.dfcuserService.downloadfile(ids).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fname); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        },
        reset() {
            this.title = '';
            this.type = '';
            this.error = {};
            this.uploaddate = '';
            this.loading1 = true;
            this.dfcuserService
                .getDocumentList()
                .then((data) => {
                    this.customer1 = data;
                    this.loading1 = false;
                    this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                    console.log(data);
                })
                .catch((err) => {
                    this.customer1 = [];
                    this.loading1 = true;
                    if (err.response.data.status == '403') {
                        localStorage.clear();
                        this.$router.push({ name: 'login' });
                    }
                });
        },
        searchdoc() {
              if (this.title === '' && this.type === '' && this.uploaddate === '') {
                this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'please Search atleast one Item.', life: 2000 });
            } else{
            this.loading1 = true;
            this.dfcuserService
                .getDocumentList(this.title, this.type.name == undefined ? '' : this.type.name,  this.addDay(this.uploaddate))
                .then((data) => {
                    this.customer1 = data;
                    this.loading1 = false;
                    this.customer1.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                    console.log(data);
                })
                .catch((err) => {
                    this.customer1 = [];
                    this.loading1 = false;
                    if (err.response.data.status == '403') {
                        localStorage.clear();
                        this.$router.push({ name: 'login' });
                    }
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
            return (value = yyyy + '/' + mm + '/' + dd + ' - ' + hr + ':' + min + ':' + sec);
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
</style>
