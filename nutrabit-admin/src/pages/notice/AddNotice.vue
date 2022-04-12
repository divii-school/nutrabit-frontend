<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('Notice.addnew_notice') }}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Notice.add.title') }}</label>
                            <InputText
                                :class="`${error.title_ko ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Notice.add.title')"
                                id="title2"
                                v-model="title_ko"
                               
                            ></InputText>
                            <div class="text-red">{{ error.title_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Notice.add.addtitle') }}</label>
                            <InputText
                                :class="`${error.title_en ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Notice.add.addtitle')"
                                id="title2"
                                v-model="title_en"
                               
                            ></InputText>
                            <div class="text-red">{{ error.title_en }}</div>
                        </div>
                    </div>
                    

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Notice.add.image') }}
                                <span
                                    class="img-info"
                                >(File Type jpg,jpeg,png )</span>
                            </label>
                            <div class="custom-select">
                                <span v-if="!fileName">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ fileName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red">{{ error.file }}</div>
                            <div
                                class="text-red"
                                v-show="render1"
                            >{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Notice.add.description') }}</label>
                            <Textarea
                                :class="`${error.description_ko ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Notice.add.description')"
                                id="title2"
                                v-model="description_ko"
                                
                            ></Textarea>
                            <div class="text-red">{{ error.description_ko }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Notice.add.adddescroption') }}</label>
                            <Textarea
                                :class="`${error.description_en ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Notice.add.adddescroption')"
                                id="title2"
                                v-model="description_en"
                               
                            ></Textarea>
                            <div class="text-red">{{ error.description_en }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="state2">{{ $t('Notice.add.status') }}</label>
                            <br />
                            <!-- <Dropdown v-model="dropdownValue" modelValue="dropdownValues[0].name" :options="dropdownValues" optionLabel="code" :placeholder="status" /> -->
                            <input
                                type="radio"
                                id="yes"
                                value="1"
                                name="status"
                                v-model="expose"
                            />
                            <label for="yes">Yes</label>

                            <input
                                type="radio"
                                id="no"
                                name="status"
                                value="0"
                                v-model="expose"
                            />
                            <label for="no">No</label>

                            <div class="text-red">{{ error.state }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="top_10">{{ $t('Notice.add.top') }}</label>
                            <br />
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
            <div class="p-d-flex p-jc-end p-ai-center" style="float:left;">
                <Button
                    :label="$t('button.confirm')"
                    icon="pi pi-check"
                    iconPos="left"
                    class="p-button p-button-sm p-mr-2 p-mb-2"
                    @click="addNotice"
                    style="margin-top: -20px;"
                ></Button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import validateCreateNotice from '../../validations/notice/validateCreateNotice';
export default {
    name: 'Addnotice',
    // props: ['dog', 'image'],
    data() {
        return {
            render1: false,
            render2: false,
            dropdownValues: [{ name: 'active', code: '활성' }, { name: 'inactive', code: '비활성' }],
            // dropdownValueTypes: [{ name: 'nft',code:'NFT' }, { name: 'card_news',code:'Card News' }, { name: 'media_press',code:'Media press' }, { name: 'de_fi_services',code:'De-Fi Services' }],
            dropdownValue: '활동적인',
            // dropdownValueType: null,
            title: "",
            subtitle: null,
            link: "",
            files: null,
            filesName: '',
            file: '',
            image: '',
            fileName: '',
            fileExtension: '',
            filesExtension: '',
            status: '',
            title_en: '',
            title_ko: '',
            description_en: '',
            description_ko: '',
            expose: '',
            top10: '',


            formData: new FormData(),
            error: {},
        };
    },
    methods: {
        reinitialize() {
            (this.title_en = null), (this.title_ko = null), (this.description_en = null), (this.description_ko = null), (this.expose = null), (this.top10 = null), (this.fileName = null), (this.file = {});
        },
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
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
                this.fileName = this.file.name;
                this.formData.append('image', files[0]);
            }
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
        },

        addNotice() {
            let vcheckData = {
                title_ko: this.title_ko,
                title_en: this.title_en,
                description_ko: this.description_ko,
                description_en: this.description_en,
                top10: this.top10,

                expose: this.expose ,
                // type: this.dropdownValueType == null ? '' : 'something',
                // link: this.link,
                file: this.fileName == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateCreateNotice(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                // console.log(this.file);
                this.formData.append('title_ko', this.title_ko);
                this.formData.append('title_en', this.title_en);
                this.formData.append('description_ko', this.description_ko);
                this.formData.append('description_en', this.description_en);
                this.formData.append('top10', this.top10);
                // this.formData.append('type', this.dropdownValueType?.name);
                this.formData.append('expose', this.expose);
                console.log(this.formData);
                return axios
                    .post('/admin/notice/add', this.formData)
                    .then(() => {
                         alert('성공적으로 저장')
                        this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Succesfully Published.', life: 3000 });
                        this.$router.push({ name: 'NoticeList' });
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

.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
    margin-top: 2%;
}

.card {
   
}
</style>
