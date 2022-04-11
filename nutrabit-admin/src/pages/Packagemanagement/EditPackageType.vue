<template>
    <div class="p-grid">
        <Toast />
       
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('PackageType.Edit.editPackageHeader') }}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="id">{{ $t('PackageType.Edit.package(ko)') }}</label>
                        <InputText id="id" :class="`${error.name_ko ? 'p-invalid' : ''}`" type="text" placeholder="Package Name(KO)" v-model="name_ko" />
                        <div class="text-red">{{ error.name_ko }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="emailuser">{{ $t('PackageType.Edit.package(en)') }}</label>
                        <InputText id="emailuser" :class="`${error.name_en ? 'p-invalid' : ''}`" type="email" placeholder="Package Name(EN)" :modelValue="name_en" v-model="name_en" />
                        <div class="text-red">{{ error.name_en }}</div>
                    </div>
                </div>
                <div class="p-grid p-formgrid p-mb-3 browse">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="subtitle2">
                            {{ $t('PackageType.Edit.image') }}
                            <span class="img-info">(File Type jpg,jpeg,png )</span>
                        </label>
                        <div :class="`${error.files ? 'custom-select-invalid' : 'custom-select'}`">
                            <span v-if="!fileNames">{{ $t('button.select_file') }}</span>
                            <span v-else>{{ fileNames }}</span>
                            <input type="file" class="select-file" v-on:change="onFilesChanges" />
                            <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                        </div>
                        <div class="raw-image" style="float:right;">
                            <div class="text-red" v-show="render4">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'http://api-nutrabbit-dev.dvconsulting.org/public' + image" :alt="image" class="product-image" />
                            <a href="javascript:;" @click="remove_image(id,image)"> <img src="https://www.pikpng.com/pngl/m/302-3024323_close-icon-close-icon-free-png-clipart.png" class="cross"  /></a>
                        </div>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="date">{{ $t('PackageType.Edit.desc(ko)') }}</label>
                        <InputText id="date" :class="`${error.description_ko ? 'p-invalid' : ''}`" type="text" placeholder="description(KO)" v-model="description_ko" />
                        <div class="text-red">{{ error.description_ko }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="medium">{{ $t('PackageType.Edit.desc(en)') }}</label>
                        <InputText id="medium" type="text" placeholder=" description(EN)" v-model="description_en" />
                    </div>
                </div>
                <br />
                <div class="p-d-flex p-jc-end" style="float: left">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button ref="popup" @click="editPackageType" icon="pi pi-check" :label="$t('PackageType.Edit.update')" class="p-mr-2"></Button>
                </div>
                <div class="p-d-flex p-jc-end">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button icon="pi pi-times" :label="$t('PackageType.Edit.back')" class="p-mr-2" @click="$router.go(-1)"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import validateEditPackage from '../../validations/PackageType/validateEditPackage';
import PackageTypeService from '../../service/API/PackageTypeService';
export default {
    name: 'editpackage',
    data() {
        return {
            render1: false,
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            products: null,
            selectedProduct: null,
            limit: '',
            id: '',
            name_ko: '',
            name_en: '',
            description_ko: '',
            description_en: '',
            fileName: null,
            filesName: null,
            fileNames: null,
            filesNames: null,
            files: null,
            file: null,
            filesthumb: null,
            filesimilar: null,
            fileExtension: '',
            filesExtension: '',
            filesExtensions: '',
            fileExtensions: '',
            status: '',
            formData: new FormData(),
            link: null,
            image: '',
            fileName1: '',
            fileName2: '',
            error: {},
        };
    },
    created() {
        this.packageTypeService = new PackageTypeService();
    },
    mounted() {
         
        this.loading1 = true;
        
        this.packageTypeService.viewPackageType(this.$route.params.id).then((res) => {
           this.id = res.data.data[0].id;
            this.name_ko = res.data.data[0].name_ko;
            this.name_en = res.data.data[0].name_en;
            this.description_ko = res.data.data[0].description_ko;
            this.description_en = res.data.data[0].description_en;
            this.image = res.data.data[0].image_path;
            this.status = res.data.data[0].status;
            //console.log(res.data.data[0]);
            // console.log(this.thumbnail_1)
            console.log(this.similar_product_img);
        });
    },
    methods: {
        reinitialize() {
                (this.name_ko = null),
                (this.name_en = null),
                (this.description_ko = null),
                (this.description_en = null),
                (this.image = null),
                (this.status=null),
                (this.file = {});
        },
        onFilesChanges(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            this.file = files[0];
            if (!allowedExtensions.exec(this.file.name)) {
                this.render4 = true;
                return false;
            } else {
                this.render4 = false;
                this.fileNames = this.file.name;
                this.formData.append('image', files[0]);
            }
            this.fileExtension = this.fileNames.replace(/^.*\./, '');
            console.log(this.fileNames);
        },

        remove_image(id,image){
            
            if(confirm("성공적으로 삭제되었습니다?")){
                 axios({ method: 'post', url: '/admin/product_raw_material/imageDelete', data: { raw_material_id: id,image: image } }).then(function (response) {
                        console.log(response);
                    }).catch(error => {
                    console.log(error);
                })

             }
            
        },

        editPackageType() {
            let vcheckData = {
                name_ko: this.name_ko,
                name_en: this.name_en,
                description_ko: this.description_ko,
                description_en: this.description_en,
                
                status : this.status,
                files: this.fileNames == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateEditPackage(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.formData.append('id', this.$route.params.id);
                this.formData.append('name_ko', this.name_ko);
                this.formData.append('name_en', this.name_en);
                this.formData.append('description_ko', this.description_ko);
                this.formData.append('description_en', this.description_en);
                this.formData.append('status', this.status);

                // this.formData.append('type', this.dropdownValueType?.name === undefined ? this.type : this.dropdownValueType?.name);
                console.log(this.formData);
                return axios.put('/admin/package/edit', this.formData).then((res) => {
                    this.$router.push({ name: 'package' });
                    console.log(res);
                });
            }
        },
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}
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
.cross {
    position: absolute;
        right: 1px;
    top: 2px;
    z-index: 2;
    height: 20px;
    width: 20px;
}

.raw-image {
    position: relative;
}
</style>
