<template>
    <div class="p-grid">
        <Toast />

        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>원료 수정</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="nameuser">카테고리</label>

                        <Dropdown :class="`${error.sub_category_id ? 'p-invalid' : ''}`" v-model="sub_category_id"
                            :options="categoryDropdownValues" optionLabel="category_name_ko" optionValue="id"
                            :placeholder="$t('Banner.placeholder.select')" />
                        <div class="text-red">{{ error.sub_category_id }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="id">{{ $t('RawMaterialadd.list.Rawmaterialname(KO)') }}</label>
                        <InputText id="id" :class="`${error.material_name_ko ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.Rawmaterialname(KO)')" v-model="material_name_ko" />
                        <div class="text-red">{{ error.material_name_ko }}</div>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="emailuser">{{ $t('RawMaterialadd.list.Rawmaterialname(EN)') }}</label>
                        <InputText id="emailuser" :class="`${error.material_name_en ? 'p-invalid' : ''}`" type="email"
                            :placeholder="$t('RawMaterialadd.list.Rawmaterialname(EN)')" :modelValue="material_name_en"
                            v-model="material_name_en" />
                        <div class="text-red">{{ error.material_name_en }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="mobileuser">{{ $t('RawMaterialadd.list.Standard(KO)') }}</label>
                        <InputText id="mobileuser" :class="`${error.standard_ko ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.Standard(KO)')" :modelValue="standard_ko"
                            v-model="standard_ko" />
                        <div class="text-red">{{ error.standard_ko }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="address">{{ $t('RawMaterialadd.list.Standard(EN)') }}</label>
                        <InputText id="address" :class="`${error.standard_en ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.Standard(EN)')" v-model="standard_en" />
                        <div class="text-red">{{ error.standard_en }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="date">{{ $t('RawMaterialadd.list.Rawmarterialdescription(KO)') }}</label>
                        <InputText id="date" :class="`${error.material_description_ko ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.Rawmarterialdescription(KO)')"
                            v-model="material_description_ko" />
                        <div class="text-red">{{ error.material_description_ko }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="medium">{{ $t('RawMaterialadd.list.Rawmarterialdescription(EN)') }}</label>
                        <InputText id="medium" :class="`${error.material_description_en ? 'p-invalid' : ''}`"
                            type="text" :placeholder="$t('RawMaterialadd.list.Rawmarterialdescription(EN)')"
                            v-model="material_description_en" />
                        <div class="text-red">{{ error.material_description_en }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="medium">{{ $t('RawMaterialadd.list.Function(KO)') }}</label>
                        <InputText id="medium" :class="`${error.material_function_ko ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.Function(KO)')" v-model="material_function_ko" />
                        <div class="text-red">{{ error.material_function_ko }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="medium">{{ $t('RawMaterialadd.list.Fucntion(EN)') }}</label>
                        <InputText id="medium" :class="`${error.material_function_en ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.Fucntion(EN)')" v-model="material_function_en" />
                        <div class="text-red">{{ error.material_function_en }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="remark">{{ $t('RawMaterialadd.list.DailyIntakeAmount(KO)') }}</label>
                        <InputText id="remark" :class="`${error.daily_intake_amount_ko ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.DailyIntakeAmount(KO)')"
                            v-model="daily_intake_amount_ko" />
                        <div class="text-red">{{ error.daily_intake_amount_ko }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="remark">{{ $t('RawMaterialadd.list.DailyIntakeAmount(EN)') }}</label>
                        <InputText id="remark" :class="`${error.daily_intake_amount_en ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.DailyIntakeAmount(EN)')"
                            v-model="daily_intake_amount_en" />
                        <div class="text-red">{{ error.daily_intake_amount_en }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="remark">{{ $t('RawMaterialadd.list.Prequotion(KO)') }}</label>
                        <InputText id="remark" :class="`${error.material_prequotion_ko ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.Prequotion(KO)')" v-model="material_prequotion_ko" />
                        <div class="text-red">{{ error.material_prequotion_ko }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="remark">{{ $t('RawMaterialadd.list.Prequotion(EN)') }}</label>
                        <InputText id="remark" :class="`${error.material_prequotion_en ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.Prequotion(EN)')" v-model="material_prequotion_en" />
                        <div class="text-red">{{ error.material_prequotion_en }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="remark">{{ $t('RawMaterialadd.list.Extrainfo(KO)') }}</label>
                        <InputText id="remark" :class="`${error.material_extra_info_ko ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.Extrainfo(KO)')" v-model="material_extra_info_ko" />
                        <div class="text-red">{{ error.material_extra_info_ko }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="remark">{{ $t('RawMaterialadd.list.Extrainfo(EN)') }}</label>
                        <InputText id="remark" :class="`${error.material_extra_info_en ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.Extrainfo(EN)')" v-model="material_extra_info_en" />
                        <div class="text-red">{{ error.material_extra_info_en }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid"></div>
                <div class="p-grid p-formgrid p-mb-3 browse">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="subtitle2">
                            {{ $t('RawMaterialadd.list.banner') }}
                            <span class="img-info">(파일 형식: jpg,jpeg,png 최대 5개의 이미지를 추가할 수 있습니다.)(이미지 너비 200px )</span>
                        </label>
                        <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
                            <span v-if="!fileName">{{ $t('button.select_file') }}</span>
                            <span v-else>{{ fileName }}</span>
                            <input type="file" class="select-file" v-on:change="onFileChange" :disabled="isdisable" multiple />
                            <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" :disabled="isdisable" />
                        </div>
                        <div style="display: -webkit-box; justify-content: flex-end">
                            <div v-for="(similar_product_img, img) in similar_product_img" :key="img">
                                <div class="text-red">{{ error.file }}</div>
                                <div class="text-red" v-show="render1">{{ $t('validation.invalidFile') }}</div>
                                <div class="raw-image" style="margin: 5px">
                                    <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + similar_product_img"
                                        :alt="similar_product_img" class="product-image" />
                                    <div v-show="crossdisplay1">
                                        <a href="javascript:;" @click="remove_similar(id, similar_product_img)"> <img
                                                src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/96/000000/external-cross-essentials-tanah-basah-glyph-tanah-basah.png"
                                                class="cross" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-grid p-formgrid p-mb-3 browse">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="subtitle2">
                            {{ $t('RawMaterialadd.list.thumbnail1') }}
                            <span class="img-info">(파일 형식: jpg,jpeg,png )(이미지 너비 200px )</span>
                        </label>
                        <div :class="`${error.files ? 'custom-select-invalid' : 'custom-select'}`">
                            <span v-if="!filesName">{{ $t('button.select_file') }}</span>
                            <span v-else>{{ filesName }}</span>
                            <input type="file" class="select-file" v-on:change="onFileChanges" />
                            <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                        </div>
                        <div>
                            <div class="text-red" v-show="render3">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public' + thumbnail_1"
                                :alt="thumbnail_1" class="product-image" />
                        </div>
                    </div>
                </div>
                <div class="p-grid p-formgrid p-mb-3 browse">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="subtitle2">
                            {{ $t('RawMaterialadd.list.thumbnail2') }}
                            <span class="img-info">(파일 형식: jpg,jpeg,png )(이미지 너비 200px )</span>
                        </label>
                        <div :class="`${error.filesthumb ? 'custom-select-invalid' : 'custom-select'}`">
                            <span v-if="!fileNames">{{ $t('button.select_file') }}</span>
                            <span v-else>{{ fileNames }}</span>
                            <input type="file" class="select-file" v-on:change="onFilesChanges" />
                            <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                        </div>
                        <div>
                            <div class="text-red" v-show="render4">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public' + thumbnail_2"
                                :alt="thumbnail_2" class="product-image" />
                        </div>
                    </div>
                </div>
                <div class="p-grid p-formgrid p-mb-3 browse">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="subtitle2">
                            {{ $t('RawMaterialadd.list.rawdetails') }}
                            <span class="img-info">(파일 형식: jpg,jpeg,png 최대 5개의 이미지를 추가할 수 있습니다.)(이미지 너비 200px )</span>
                        </label>
                        <div :class="`${error.filesimilar ? 'custom-select-invalid' : 'custom-select'}`">
                            <span v-if="!filesNames">{{ $t('button.select_file') }}</span>
                            <span v-else>{{ filesNames }}</span>
                            <input type="file" class="select-file" v-on:change="onFilesChange" :disabled="isdisable1" multiple/>
                            <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" :disabled="isdisable1" />
                        </div>
                        <div style="display: -webkit-box; justify-content: flex-end">
                            <div v-for="(raw_material_img, img) in raw_material_img" :key="img">
                                <div class="text-red" v-show="render2">{{ $t('validation.invalidFile') }}</div>
                                <div class="raw-image" style="margin: 5px">
                                    <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + raw_material_img"
                                        :alt="raw_material_img" class="product-image" />
                                    <div v-show="crossdisplay2">
                                        <a href="javascript:;" @click="remove_raw(id, raw_material_img)"><img
                                                src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/96/000000/external-cross-essentials-tanah-basah-glyph-tanah-basah.png"
                                                class="cross" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="remark">{{ $t('RawMaterialadd.list.tags(KO)') }}</label>
                        <InputText id="remark" :class="`${error.tag_ko ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.tags(KO)')" v-model="tag_ko" />
                        <div class="text-red">{{ error.tag_ko }}</div>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="remark">{{ $t('RawMaterialadd.list.tags(EN)') }}</label>
                        <InputText id="remark" :class="`${error.tag_en ? 'p-invalid' : ''}`" type="text"
                            :placeholder="$t('RawMaterialadd.list.tags(EN)')" v-model="tag_en" />
                        <div class="text-red">{{ error.tag_en }}</div>
                    </div>
                </div>
                <div class="p-grid p-formgrid p-mb-3">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="state2">{{ $t('RawMaterialadd.list.status') }}</label>
                        <br />
                        <input type="radio" id="yes" value="active" name="status" v-model="status" />
                        <label for="yes">활성</label>

                        <input type="radio" id="no" name="status" value="inactive" v-model="status" />
                        <label for="no">비활성</label>
                        <div class="text-red">{{ error.status }}</div>
                    </div>
                </div>
                <br />
                <div class="p-d-flex p-jc-end" style="float: left">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button ref="popup" @click="editRaw" icon="pi pi-check" :label="$t('DFC.details.confirm')"
                        class="p-mr-2"></Button>
                </div>
                <div class="p-d-flex p-jc-end">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button @click="$router.go(-1)" icon="pi pi-times" label="뒤로가기" class="p-mr-2"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import validateEditRaw from '../../validations/RawMaterials/EditRawmaterials';
import UpdateRawService from '../../service/API/UpdateRawService';
export default {
    name: 'EditRawProduct',
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
            dropdownItem: null,
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            products: null,
            selectedProduct: null,
            limit: '',
            id: '',
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

            similar_product_img: '',
            thumbnail_1: '',
            thumbnail_2: '',
            fileName: null,
            filesName: null,
            fileNames: null,
            filesNames: null,
            files: null,
            file: null,
            filesthumb: null,
            filesimilar: null,
            fileExtension: '',
            filesExtension: '',
            filesExtensions: '',
            fileExtensions: '',
            status: '',
            formData: new FormData(),
            link: null,
            image: '',

            fileName1: '',
            fileName2: '',
            type: null,
            dropdownValue: null,
            categoryDropdownValues: '',
            categoryDropdownValue: null,
            crossdisplay1: true,
            crossdisplay2: true,
            isdisable: false,
            isdisable1: false,
            error: {},
        };
    },
    created() {
        this.updateRawService = new UpdateRawService();
    },
    mounted() {
        //const route = useRoute();
        //console.log(route.params);
        this.loading1 = true;
        this.updateRawService.getRawCategoryDropdown().then((data) => {
            this.categoryDropdownValues = data;
            // this.products = data;
            this.loading1 = false;
            // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
            console.log(this.customer1);
            console.log(data);
        });
        this.updateRawService.viewRaw(this.$route.params.id).then((res) => {
            this.id = res.data.data[0].id;
            //    this.category_id = res.data.data[0].category_id;
            this.sub_category_id = res.data.data[0].sub_category_id;
            this.material_name_ko = res.data.data[0].material_name_ko;
            this.material_name_en = res.data.data[0].material_name_en;
            this.standard_ko = res.data.data[0].standard_ko;
            this.standard_en = res.data.data[0].standard_en;
            this.material_description_ko = res.data.data[0].material_description_ko;
            this.material_description_en = res.data.data[0].material_description_en;
            this.material_function_ko = res.data.data[0].material_function_ko;
            this.material_function_en = res.data.data[0].material_function_en;
            this.daily_intake_amount_ko = res.data.data[0].daily_intake_amount_ko;
            this.daily_intake_amount_en = res.data.data[0].daily_intake_amount_en;
            this.material_prequotion_ko = res.data.data[0].material_prequotion_ko;
            this.material_prequotion_en = res.data.data[0].material_prequotion_en;
            this.material_extra_info_ko = res.data.data[0].material_extra_info_ko;
            this.material_extra_info_en = res.data.data[0].material_extra_info_en;
            // this.material_prequotion_ko = res.data.data[0].material_prequotion_ko;

            if (res.data.data[0].similar_images_path.length < 5) {
                this.isdisable = false;
            } else {
                this.isdisable = true;
            }

            if (res.data.data[0].similar_images_path.length > 0) {
                this.crossdisplay1 = true;
            } else {
                this.crossdisplay1 = false;
            }


            this.similar_product_img = res.data.data[0].similar_images_path.toString().split(',');
            this.thumbnail_1 = res.data.data[0].thumbnail_1_path;
            this.thumbnail_2 = res.data.data[0].thumbnail_2_path;

            if (res.data.data[0].raw_material_images_path.length < 5) {
                this.isdisable1 = false;
            } else {
                this.isdisable1 = true;
            }

            if (res.data.data[0].raw_material_images_path.length > 0) {
                this.crossdisplay2 = true;
            } else {
                this.crossdisplay2 = false;
            }

            this.raw_material_img = res.data.data[0].raw_material_images_path.toString().split(',');
            this.tag_ko = res.data.data[0].tag_ko;
            this.tag_en = res.data.data[0].tag_en;
            this.dropdownValue = res.data.data[0].dropdownValue;
            this.status = res.data.data[0].status;
            //console.log(res.data.data[0]);
            // console.log(this.thumbnail_1)
            console.log(this.similar_product_img);
        });
    },
    methods: {
        reinitialize() {
            // (this.category_id = null),
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
                (this.dropdownValue = null),
                (this.similar_product_img = null),
                (this.raw_material_img = null),
                (this.thumbnail_1 = null),
                (this.thumbnail_2 = null),
                (this.file = {});
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            this.file = files[0];
             if(files.length > 5 ){
                 alert("5 이미지 선택");
                return;
            } 
            if (!allowedExtensions.exec(this.file.name)) {
                this.render1 = true;
                return false;
            } else {
                this.render1 = false;
                this.fileName = this.file.name;
                 Array.from(files).forEach(element => {
               this.formData.append('similar_product_img', element)
                
                
            });
                // this.formData.append('similar_product_img', files[0]);
            }
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
        },

        onFilesChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            this.file = files[0];
             if(files.length > 5 ){
                 alert("5 이미지 선택");
                return;
            } 
            if (!allowedExtensions.exec(this.file.name)) {
                this.render2 = true;
                return false;
            } else {
                this.render2 = false;
                this.filesNames = this.file.name;
                Array.from(files).forEach(element1 => {
               this.formData.append('raw_material_img', element1)
                
                
            });
                // this.formData.append('raw_material_img', files[0]);
            }
            this.filesExtension = this.filesNames.replace(/^.*\./, '');
            console.log(this.filesNames);
        },

        onFileChanges(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            this.file = files[0];
            if (!allowedExtensions.exec(this.file.name)) {
                this.render3 = true;
                return false;
            } else {
                this.render3 = false;
                this.filesName = this.file.name;
                this.formData.append('thumbnail_1', files[0]);
            }
            this.fileExtensions = this.filesName.replace(/^.*\./, '');
            console.log(this.filesName);
        },

        onFilesChanges(e) {
            var files = e.target.files || e.dataTransfer.files;
            //console.log(files)
            if (!files.length) return;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            this.file = files[0];
            if (!allowedExtensions.exec(this.file.name)) {
                this.render4 = true;
                return false;
            } else {
                this.render4 = false;
                this.fileNames = this.file.name;
                this.formData.append('thumbnail_2', files[0]);
            }
            this.filesExtensions = this.fileNames.replace(/^.*\./, '');
            console.log(this.fileNames);
        },

        remove_similar(id, similar_product_img) {
            //console.log(id)
            // console.log(similar_product_img)
            let similar_prod_image_arr = similar_product_img.toString().split('/');
            let image_name = similar_prod_image_arr[3];
            // console.log(similar_prod_image_arr[3])
            if (confirm('삭제 하시겠습니까?')) {
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
            if (confirm('삭제 하시겠습니까?')) {
                axios({ method: 'post', url: '/admin/product_raw_material/imageDelete', data: { raw_material_id: id, image_name: image_name } })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },

        editRaw() {
            let vcheckData = {
                // category_id: this.category_id,
                sub_category_id: this.sub_category_id.toString(),
                material_name_ko: this.material_name_ko,
                material_name_en: this.material_name_en,
                standard_ko: this.standard_ko,
                standard_en: this.standard_en,
                material_description_ko: this.material_description_ko,
                material_description_en: this.material_description_en,
                material_function_ko: this.material_function_ko,
                material_function_en: this.material_function_en,
                daily_intake_amount_ko: this.daily_intake_amount_ko,
                daily_intake_amount_en: this.daily_intake_amount_en,
                material_prequotion_ko: this.material_prequotion_ko,
                material_prequotion_en: this.material_prequotion_en,
                material_extra_info_ko: this.material_extra_info_ko,
                material_extra_info_en: this.material_extra_info_en,
                tag_ko: this.tag_ko,
                tag_en: this.tag_en,
                status: this.status,
                // type: this.dropdownValueType ? 'something' : 'something',
                file: this.fileName == '' ? '' : 'something',
                files: this.filesName == '' ? '' : 'something',
                filesthumb: this.fileNames == '' ? '' : 'something',
                filesimilar: this.filesNames == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateEditRaw(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.formData.append('id', this.$route.params.id);
                this.formData.append('sub_category_id', this.sub_category_id);
                this.formData.append('material_name_ko', this.material_name_ko);
                this.formData.append('material_name_en', this.material_name_en);
                this.formData.append('standard_ko', this.standard_ko);
                this.formData.append('standard_en', this.standard_en);
                this.formData.append('material_description_ko', this.material_description_ko);
                this.formData.append('material_description_en', this.material_description_en);
                this.formData.append('material_function_ko', this.material_function_ko);
                this.formData.append('material_function_en', this.material_function_en);
                this.formData.append('daily_intake_amount_ko', this.daily_intake_amount_ko);
                this.formData.append('daily_intake_amount_en', this.daily_intake_amount_en);
                this.formData.append('material_prequotion_ko', this.material_prequotion_ko);
                this.formData.append('material_prequotion_en', this.material_prequotion_en);
                this.formData.append('material_extra_info_ko', this.material_extra_info_ko);
                this.formData.append('material_extra_info_en', this.material_extra_info_en);
                this.formData.append('tag_ko', this.tag_ko);
                this.formData.append('tag_en', this.tag_en);

                this.formData.append('status', this.status);
                // this.formData.append('type', this.dropdownValueType?.name === undefined ? this.type : this.dropdownValueType?.name);
                console.log(this.formData);
                alert('업데이트 완료');
                return axios.put('/admin/product_raw_material/edit', this.formData).then((res) => {
                    this.$router.push({ name: 'RawProduct' });
                    console.log(res);
                });
            }
        },
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}

.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}

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

.cross {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 2;
    height: 20px;
    width: 20px;
    background-color: white;
}

.raw-image {
    position: relative;
}
</style>
