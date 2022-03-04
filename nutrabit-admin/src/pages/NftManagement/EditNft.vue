<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>EDIT NFT</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('nft.list.title') }}</label>
                            <InputText :class="`${error.title ? 'p-invalid' : ''}`" type="text" placeholder="Title" id="title2" v-model="title"></InputText>
                            <div class="text-red">{{ error.title }}</div>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('nft.list.link') }}</label>
                            <InputText :class="`${error.link ? 'p-invalid' : ''}`" type="text" placeholder="link" id="title2" v-model="link"></InputText>
                            <div class="text-red">{{ error.link }}</div>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="state2">{{ $t('nft.list.status') }}</label>
                            <Dropdown :class="`${error.state ? 'p-invalid' : ''}`" v-model="dropdownValue" modelValue="dropdownValues[0].name" :options="dropdownValues" optionLabel="name" :placeholder="status" />
                            <div class="text-red">{{ error.state }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('nft.list.deskbanner') }}
                                <span class="img-info">(File Type jpg,jpeg,png,gif )</span>
                            </label>
                            <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!fileName">{{$t('button.select_file')}}</span>
                                <span v-else>{{ fileName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red">{{ error.file }}</div>
                            <div class="text-red" v-show="render1">{{$t('validation.invalidFile')}}</div>
                            <div>
                                <img :src="'http://da-lab-admin.dvconsulting.org:4040/' + fileName1" :alt="fileName1" class="product-image" />
                            </div>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('nft.list.mobbanner') }}
                                <span class="img-info">(File Type jpg,jpeg,png,gif )</span>
                            </label>
                            <div class="custom-select">
                                <span v-if="!filesName">{{$t('button.select_file')}}</span>
                                <span v-else>{{ filesName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChanges" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red" v-show="render2">{{$t('validation.invalidFile')}}</div>
                            <div>
                                <img :src="'http://da-lab-admin.dvconsulting.org:4040/' + fileName2" :alt="fileName1" class="product-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button :label="$t('button.back')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                    <Button :label="$t('button.confirm')" icon="pi pi-save" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="editNft"></Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import NftService from '../../service/API/NftService';
import validateCreateNft from '../../validations/nft/AddNft';
export default {
    name: 'EditNft',
    data() {
        return {
            render1: false,
            render2: false,
            dropdownValues: [{ name: 'active' }, { name: 'inactive' }],
            dropdownValueTypes: [{ name: 'main_banner' }, { name: 'banner_top' }, { name: 'banner_bottom' }],
            dropdownValue: null,
            dropdownValueType: null,
            title: null,
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
            fileName1: '',
            fileName2: '',
        };
    },
    created() {
        this.nftService = new NftService();
    },
    mounted() {
        this.nftService.viewNft(this.$route.params.id).then((res) => {
            this.title = res.data.data[0].title;
            this.status = res.data.data[0].status;
            this.dropdownValue = res.data.data[0].status;
            this.link = res.data.data[0].link;
            this.fileName1 = res.data.data[0].imageUrl;
            this.fileName2 = res.data.data[0].imageUrlMobile;
            console.log(res.data.data[0]);
        });
    },
    methods: {
        reinitialize() {
            (this.dropdownValue = null), (this.dropdownValueType = null), (this.title = null), (this.subtitle = null), (this.link = null), (this.fileName = null), (this.file = {});
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.file = files[0];
            var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if (!allowedExtensions.exec(this.file.name)) {
                this.render1 = true;
                return false;
            } else {
                this.render1 = false;
                this.fileName = this.file.name;
                this.formData.append('fileImage', files[0]);
            }
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
        },
        onFileChanges(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.files = files[0];
            if (!files.length) return;
            this.files = files[0];
            var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if (!allowedExtensions.exec(this.files.name)) {
                this.render2 = true;
                return false;
            } else {
                this.render2 = false;
                this.filesName = this.files.name;
                this.formData.append('mobileImage', files[0]);
            }
            this.filesExtension = this.filesName.replace(/^.*\./, '');
            console.log(this.filesName);
        },
        editNft() {
            console.log(this.dropdownValue);
            let vcheckData = {
                title: this.title,
                state: this.dropdownValue ? 'something' : 'something',
                link: this.link,
                file: this.fileName1 == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateCreateNft(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.formData.append('title', this.title);
                this.formData.append('id', this.$route.params.id);
                this.formData.append('link', this.link);
                this.formData.append('status', this.dropdownValue?.name === undefined ? this.status : this.dropdownValue?.name);
                console.log(this.formData);
                return axios
                    .put('/admin/nft/edit', this.formData)
                    .then((res) => {
                        this.$router.push({ name: 'NftManagement' });
                        console.log(res);
                    })
                    .catch((err) => {
                        if (err.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log(err.response.data);
                            console.log(err.response.status);
                            console.log(err.response.headers);
                        } else if (err.request) {
                            // The request was made but no response was received
                            // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log(err.request);
                        } else {
                            // Something happened in setting up the request that triggered an err
                            console.log('Err', err.message);
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
.product-image {
    padding-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    height: 100px;
    float: right;
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
