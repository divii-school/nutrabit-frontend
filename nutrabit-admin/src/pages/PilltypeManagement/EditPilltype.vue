<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('PillType.edit_pilltype') }}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="title2">{{ $t('PillType.list.addname') }}</label>
                            <InputText type="text" :placeholder="$t('PillType.list.addname')" id="title2" v-model="name_ko"></InputText>
                            <div class="text-red">{{ error.name_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="title2">{{ $t('PillType.list.addnamepill') }}</label>
                            <InputText type="text" :placeholder=" $t('PillType.list.addnamepill')" id="title2" v-model="name_en"></InputText>
                            <div class="text-red">{{ error.name_en }}</div>
                        </div>
                    </div>
                      <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('PillType.list.uploadimage') }}
                                <span class="img-info">(파일 형식: jpg,jpeg,png )(이미지 너비 200px )</span>
                            </label>
                            <div class="custom-select" >
                                <span v-if="!fileName">{{$t('button.select_file')}}</span>
                                <span v-else>{{ fileName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button label="파일 선택" class="SelectBtn n-wrap" />
                            </div>
                            <div style="float: right;">
                                <div class="text-red" v-show="render1">{{$t('validation.invalidFile')}}</div>
                                <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + image" alt="이미지를 사용할 수 없음" class="product-image" />
                                <!-- <img :src="'https://back.nutri33.co.kr/public/' + image" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                            </div>
                        </div>
                    </div>
                     
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="title2">{{ $t('PillType.list.Description') }}</label>
                            <Textarea type="text" :placeholder="$t('PillType.list.Description')" id="title2" v-model="description_ko"></Textarea>
                            <div class="text-red">{{ error.description_ko }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="title2">{{ $t('PillType.list.AddDescription') }}</label>
                            <Textarea type="text" :placeholder="$t('PillType.list.AddDescription')" id="title2" v-model="description_en"></Textarea>
                            <div class="text-red">{{ error.description_en }}</div>
                        </div>
                    </div>
                      
                  
                        
                    
                   
                </div>
            </div>

            <div class="p-d-flex p-jc-end p-ai-center"  style="float:left;">
                <Button :label="$t('button.update')" icon="pi pi-save" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="editPilltype"></Button>
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
import validateCreatePilltype from '../../validations/pilltype/validateCreatePilltype';
import PillTypeService from '../../service/API/PillTypeService';
export default {
    name: 'EditNft',
    data() {
        return {
            render1: false,
            // render2: false,
            // dropdownValues:  [{ name: 'active',code:'활동적인' }, { name: 'inactive',code:'비활성' }],
            // dropdownValueTypes: [{ name: 'nft' }, { name: 'card_news' }, { name: 'media_press' }, { name: 'de_fi_services' }],
            // dropdownValue: null,
            // dropdownValueType: null,
            name_ko: '',
            name_en: '',
            description_ko:"",
            description_en:"",
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
            
            fileName2: '',
            type: null,
        };
    },
    created() {
        this.pillTypeService = new PillTypeService();
    },
    mounted() {
        this.pillTypeService.viewPilltype(this.$route.params.id).then((res) => {
            this.name_ko = res.data.data[0].name_ko;
            this.name_en = res.data.data[0].name_en;
            // this.type = res.data.data[0].type;
            this.image = res.data.data[0].image_path;
            this.description_ko = res.data.data[0].description_ko;
            this.description_en = res.data.data[0].description_en;
            
            console.log(res.data.data[0]);
        });
    },
    methods: {
        reinitialize() {
            (this.name_ko = null), (this.name_en = null), (this.description_ko = null),(this.description_en = null), (this.fileName = null), (this.file = {});
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            this.file = files[0];
            if (!allowedExtensions.exec(this.file.name)) {
                 this.render1=true;
                return false;
            } else {
                 this.render1=false;
                this.fileName = this.file.name;
                this.formData.append('image', files[0]);
            }
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
        },
       
        editPilltype() {
            let vcheckData = {
                // id:this.id,
                 name_ko: this.name_ko,
                name_en: this.name_en,
                // type: this.dropdownValueType == null ? '' : 'something',
                description_ko: this.description_ko,
                 description_en: this.description_en,
                file: this.fileName == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateCreatePilltype(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.formData.append('id', this.$route.params.id);
                this.formData.append('name_ko', this.name_ko);
            this.formData.append('name_en', this.name_en);
            this.formData.append('description_ko', this.description_ko);
            this.formData.append('description_en', this.description_en);
                // this.formData.append('type', this.dropdownValueType?.name === undefined ? this.type : this.dropdownValueType?.name);
                console.log(this.formData);
                 alert('업데이트 완료')
                return axios.put('/admin/pill/edit', this.formData).then((res) => {
                    this.$router.push({ name: 'Pill' });
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
