
<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('RawMaterialadd.addnew_raw') }}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="type">카테고리</label>

                            <Dropdown :class="`${error.sub_category_id ? 'p-invalid' : ''}`" v-model="sub_category_id" :options="categoryDropdownValues" optionLabel="category_name_ko" optionValue="id" placeholder="선택" />
                            <div class="text-red">{{ error.sub_category_id }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Rawmaterialname(KO)') }}</label>
                            <InputText :class="`${error.material_name_ko ? 'p-invalid' : ''}`" type="text" :placeholder="$t('RawMaterialadd.list.Rawmaterialname(KO)')" id="title2" v-model="material_name_ko"></InputText>
                            <div class="text-red">{{ error.material_name_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Rawmaterialname(EN)') }}</label>
                            <InputText :class="`${error.material_name_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('RawMaterialadd.list.Rawmaterialname(EN)')" id="title2" v-model="material_name_en"></InputText>
                            <div class="text-red">{{ error.material_name_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Standard(KO)') }}</label>
                            <InputText :class="`${error.standard_ko ? 'p-invalid' : ''}`" type="text" :placeholder="$t('RawMaterialadd.list.Standard(KO)')" id="title2" v-model="standard_ko"> </InputText>
                            <!-- <div class="text-red">{{ error.standard_ko }}</div> -->
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Standard(EN)') }}</label>
                            <InputText :class="`${error.standard_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('RawMaterialadd.list.Standard(EN)')" id="title2" v-model="standard_en"> </InputText>
                            <!-- <div class="text-red">{{ error.standard_en }}</div> -->
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Rawmarterialdescription(KO)') }}</label>
                            <Textarea :class="`${error.material_description_ko ? 'p-invalid' : ''}`" type="text" :placeholder="$t('RawMaterialadd.list.Rawmarterialdescription(KO)')" id="title2" v-model="material_description_ko"></Textarea>
                            <!-- <div class="text-red">{{ error.material_description_ko }}</div> -->
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Rawmarterialdescription(EN)') }}</label>
                            <Textarea :class="`${error.material_description_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('RawMaterialadd.list.Rawmarterialdescription(EN)')" id="title2" v-model="material_description_en"></Textarea>
                            <!-- <div class="text-red">{{ error.material_description_en }}</div> -->
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Function(KO)') }}</label>
                            <Textarea :class="`${error.material_function_ko ? 'p-invalid' : ''}`" type="text" :placeholder="$t('RawMaterialadd.list.Function(KO)')" id="title2" v-model="material_function_ko"></Textarea>
                            <div class="text-red">{{ error.material_function_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Fucntion(EN)') }}</label>
                            <Textarea :class="`${error.material_function_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('RawMaterialadd.list.Fucntion(EN)')" id="title2" v-model="material_function_en"></Textarea>
                            <div class="text-red">{{ error.material_function_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.DailyIntakeAmount(KO)') }}</label>
                            <div :class="`${error.daily_intake_amount_ko ? 'p-invalid' : ''}`">
                                <Quill-Editor ref="myQuillEditor" contentType="html" :placeholder="$t('RawMaterialadd.list.DailyIntakeAmount(KO)')" id="title2" v-model:content="daily_intake_amount_ko" />
                            </div>
                            <div class="text-red">{{ error.daily_intake_amount_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3 editer-gap">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.DailyIntakeAmount(EN)') }}</label>
                            <div :class="`${error.daily_intake_amount_en ? 'p-invalid' : ''}`">
                                <Quill-Editor ref="myQuillEditor" contentType="html" :placeholder="$t('RawMaterialadd.list.DailyIntakeAmount(EN)')" id="title2" v-model:content="daily_intake_amount_en" />
                            </div>
                            <div class="text-red">{{ error.daily_intake_amount_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3 editer-gap">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Prequotion(KO)') }}</label>
                            <div :class="`${error.material_prequotion_ko ? 'p-invalid' : ''}`">
                                <Quill-Editor ref="myQuillEditor" contentType="html" :placeholder="$t('RawMaterialadd.list.Prequotion(KO)')" id="title2" v-model:content="material_prequotion_ko" />
                            </div>
                            <!-- <div class="text-red">{{ error.material_prequotion_ko }}</div> -->
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3 editer-gap">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Prequotion(EN)') }}</label>
                            <div :class="`${error.material_prequotion_en ? 'p-invalid' : ''}`">
                                <Quill-Editor ref="myQuillEditor" contentType="html" :placeholder="$t('RawMaterialadd.list.Prequotion(EN)')" id="title2" v-model:content="material_prequotion_en" />
                            </div>
                            <!-- <div class="text-red">{{ error.material_prequotion_en }}</div> -->
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3 editer-gap">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Extrainfo(KO)') }}</label>
                            <div :class="`${error.material_extra_info_ko ? 'p-invalid' : ''}`">
                                <Quill-Editor ref="myQuillEditor" contentType="html" :placeholder="$t('RawMaterialadd.list.Extrainfo(KO)')" id="title2" v-model:content="material_extra_info_ko" />
                            </div>
                            <!-- <div class="text-red">{{ error.material_extra_info_ko }}</div> -->
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3 editer-gap">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.Extrainfo(EN)') }}</label>
                            <div :class="`${error.material_extra_info_en ? 'p-invalid' : ''}`">
                                <Quill-Editor ref="myQuillEditor" contentType="html" :placeholder="$t('RawMaterialadd.list.Extrainfo(EN)')" id="title2" v-model:content="material_extra_info_en" />
                            </div>
                            <!-- <div class="text-red">{{ error.material_extra_info_en }}</div> -->
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3 editer-gap">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('RawMaterialadd.list.banner') }}
                                <span class="img-info">(파일 형식: jpg,jpeg,png 최대 5개의 이미지를 추가할 수 있습니다.)(이미지 너비 200px )</span>
                            </label>
                            <div :class="`${error.detail ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!detail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ detail }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" multiple />
                                <Button label="파일 선택" class="SelectBtn n-wrap" />
                            </div>
                            <!-- <div class="text-red">{{ error.detail }}</div> -->
                            <div class="text-red" v-show="render1">{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('RawMaterialadd.list.thumbnail1') }}
                                <span class="img-info">(파일 형식: jpg,jpeg,png )(이미지 너비 200px )</span>
                            </label>
                            <div :class="`${error.addthumnail ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!addthumnail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ addthumnail }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChangethum" />
                                <Button label="파일 선택" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red">{{ error.addthumnail }}</div>
                            <div class="text-red" v-show="render3">{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('RawMaterialadd.list.thumbnail2') }}
                                <span class="img-info">(파일 형식: jpg,jpeg,png )(이미지 너비 200px )</span>
                            </label>
                            <div :class="`${error.newthumnail ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!newthumnail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ newthumnail }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChangethumnail" />
                                <Button label="파일 선택" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red">{{ error.newthumnail }}</div>
                            <div class="text-red" v-show="render4">{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('RawMaterialadd.list.rawdetails') }}
                                <span class="img-info">(파일 형식: jpg,jpeg,png 최대 5개의 이미지를 추가할 수 있습니다.)(이미지 너비 200px )</span>
                            </label>
                            <div :class="`${error.similar ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!similar">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ similar }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChanges" multiple />
                                <Button label="파일 선택" class="SelectBtn n-wrap" />
                            </div>
                            <!-- <div class="text-red">{{ error.similar }}</div> -->
                            <div class="text-red" v-show="render2">{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.tag1') }}</label>
                            <InputText :class="`${error.tag_ko ? 'p-invalid' : ''}`" type="text" :placeholder="$t('RawMaterialadd.list.tag1')" id="title2" v-model="tag_ko"></InputText>
                            <!-- <div class="text-red">{{ error.tag_ko }}</div> -->
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('RawMaterialadd.list.tag2') }}</label>
                            <InputText :class="`${error.tag_en ? 'p-invalid' : ''}`" type="text" :placeholder="$t('RawMaterialadd.list.tag2')" id="title2" v-model="tag_en"></InputText>
                            <!-- <div class="text-red">{{ error.tag_en }}</div> -->
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="state2">{{ $t('RawMaterialadd.list.status') }}</label>

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
                    <Button :label="$t('RawMaterialadd.list.Add')" icon="pi pi-check" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="addRaw"></Button>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button label="뒤로가기" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import RawService from '../../service/API/RawService';
import validateCreateRaw from '../../validations/RawMaterials/validateCreateRaw';

export default {
    name: 'AddRawProduct',
    // props: ['dog', 'image'],
    data() {
        return {
            render1: false,
            render2: false,
            render3: false,
            render4: false,
            statusdropdownValues: [
                { name: 'active', code: '활성' },
                { name: 'inactive', code: '비활성' },
            ],
            //dropdownValue: 'active',
            // dropdownValueTypes: [{ name: 'nft',code:'NFT' }, { name: 'card_news',code:'Card News' }, { name: 'media_press',code:'Media press' }, { name: 'de_fi_services',code:'De-Fi Services' }],
            exposure: '활동적인',
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

            // category_id: '',
            sub_category_id: '',
            material_name_ko: '',
            material_name_en: '',
            standard_ko: '',
            standard_en: '',
            material_description_ko: '',
            material_description_en: '',
            material_function_ko: '',
            material_function_en: '',
            material_prequotion_ko: '',
            material_prequotion_en: '',
            material_extra_info_ko: '',
            material_extra_info_en: '',
            daily_intake_amount_ko: '',
            daily_intake_amount_en: '',
            tag_ko: '',
            tag_en: '',
            status: '',
            similar_product_img: '',
            raw_material_img: '',
            thumbnail_1: '',
            thumbnail_2: '',
            dropdownValue: null,
            categoryDropdownValues: '',
            categoryDropdownValue: null,
            formData: new FormData(),
            error: {},
        };
    },
    created() {
        this.rawService = new RawService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.loading1 = true;
        this.rawService.getRawCategoryDropdown().then((data) => {
            this.categoryDropdownValues = data;
            // this.products = data;
            this.loading1 = false;
            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            console.log(this.customer1);
            console.log(data);
        });
    },
    methods: {
        reinitialize() {
            (this.sub_category_id = null),
                (this.material_name_ko = null),
                (this.material_name_en = null),
                (this.standard_ko = null),
                (this.standard_en = null),
                (this.material_description_ko = null),
                (this.material_description_en = null),
                (this.material_function_ko = null),
                (this.material_function_en = null),
                (this.material_prequotion_ko = null),
                (this.material_prequotion_en = null),
                (this.material_extra_info_ko = null),
                (this.material_extra_info_en = null),
                (this.daily_intake_amount_ko = null),
                (this.daily_intake_amount_en = null),
                (this.tag_ko = null),
                (this.tag_en = null),
                (this.status = null),
                (this.similar_product_img = null),
                (this.raw_material_img = null),
                (this.thumbnail_1 = null),
                (this.thumbnail_2 = null),
                (this.file = {});
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.file = files[0];
            if (files.length > 5) {
                alert('5 이미지 선택');
                return;
            }
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(this.file.name)) {
                this.render1 = true;
                return false;
            } else {
                this.render1 = false;
                this.detail = this.file.name;
                Array.from(files).forEach((element) => {
                    this.formData.append('similar_product_img', element);
                });
                // this.formData.append('similar_product_img', files[0]);
            }
            this.fileExtension = this.detail.replace(/^.*\./, '');
            console.log(this.detail);
        },
        onFileChanges(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.files = files[0];

            if (files.length > 5) {
                alert('5 이미지 선택');
                return;
            }
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(this.files.name)) {
                this.render2 = true;
                return false;
            } else {
                this.render2 = false;
                this.similar = this.files.name;
                Array.from(files).forEach((element1) => {
                    this.formData.append('raw_material_img', element1);
                });
                //this.formData.append('raw_material_img', files[0]);
            }
            this.filesExtension = this.similar.replace(/^.*\./, '');
            console.log(this.similar);
        },
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
                this.formData.append('thumbnail_1', files[0]);
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
                this.render4 = true;
                return false;
            } else {
                this.render4 = false;
                this.newthumnail = this.newthumnailfiles.name;
                this.formData.append('thumbnail_2', files[0]);
            }
            this.filesExtensions = this.newthumnail.replace(/^.*\./, '');
            console.log(this.newthumnail);
        },
        addRaw() {
            console.log(this.daily_intake_amount_ko);
            console.log(this.material_extra_info_ko);
            let vcheckData = {
                sub_category_id: this.sub_category_id.toString(),
                material_name_ko: this.material_name_ko,
                material_name_en: this.material_name_en,
                standard_ko: this.standard_ko,
                standard_en: this.standard_en,
                material_description_ko: this.material_description_ko,
                material_description_en: this.material_description_en,
                material_function_ko: this.material_function_ko,
                material_function_en: this.material_function_en,
                material_prequotion_ko: this.material_prequotion_ko,
                material_prequotion_en: this.material_prequotion_en,
                material_extra_info_ko: this.material_extra_info_ko,
                material_extra_info_en: this.material_extra_info_en,
                daily_intake_amount_ko: this.daily_intake_amount_ko,
                daily_intake_amount_en: this.daily_intake_amount_en,
                tag_ko: this.tag_ko,
                tag_en: this.tag_en,
                status: this.status,
                file: this.detail == '' ? '' : 'something',
                files: this.similar == '' ? '' : 'something',
                addthumnail: this.addthumnail == '' ? '' : 'something',
                newthumnail: this.newthumnail == '' ? '' : 'something',
                //exposure: this.exposure == null ? '' : 'something',
                // type: this.dropdownValueType == null ? '' : 'something',
                //file: this.detail == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateCreateRaw(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                //  console.log(this.sub_category_id);

                this.formData.append('sub_category_id', this.sub_category_id);
                this.formData.append('material_name_ko', this.material_name_ko);
                this.formData.append('material_name_en', this.material_name_en);
                this.formData.append('standard_ko', this.standard_ko);
                this.formData.append('standard_en', this.standard_en);
                this.formData.append('material_description_ko', this.material_description_ko);
                this.formData.append('material_description_en', this.material_description_en);
                this.formData.append('material_function_ko', this.material_function_ko);
                this.formData.append('material_function_en', this.material_function_en);
                this.formData.append('material_prequotion_ko', this.material_prequotion_ko);
                this.formData.append('material_prequotion_en', this.material_prequotion_en);
                this.formData.append('material_extra_info_ko', this.material_extra_info_ko);
                this.formData.append('material_extra_info_en', this.material_extra_info_en);
                this.formData.append('daily_intake_amount_ko', this.daily_intake_amount_ko);
                this.formData.append('daily_intake_amount_en', this.daily_intake_amount_en);
                this.formData.append('tag_ko', this.tag_ko);
                this.formData.append('tag_en', this.tag_en);

                // this.formData.append('type', this.dropdownValueType?.name);
                //this.formData.append('status', this.status.name===undefined ? this.status :this.status.name);
                this.formData.append('status', this.status);
                //dropdownValues: [{ name: 'active'}, { name: 'inactive' }],
                console.log(this.formData);
                return axios.post('/admin/product_raw_material/add', this.formData).then(() => {
                    alert('성공적으로 저장');
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Succesfully Published.', life: 3000 });
                    this.$router.push({ name: 'RawProduct' });
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

/* .p-invalid {
border: 1px solid red;
} */
</style>
