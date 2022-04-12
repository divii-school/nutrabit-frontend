<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('Blending.edit.edit') }}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="nameuser">{{ $t('Blending.edit.name') }}</label>
                            <InputText
                                type="text"
                                placeholder="Name"
                                id="nameuser"
                                v-model="name_ko"
                            ></InputText>
                            <div class="text-red">{{ error.name_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="blendingname">{{ $t('Blending.edit.blendingname') }}</label>
                            <InputText
                                type="text"
                                placeholder="Name"
                                id="blendingname"
                                v-model="name_en"
                            ></InputText>
                            <div class="text-red">{{ error.name_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="Category">{{ $t('Blending.edit.Category') }}</label>
                            
                            <Dropdown v-model="category_id"  :options="categoryDropdownValues"  optionLabel="category_name_ko" optionValue="id" :placeholder="$t('Banner.placeholder.select')" />
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="Mainrawmaterial">{{ $t('Blending.edit.Mainrawmaterial') }}</label>
                            
                            <Dropdown v-model="raw_material_id"  :options="RawDropdownValues"  optionLabel="material_name_ko" optionValue="id" :placeholder="$t('Banner.placeholder.select')" />
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="SubRawMaterial">{{ $t('Blending.edit.SubRawMaterial') }}</label>
                            <InputText
                                id="SubRawMaterial"
                                type="text"
                                :placeholder="$t('Blending.edit.SubRawMaterial')"
                                v-model="sub_raw_materials"
                            />
                            <div class="text-red">{{ error.sub_raw_materials }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="PillTypeSelect">{{ $t('Blending.edit.PillTypeSelect') }}</label>
                            
                            <Dropdown v-model="pill_id"  :options="PillDropdownValues"  optionLabel="name_ko" optionValue="id" :placeholder="$t('Banner.placeholder.select')" />
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="Tags">{{ $t('Blending.edit.Tags') }}</label>
                            <InputText
                                id="Tags"
                                type="text"
                                placeholder="Tags (KO)"
                                v-model="tags_ko"
                            />
                            <div class="text-red">{{ error.tags_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="AddTags">{{ $t('Blending.edit.AddTags') }}</label>
                            <InputText
                                id="AddTags"
                                type="text"
                                placeholder="Tags (EN)"
                                v-model="tags_en"
                            />
                            <div class="text-red">{{ error.tags_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="Efficacy">{{ $t('Blending.edit.Efficacy') }}</label>
                            <Textarea
                                id="Efficacy"
                                type="text"
                                placeholder="Efficiency (KO)"
                                v-model="efficiency_ko"
                            />
                            <div class="text-red">{{ error.efficiency_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="blendingEfficacy">{{ $t('Blending.edit.blendingEfficacy') }}</label>
                            <Textarea
                                id="blendingEfficacy"
                                type="text"
                                placeholder="Efficiency (EN)"
                                v-model="efficiency_en"
                            />
                            <div class="text-red">{{ error.efficiency_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label
                                for="ingredientsdetails"
                            >{{ $t('Blending.edit.ingredientsdetails') }}</label>
                            <Textarea
                                id="ingredientsdetails"
                                type="text"
                                placeholder="Ingredients Details (KO)"
                                v-model="ingredients_ko"
                            />
                            <div class="text-red">{{ error.ingredients_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label
                                for="blendingingredientsdetails"
                            >{{ $t('Blending.edit.blendingingredientsdetails') }}</label>
                            <Textarea
                                id="blendingingredientsdetails"
                                type="text"
                                placeholder="Ingredients Details (EN)"
                                v-model="ingredients_en"
                            />
                            <div class="text-red">{{ error.ingredients_en }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-field p-col-12 p-md-3 p-lg-6">
                            <label
                                for="productdescription"
                            >{{ $t('Blending.edit.productdescription') }}</label>
                            <Textarea
                                id="productdescription"
                                type="text"
                                placeholder="Product description (KO)"
                                v-model="description_ko"
                            />
                            <div class="text-red">{{ error.description_ko }}</div>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label
                                for="blendingproductdescription"
                            >{{ $t('Blending.edit.blendingproductdescription') }}</label>
                            <Textarea
                                id="blendingproductdescription"
                                type="text"
                                placeholder="Product description (EN)"
                                v-model="description_en"
                            />
                            <div class="text-red">{{ error.description_en }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3 browse">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="subtitle2">
                            {{ $t('Blending.edit.detailimage') }}
                            <span class="img-info">(File Type jpg,jpeg,png )</span>
                        </label>
                        <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
                            <span v-if="!detail">{{ $t('button.select_file') }}</span>
                            <span v-else>{{ detail }}</span>
                            <input type="file" class="select-file" v-on:change="onFileChange" />
                            <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                        </div>
                        <div style="display: flex; justify-content: flex-end">
                            <div v-for="(detail_image, img) in detail_image" :key="img">
                                <div class="text-red" v-show="render1">{{ $t('validation.invalidFile') }}</div>
                                <div class="raw-image">
                                    <img :src="'http://api-nutrabbit-dev.dvconsulting.org/public/' + detail_image" :alt="detail_image" class="product-image" />
                                   <a href="javascript:;" @click="remove_detail_image(id,detail_image)"> <img src="https://www.pikpng.com/pngl/m/302-3024323_close-icon-close-icon-free-png-clipart.png" class="cross"  /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    

                    <div class="p-grid p-formgrid p-mb-3 browse">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Blending.edit.similarproductimage') }}
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
                            <div style="display: flex; justify-content: flex-end">
                                <div v-for="(similar_image, img) in similar_image" :key="img">
                                    <div
                                        class="text-red"
                                        v-show="render2"
                                    >{{ $t('validation.invalidFile') }}</div>
                                    <div class="raw-image">
                                        <img
                                            :src="'http://api-nutrabbit-dev.dvconsulting.org/public/' + similar_image"
                                            :alt="similar_image"
                                            class="product-image"
                                        />
                                        <a
                                            href="javascript:;"
                                            @click="remove_similar_image(id, similar_image)"
                                        >
                                            <img
                                                src="https://www.pikpng.com/pngl/m/302-3024323_close-icon-close-icon-free-png-clipart.png"
                                                class="cross"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3 browse">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Blending.edit.1stThumnail') }}
                                <span
                                    class="img-info"
                                >(File Type jpg,jpeg,png )</span>
                            </label>
                            <div
                                :class="`${error.addthumnailfile ? 'custom-select-invalid' : 'custom-select'}`"
                            >
                                <span v-if="!addthumnail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ addthumnail }}</span>
                                <input
                                    type="file"
                                    class="select-file"
                                    v-on:change="onFileChangethum"
                                />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div>
                                <div
                                    class="text-red"
                                    v-show="render3"
                                >{{ $t('validation.invalidFile') }}</div>
                                <img
                                    :src="'http://api-nutrabbit-dev.dvconsulting.org/public' + thumbnail1"
                                    :alt="thumbnail1"
                                    class="product-image"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3 browse">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('Blending.edit.2stThumnail') }}
                                <span
                                    class="img-info"
                                >(File Type jpg,jpeg,png )</span>
                            </label>
                            <div
                                :class="`${error.newthumnailfile ? 'custom-select-invalid' : 'custom-select'}`"
                            >
                                <span v-if="!newthumnail">{{ $t('button.select_file') }}</span>
                                <span v-else>{{ newthumnail }}</span>
                                <input
                                    type="file"
                                    class="select-file"
                                    v-on:change="onFileChangethumnail"
                                />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div>
                                <div
                                    class="text-red"
                                    v-show="render4"
                                >{{ $t('validation.invalidFile') }}</div>
                                <img
                                    :src="'http://api-nutrabbit-dev.dvconsulting.org/public' + thumbnail2"
                                    :alt="thumbnail2"
                                    class="product-image"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="state2">{{ $t('Blending.edit.status') }}</label>
                            <br>
                            <input
                                type="radio"
                                id="yes"
                                value="active"
                                name="status"
                                v-model="status"
                            />
                            <label for="yes">Yes</label>

                            <input
                                type="radio"
                                id="no"
                                name="status"
                                value="inactive"
                                v-model="status"
                            />
                            <label for="no">No</label>
                            <div class="text-red">{{ error.state }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-d-flex p-jc-end p-ai-center" style="float:left;">
                 <Button
                        :label="$t('button.save')"
                        icon="pi pi-save"
                        iconPos="left"
                        class="p-button p-button-sm p-mr-2 p-mb-2"
                        @click="editBanner"
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
import validateCreateBlending from '../../validations/blending/validateCreateBlending';
import BlendingService from '../../service/API/BlendingService';
export default {
    name: 'editnutri',
    data() {
        return {
            render1: false,
            render2: false,
            render3: false,
            render4: false,
            dropdownValues: [{ name: 'active', code: '활동적인' }, { name: 'inactive', code: '비활성' }],
            // dropdownValueTypes: [{ name: 'nft' }, { name: 'card_news' }, { name: 'media_press' }, { name: 'de_fi_services' }],
            dropdownValue: null,
             exposure: '1',
            // dropdownValueType: null,
            title: null,
            link: null,
            files: null,
            detail: null,
            similar: null,
            addthumnail: null,
            newthumnail: null,
            file: null,
            addthumnailfile:null,
            newthumnailfile:null,

            image: '',
           
            fileExtension: '',
            filesExtension: '',
            formData: new FormData(),
            error: {},
            status: '',
            detail_image: '',
            similar_image: '',
            thumbnail1: '',
            thumbnail2: '',
            type: null,
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
            categoryDropdownValues: '',
            categoryDropdownValue: null,
            RawDropdownValues: '',
            RawDropdownValue: null,
            PillDropdownValues: '',
            PillDropdownValue: null,
            id: '',
        };
    },
    created() {
        this.blendingService = new BlendingService();
    },
    mounted() {
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
        this.blendingService.viewBlending(this.$route.params.id).then((res) => {
             this.id = res.data.data[0].id;
            this.name_ko = res.data.data[0].name_ko;
            this.name_en = res.data.data[0].name_en;
            // this.type = res.data.data[0].type;
            this.category_id = res.data.data[0].category_id;
            this.raw_material_id = res.data.data[0].raw_material_id;
            this.sub_raw_materials = res.data.data[0].sub_raw_materials;
            this.pill_id = res.data.data[0].pill_id;
            this.tags_ko = res.data.data[0].tags_ko;
            this.tags_en = res.data.data[0].tags_en;
            this.efficiency_ko = res.data.data[0].efficiency_ko;
            this.efficiency_en = res.data.data[0].efficiency_en;
            this.ingredients_ko = res.data.data[0].ingredients_ko;
            this.ingredients_en = res.data.data[0].ingredients_en;
            this.description_ko = res.data.data[0].description_ko;
            this.description_en = res.data.data[0].description_en;
            this.detail_image = res.data.data[0].detail_image_path.toString().split(',');
            this.similar_image = res.data.data[0].similar_image_path.toString().split(',');
            this.thumbnail1 = res.data.data[0].thumbnail_1_path;
            this.thumbnail2 = res.data.data[0].thumbnail_2_path;
            this.status = res.data.data[0].status;
            console.log(res.data.data[0]);
        });
    },
    methods: {
        reinitialize() {
            (this.exposure = null),(this.dropdownValue = null), (this.name_ko = null), (this.name_en = null), (this.category_id = null), (this.raw_material_id = null), (this.sub_raw_materials = null), (this.pill_id = null),
                (this.tags_ko = null), (this.tags_en = null), (this.efficiency_ko = null), (this.efficiency_en = null), (this.ingredients_ko = null),
                (this.ingredients_en = null), (this.description_ko = null), (this.description_en = null), (this.detail_image = null),
                (this.similar_image = null), (this.thumbnail1 = null), (this.thumbnail2 = null), (this.file = {});
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

        remove_similar_image(id, similar_image) {
            //console.log(id)
            // console.log(similar_product_img)
            let similar_image_arr = similar_image.toString().split("/");
            let image_name = similar_image_arr[3];
            // console.log(similar_prod_image_arr[3])
            if (confirm("Do you really want to delete?")) {
                axios({ method: 'post', url: '/admin/blending/similarImageDelete', data: { blending_id: id, image_name: image_name } }).then(function (response) {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                })

            }

        },

        remove_detail_image(id, detail_image) {
            //console.log(id)
            // console.log(similar_product_img)
            let detail_image_arr = detail_image.toString().split("/");
            let image_name = detail_image_arr[3];
            // console.log(similar_prod_image_arr[3])
            if (confirm("정말 삭제하시겠습니까?")) {
                axios({ method: 'post', url: '/admin/blending/detailsImageDelete', data: { blending_id: id, image_name: image_name } }).then(function (response) {
                    console.log(response);
                    // console.log(id);
                }).catch(error => {
                    console.log(error);
                })

            }

        },

        // remove_thumbnail1(id,thumbnail1){
        //     //console.log(id)
        //    // console.log(similar_product_img)
        //     let thumbnail1_image_arr = thumbnail1;
        //     let thumbimage_name = thumbnail1_image_arr[3];
        //    // console.log(similar_prod_image_arr[3])
        //     if(confirm("Do you really want to delete?")){
        //          axios({ method: 'post', url: '/admin/blending/detailsImageDelete', data: { raw_material_id: id,thumbimage_name: thumbimage_name } }).then(function (response) {
        //                 console.log(response);
        //             }).catch(error => {
        //             console.log(error);
        //         })

        //      }

        // },


        editBanner() {
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

                file: this.fileName == '' ? '' : 'something',
                files: this.filesName == '' ? '' : 'something',
                addthumnailfile: this.addthumnail == '' ? '' : 'something',
                newthumnailfile: this.newthumnail == '' ? '' : 'something',

                state: this.status,
                exposure:this.exposure,
                // type: this.dropdownValueType ? 'something' : 'something',

            };
            const { isInvalid, error } = validateCreateBlending(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                this.formData.append('name_ko', this.name_ko);
                this.formData.append('id', this.$route.params.id);
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
                 

                this.formData.append('status', this.status);
                this.formData.append('exposure', this.exposure);
                // this.formData.append('type', this.dropdownValueType?.name === undefined ? this.type : this.dropdownValueType?.name);
                console.log(this.formData);
                 alert('업데이트 완료')
                return axios.put('/admin/blending/edit', this.formData).then((res) => {
                    this.$router.push({ name: 'nutri' });
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
}

.raw-image {
    position: relative;
}
</style>
