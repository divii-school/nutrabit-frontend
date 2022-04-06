
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
                            <InputText :class="`${error.name_ko ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Nutri3.Add.Nutri3-name')" id="title2" v-model="name_ko"></InputText>
                            <div class="text-red">{{ error.name_ko }}</div>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Nutri3.Add.Nutri3-name1') }}</label>
                            <InputText :class="`${error.name_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Nutri3.Add.Nutri3-name1')" id="title2" v-model="name_en"></InputText>
                            <div class="text-red">{{ error.name_en }}</div>
                        </div>
                    </div>
                    <!-- <div class="p-grid p-formgrid p-mb-3">
                        
                       </div> -->
                    <div class="dropdowns" style="display: flex; width: 100%;margin-left:-13px;">
                        <div class="p-field p-col-12 p-md-3">
                            <label for="type">{{ $t('Nutri3.Add.Category') }}</label>
                            <!-- <label for="type">ID</label> -->
                            <select class="p-dropdown-label p-inputtext" name="category_id" id="category_id" v-model="category_id">
                                <option value="">Select</option>
                                <option v-for="(item, index) in categoryDropdownValues" v-bind:key="index" :value="item.id">
                                    {{ item.category_name_ko }}
                                </option>
                            </select>
                            <!-- <Dropdown v-model="id"  :options="dropdownValues"  optionLabel="category_name_ko" :placeholder="$t('Banner.placeholder.select')" /> -->
                        </div>
                        <div class="p-field p-col-12 p-md-3">
                            <label for="type">{{ $t('Nutri3.Add.MainRaw') }}</label>
                            <!-- <label for="type">ID</label> -->
                            <!-- <select class="p-dropdown-label p-inputtext" name="category_id" id="category_id" v-model="raw_material_id">
                            <option value="">Select</option>
                            <option v-for="(item , index) in mainRawDropdownValues" v-bind:key="index" :value="item.id" >
                            {{item.material_name_ko}}
                            </option>
                            </select> -->
                            <MultiSelect id="multiselect" :options="mainRawDropdownValues" v-model="raw_material_id" name="raw_material_id" optionLabel="material_name_ko" :filter="false"></MultiSelect>

                            <!-- <Dropdown v-model="id"  :options="dropdownValues"  optionLabel="category_name_ko" :placeholder="$t('Banner.placeholder.select')" /> -->
                            <!-- <Button
                        :label="$t('Nutri3.Add.publish')"
                        icon="pi pi-check"
                        iconPos="left"
                        class="p-button p-button-sm p-mr-2 p-mb-2"
                        @click="xyz"
                        ></Button> -->
                        </div>
                    </div>

                    <div class="dropdowns" style="display: flex; width: 100%; margin-left:-13px;">
                        <div class="p-field p-col-12 p-md-3">
                            <label for="type">{{ $t('Nutri3.Add.Piltype') }}</label>
                            <!-- <label for="type">ID</label> -->
                            <select class="p-dropdown-label p-inputtext" name="category_id" id="category_id" v-model="pill_id">
                                <option value="">Select</option>
                                <option v-for="(item, index) in pilltypeDropdownValues" v-bind:key="index" :value="item.id">
                                    {{ item.name_ko }}
                                </option>
                            </select>
                            <!-- <Dropdown v-model="id"  :options="dropdownValues"  optionLabel="category_name_ko" :placeholder="$t('Banner.placeholder.select')" /> -->
                        </div>
                        <div class="p-field p-col-12 p-md-3">
                            <label for="type">{{ $t('Nutri3.Add.Package') }}</label>
                            <!-- <label for="type">ID</label> -->
                            <select class="p-dropdown-label p-inputtext" name="category_id" id="category_id" v-model="package_id">
                                <option value="">Select</option>
                                <option v-for="(item, index) in packageDropdownValues" v-bind:key="index" :value="item.id">
                                    {{ item.name_ko }}
                                </option>
                            </select>
                            <!-- <Dropdown v-model="id"  :options="dropdownValues"  optionLabel="category_name_ko" :placeholder="$t('Banner.placeholder.select')" /> -->
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Nutri3.Add.AddTags(KO)') }}</label>
                            <InputText :class="`${error.tags_ko ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Nutri3.Add.AddTags(KO)')" id="title2" v-model="tags_ko"></InputText>
                            <div class="text-red">{{ error.tags_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Nutri3.Add.AddTags(EN)') }}</label>
                            <InputText :class="`${error.tags_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Nutri3.Add.AddTags(EN)')" id="title2" v-model="tags_en"></InputText>
                            <div class="text-red">{{ error.tags_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Nutri3.Add.Description(KO)') }}</label>
                            <Textarea :class="`${error.description_ko ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Nutri3.Add.Description(KO)')" id="title2" v-model="description_ko"></Textarea>
                            <div class="text-red">{{ error.description_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Nutri3.Add.Description(EN)') }}</label>
                            <Textarea :class="`${error.description_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Nutri3.Add.Description(EN)')" id="title2" v-model="description_en"></Textarea>
                            <div class="text-red">{{ error.description_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Nutri3.Add.Thumbnailimg') }}
                                <span class="img-info">(File Type jpg,jpeg,png )</span>
                            </label>
                            <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!detail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ detail }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red" v-show="render1">{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Nutri3.Add.productsubimg') }}
                                <span class="img-info">(File Type jpg,jpeg,png )</span>
                            </label>
                            <div :class="`${error.addthumnail ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!addthumnail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ addthumnail }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChangethum" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red" v-show="render2">{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Nutri3.Add.productdetailimg') }}
                                <span class="img-info">(File Type jpg,jpeg,png )</span>
                            </label>
                            <div :class="`${error.newthumnail ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!newthumnail">파일 선택</span>
                                <span v-else>{{ newthumnail }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChangethumnail" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red">{{ error.newthumnail }}</div>
                            <div class="text-red" v-show="render3">{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="state2">{{ $t('Nutri3.list.status') }}</label>
                            <input type="radio" id="yes" value="active" name="status" v-model="status" />
                            <label for="yes">Yes</label>
                            <input type="radio" id="no" name="status" value="inactive" v-model="status" />
                            <label for="no">No</label>
                            <div class="text-red">{{ error.state }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center" style="float: left">
                <div>
                    <Button :label="$t('Nutri3.Add.publish')" icon="pi pi-check" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="addNutri"></Button>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button :label="$t('Nutri3.Add.Back')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
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
//   import Multiselect from '@vueform/multiselect'
// import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
// import Vue from "vue";
// Vue.use(MultiSelectPlugin);
//import Multiselect from 'vue-multiselect'

export default {
    name: 'AddNutriManagement',
    // Multiselect,
    // props: ['dog', 'image'],
    // components: {
    //    Multiselect,
    // },
    data() {
        return {
            // value: null,
            // options: [
            //     'Batman',
            //     'Robin',
            //     'Joker',
            // ],
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

            Multiselect: '',
            filesExtensions: '',

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
            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            //console.log(this.customer1);
            //console.log(data);
        });

        this.nutriManagementService.getPillCategoryDropdown().then((data) => {
            this.pilltypeDropdownValues = data;
            // this.products = data;
            this.loading1 = false;
            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            //console.log(this.customer1);
            //console.log(data);
        });
        this.nutriManagementService.getPackageNutriDropdown().then((data) => {
            this.packageDropdownValues = data;
            // this.products = data;
            this.loading1 = false;
            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            // console.log(this.customer1);
            //console.log(data);
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
        // xyz(){
        //     let demo = this.value12;
        //     //let demo2 = JSON.parse(JSON.stringify(demo));
        //     //console.log(JSON.stringify(demo))

        //     //console.log(demo2[0])
        //     //console.log(this.getFields(Array(demo2),"id"))
        //     //console.log(Object.values(demo))
        //     //console.log(this.getFields(this.value12),"id")
        //     //console.log(demo.)

        // },
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
        // onFileChanges(e) {
        //     var files = e.target.files || e.dataTransfer.files;
        //     if (!files.length) return;
        //     this.files = files[0];
        //     if (!files.length) return;
        //     this.files = files[0];
        //     var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        //     if (!allowedExtensions.exec(this.files.name)) {
        //         this.render2=true;
        //         return false;
        //     } else {
        //          this.render2=false;
        //         this.similar = this.files.name;
        //         this.formData.append('product_sub_image', files[0]);
        //     }
        //     this.filesExtension = this.similar.replace(/^.*\./, '');
        //     console.log(this.similar);
        // },
        onFileChangethum(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.filesaddthumnail = files[0];
            if (!files.length) return;
            this.filesaddthumnail = files[0];
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(this.filesaddthumnail.name)) {
                this.render3 = true;
                return false;
            } else {
                this.render3 = false;
                this.addthumnail = this.filesaddthumnail.name;
                this.formData.append('product_sub_image', files[0]);
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
                category_id: this.category_id,
                raw_material_id: this.raw_material_id,
                package_id: this.package_id,
                pill_id: this.pill_id,
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
                //exposure: this.exposure == null ? '' : 'something',
                // type: this.dropdownValueType == null ? '' : 'something',
                //file: this.detail == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateAddNutri(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                // console.log(this.file);
                this.formData.append('category_id', this.category_id);
                this.formData.append('raw_material_id', this.raw_material_id);
                this.formData.append('pill_id', this.pill_id);
                this.formData.append('package_id', this.package_id);
                this.formData.append('name_ko', this.name_ko);
                this.formData.append('name_en', this.name_en);
                this.formData.append('tags_ko', this.tags_ko);
                this.formData.append('tags_en', this.tags_en);
                this.formData.append('description_ko', this.description_ko);
                this.formData.append('description_en', this.description_en);

                // this.formData.append('type', this.dropdownValueType?.name);
                //this.formData.append('status', this.status.name===undefined ? this.status :this.status.name);
                this.formData.append('status', this.status);
                //dropdownValues: [{ name: 'active'}, { name: 'inactive' }],
                console.log(this.formData);
                return axios.post('/admin/nutriBlending/add', this.formData).then(() => {
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
    height: 1200px;
}
.multiselect-option.is-selected.is-pointed {
    background: var(--ms-option-bg-selected-pointed, #f8f6f6);
    color: var(--ms-option-color-selected-pointed, rgb(5, 5, 5));
}
</style>
<!--<style src="@vueform/multiselect/themes/default.css"></style>-->
