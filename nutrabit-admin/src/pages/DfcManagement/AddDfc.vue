<template>
    <div class="p-col-12 p-pb-0">
        <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
    </div>
    <div class="card">
        <Toast />
        <form>
            <div class="p-d-flex p-jc-between p-mb-2">
                <div>
                    <h5>{{ $t('DFC.add.header') }}</h5>
                </div>
                <div>
                    <Button label="Primary" class="p-mr-2 p-mb-2" @click="exceldownload"><i class="pi pi-download p-mr-2"></i>{{ $t('DFC.add.exceldownload') }}</Button>
                    <router-link to="/add-user"> </router-link>
                </div>
            </div>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('DFC.add.feildheader') }}
                                <!-- <span class="img-info">(File Type jpg,jpeg,png,gif )</span> -->
                            </label>
                            <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!fileName">{{$t('button.select_file')}}</span>
                                <span v-else>{{ fileName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div v-show="upload" class="text-gray">{{ $t('DFC.add.message') }}</div>
                            <div class="text-red" v-show="render1">{{$t('validation.invalidFile')}}</div>
                            <div class="text-red">{{ error.file }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>
                    <div v-show="render2" class="p-p-2">
                        <strong>DFC upload success {{ success }} of {{ totalrecord }}</strong>
                    </div>
                    <div v-show="render" class="p-field p-col-12 p-md-3 p-lg-4" style="background-color: #f0bdbd">
                        <ol>
                            <li v-for="item in errorArray" :key="item">
                                {{ item }}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-start p-ai-center">
                <div>
                    <Button :label="$t('button.reset')" icon="pi pi-replay" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="resetdfcadd"></Button>
                    <Button :label="$t('button.uploadfile')" icon="pi pi-upload" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="addDfc"></Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import DfcService from '../../service/API/DfcService';
import validateAddDfc from '../../validations/dfc/Adddfc';
import axios from 'axios';
export default {
    name: 'AddBanner',
    // props: ['dog', 'image'],
    data() {
        return {
            render1: false,
            upload: true,
            success: '',
            errors: '',
            totalrecord: '',
            errorArray: '',
            render: false,
            render2: false,
            file: '',
            fileName: '',
            fileExtension: '',
            formData: new FormData(),
            error: {},
        };
    },
    created() {
        this.dfcService = new DfcService();
    },
    methods: {
        resetdfcadd() {
            this.file = '';
            this.fileName = '';
            this.upload = true;
            this.render = false;
            this.render2 = false;
        },
        onFileChange(e) {
            this.formData.delete('file');
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.file = files[0];
            var allowedExtensions = /(\.xlsx|\.xlsm|\.xlsb|\.xltx|\.xls)$/i;
            if (!allowedExtensions.exec(this.file.name)) {
                this.render1 = true;
                this.upload = false;
                return false;
            } else {
                this.render1 = false;
                this.upload = true;
                this.fileName = this.file.name;
                this.formData.append('file', files[0]);
            }
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
        },
        exceldownload() {
            this.dfcService.downloadExcel().then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'dfc-upload-sample.xlsx'); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        },
        addDfc() {
            this.upload = false;
            let vcheckData = {
                file: this.file == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateAddDfc(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                console.log(this.formData);
                return axios.post('/admin/dfc/add', this.formData).then((data) => {
                    if (data.data.data.errorArray.length == 0) {
                        console.log('success');
                        this.render2 = true;
                        this.render = false;
                        this.success = data.data.data.success;
                        this.errors = data.data.data.error;
                        this.totalrecord = data.data.data.totalRecord;
                    } else {
                        this.render2 = true;
                        this.success = data.data.data.success;
                        this.errors = data.data.data.error;
                        this.errorArray = data.data.data.errorArray;
                        this.render = true;
                        this.totalrecord = data.data.data.totalRecord;
                        if (this.success == 0) {
                            this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'No Record Inserted.', life: 3000 });
                        } else {
                            this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: `${this.success} records added Succesfully.`, life: 3000 });
                        }
                    }
                });
            }
        },
    },
};
</script>

<style scoped>
.img-info {
    font-size: 11px;
    font-weight: 400;
    color: rgb(48, 48, 48);
}
.custom-select {
    position: relative;
    border: 1px solid #cecece;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
}
.custom-select-invalid {
    position: relative;
    border: 1px solid red;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
}
.select-file {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0%;
    z-index: 5;
    opacity: 0;
}
.SelectBtn {
    max-width: 100px;
}
.custom-select span {
    max-width: 140px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
