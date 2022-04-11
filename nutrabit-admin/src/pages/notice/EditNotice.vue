<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('Notice.edit_notice') }}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="title2">{{ $t('Notice.add.title') }}</label>
                            <InputText type="text" :placeholder=" $t('Notice.add.title')" id="title2" v-model="title_ko"></InputText>
                            <div class="text-red">{{ error.title_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="title2">{{ $t('Notice.add.addtitle') }}</label>
                            <InputText type="text" :placeholder="$t('Notice.add.addtitle')" id="title2" v-model="title_en"></InputText>
                            <div class="text-red">{{ error.title_en }}</div>
                        </div>
                    </div>
                       <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Notice.add.image') }}
                                <span class="img-info">(File Type jpg,jpeg,png )</span>
                            </label>
                             <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`" >
                                <span v-if="!fileName">{{$t('button.select_file')}}</span>
                                <span v-else>{{ fileName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red" v-show="render1">{{$t('validation.invalidFile')}}</div>
                            <div class="text-red">{{ error.file }}</div>
                            <img :src="'http://api-nutrabbit-dev.dvconsulting.org/public' + image" :alt="image" class="product-image" />

                            
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="title2">{{ $t('Notice.add.description') }}</label>
                            <Textarea type="text" placeholder="Title" id="title2" v-model="description_ko"></Textarea>
                            <div class="text-red">{{ error.description_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="title2">{{ $t('Notice.add.adddescroption') }}</label>
                            <Textarea type="text" placeholder="Title" id="title2" v-model="description_en"></Textarea>
                            <div class="text-red">{{ error.description_en }}</div>
                        </div>
                    </div>
                   
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="state2">{{ $t('Notice.add.status') }}</label>
                            <br>
                            <!-- <Dropdown v-model="dropdownValue" modelValue="dropdownValues[0].name" :options="dropdownValues" optionLabel="code" :placeholder="status" /> -->
                             <input type="radio" id="yes" value="1" name="status" v-model="expose">
                                <label for="yes">Yes</label>
                                
                                <input type="radio" id="no" name="status" value="0" v-model="expose">
                                <label for="no">No</label>
                            
                            <div class="text-red">{{ error.state }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field" >
                            <label for="state2">{{ $t('Notice.add.top') }}</label>
                            <br>
                            <!-- <Dropdown v-model="dropdownValue" modelValue="dropdownValues[0].name" :options="dropdownValues" optionLabel="code" :placeholder="status" /> -->
                             <input type="radio" id="yes" value="1" name="top_10" v-model="top10" />
                            <label for="yes">Yes</label>

                            <input type="radio" id="no" name="top_10" value="0" v-model="top10" />
                            <label for="no">No</label>

                            <div class="text-red">{{ error.top }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-d-flex p-jc-end p-ai-center"  style="float:left;">
                <Button :label="$t('button.update')" icon="pi pi-save" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="editNotice"></Button>
            </div>
            
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import validateCreateNotice from '../../validations/notice/validateCreateNotice';
import NoticeService from '../../service/API/NoticeService';
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
            status: '',
            fileName1: '',
            fileName2: '',
            type: null,
            title_en: '',
            title_ko: '',
            description_en: '',
            description_ko: '',
            expose: '',
            top10: '',
        };
    },
    created() {
        this.noticeService = new NoticeService();
    },
    mounted() {
        this.noticeService.viewnNotice(this.$route.params.id).then((res) => {
            this.title_ko = res.data.data[0].title_ko;
            this.title_en = res.data.data[0].title_en;
            // this.type = res.data.data[0].type;
            this.description_ko = res.data.data[0].description_ko;
            this.description_en = res.data.data[0].description_en;
            this.image = res.data.data[0].image_path;
            this.expose = res.data.data[0].expose;
            this.top10 = res.data.data[0].top10
            console.log(res.data.data[0]);
        });
    },
    methods: {
        reinitialize() {
            (this.title_en = null), (this.title_ko = null), (this.description_en = null), (this.description_ko = null), (this.expose = null), (this.top10 = null), (this.fileName = null), (this.file = {});
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
            console.log(this.fileExtension);
        },
       
        editNotice() {
            let vcheckData = {
                title_ko: this.title_ko,
                title_en: this.title_en,
                description_ko: this.description_ko,
                description_en: this.description_en,
                top10: this.top10,

                expose: this.expose ,
                file: this.image == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateCreateNotice(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.formData.append('title_ko', this.title_ko);
                this.formData.append('id', this.$route.params.id);
                this.formData.append('title_en', this.title_en);
                this.formData.append('description_ko', this.description_ko);
                this.formData.append('description_en', this.description_en);
                this.formData.append('top10', this.top10);
                 this.formData.append('expose', this.expose);
                // this.formData.append('type', this.dropdownValueType?.name === undefined ? this.type : this.dropdownValueType?.name);
                console.log(this.formData);
                return axios.put('/admin/notice/edit', this.formData).then((res) => {
                    this.$router.push({ name: 'NoticeList' });
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

.card {
    height: 775px;
}
</style>
