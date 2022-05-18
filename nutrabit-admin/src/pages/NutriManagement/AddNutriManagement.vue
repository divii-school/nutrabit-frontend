
<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('Nutri3.Add.header') }}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Nutri3.Add.Nutri3-name') }}</label>
                            <InputText :class="`${error.name_ko ? 'p-invalid' : ''}`" type="text" placeholder="제품명 입력" id="title2" v-model="name_ko"></InputText>
                            <div class="text-red">{{ error.name_ko }}</div>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Nutri3.Add.Nutri3-name1') }}</label>
                            <InputText :class="`${error.name_en ? 'p-invalid' : ''}`" type="text" placeholder="제품명 입력" id="title2" v-model="name_en"></InputText>
                            <div class="text-red">{{ error.name_en }}</div>
                        </div>
                    </div>

                    <div class="dropdowns" style="display: flex; width: 100%; margin-left: -13px">
                        <div class="p-field p-col-12 p-md-3">
                            <label for="type">{{ $t('Nutri3.Add.Category') }}</label>

                            <Dropdown :class="`${error.category_id ? 'p-invalid' : ''}`" v-model="category_id" :options="categoryDropdownValues" optionValue="id" optionLabel="category_name_ko" placeholder="선택" />
                            <div class="text-red">{{ error.category_id }}</div>
                        </div>
                        <div class="p-field p-col-12 p-md-3">
                            <label for="type">{{ $t('Nutri3.Add.MainRaw') }}</label>
                            <MultiSelect
                                id="multiselect"
                                :class="`${error.raw_material_id ? 'p-invalid' : ''}`"
                                :options="mainRawDropdownValues"
                                v-model="select_items"
                                name="raw_material_id"
                                placeholder="선택"
                                optionLabel="material_name_ko"
                                :filter="false"
                                @change="selects"
                            ></MultiSelect>
                            <div class="text-red">{{ error.raw_material_id }}</div>
                        </div>
                    </div>

                    <div class="dropdowns" style="display: flex; width: 100%; margin-left: -13px">
                        <div class="p-field p-col-12 p-md-3">
                            <label for="type">{{ $t('Nutri3.Add.Piltype') }}</label>

                            <Dropdown :class="`${error.pill_id ? 'p-invalid' : ''}`" v-model="pill_id" :options="pilltypeDropdownValues" optionValue="id" optionLabel="name_ko" placeholder="선택" />
                            <div class="text-red">{{ error.pill_id }}</div>
                        </div>
                        <div class="p-field p-col-12 p-md-3">
                            <label for="type">{{ $t('Nutri3.Add.Package') }}</label>

                            <Dropdown :class="`${error.package_id ? 'p-invalid' : ''}`" v-model="package_id" :options="packageDropdownValues" optionValue="id" optionLabel="name_ko" placeholder="선택" />
                            <div class="text-red">{{ error.package_id }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Nutri3.Add.AddTags(KO)') }}</label>
                            <InputText :class="`${error.tags_ko ? 'p-invalid' : ''}`" type="text" placeholder="태그 이름" id="title2" v-model="tags_ko"></InputText>
                            <div class="text-red">{{ error.tags_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Nutri3.Add.AddTags(EN)') }}</label>
                            <InputText :class="`${error.tags_en ? 'p-invalid' : ''}`" type="text" placeholder="태그 이름" id="title2" v-model="tags_en"></InputText>
                            <div class="text-red">{{ error.tags_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Nutri3.Add.Description(KO)') }}</label>
                            <Textarea :class="`${error.description_ko ? 'p-invalid' : ''}`" type="text" placeholder="설명" id="title2" v-model="description_ko"></Textarea>
                            <div class="text-red">{{ error.description_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Nutri3.Add.Description(EN)') }}</label>
                            <Textarea :class="`${error.description_en ? 'p-invalid' : ''}`" type="text" placeholder="설명" id="title2" v-model="description_en"></Textarea>
                            <div class="text-red">{{ error.description_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Nutri3.Add.Thumbnailimg') }}
                                <span class="img-info">(파일 형식: jpg,jpeg,png )(이미지 너비 200px )</span>
                            </label>
                            <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
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
                            <label for="subtitle2">
                                {{ $t('Nutri3.Add.productsubimg') }}
                                <span class="img-info">(파일 형식: jpg,jpeg,png 최대 5개의 이미지를 추가할 수 있습니다.)(이미지 너비 200px )</span>
                            </label>
                            <div :class="`${error.addthumnail ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!addthumnail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ addthumnail }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChangethum"  name="productname" multiple />
                                
                                <Button label="파일 선택" class="SelectBtn n-wrap" />
                            </div>
                            
                            <div class="text-red">{{ error.addthumnail }}</div>
                            <div class="text-red" v-show="render2">{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>

                
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Nutri3.Add.productdetailimg') }}
                                <span class="img-info">(파일 형식: jpg,jpeg,png )(이미지 너비 200px )</span>
                            </label>
                            <div :class="`${error.newthumnail ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!newthumnail">파일 선택</span>
                                <span v-else>{{ newthumnail }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChangethumnail" />
                                <Button label="파일 선택" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red">{{ error.newthumnail }}</div>
                            <div class="text-red" v-show="render3">{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="state2">{{ $t('Nutri3.Add.status') }}</label>
                            <br />
                            <div :class="`${error.status ? 'p-invalid' : ''}`">
                                <input type="radio" id="yes" value="active" name="status" v-model="status" />
                                <label for="yes">활성</label>
                                <input type="radio" id="no" name="status" value="inactive" v-model="status" />
                                <label for="no">비활성</label>
                            </div>
                            <div class="text-red">{{ error.status }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center" style="float: left">
                <div>
                    <Button :label="$t('Nutri3.Add.publish')" icon="pi pi-check" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="addNutri" style="margin-top: -20%"></Button>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button :label="$t('Nutri3.Add.Back')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)" style="margin-top: -20%"></Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import NutriManagementService from '../../service/API/NutriManagementService';
import validateAddNutri from '../../validations/NutriManagement/validateAddNutri';


export default {
    name: 'AddNutriManagement',

    data() {
        return {
          
            value12: '',
            render1: false,
            render2: false,
            render3: false,
            render4: false,
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
            select_items: [],
            selectedItems: [],
            Multiselect: '',
            filesExtensions: '',
            productimg:[],
            name_ko: '',
            name_en: '',
            description_ko: '',
            description_en: '',
            status: '',
            image: '',
            detail_image: '',
            product_sub_image: '',
            thumbnail: '',
            tags_ko: '',
            tags_en: '',
            dropdownValue: null,
            categoryDropdownValues: '',
            categoryDropdownValue: null,
            mainRawDropdownValues: '',
            mainRawDropdownValue: null,
            pilltypeDropdownValues: '',
            pilltypeDropdownValue: null,
            packageDropdownValues: '',
            packageDropdownValue: null,
            package_id: '',
            raw_material_id: '',
            pill_id: '',
            category_id: '',
            formData: new FormData(),
            error: {},
        };
    },
    created() {
        this.nutriManagementService = new NutriManagementService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
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
        });

        this.nutriManagementService.getPillCategoryDropdown().then((data) => {
            this.pilltypeDropdownValues = data;
            // this.products = data;
            this.loading1 = false;
        });
        this.nutriManagementService.getPackageNutriDropdown().then((data) => {
            this.packageDropdownValues = data;
            // this.products = data;
            this.loading1 = false;
        });
    },
    methods: {
        reinitialize() {
            (this.category_id = null),
                (this.raw_material_id = null),
                (this.pill_id = null),
                (this.package_id = null),
                (this.name_ko = null),
                (this.name_en = null),
                (this.description_ko = null),
                (this.description_en = null),
                (this.tags_ko = null),
                (this.tags_en = null),
                (this.thumbnail = null),
                (this.product_sub_image = null),
                (this.detail_image = null),
                (this.status = null)((this.file = {}));
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
                items.push(data[a].id);
            }
            this.selectedItems = items.toString();
            console.log(this.selectedItems);
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
                this.formData.append('thumbnail', files[0]);
            }
            this.fileExtension = this.detail.replace(/^.*\./, '');
            console.log(this.detail);
        },
        onFileChangethum(e) {
            // console.log("multiple",e);
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.filesaddthumnail = files[0];
            console.log(files.length)
            if(files.length > 5 ){
                console.log("please select 5 image");
                return;
            } 
            // let productimg = []
            // Array.from(files).forEach(element => {
            //     productimg.push(element)
                
                
            // });
            
           
        //    console.log( "multiple",productimg)
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(this.filesaddthumnail.name)) {
                this.render3 = true;
                return false;
            } else {

                this.render3 = false;
                this.addthumnail = this.filesaddthumnail.name;
                  Array.from(files).forEach(element => {
               this.formData.append('product_sub_image', element)
                
                
            });
                // this.formData.append('product_sub_image', productimg);
            }
            
            this.fileExtensions = this.addthumnail.replace(/^.*\./, '');
            console.log(this.addthumnail);
        },
        onFileChangethumnail(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.newthumnailfiles = files[0];
            if (!files.length) return;
            this.newthumnailfiles = files[0];
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(this.newthumnailfiles.name)) {
                this.render3 = true;
                return false;
            } else {
                this.render4 = false;
                this.newthumnail = this.newthumnailfiles.name;
                this.formData.append('detail_image', files[0]);
            }
            this.filesExtensions = this.newthumnail.replace(/^.*\./, '');
            console.log(this.newthumnail);
        },

        remove_similar(id, similar_product_img) {
            //console.log(id)
            // console.log(similar_product_img)
            let similar_prod_image_arr = similar_product_img.toString().split('/');
            let image_name = similar_prod_image_arr[3];
            // console.log(similar_prod_image_arr[3])
            if (confirm('Do you really want to delete?')) {
                axios({ method: 'post', url: '/admin/product_raw_material/imageDelete', data: { raw_material_id: id, image_name: image_name } })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        remove_raw(id, raw_material_img) {
            //console.log(id)
            // console.log(similar_product_img)
            let raw_material_img_arr = raw_material_img.toString().split('/');
            let image_name = raw_material_img_arr[3];
            // console.log(similar_prod_image_arr[3])
            if (confirm('Do you really want to delete?')) {
                axios({ method: 'post', url: '/admin/product_raw_material/imageDelete', data: { raw_material_id: id, image_name: image_name } })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },

        addNutri() {
            //console.log(this.raw_material_id)
            let vcheckData = {
                category_id: this.category_id.toString(),
                raw_material_id: this.selectedItems.toString(),
                package_id: this.package_id.toString(),
                pill_id: this.pill_id.toString(),
                name_ko: this.name_ko,
                name_en: this.name_en,
                tags_ko: this.tags_ko,
                tags_en: this.tags_en,

                description_ko: this.description_ko,
                description_en: this.description_en,
                status: this.status,
                file: this.detail == '' ? '' : 'something',
                files: this.similar == '' ? '' : 'something',
                addthumnail: this.addthumnail == '' ? '' : 'something',
                newthumnail: this.newthumnail == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateAddNutri(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                // console.log(this.file);
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
                console.log(this.formData);
                return axios.post('/admin/nutriBlending/add', this.formData).then(() => {
                    alert('성공적으로 저장');
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Succesfully Published.', life: 3000 });
                    this.$router.push({ name: 'NutriManagement' });
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

.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}

.card {
    /* height: 1200px; */
}

.multiselect-option.is-selected.is-pointed {
    background: var(--ms-option-bg-selected-pointed, #f8f6f6);
    color: var(--ms-option-color-selected-pointed, rgb(5, 5, 5));
}

@media screen and (max-width: 768px) {
    .dropdowns {
        flex-direction: column;
    }
}
/* @media only screen and (max-width: 350px) {
  .dropdowns{
      display: inline;
  }
} */
</style>
<!--<style src="@vueform/multiselect/themes/default.css"></style>-->
