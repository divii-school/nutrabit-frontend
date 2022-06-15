<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('Banner.edit_banner') }}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Banner.list.title') }}</label>
                            <InputText type="text" placeholder="Title" id="title2" v-model="title"></InputText>
                            <div class="text-red">{{ error.title }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Banner.list.deskbanner') }}
                                <span class="img-info">(파일 형식 jpg,jpeg,png )(이미지 너비 1920px and 고저 828px
                                    )</span>
                            </label>
                            <div class="custom-select">
                                <span v-if="!fileName">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ fileName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" id="file" />
                                <Button label="이미지 추가" class="SelectBtn n-wrap" />
                            </div>
                            <div>
                                <div class="text-red" v-show="render1">{{ $t('validation.invalidFile') }}</div>
                                 <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public' + fileName1"
                                    alt="이미지를 사용할 수 없음" class="product-image" />
                                <!-- <img :src="'https://back.nutri33.co.kr/public' + fileName1"
                                    :alt="fileName1" class="product-image" /> -->
                            </div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Banner.list.mobbanner') }}
                                <span class="img-info">(파일 형식  jpg,jpeg,png )(이미지 너비 1920px and 고저 828px
                                    )</span>
                            </label>
                            <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!filesName">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ filesName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChanges" id="files" />
                                <Button label="이미지 추가" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red" v-show="render2">{{ $t('validation.invalidFile') }}</div>
                            <div class="text-red">{{ error.file }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public' + fileName2" alt="이미지를 사용할 수 없음"
                                class="product-image" />
                            <!-- <img :src="'https://back.nutri33.co.kr/public' + fileName2" :alt="fileName2"
                                class="product-image" /> -->
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Banner.list.link') }} (URL 유형은 다음과 같아야 합니다: https://example.com )</label>
                            <InputText type="text" placeholder="link" id="title2" v-model="link"></InputText>
                            <div class="text-red">{{ error.link }}</div>
                        </div>
                    </div>




                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="state2">활성화</label>
                            <br>
                            <!-- <Dropdown v-model="dropdownValue" modelValue="dropdownValues[0].name" :options="dropdownValues" optionLabel="code" :placeholder="status" /> -->
                            <input type="radio" id="yes" value="active" name="status" v-model="status">
                            <label for="yes">활성</label>

                            <input type="radio" id="no" name="status" value="inactive" v-model="status">
                            <label for="no">비활성</label>

                            <div class="text-red">{{ error.state }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-d-flex p-jc-end p-ai-center" style="float:left;">
                <Button label="저장" icon="pi pi-save" iconPos="left"
                    class="p-button p-button-sm p-mr-2 p-mb-2" @click="editBanner"></Button>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button :label="$t('button.back')" icon="pi pi-replay" iconPos="left"
                        class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>

                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import validateCreateBanner from '../../validations/banner/validateCreateBanner';
import BannerService from '../../service/API/BannerService';
export default {
    name: 'EditNft',
    data() {
        return {
            render1: false,
            render2: false,
            dropdownValues: [{ name: 'active', code: '활동적인' }, { name: 'inactive', code: '비활성' }],
            // dropdownValueTypes: [{ name: 'nft' }, { name: 'card_news' }, { name: 'media_press' }, { name: 'de_fi_services' }],
            dropdownValue: null,
            // dropdownValueType: null,
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
            type: null,
        };
    },
    created() {
        this.bannerService = new BannerService();
    },
    mounted() {
        this.bannerService.viewBanner(this.$route.params.id).then((res) => {
            this.title = res.data.data[0].title;
            this.status = res.data.data[0].status;
            // this.type = res.data.data[0].type;
            this.link = res.data.data[0].link;
            this.fileName1 = res.data.data[0].desktop_banner_path;
            this.fileName2 = res.data.data[0].mobile_banner_path;
            console.log(res.data.data[0]);
        });
    },
    methods: {
        reinitialize() {
            (this.dropdownValue = null), (this.title = null), (this.link = null), (this.fileName = null), (this.file = {});
        },
        onFileChange(e) {
            var _URL = window.URL || window.webkitURL;
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;

            this.file = files[0];
            var sfile, simg;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(this.file.name)) {
                this.render1 = true;
                return false;
            } else {
                this.render1 = false;
                let self = this;
                //  this.fileName = this.file.name;
                console.log("this.filename--", this.fileName);
                console.log("this.file--", this.file);
                if ((sfile = this.file)) {
                    simg = new Image();
                    simg.onload = function () {
                        // alert(this.width + " " + this.height);
                        if (this.width >= 1920 && this.height >= 828) {

                            self.fileName = files[0].name;
                            console.log(self.fileName)
                        } else {
                            alert("작은 이미지에 더 큰 이미지를 추가하십시오")
                        }
                    };

                    simg.onerror = function () {
                        alert("not a valid file: " + sfile.type);
                    };
                    simg.src = _URL.createObjectURL(sfile);

                    this.formData.append("desktop_banner", files[0]);

                }
            }

            this.fileExtension = this.fileName.replace(/^.*\./, "");
            console.log(this.fileName);
        },
        onFileChanges(e) {
            var _URL = window.URL || window.webkitURL;
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.files = files[0];
            var sfiles, simgs;
            if (!files.length) return;
            this.files = files[0];
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(this.files.name)) {
                this.render2 = true;
                return false;
            } else {
                this.render2 = false;
                let self = this;
                // this.filesName = this.files.name;

                console.log("this.filesname--", this.filesName);
                console.log("this.files--", this.files);
                if ((sfiles = this.files)) {
                    simgs = new Image();
                    simgs.onload = function () {
                        // alert(this.width + " " + this.height);
                        if (this.width >= 1920 && this.height >= 828) {

                            self.filesName = files[0].name;
                            console.log(self.filesName)
                        } else {
                            alert("작은 이미지에 더 큰 이미지를 추가하십시오")
                        }
                    };

                    simgs.onerror = function () {
                        alert("not a valid file: " + sfiles.type);
                    };
                    simgs.src = _URL.createObjectURL(sfiles);

                    this.formData.append("mobile_banner", files[0]);
                }
            }
            this.filesExtension = this.filesName.replace(/^.*\./, "");
            console.log(this.filesName);
        },
        editBanner() {
            let vcheckData = {
                title: this.title,
                status: this.status,
                // type: this.dropdownValueType ? 'something' : 'something',
                link: this.link,
                file: this.fileName1 == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateCreateBanner(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.formData.append('title', this.title);
                this.formData.append('id', this.$route.params.id);
                this.formData.append('link', this.link);
                this.formData.append('status', this.status);
                // this.formData.append('type', this.dropdownValueType?.name === undefined ? this.type : this.dropdownValueType?.name);
                console.log(this.formData);
                return axios.put('/admin/banner/edit', this.formData).then((res) => {
                    alert('업데이트 완료')
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Succesfully Published.', life: 3000 });
                    this.$router.push({ name: 'BannerManagement' });
                    console.log(res);
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

.custom-select-invalid {
    position: relative;
    border: 1px solid red;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
}

.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}
</style>
