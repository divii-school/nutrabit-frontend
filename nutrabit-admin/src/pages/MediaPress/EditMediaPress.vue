<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{$t('mediapress.edit_mediapress')}}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('mediapress.list.title')}}</label>
                            <InputText type="text" :class="`${error.title ? 'p-invalid' : ''}`" placeholder="Title" id="title2" v-model="title"></InputText>
                            <div class="text-red">{{ error.title }}</div>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('mediapress.list.y_link')}}</label>
                            <InputText type="text" :class="`${error.link ? 'p-invalid' : ''}`" placeholder="link" id="title2" v-model="link"></InputText>
                            <div class="text-red">{{ error.link }}</div>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="state2">{{$t('mediapress.list.status')}}</label>
                            <Dropdown v-model="dropdownValue" modelValue="dropdownValues[0].name" :options="dropdownValues" optionLabel="name" :placeholder="status" />
                        </div>
                    </div>
                    <!-- <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                Desktop banner
                                <span class="img-info">(File Type jpg,jpeg,png,gif )</span>
                            </label>
                            <div class="custom-select">
                                <span v-if="!fileName">Select desktop-image</span>
                                <span v-else>{{ fileName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button label="Select File" class="SelectBtn" />
                            </div>
                            <div>
                                <img :src="'http://da-lab-admin.dvconsulting.org:4040/' + fileName1" :alt="fileName1" class="product-image" />
                            </div>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                Mobile banner
                                <span class="img-info">(File Type jpg,jpeg,png,gif )</span>
                            </label>
                            <div class="custom-select">
                                <span v-if="!filesName">Select mobile-image</span>
                                <span v-else>{{ filesName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChanges" />
                                <Button label="Select File" class="SelectBtn" />
                            </div>
                            <img :src="'http://da-lab-admin.dvconsulting.org:4040/' + fileName2" :alt="fileName1" class="product-image" />
                        </div>
                    </div> -->
                    <!-- <div class="p-col-12 p-field p-p-0">
                        <label>Description :</label>
                        <span class="p-float-label">
                             <div :class="`${error.desc ? 'quill-invalid' : 'quill-valid'}`">
                            <Quill-Editor style="height: 200px" v-model:content="modelname" ref="myQuillEditor" :options="editorOption" contentType="html" />
                            </div>
                        </span>
                        <div class="text-red">{{ error.desc }}</div>
                    </div> -->
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button :label="$t('button.Cancel')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                    <Button :label="$t('button.confirm')" icon="pi pi-save" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="editBanner"></Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
// import { QuillEditor } from '@vueup/vue-quill';
import MediaService from '../../service/API/MediaService';
import validateEditMediaPress from '../../validations/mediapress/EditMediaPress';

export default {
    name: 'CreateBanner',
    // props: ['dog', 'image'],
    // components: {
    //     QuillEditor,
    // },
    data() {
        return {
            // modelname: localStorage.getItem('desc'),
            // editorOption: {
            //     toolbar: 'essential',
            //     contentType: 'text',
            //     placeholder: 'Type your comment....',
            //     readonly: true,
            //     theme: 'snow',
            // },
            dropdownValues: [{ name: 'active' }, { name: 'inactive' }],
            dropdownValueTypes: [{ name: 'main_banner' }, { name: 'banner_top' }, { name: 'banner_bottom' }],
            dropdownValue: null,
            dropdownValueType: null,
            title: null,
            subtitle: null,
            link: null,
            files: null,
            filesName: null,
            file: null,
            image: '',
            fileName: null,
            fileExtension: '',
            filesExtension: '',
            formData: new FormData(),
            error: {},
            status: '',
            fileName1: null,
            fileName2: null,
        };
    },
    created() {
        this.mediaService = new MediaService();
    },
    mounted() {
        this.mediaService.viewMediaPress(this.$route.params.id).then((res) => {
            this.title = res.title;
            this.status = res.status;
            this.link = res.link;
            // this.fileName = res.fileName;
            // this.fileName = res.fileName;
            // this.fileName1 = res.imageUrl;
            // this.fileName2 = res.imageUrlMobile;
            // this.desc = res.description;
            localStorage.setItem('desc', res.description);
            console.log(res);
        });
    },
    methods: {
        reinitialize() {
            (this.dropdownValue = null), (this.dropdownValueType = null), (this.title = null), (this.subtitle = null), (this.link = null), (this.fileName = null), (this.file = {});
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.formData.append('fileImage', files[0]);
            this.file = files[0];
            this.fileName = this.file.name;
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
        },
        onFileChanges(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.formData.append('mobileImage', files[0]);
            this.files = files[0];
            this.filesName = this.files.name;
            this.filesExtension = this.filesName.replace(/^.*\./, '');
            console.log(this.filesName);
        },
        editBanner() {
            let vcheckData = {
                title: this.title,
                // state: this.dropdownValue == null ? '' : 'something',
                link: this.link,
                // desc: this.modelname,
                // file: this.file == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateEditMediaPress(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.formData.append('title', this.title);
                this.formData.append('id', this.$route.params.id);
                // this.formData.append('description', this.modelname);
                this.formData.append('link', this.link);
                this.formData.append('status', this.dropdownValue?.name === undefined ? 'active' : this.dropdownValue?.name);
                console.log(this.formData);
                return axios
                    .put('/admin/mediaPress/edit', this.formData)
                    .then((res) => {
                        this.$router.push({ name: 'MediaPressManagement' });
                        console.log(res);
                    })
                    // .catch((err) => {
                    //     if (err.response) {
                    //         // The request was made and the server responded with a status code
                    //         // that falls out of the range of 2xx
                    //         console.log(err.response.data);
                    //         console.log(err.response.status);
                    //         console.log(err.response.headers);
                    //     } else if (err.request) {
                    //         // The request was made but no response was received
                    //         // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
                    //         // http.ClientRequest in node.js
                    //         console.log(err.request);
                    //     } else {
                    //         // Something happened in setting up the request that triggered an err
                    //         console.log('Err', err.message);
                    //     }
                       
                    // });
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
.quill-invalid {
    border: 1px solid red;
}

.product-image {
    padding-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    height: 100px;
    float: right;
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
