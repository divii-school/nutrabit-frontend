<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{$t('Faq.editnew_faq')}}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="title2">{{$t('Faq.list.category')}}</label>
                           <Dropdown v-model="category_id"  :options="categoryDropdownValues"  optionLabel="name_ko" optionValue="id" :placeholder="$t('Banner.placeholder.select')" />
                        </div>
                    </div>
                      <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('Faq.add.title')}}</label>
                           <InputText type="text" placeholder="Title" id="title_ko" v-model="title_ko"></InputText>
                            <div class="text-red">{{ error.title_ko }}</div>
                        </div>
                    </div>
                     <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('Faq.add.addtitle')}}</label>
                            <InputText type="text" placeholder="Title" id="title_en" v-model="title_en"></InputText>
                            <div class="text-red">{{ error.title_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="title2">{{$t('Faq.add.answer')}}</label>
                             <Textarea type="text" placeholder="Description" id="title_en" v-model="description_ko"></Textarea>
                            <div class="text-red">{{ error.description_ko }}</div>
                        </div>
                    </div>

                     <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="title2">{{$t('Faq.add.addanswer')}}</label>
                            <Textarea type="text" placeholder="Description" id="title_en" v-model="description_en"></Textarea>
                            <div class="text-red">{{ error.description_en }}</div>
                        </div>
                    </div>

                     <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="state2">{{ $t('Faq.add.status') }}</label>
                            <br>
                            <!-- <Dropdown v-model="dropdownValue" modelValue="dropdownValues[0].name" :options="dropdownValues" optionLabel="code" :placeholder="status" /> -->
                             <input type="radio" id="yes" value="active" name="status" v-model="status">
                                <label for="yes">Yes</label>
                                
                                <input type="radio" id="no" name="status" value="inactive" v-model="status">
                                <label for="no">No</label>
                            
                            <div class="text-red">{{ error.state }}</div>
                        </div>
                    </div>
                        
                  
                        
                    
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="top_10">{{ $t('Faq.add.top') }}</label>
                            <br>
                            <!-- <Dropdown v-model="dropdownValue" modelValue="dropdownValues[0].name" :options="dropdownValues" optionLabel="code" :placeholder="status" /> -->
                             <input type="radio" id="yes" value="y" name="top_10" v-model="top_10">
                                <label for="yes">Yes</label>
                                
                                <input type="radio" id="no" name="top_10" value="n" v-model="top_10">
                                <label for="no">No</label>
                            
                            <div class="text-red">{{ error.top }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-d-flex p-jc-end p-ai-center"  style="float:left;">
                <Button :label="$t('button.update')" icon="pi pi-save" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="editFaq"></Button>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button :label="$t('button.back')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                    
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import validateCreateFaq from  '../../validations/faq/validateCreateFaq';
import FaqService from '../../service/API/FaqService';
export default {
    name: 'EditNft',
    data() {
        return {
            render1: false,
            render2: false,
            dropdownValues:  [{ name: 'active',code:'활동적인' }, { name: 'inactive',code:'비활성' }],
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
           
            fileName1: '',
            fileName2: '',
            type: null,
             products: null,
            selectedProduct: null,
            category_id:'',
            title_ko:'',
            title_en:'',
            description_ko:'',
            description_en:'',
            status:'',
            top_10:'',
               id: '',
        };
    },
    created() {
        this.faqService = new FaqService();
    },
    mounted() {
        this.loading1 = true;
         this.faqService
            .getFaqCategoryDropdown()
            .then((data) => {
                this.categoryDropdownValues = data;
                //this.products = data;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                console.log(this.products);
                console.log(data);
            })
        this.faqService.viewFaq(this.$route.params.id).then((res) => {
             this.id = res.data.data[0].id;
            this.category_id = res.data.data[0].category_id;
            this.title_ko = res.data.data[0].title_ko;
            // this.type = res.data.data[0].type;
            this.title_en = res.data.data[0].title_en;
            this.description_ko = res.data.data[0].description_ko;
            this.description_en = res.data.data[0].description_en;
            this.status = res.data.data[0].status;
            this.top_10 = res.data.data[0].top_10;
            console.log(res.data.data[0]);
        });
    },
    methods: {
        reinitialize() {
            (this.category_id = null), (this.title_ko = null), (this.title_en = null), 
            (this.description_ko = null),(this.description_en = null), (this.status = null),(this.top_10 = null);
        },
        
        
        editFaq() {
            let vcheckData = {
                category_id: this.category_id.toString(),
                title_ko: this.title_ko,
                title_en: this.title_en,
                description_ko: this.description_ko,
                description_en: this.description_en,
                state: this.status,
                top_10: this.top_10 ,
                // type: this.dropdownValueType ? 'something' : 'something',
                
            };
            const { isInvalid, error } = validateCreateFaq(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.formData.append('id', this.$route.params.id);
                this.formData.append('category_id', this.category_id.toString());
                
                this.formData.append('title_ko', this.title_ko);
                this.formData.append('title_en', this.title_en);
                this.formData.append('description_ko', this.description_ko);
                this.formData.append('description_en', this.description_en);
                this.formData.append('status', this.status);
                this.formData.append('top_10', this.top_10);
               // this.formData.append('status', this.dropdownValue?.name === undefined ? this.status : this.dropdownValue?.name);
                // this.formData.append('type', this.dropdownValueType?.name === undefined ? this.type : this.dropdownValueType?.name);
                console.log(this.formData);
                 alert('업데이트 완료')
                return axios.put('/admin/faq/edit', {'id':this.$route.params.id,'category_id':this.category_id,'title_ko':this.title_ko,'title_en':this.title_en,'description_ko':this.description_ko,'description_en':this.description_en,'top_10':this.top_10,'status':this.status}).then((res) => {
                    this.$router.push({ name: 'Faq' });
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

.p-button{
    background: #000000;
    border: 1px solid #0a0a0a;
        color: white;
}
</style>
