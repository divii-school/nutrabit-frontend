<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{$t('Faq.add.addnew_faq')}}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('Faq.list.category')}}</label>
                            <select
                                class="p-dropdown-label p-inputtext"
                                name="category_id"
                                id="category_id"
                                v-model="category_id"
                            >
                                <option value>Select</option>
                                <option
                                    v-for="(item, index) in categoryDropdownValues"
                                    v-bind:key="index"
                                    :value="item.id"
                                >{{ item.name_ko }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('Faq.add.title')}}</label>
                            <InputText :class="`${error.title_ko ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Faq.add.title')" id="title2" v-model="title_ko"  @keyup="addFaq"></InputText>
                            <div class="text-red">{{ error.title_ko }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('Faq.add.addtitle')}}</label>
                            <InputText :class="`${error.title_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Faq.add.addtitle')" id="title2" v-model="title_en" @keyup="addFaq"></InputText>
                            <div class="text-red">{{ error.title_en }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('Faq.add.answer')}}</label>
                            <Textarea :class="`${error.description_ko ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Faq.add.answer')" id="title2" v-model="description_ko" @keyup="addFaq"></Textarea>
                            <div class="text-red">{{ error.description_ko }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{$t('Faq.add.addanswer')}}</label>
                            <Textarea :class="`${error.description_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Faq.add.addanswer')" id="title2" v-model="description_en" @keyup="addFaq"></Textarea>
                            <div class="text-red">{{ error.description_en }}</div>
                        </div>
                    </div>
                        <!-- <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="type">{{$t('Banner.list.type')}}</label>
                            <Dropdown :class="`${error.type ? 'p-invalid' : ''}`"
                                v-model="dropdownValueType"
                                :options="dropdownValueTypes"
                                optionLabel="code"
                                :placeholder="$t('Banner.placeholder.select')"
                            />
                            <div class="text-red">{{ error.type }}</div>
                        </div> -->
                     
                   
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
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
            <div class="p-d-flex p-jc-end p-ai-center" style="float:left;">
                 <Button
                        :label="$t('button.save')"
                        icon="pi pi-check"
                        iconPos="left"
                        class="p-button p-button-sm p-mr-2 p-mb-2"
                        @click="addFaq"
                    ></Button>

                    <Button
                        :label="$t('button.back')"
                        icon="pi pi-replay"
                        iconPos="left"
                        class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                        @click="$router.go(-1)"
                    ></Button>
                    
            </div>
            <div class="p-d-flex p-jc-end p-ai-center" >
                <div>
                    
                    
                   
                </div>
            </div>
            
        </form>
    </div>

</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import FaqService from '../../service/API/FaqService';
import validateCreateFaq from  '../../validations/faq/validateCreateFaq';
export default {
    name: 'AddBanner',
    // props: ['dog', 'image'],
    data() {
        return {
            render1:false,
            render2:false,
             dropdownValues: [{ name: 'active',code:'활성' }, { name: 'inactive',code:'비활성' }],
            // dropdownValueTypes: [{ name: 'nft',code:'NFT' }, { name: 'card_news',code:'Card News' }, { name: 'media_press',code:'Media press' }, { name: 'de_fi_services',code:'De-Fi Services' }],
             dropdownValue: '',
            // dropdownValueType: null,
            category_id:'',
            title_ko:'',
            title_en:'',
            description_ko:'',
             
            description_en:'',
            top_10:'',
            subtitle: null,
            link:"",
            files: null,
            filesName: '',
            file: '',
            image: '',
            fileName: '',
            fileExtension: '',
            filesExtension: '',
            status:'',
            categoryDropdownValues: '',
            categoryDropdownValue: null,
            
            
            formData: new FormData(),
            error: {},
        };
    },
    created() {
        this.faqService = new FaqService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
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
    },
    methods: {
        reinitialize() {
            (this.category_id = null), (this.title_ko = null), (this.title_en = null), (this.description_ko = null), (this.description_en = null),(this.top_10 = null),(this.dropdownValue = null);
        },
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
       
        addFaq() {
            let vcheckData = {
                category_id: this.category_id,
                title_ko: this.title_ko,
                title_en: this.title_en,
                description_ko: this.description_ko,
                description_en: this.description_en,
                top_10: this.top_10,
                state: this.status ,
                // type: this.dropdownValueType == null ? '' : 'something',
                
            };
            const { isInvalid, error } = validateCreateFaq(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
              // console.log(this.file);
            // this.formData.append('category_id', this.category_id);
            // this.formData.append('title_ko', this.title_ko);
            // this.formData.append('title_en', this.title_en);
            // this.formData.append('description_ko', this.description_ko);
            // this.formData.append('description_en', this.description_en);
            // this.formData.append('top_10', this.top_10);
            // this.formData.append('status', this.status);
            // this.formData.append('type', this.dropdownValueType?.name);
           
            console.log( this.formData);
            return axios
                .post('/admin/faq/add', {'category_id':this.category_id,'title_ko':this.title_ko,'title_en':this.title_en,'description_ko':this.description_ko,'description_en':this.description_en,'top_10':this.top_10,'status':this.status})
                .then(() => {
                
                   this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Succesfully Published.', life: 3000 });
                    this.$router.push({ name: 'Faq' });
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

.card{
    
    height: 670px;

}
</style>
