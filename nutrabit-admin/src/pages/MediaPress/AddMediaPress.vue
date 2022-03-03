<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{$t('mediapress.addnew_mediapress')}}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('mediapress.list.title')}}</label>
                            <InputText :class="`${error.title ? 'p-invalid' : ''}`" type="text" placeholder="Title" id="title2" v-model="title"></InputText>
                            <div class="text-red">{{ error.title }}</div>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('mediapress.list.y_link')}}</label>
                            <InputText :class="`${error.link ? 'p-invalid' : ''}`" type="text" placeholder="link" id="title2" v-model="link"></InputText>
                            <div class="text-red">{{ error.link }}</div>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="state2">{{$t('mediapress.list.status')}}</label>
                            <Dropdown v-model="dropdownValue" modelValue="dropdownValues[0].name" :options="dropdownValues" optionLabel="name" placeholder="active" />
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">  
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button :label="$t('button.back')" icon="pi pi-replay" iconPos="left" class="n-wrap p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                    <Button :label="$t('button.confirm')" icon="pi pi-save" iconPos="left" class="n-wrap p-button p-button-sm p-mr-2 p-mb-2" @click="addBanner"></Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
// import { QuillEditor } from '@vueup/vue-quill';
import validateCreateMediaPress from '../../validations/mediapress/AddMediaPress';
export default {
    name: 'CreateBanner',
    data() {
        return {
            modelname: '',
            dropdownValues: [{ name: 'active' }, { name: 'inactive' }],
            dropdownValueTypes: [{ name: 'main_banner' }, { name: 'banner_top' }, { name: 'banner_bottom' }],
            dropdownValue: 'active',
            dropdownValueType: null,
            title:'',
            subtitle: null,
            link: '',
            files: null,
            filesName: '',
            file:'',
            image: '',
            fileName: '',
            fileExtension: '',
            filesExtension: '',
            formData: new FormData(),
            error: {},
        };
    },
    methods: {
        reinitialize() {
            (this.dropdownValue = null), (this.dropdownValueType = null), (this.title = null), (this.subtitle = null), (this.link = null), (this.fileName = null), (this.file = {});
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            // this.formData.append('fileImage', files[0]);
            this.file = files[0];
            // this.fileName = this.file.name;
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
        },
        onFileChanges(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            // this.formData.append('mobileImage', files[0]);
            this.files = files[0];
            // this.filesName = this.files.name;
            this.filesExtension = this.filesName.replace(/^.*\./, '');
            console.log(this.filesName);
        },
        addBanner() {
            let vcheckData = {
                title: this.title,
                // state: this.dropdownValue == null ? '' : 'something',
                link: this.link,
            };
            const { isInvalid, error } = validateCreateMediaPress(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                // console.log(this.file);
                this.formData.append('title', this.title);
                // this.formData.append('description', this.modelname);
                this.formData.append('link', this.link);
                this.formData.append('status', this.dropdownValue?.name == undefined ? this.dropdownValue : this.dropdownValue?.name);
                console.log(this.formData);
                return axios
                    .post('/admin/mediaPress/add', this.formData)
                    .then((res) => {
                        this.$router.push({ name: 'MediaPressManagement' });
                        console.log(res);
                    })
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
.quill-invalid{
    border: 1px solid red;
   
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
.custom-select {
    position: relative;
    border: 1px solid #cecece;
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
