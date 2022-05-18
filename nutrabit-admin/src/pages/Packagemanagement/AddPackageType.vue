
<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('PackageType.Add.addPackageHeader') }}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('PackageType.Add.addpackage(ko)') }}</label>
                            <InputText
                                :class="`${error.name_ko ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('PackageType.Add.addpackage(ko)')"
                                id="title2"
                                v-model="name_ko"
                               
                            ></InputText>
                            <div class="text-red">{{ error.name_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('PackageType.Add.addpackage(en)') }}</label>
                            <InputText
                                :class="`${error.name_en ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('PackageType.Add.addpackage(en)')"
                                id="title2"
                                v-model="name_en"
                               
                            ></InputText>
                            <div class="text-red">{{ error.name_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('PackageType.Add.addimage') }}
                                <span
                                    class="img-info"
                                >(File Type jpg,jpeg,png )(Image width 200px )</span>
                            </label>
                            <div
                                :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`"
                            >
                                <span v-if="!detail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ detail }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button label="파일 선택" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red">{{ error.file }}</div>
                            <div class="text-red" v-show="render1">{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('PackageType.Add.adddesc(ko)') }}</label>
                            <Textarea
                                :class="`${error.description_ko ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('PackageType.Add.adddesc(ko)')"
                                id="title2"
                                v-model="description_ko"
                               
                            ></Textarea>
                            <div class="text-red">{{ error.description_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('PackageType.Add.adddesc(en)') }}</label>
                            <Textarea
                                :class="`${error.description_en ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('PackageType.Add.adddesc(en)')"
                                id="title2"
                                v-model="description_en"
                               
                            ></Textarea>
                            <div class="text-red">{{ error.description_en }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center" style="float:left;">
                <div>
                    <Button
                        :label="$t('PackageType.Add.addpublish')"
                        icon="pi pi-check"
                        iconPos="left"
                        class="p-button p-button-sm p-mr-2 p-mb-2"
                        style="margin-top:-20%;"
                        @click="addPackageType"
                    ></Button>
                </div>
            </div>
            
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import PackageTypeService from '../../service/API/PackageTypeService';
import validateAddPackage from '../../validations/PackageType/validateAddPackage';

export default {
    name: 'AddPackageType',
    // props: ['dog', 'image'],
    data() {
        return {
            render1: false,
            file: '',
            files: '',
            detail: '',
            fileExtension: '',
            filesExtension: '',
            fileExtensions: '',
            filesExtensions: '',

            name_ko: '',
            name_en: '',
            description_ko: '',
            description_en: '',
            status: 'active',
            image: '',
            formData: new FormData(),
            error: {},
        };
    },
    created() {
        this.packageTypeService = new PackageTypeService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.loading1 = true;
        this.packageTypeService
      
    },
    methods: {
        reinitialize() {
            (this.name_ko = null), (this.name_en = null), (this.description_ko = null), (this.description_en = null), (this.image = null), (this.status = null)(this.file = {});
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.file = files[0];
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(this.file.name)) {
                this.render1 = true;
                return false;
            } else {
                this.render1 = false;
                this.detail = this.file.name;
                this.formData.append('image', files[0]);
            }
            this.fileExtension = this.detail.replace(/^.*\./, '');
            console.log(this.detail);
        },
        addPackageType() {
            let vcheckData = {
                name_ko: this.name_ko,
                name_en: this.name_en,
                description_ko: this.description_ko,
                description_en: this.description_en,
                status: this.status,
                file: this.detail == '' ? '' : 'something',
                

            };
            const { isInvalid, error } = validateAddPackage(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                // console.log(this.file);
                this.formData.append('name_ko', this.name_ko);
                this.formData.append('name_en', this.name_en);
                this.formData.append('description_ko', this.description_ko);
                this.formData.append('description_en', this.description_en);

                
                this.formData.append('status', this.status);
                //dropdownValues: [{ name: 'active'}, { name: 'inactive' }],
                console.log(this.formData);
                return axios
                    .post('/admin/package/add', this.formData)
                    .then(() => {
                        alert('성공적으로 저장')
                        this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Succesfully Published.', life: 3000 });
                        this.$router.push({ name: 'package' });
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

.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}
.card {
    /* height: 560px; */
}
</style>
