<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('Blending.addnew_blending') }}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.name') }}</label>
                            <InputText
                                :class="`${error.name_ko ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Blending.list.name')"
                                id="title2"
                                v-model="name_ko"
                                @keyup="addBlending"
                            ></InputText>
                            <div class="text-red">{{ error.name_ko }}</div>
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
                    </div>-->
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.blendingname1') }}</label>
                            <InputText
                                :class="`${error.name_en ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Blending.list.blendingname1')"
                                id="title2"
                                v-model="name_en"
                                 @keyup="addBlending"
                            ></InputText>
                            <div class="text-red">{{ error.name_en }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="type">{{ $t('Blending.list.addcategory') }}</label>
                            <!-- <label for="type">ID</label> -->
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
                                >{{ item.category_name_ko }}</option>
                            </select>
                            <!-- <Dropdown v-model="id"  :options="dropdownValues"  optionLabel="category_name_ko" :placeholder="$t('Banner.placeholder.select')" /> -->
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.mainraw') }}</label>
                            <select
                                class="p-dropdown-label p-inputtext"
                                name="raw_material_id"
                                id="raw_material_id"
                                v-model="raw_material_id"
                            >
                                <option value>Select</option>
                                <option
                                    v-for="(item, index) in RawDropdownValues"
                                    v-bind:key="index"
                                    :value="item.id"
                                >{{ item.material_name_ko }}</option>
                            </select>
                        </div>

                        <!-- <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{$t('Blending.list.deskbanner')}}
                                <span class="img-info">(File Type jpg,jpeg,png )</span>
                            </label>
                            <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!fileName">파일 선택</span>
                                <span v-else>{{$t('button.select_file')}}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red">{{ error.file }}</div>
                            <div class="text-red" v-show="render1">{{$t('validation.invalidFile')}}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>

                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{$t('Banner.list.mobbanner')}}
                                <span class="img-info">(File Type jpg,jpeg,png )</span>
                            </label>
                            <div class="custom-select">
                                <span v-if="!filesName">{{$t('button.select_file')}}</span>
                                <span v-else>{{ filesName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChanges" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red" v-show="render2">{{$t('validation.invalidFile')}}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>-->
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.subraw') }}</label>
                            <InputText
                                :class="`${error.sub_raw_materials ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Blending.list.subraw')"
                                id="title2"
                                v-model="sub_raw_materials"
                                 @keyup="addBlending"
                            ></InputText>
                            <div class="text-red">{{ error.sub_raw_materials }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.piltype') }}</label>
                            <select
                                class="p-dropdown-label p-inputtext"
                                name="pill_id"
                                id="pill_id"
                                v-model="pill_id"
                            >
                                <option value>Select</option>
                                <option
                                    v-for="(item, index) in PillDropdownValues"
                                    v-bind:key="index"
                                    :value="item.id"
                                    
                                >{{ item.name_ko }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.addtag') }}</label>
                            <InputText
                                :class="`${error.tags_ko ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Blending.list.addtag')"
                                id="title2"
                                v-model="tags_ko"
                                 @keyup="addBlending"
                            ></InputText>
                            <div class="text-red">{{ error.tags_ko }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.tag') }}</label>
                            <InputText
                                :class="`${error.tags_en ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Blending.list.tag')"
                                id="title2"
                                v-model="tags_en"
                                 @keyup="addBlending"
                            ></InputText>
                            <div class="text-red">{{ error.tags_en }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.addefficacy') }}</label>
                            <Textarea
                                :class="`${error.efficiency_ko ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Blending.list.addefficacy')"
                                id="title2"
                                v-model="efficiency_ko"
                                 @keyup="addBlending"
                            ></Textarea>
                            <div class="text-red">{{ error.efficiency_ko }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.efficacy') }}</label>
                            <Textarea
                                :class="`${error.efficiency_en ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Blending.list.efficacy')"
                                id="title2"
                                v-model="efficiency_en"
                                 @keyup="addBlending"
                            ></Textarea>
                            <div class="text-red">{{ error.efficiency_en }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.ingredients') }}</label>
                            <Textarea
                                :class="`${error.ingredients_ko ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Blending.list.ingredients')"
                                id="title2"
                                v-model="ingredients_ko"
                                 @keyup="addBlending"
                            ></Textarea>
                            <div class="text-red">{{ error.ingredients_ko }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.ingredientsdetails') }}</label>
                            <Textarea
                                :class="`${error.ingredients_en ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Blending.list.ingredientsdetails')"
                                id="title2"
                                v-model="ingredients_en"
                                 @keyup="addBlending"
                            ></Textarea>
                            <div class="text-red">{{ error.ingredients_en }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.product') }}</label>
                            <Textarea
                                :class="`${error.description_ko ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Blending.list.product')"
                                id="title2"
                                v-model="description_ko"
                                 @keyup="addBlending"
                            ></Textarea>
                            <div class="text-red">{{ error.description_ko }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('Blending.list.productdescription') }}</label>
                            <Textarea
                                :class="`${error.description_en ? 'p-invalid' : ''}`"
                                type="text"
                                :placeholder="$t('Blending.list.productdescription')"
                                id="title2"
                                v-model="description_en"
                                 @keyup="addBlending"
                            ></Textarea>
                            <div class="text-red">{{ error.description_en }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Blending.list.detail') }}
                                <span
                                    class="img-info"
                                >(File Type jpg,jpeg,png )</span>
                            </label>
                            <div
                                :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`"
                            >
                                <span v-if="!detail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ detail }}</span>
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
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Blending.list.similar') }}
                                <span
                                    class="img-info"
                                >(File Type jpg,jpeg,png )</span>
                            </label>
                            <div
                                :class="`${error.files ? 'custom-select-invalid' : 'custom-select'}`"
                            >
                                <span v-if="!similar">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ similar }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChanges" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                             <div class="text-red">{{ error.file }}</div>
                            <div
                                class="text-red"
                                v-show="render2"
                            >{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Blending.list.addthumnail') }}
                                <span
                                    class="img-info"
                                >(File Type jpg,jpeg,png )</span>
                            </label>
                            <div
                                :class="`${error.addthumnailfile ? 'custom-select-invalid' : 'custom-select'}`"
                            >
                                <span v-if="!addthumnail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ addthumnail }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChangethum" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                             <div class="text-red">{{ error.file }}</div>
                            <div
                                class="text-red"
                                v-show="render3"
                            >{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Blending.list.newthumnail') }}
                                <span
                                    class="img-info"
                                >(File Type jpg,jpeg,png )</span>
                            </label>
                            <div
                                :class="`${error.newthumnailfile ? 'custom-select-invalid' : 'custom-select'}`"
                            >
                                <span v-if="!newthumnail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ newthumnail }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChangethumnail" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                             <div class="text-red">{{ error.file }}</div>
                            <div
                                class="text-red"
                                v-show="render4"
                            >{{ $t('validation.invalidFile') }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>


                  

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="state2">{{ $t('Blending.list.addstatus') }}</label>
                            <br />
                            <input type="radio" id="yes" value="active" name="status" v-model="status">
                                <label for="yes">Yes</label>
                                
                                <input type="radio" id="no" name="status" value="inactive" v-model="status">
                                <label for="no">No</label>
                            
                            <div class="text-red">{{ error.state }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-d-flex p-jc-end p-ai-center" style="float:left;">
                <Button
                    :label="$t('Blending.confirm')"
                    icon="pi pi-check"
                    iconPos="left"
                    class="p-button p-button-sm p-mr-2 p-mb-2"
                    @click="addBlending"
                ></Button>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button
                        :label="$t('Blending.back')"
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
import BlendingService from '../../service/API/BlendingService';
import validateCreateBlending from '../../validations/blending/validateCreateBlending';

export default {
    name: 'Addnutri',
    // props: ['dog', 'image'],
    data() {
        return {
            render1: false,
            render2: false,
            render3: false,
            render4: false,
             dropdownValues: [{ name: 'active',code:'활성' }, { name: 'inactive',code:'비활성' }],
            // dropdownValueTypes: [{ name: 'nft',code:'NFT' }, { name: 'card_news',code:'Card News' }, { name: 'media_press',code:'Media press' }, { name: 'de_fi_services',code:'De-Fi Services' }],
             exposure: '1',
            // dropdownValueType: null,
            // title:"",
            // subtitle: null,
            // link:"",
            name_ko: '',
            name_en: '',
            category_id: '',
            raw_material_id: '',
            sub_raw_materials: '',
            pill_id: '',
            tags_ko: '',
            tags_en: '',
            efficiency_ko: '',
            efficiency_en: '',
            ingredients_ko: '',
            ingredients_en: '',
            description_ko: '',
            description_en: '',
            detail_image: '',
            similar_image: '',
            thumbnail1: '',
            thumbnail2: '',
            files: null,
            filesName: '',
            file: '',
            image: '',
            fileName: '',
            fileExtension: '',
            filesExtension: '',
            detail: '',
            similar: '',
            addthumnail: '',
            newthumnail: '',
            status: '',
            categoryDropdownValues: '',
            categoryDropdownValue: null,
            RawDropdownValues: '',
            RawDropdownValue: null,
            PillDropdownValues: '',
            PillDropdownValue: null,
            formData: new FormData(),
            error: {},
        };
    },
    created() {
        this.blendingService = new BlendingService();
    },
    mounted() {
        const route = useRoute();
        console.log(route.params);
        this.loading1 = true;
        this.blendingService
            .getBlendingCategoryDropdown()
            .then((data) => {
                this.categoryDropdownValues = data;
                // this.products = data;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                console.log(this.customer1);
                console.log(data);
            })
        this.blendingService
            .getBlendingRawMainDropdown()
            .then((data) => {
                this.RawDropdownValues = data;
                // this.products = data;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                console.log(this.customer1);
                console.log(data);
            })

        this.blendingService
            .getBlendingPillDropdown()
            .then((data) => {
                this.PillDropdownValues = data;
                // this.products = data;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                console.log(this.customer1);
                console.log(data);
            })
    },

    methods: {
        reinitialize() {
            (this.exposure = null),(this.dropdownValue = null), (this.name_ko = null), (this.name_en = null), (this.category_id = null), (this.raw_material_id = null), (this.sub_raw_materials = null), (this.pill_id = null), (this.tags_ko = null),
                (this.tags_en = null), (this.efficiency_ko = null), (this.efficiency_en = null), (this.ingredients_ko = null), (this.ingredients_en = null), (this.description_ko = null), (this.description_en = null), (this.detail_image = null), (this.similar_image = null), (this.thumbnail1 = null), (this.thumbnail2 = null), (this.file = {});
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
                this.formData.append('detail_image', files[0]);
            }
            this.fileExtension = this.detail.replace(/^.*\./, '');
            console.log(this.detail);
        },
        onFileChanges(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.files = files[0];
            if (!files.length) return;
            this.files = files[0];
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(this.files.name)) {
                this.render2 = true;
                return false;
            } else {
                this.render2 = false;
                this.similar = this.files.name;
                this.formData.append('similar_image', files[0]);
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
                this.formData.append('thumbnail1', files[0]);
            }
            this.filesExtension = this.addthumnail.replace(/^.*\./, '');
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
                this.formData.append('thumbnail2', files[0]);
            }
            this.filesExtension = this.newthumnail.replace(/^.*\./, '');
            console.log(this.newthumnail);
        },
        addBlending() {
            let vcheckData = {
                name_ko: this.name_ko,
                name_en: this.name_en,
                category_id: this.category_id,
                raw_material_id: this.raw_material_id,
                sub_raw_materials: this.sub_raw_materials,
                pill_id: this.pill_id,
                tags_ko: this.tags_ko,
                tags_en: this.tags_en,
                efficiency_ko: this.efficiency_ko,
                efficiency_en: this.efficiency_en,
                ingredients_ko: this.ingredients_ko,
                ingredients_en: this.ingredients_en,
                description_ko: this.description_ko,
                description_en: this.description_en,
                state: this.status,
                exposure:this.exposure,
                // type: this.dropdownValueType == null ? '' : 'something',
                file: this.detail == '' ? '' : 'something',

            };
            const { isInvalid, error } = validateCreateBlending(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                // console.log(this.file);
                this.formData.append('name_ko', this.name_ko);
                this.formData.append('name_en', this.name_en);
                this.formData.append('category_id', this.category_id);
                this.formData.append('raw_material_id', this.raw_material_id);
                this.formData.append('sub_raw_materials', this.sub_raw_materials);
                this.formData.append('pill_id', this.pill_id);
                this.formData.append('tags_ko', this.tags_ko);
                this.formData.append('tags_en', this.tags_en);
                this.formData.append('efficiency_ko', this.efficiency_ko);
                this.formData.append('efficiency_en', this.efficiency_en);
                this.formData.append('ingredients_ko', this.ingredients_ko);
                this.formData.append('ingredients_en', this.ingredients_en);
                this.formData.append('description_ko', this.description_ko);
                this.formData.append('description_en', this.description_en);
                // this.formData.append('type', this.dropdownValueType?.name);
                this.formData.append('status', this.status);
                this.formData.append('exposure', this.exposure);
                //this.formData.append('status', this.dropdownValue.name===undefined ? this.status :this.dropdownValue.name);
                console.log(this.formData);
                return axios
                    .post('/admin/blending/add', this.formData)
                    .then(() => {
                        this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Succesfully Published.', life: 3000 });
                        this.$router.push({ name: 'nutri' });
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
}
</style>
