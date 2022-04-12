<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{$t('Category.search.Register')}}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                       


                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('Category.list.title')}}</label>
                           
                            <AutoComplete
                                placeholder="Search"
                                :dropdown="true"
                                :multiple="false"
                                v-model="fst_category_name_ko"
                                :suggestions="autoFilteredValue"
                                @complete="searchCountry($event)"
                                field="category_name_ko"
                            />
                            
                        </div>
                        
                       

                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('Category.list.url')}}</label>
                           
                            <InputText :class="`${error.fst_category_name_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Category.list.url')" id="title2" v-model="fst_category_name_en" ></InputText>
                            <div class="text-red">{{ error.fst_category_name_en }}</div>
                        </div>
                        
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                         <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('Category.list.status')}}</label>
                            <InputText :class="`${error.scnd_category_name_ko ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Category.list.status')" id="title2" v-model="scnd_category_name_ko" ></InputText>
                            <div class="text-red">{{ error.scnd_category_name_ko }}</div>

                        </div>
                         <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('Category.list.created_dt')}}</label>
                            <InputText :class="`${error.scnd_category_name_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Category.list.created_dt')" id="title2" v-model="scnd_category_name_en"></InputText>
                            <div class="text-red">{{ error.scnd_category_name_en }}</div>

                        </div>
                    </div>


                      
                        
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                 {{$t('Category.list.thumnail')}}
                                <span class="img-info">(File Type jpg,jpeg,png )</span>
                            </label>
                            <div class="custom-select">
                                <span v-if="!fileName">{{$t('button.select_file')}}</span>
                                <span v-else>{{ fileName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red">{{ error.file }}</div>
                            <div class="text-red" v-show="render1">{{$t('validation.invalidFile')}}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                  
                    </div>
                </div>
            </div>

            <div class="p-d-flex p-jc-end p-ai-center" style="float:left;">
                <Button
                        :label="$t('button.save')"
                        icon="pi pi-check"
                        iconPos="left"
                        class="p-button p-button-sm p-mr-2 p-mb-2"
                        @click="addCategory"
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
import CategoryService from '../../service/API/CategoryService';


import validateCreateCategory from '../../validations/category/validateCreateCategory';
export default {
    name: 'CategoryAdd',
    // props: ['dog', 'image'],
    data() {
        return {
            render1:false,
            render2:false,
            dropdownValues: [{ name: 'active',code:'활성' }, { name: 'inactive',code:'비활성' }],
            // dropdownValueTypes: [{ name: 'nft',code:'NFT' }, { name: 'card_news',code:'Card News' }, { name: 'media_press',code:'Media press' }, { name: 'de_fi_services',code:'De-Fi Services' }],
            dropdownValue: '활동적인',
            // dropdownValueType: null,
            title:"",
            subtitle: null,
             selectedAutoValue: null,
            autoFilteredValue: [],
            link:"",
            files: null,
            filesName: '',
            file: '',
            image: '',
            fileName: '',
            fileExtension: '',
            filesExtension: '',
            fst_category_name_ko:'',
            fst_category_name_en:'',
            scnd_category_name_ko:'',
            scnd_category_name_en:'',
            category_image:'',
            formData: new FormData(),
            error: {},
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
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
               // console.log(this.products);
                //console.log(this.dropdownValues);
            })
            .catch((err) => console.log(err));
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
            (this.fst_category_name_ko = null), (this.fst_category_name_en = null), (this.scnd_category_name_ko = null),(this.scnd_category_name_ko = null), (this.fileName = null), (this.file = {});
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.file = files[0];
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(this.file.name)) {
                this.render1=true;
                return false;
            } else {
                this.render1=false;
                this.fileName = this.file.name;
                this.formData.append('category_image', files[0]);
            }
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
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
        //         this.filesName = this.files.name;
        //         this.formData.append('mobile_banner', files[0]);
        //     }
        //     this.filesExtension = this.filesName.replace(/^.*\./, '');
        //     console.log(this.filesName);
        // },
        addCategory() {
            let vcheckData = {
                fst_category_name_ko: this.fst_category_name_ko,
                fst_category_name_en: this.fst_category_name_en,
                scnd_category_name_ko: this.scnd_category_name_ko,
                scnd_category_name_en: this.scnd_category_name_en,
                // type: this.dropdownValueType == null ? '' : 'something',
                // link: this.link,
                file: this.fileName == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateCreateCategory(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
              // console.log(this.file);
            this.formData.append('fst_category_name_ko', this.fst_category_name_ko);
            this.formData.append('fst_category_name_en', this.fst_category_name_en);
            this.formData.append('scnd_category_name_ko', this.scnd_category_name_ko);
            this.formData.append('scnd_category_name_en', this.scnd_category_name_en);
            // this.formData.append('type', this.dropdownValueType?.name);
            // this.formData.append('status', this.dropdownValue.name===undefined ? this.dropdownValue :this.dropdownValue.name);
            console.log(this.formData);
            return axios
            
                .post('/admin/product_category/add', this.formData)
                .then(() => {
                    alert('성공적으로 저장')
                   this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Succesfully Published.', life: 3000 });
                    this.$router.push({ name: 'CategoryProduct' });
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

.p-button{
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}


</style>

<style scoped>


</style>
