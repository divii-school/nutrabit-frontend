<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('Category.edit_category') }}</h5>
                    

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Category.list.title') }}</label>
                           <AutoComplete
                                placeholder="Search"
                                :dropdown="true"
                                :multiple="false"
                                v-model="fst_category_name_ko"
                                :suggestions="autoFilteredValue"
                                @complete="searchCountry($event)"
                                field="category_name_ko"
                            />
                            <!-- <p>{{ mydata.fst_category_name_ko }}</p> -->
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Category.list.url') }}</label>
                            <InputText
                                type="text"
                                placeholder="link"
                                id="title2"
                                v-model="fst_category_name_en"
                            ></InputText>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Category.list.status') }}</label>
                            <InputText
                                type="text"
                                placeholder="link"
                                id="title2"
                                v-model="scnd_category_name_ko"
                            ></InputText>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Category.list.created_dt') }}</label>
                            <InputText
                                type="text"
                                placeholder="link"
                                id="title2"
                                v-model="scnd_category_name_en"
                            ></InputText>
                        </div>
                    </div>
                   

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Category.list.thumnail') }}
                                <span
                                    class="img-info"
                                >(File Type jpg,jpeg,png )</span>
                            </label>
                            <div
                                :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`"
                            >
                                <span v-if="!fileName">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ fileName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red" v-show="render1">{{ $t('validation.invalidFile') }}</div>
                            <div class="text-red">{{ error.file }}</div>
                            <img
                                :src="'http://api-nutrabbit-dev.dvconsulting.org/public/' + category_image"
                                :alt="category_image"
                                class="product-image"
                            />
                        </div>
                    </div>

                   
                </div>
            </div>

            <div class="p-d-flex p-jc-end p-ai-center" style="float:left;">
                <Button
                    :label="$t('button.edit')"
                    icon="pi pi-save"
                    iconPos="left"
                    class="p-button p-button-sm p-mr-2 p-mb-2"
                    @click="editCategory"
                ></Button>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button
                        :label="$t('button.back')"
                        icon="pi pi-replay"
                        iconPos="left"
                        class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                        @click="$router.go(-1)"
                    ></Button>
                </div>
            </div>
        </form>
    </div>
</template>




<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import validateEditCategory from '../../validations/category/validateEditCategory';
import CategoryService from '../../service/API/CategoryService';
export default {
    name: 'CategoryEdit',
    data() {
        return {

            render1: false,
            render2: false,
            title: null,
            link: null,
            files: null,
            filesName: null,
            file: null,
            image: '',
            fileName: null,
            fileExtension: '',
            filesExtension: '',
            selectedAutoValue: null,
            autoFilteredValue: [],
            formData: new FormData(),
            error: {},
            status: '',
            fileName1: '',
            fileName2: '',
            fst_category_name_ko: '',
            fst_category_name_en: '',
            scnd_category_name_ko: '',
            scnd_category_name_en: '',
            type: null,

            category_image: '',

            
        };
    },
    created() {
        this.categoryService = new CategoryService();
    },
    mounted() {
         const route = useRoute();
        console.log(route.params);
        this.categoryService
            .getCategorydropdown()
            .then((data) => {
                this.dropdownValues = data;
                this.autoValue = data;
                // this.products = data;
                this.loading1 = false;
                
            })
            .catch((err) => console.log(err));
        this.categoryService.viewCategory(this.$route.params.id).then((res) => {
            this.fst_category_name_ko = res.data.data[0].fst_category_name_ko;
            this.fst_category_name_en = res.data.data[0].fst_category_name_en;
            this.scnd_category_name_ko = res.data.data[0].scnd_category_name_ko;
            this.scnd_category_name_en = res.data.data[0].scnd_category_name_en;
            this.category_image = res.data.data[0].category_image_path;
            console.log(res.data.data[0]);
        });
    },
    methods: {
          searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.autoFilteredValue = [...this.autoValue];
                }
                else {
                    this.autoFilteredValue = this.autoValue.filter((country) => {
                        return country.category_name_ko.toLowerCase().startsWith(event.query.toLowerCase());

                    });
                }
            }, 250);
        },
        reinitialize() {
            (this.fst_category_name_ko = null), (this.fst_category_name_en = null), (this.scnd_category_name_ko = null), (this.scnd_category_name_en = null), (this.fileName = null), (this.file = {});
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
                this.formData.append('category_image', files[0]);
            }
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
        },
        
        editCategory() {
            let vcheckData = {
                fst_category_name_ko: this.fst_category_name_ko,
                fst_category_name_en: this.fst_category_name_en,
                scnd_category_name_ko: this.scnd_category_name_ko,
                scnd_category_name_en: this.scnd_category_name_en,
                // type: this.dropdownValueType ? 'something' : 'something',
                file: this.category_image == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateEditCategory(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                // this.formData.append('title', this.title);
                this.formData.append('id', this.$route.params.id);
                this.formData.append('fst_category_name_ko', this.fst_category_name_ko);
                this.formData.append('fst_category_name_en', this.fst_category_name_en);
                this.formData.append('scnd_category_name_ko', this.scnd_category_name_ko);


                this.formData.append('scnd_category_name_en', this.scnd_category_name_en);
                // this.formData.append('file', this.file);

                // this.formData.append('type', this.dropdownValueType?.name === undefined ? this.type : this.dropdownValueType?.name);
                console.log(this.formData);
                 alert('업데이트 완료')
                return axios.put('/admin/product_category/edit', this.formData).then((res) => {
                    this.$router.push({ name: 'CategoryProduct' });
                    console.log(res);
                });
            }
        },
    },
};
</script>

<style scoped>
.p-field > label {
    display: inline-block;
    margin-bottom: 0.5rem;
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

.custom-select span {
    max-width: 140px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.SelectBtn {
    max-width: 100px;
}
.p-fluid .p-button {
    width: 100%;
}

.p-button-label {
    transition: all 0.2s;
}

.text-red {
    color: red;
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
.p-button-label {
    flex: 1 1 auto;
}

.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
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

.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}
</style>