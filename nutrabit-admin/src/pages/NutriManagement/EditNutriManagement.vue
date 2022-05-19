<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('Nutri3.Edit.Editheader') }}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="id">{{ $t('Nutri3.Edit.EditNutri3-name3') }}</label>
                        <InputText id="id" :class="`${error.name_ko ? 'p-invalid' : ''}`" type="text"
                            placeholder="제품명 입력" v-model="name_ko" />
                        <div class="text-red">{{ error.name_ko }}</div>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="id">{{ $t('Nutri3.Edit.EditNutri3-name4') }}</label>
                        <InputText id="id" :class="`${error.name_en ? 'p-invalid' : ''}`" type="text"
                            placeholder="제품명 입력" v-model="name_en" />
                        <div class="text-red">{{ error.name_en }}</div>
                    </div>
                </div>

                <div class="dropdowns" style="display: flex; width: 100%; margin-left: -13px">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="type">{{ $t('Nutri3.Edit.EditCategory') }}</label>

                        <Dropdown v-model="category_id" :options="categoryDropdownValues" optionValue="id"
                            optionLabel="category_name_ko" :placeholder="$t('Nutri3.Edit.EditCategory')" />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="type">주원료</label>

                        <MultiSelect id="multiselect" :placeholder="$t('Nutri3.Edit.EditMainRaw1')"
                            :options="mainRawDropdownValues" v-model="select_items" name="raw_material_name_ko"
                            optionLabel="material_name_ko" optionValue="id" :filter="false" @change="selects">
                        </MultiSelect>
                        <!-- <Dropdown v-model="id"  :options="dropdownValues"  optionLabel="category_name_ko" :placeholder="$t('Banner.placeholder.select')" /> -->
                    </div>
                </div>
                <div class="dropdowns" style="display: flex; width: 100%; margin-left: -13px">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="type">{{ $t('Nutri3.Edit.EditPiltype1') }}</label>

                        <Dropdown v-model="pill_id" :options="pilltypeDropdownValues" optionValue="id"
                            optionLabel="name_ko" :placeholder="$t('Nutri3.Edit.EditPiltype1')" />
                        <!-- <Dropdown v-model="id"  :options="dropdownValues"  optionLabel="category_name_ko" :placeholder="$t('Banner.placeholder.select')" /> -->
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="type">{{ $t('Nutri3.Edit.EditPackage1') }}</label>

                        <Dropdown v-model="package_id" :options="packageDropdownValues" optionValue="id"
                            optionLabel="name_ko" :placeholder="$t('Nutri3.Edit.EditPackage1')" />
                        <!-- <Dropdown v-model="id"  :options="dropdownValues"  optionLabel="category_name_ko" :placeholder="$t('Banner.placeholder.select')" /> -->
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="remark">{{ $t('Nutri3.Edit.EditTags1(KO)') }}</label>
                        <InputText id="remark" type="text" :placeholder="$t('Nutri3.Edit.EditTags1(KO)')"
                            v-model="tags_ko" />
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="remark">{{ $t('Nutri3.Edit.EditTags2(EN)') }}</label>
                        <InputText id="remark" type="text" :placeholder="$t('Nutri3.Edit.EditTags2(EN)')"
                            v-model="tags_en" />
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="date">{{ $t('Nutri3.Edit.EditDescription1(KO)') }}</label>
                        <InputText id="date" :class="`${error.description_ko ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('Nutri3.Edit.EditDescription1(KO)')" v-model="description_ko" />
                        <div class="text-red">{{ error.description_ko }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="medium">{{ $t('Nutri3.Edit.EditDescription2(EN)') }}</label>
                        <InputText id="medium" type="text" :placeholder="$t('Nutri3.Edit.EditDescription2(EN)')"
                            v-model="description_en" />
                    </div>
                </div>
                <div class="p-grid p-formgrid p-mb-3 browse">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="subtitle2">
                            {{ $t('Nutri3.Edit.EditThumbnailimg') }}
                            <span class="img-info">(파일 형식: jpg,jpeg,png )(이미지 너비 200px )</span>
                        </label>
                        <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
                            <span v-if="!fileName">{{ $t('button.select_file') }}</span>
                            <span v-else>{{ fileName }}</span>
                            <input type="file" class="select-file" v-on:change="onFileChange" />
                            <Button label="파일을 선택" class="SelectBtn n-wrap" />
                        </div>
                        <div style="display: flex; justify-content: flex-end">
                            <div class="text-red" v-show="render1">{{ $t('validation.invalidFile') }}</div>
                            <div class="raw-image">
                                <img :src="'https://api-nutrabbit-dev.dvconsulting.org/' + thumbnail"
                                    alt="이미지를 사용할 수 없음" class="product-image" />
                                <!-- <a href="javascript:;" @click="remove_similar(id,thumbnail)"> <img src="https://www.pikpng.com/pngl/m/302-3024323_close-icon-close-icon-free-png-clipart.png" class="cross"  /></a> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-grid p-formgrid p-mb-3 browse">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="subtitle2">
                            {{ $t('Nutri3.Edit.Editproductsubimg1') }}
                            <span class="img-info">(파일 형식: jpg,jpeg,png 최대 5개의 이미지를 추가할 수 있습니다.)(이미지 너비 200px )</span>
                        </label>
                        <div :class="`${error.filesimilar ? 'custom-select-invalid' : 'custom-select'}`">
                            <span v-if="!filesNames">{{ $t('button.select_file') }}</span>
                            <span v-else>{{ filesNames }}</span>

                            <input type="file" class="select-file" v-on:change="onFilesChange" :disabled="isdisable" multiple/>
                            <Button label="파일을 선택" class="SelectBtn n-wrap" :disabled="isdisable" />
                        </div>

                        <!-- <FileUpload v-if="!filesNames" name="demo[]"  :multiple="true" :customUpload="true" @uploader="onFilesChange" :maxFileSize="1000000" :fileLimit="4" /> -->
                        <div style="display: -webkit-box; justify-content: flex-end">
                            <div v-for="(product_sub_image, img) in product_sub_image" :key="img">
                                <div class="text-red" v-show="render2">{{ $t('validation.invalidFile') }}</div>
                                <div class="raw-image" style="margin: 5px">
                                    <img :src="'https://api-nutrabbit-dev.dvconsulting.org/' + product_sub_image"
                                        alt="이미지를 사용할 수 없음" class="product-image" />
                                    <div v-show="crossdisplay">
                                        <a href="javascript:;" @click="remove_raw(id, product_sub_image)"><img
                                                src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/96/000000/external-cross-essentials-tanah-basah-glyph-tanah-basah.png"
                                                class="cross" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-grid p-formgrid p-mb-3 browse">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="subtitle2">
                            {{ $t('Nutri3.Edit.Editproductdetailimg1') }}
                            <span class="img-info">(파일 형식: jpg,jpeg,png )(이미지 너비 200px )</span>
                        </label>
                        <div :class="`${error.filesthumb ? 'custom-select-invalid' : 'custom-select'}`">
                            <span v-if="!fileNames">{{ $t('button.select_file') }}</span>
                            <span v-else>{{ fileNames }}</span>
                            <input type="file" class="select-file" v-on:change="onFilesChanges" />
                            <Button label="파일을 선택" class="SelectBtn n-wrap" />
                        </div>
                        <div>
                            <div class="text-red" v-show="render4">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/' + detail_image" alt="이미지를 사용할 수 없음"
                                class="product-image" />
                        </div>
                    </div>
                </div>
                <div class="p-grid p-formgrid p-mb-3">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="state2">{{ $t('Nutri3.Add.status') }}</label>
                        <br />
                        <input type="radio" id="yes" value="active" name="status" v-model="status" />
                        <label for="yes">활성</label>
                        <input type="radio" id="no" name="status" value="inactive" v-model="status" />
                        <label for="no">비활성</label>
                        <div class="text-red">{{ error.status }}</div>
                    </div>
                </div>
                <br />
                <div class="p-d-flex p-jc-end" style="float: left">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button ref="popup" @click="editNutri" icon="pi pi-check" :label="$t('Nutri3.Edit.Editpublish1')"
                        class="p-mr-2"></Button>
                </div>
                <div class="p-d-flex p-jc-end">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button icon="pi pi-times" :label="$t('Nutri3.Edit.EditBack1')" class="p-mr-2"
                        @click="$router.go(-1)"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import NutriManagementService from '../../service/API/NutriManagementService';
import validateEditNutri from '../../validations/NutriManagement/validateEditNutri';

export default {
    name: 'EditNutriManagement',
    data() {
        return {
            render1: false,
            render2: false,
            render3: false,
            render4: false,
            id: '',
            file: '',
            files: '',
            addthumnailfile: '',
            newthumnailfiles: '',
            detail: '',
            similar: '',
            addthumnail: '',
            newthumnail: '',
            fileExtension: '',
            filesExtension: '',
            fileExtensions: '',
            filesExtensions: '',
            filesimilar: '',
            select_items: [],
            selectedItems: [],
            name_ko: '',
            name_en: '',
            description_ko: '',
            description_en: '',
            status: 'active',
            image: '',
            detail_image: '',
            product_sub_image: '',
            thumbnail: '',
            tags_ko: '',
            tags_en: '',
            package_id: '',
            raw_material_id: '',
            pill_id: '',
            category_id: '',
            dropdownValue: null,
            categoryDropdownValues: '',
            categoryDropdownValue: null,
            mainRawDropdownValues: '',
            mainRawDropdownValue: null,
            pilltypeDropdownValues: '',
            pilltypeDropdownValue: null,
            packageDropdownValues: '',
            packageDropdownValue: null,
            formData: new FormData(),
            error: {},
           
            isdisable: false,
            crossdisplay: true,
        };
    },
    created() {
        this.nutriManagementService = new NutriManagementService();
    },
    mounted() {
        //const route = useRoute();
        //console.log(route.params);
        this.loading1 = true;
        this.nutriManagementService.getPackageCategoryDropdown().then((data) => {
            this.mainRawDropdownValues = data;
            // this.products = data;
            this.loading1 = false;
            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            console.log(this.customer1);
            console.log(data);
        });

        this.nutriManagementService.getRawCategoryDropdown().then((data) => {
            this.categoryDropdownValues = data;
            // this.products = data;
            this.loading1 = false;
            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            console.log(this.customer1);
            console.log(data);
        });

        this.nutriManagementService.getPillCategoryDropdown().then((data) => {
            this.pilltypeDropdownValues = data;
            // this.products = data;
            this.loading1 = false;
            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            console.log('Pill', this.pilltypeDropdownValues);
            console.log('Pilldata', data);
        });
        this.nutriManagementService.getPackageNutriDropdown().then((data) => {
            this.packageDropdownValues = data;
            // this.products = data;
            this.loading1 = false;
            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            //console.log(this.customer1);
            console.log(data);
        });
        this.nutriManagementService.ViewNurtiManagementList(this.$route.params.id).then((res) => {
            this.category_id = res.data.data[0].category_id;
            this.raw_material_id = res.data.data[0].selectedItems;
            this.pill_id = res.data.data[0].pill_id;
            this.package_id = res.data.data[0].package_id;

            this.name_ko = res.data.data[0].name_ko;
            this.name_en = res.data.data[0].name_en;
            this.description_ko = res.data.data[0].description_ko;
            this.description_en = res.data.data[0].description_en;
            this.thumbnail = res.data.data[0].thumbnail_path;
            //this.product_sub = res.data.data[0].product_sub_image_path.toString().split(",");
            this.detail_image = res.data.data[0].detail_image_path;

            if (res.data.data[0].product_sub_image_path.length < 5) {
                this.isdisable = false;
            } else {
                this.isdisable = true;
            }

            if (res.data.data[0].product_sub_image_path.length > 0) {
                this.crossdisplay = true;
            } else {
                this.crossdisplay = false;
            }
            this.product_sub_image = res.data.data[0].product_sub_image_path.toString().split(',');

            this.tags_ko = res.data.data[0].tags_ko;
            this.tags_en = res.data.data[0].tags_en;
            this.status = res.data.data[0].status;

            let a = res.data.data[0].raw_material_id.split(',');
            let result = a.map(function (x) {
                return parseInt(x, 10);
            });
            this.select_items = result;
            this.selectedItems = res.data.data[0].raw_material_id;
        });
    },
    methods: {
        reinitialize() {
            (this.name_ko = null),
                (this.name_en = null),
                (this.description_ko = null),
                (this.description_en = null),
                (this.tags_ko = null),
                (this.tags_en = null),
                (this.thumbnail = null),
                (this.product_sub_image = null),
                (this.detail_image = null),
                (this.status = null),
                (this.dropdownValue = null),
                (this.file = {});
        },
        getFields(input, field) {
            var output = [];
            for (var i = 0; i < input.length; ++i) output.push(input[i][field]);
            return output;
        },
        selects() {
            let items = [];
            let data = this.select_items;
            for (var a = 0; a < data.length; a++) {
                items.push(data[a]);
            }
            this.selectedItems = items.toString();
            console.log(this.selectedItems);
        },

        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            this.file = files[0];
            if (!allowedExtensions.exec(this.file.name)) {
                this.render1 = true;
                return false;
            } else {
                this.render1 = false;
                this.fileName = this.file.name;
                this.formData.append('thumbnail', files[0]);
            }
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
        },

        onFilesChange(e) {
            console.log(e.files);
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            this.file = files[0];
            if(files.length > 5 ){
                 alert("5 이미지 선택");
                return;
            } 
            if (!allowedExtensions.exec(this.file.name)) {
                this.render2 = true;
                return false;
            } else {
                this.render2 = false;
                this.filesNames = this.file.name;
                 Array.from(files).forEach(element => {
               this.formData.append('product_sub_image', element)
                
                
            });
                // this.formData.append('product_sub_image', files[0]);
            }
            this.filesExtension = this.filesNames.replace(/^.*\./, '');
            console.log(this.filesNames);
        },

        onFileChanges(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            this.file = files[0];
            if (!allowedExtensions.exec(this.file.name)) {
                this.render3 = true;
                return false;
            } else {
                this.render3 = false;
                this.filesName = this.file.name;
                this.formData.append('detail_image', files[0]);
            }
            this.fileExtensions = this.filesName.replace(/^.*\./, '');
            console.log(this.filesName);
        },

        onFilesChanges(e) {
            var files = e.target.files || e.dataTransfer.files;
            //console.log(files)
            if (!files.length) return;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            this.file = files[0];
            if (!allowedExtensions.exec(this.file.name)) {
                this.render4 = true;
                return false;
            } else {
                this.render4 = false;
                this.fileNames = this.file.name;
                this.formData.append('thumbnail_2', files[0]);
            }
            this.filesExtensions = this.fileNames.replace(/^.*\./, '');
            console.log(this.fileNames);
        },

        remove_similar(id, similar_product_img) {
            //console.log(id)
            // console.log(similar_product_img)
            let similar_prod_image_arr = similar_product_img.toString().split('/');
            let image_name = similar_prod_image_arr[3];
            // console.log(similar_prod_image_arr[3])
            if (confirm('정말 삭제하시겠습니까?')) {
                axios({ method: 'post', url: '/admin/product_raw_material/imageDelete', data: { raw_material_id: id, image_name: image_name } })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        remove_raw(id, product_sub_image) {
            console.log(id)
            console.log(product_sub_image)
            let product_sub_image_arr = product_sub_image.toString().split('/');
            let image_name = product_sub_image_arr[3];
            // console.log(similar_prod_image_arr[3])
            if (confirm('정말 삭제하시겠습니까?')) {
                axios({ method: 'post', url: '/admin/nutriBlending/productSubImageDelete', data: { blending_id: id, image_name: image_name } })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },

        editNutri() {
            // console.log(this.select_items)
            // console.log(this.selectedItems)
            let vcheckData = {
                category_id: this.category_id.toString(),
                raw_material_id: this.selectedItems.toString(),
                pill_id: this.pill_id.toString(),
                package_id: this.package_id.toString(),
                name_ko: this.name_ko,
                name_en: this.name_en,
                tags_ko: this.tags_ko,
                tags_en: this.tags_en,
                description_ko: this.description_ko,
                description_en: this.description_en,
                // type: this.dropdownValueType ? 'something' : 'something',
                // file: this.fileName == '' ? '' : 'something',
                // files: this.filesName == '' ? '' : 'something',
                status: this.status,
                file: this.fileName == '' ? '' : 'something',
                files: this.filesName == '' ? '' : 'something',
                filesthumb: this.fileNames == '' ? '' : 'something',
                filesimilar: this.filesNames == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateEditNutri(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.formData.append('id', this.$route.params.id);
                this.formData.append('category_id', this.category_id);
                this.formData.append('raw_material_id', this.selectedItems);
                this.formData.append('pill_id', this.pill_id);
                this.formData.append('package_id', this.package_id);
                this.formData.append('name_ko', this.name_ko);
                this.formData.append('name_en', this.name_en);
                this.formData.append('tags_ko', this.tags_ko);
                this.formData.append('tags_en', this.tags_en);
                this.formData.append('description_ko', this.description_ko);
                this.formData.append('description_en', this.description_en);
                

                this.formData.append('status', this.status);

                // this.formData.append('type', this.dropdownValueType?.name === undefined ? this.type : this.dropdownValueType?.name);
                console.log(this.formData);
                alert('업데이트 완료');
                return axios.put('/admin/nutriBlending/edit', this.formData).then((res) => {
                    this.$router.push({ name: 'NutriManagement' });
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

.cross {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 2;
    height: 20px;
    width: 20px;
    background-color: white;
}

.raw-image {
    position: relative;
}

@media screen and (max-width: 768px) {
    .dropdowns {
        flex-direction: column;
    }
}
</style>
