<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>원료 정보</strong>
                </h4>
                <div class="p-field p-grid">
                    <label
                        for="category_name_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.categorylist') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ category_name_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="material_name_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Rawmaterialname(KO)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ material_name_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="material_name_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Rawmaterialname(EN)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ material_name_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="standard_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Standard(KO)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ standard_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="standard_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Standard(EN)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ standard_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="material_description_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Rawmarterialdescription(KO)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ material_description_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="material_description_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Rawmarterialdescription(EN)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ material_description_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="material_function_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Function(KO)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ material_function_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="material_function_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Fucntion(EN)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ material_function_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="daily_intake_amount_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.DailyIntakeAmount(KO)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p v-html="daily_intake_amount_ko" ></p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="daily_intake_amount_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.DailyIntakeAmount(EN)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p v-html="daily_intake_amount_en"></p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="material_prequotion_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Prequotion(KO)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p v-html="material_prequotion_ko"></p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="material_prequotion_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Prequotion(EN)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p v-html="material_prequotion_en"></p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="material_extra_info_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Extrainfo(KO)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p v-html="material_extra_info_ko"></p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="material_extra_info_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.Extrainfo(EN)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p v-html="material_extra_info_en"></p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="similar_product_img" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('RawMaterialadd.list.banner') }}:</label>
                    <div class="p-col-12 p-md-4 p-sm-2" style="display: contents">
                        <div v-for="(similar_product_img, img) in similar_product_img" :key="img" style="margin:5px;">
                            <div class="text-red" v-show="render3">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + similar_product_img" alt="이미지를 사용할 수 없음" class="product-image" />
                            <!-- <img :src="'https://back.nutri33.co.kr/public/' + similar_product_img" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                        </div>
                    </div>
                </div>


                <div class="p-field p-grid">
                    <label for="thumbnail_1" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('RawMaterialadd.list.thumbnail1') }}:</label>
                    <div class="p-col-12 p-md-4 p-sm-2" style="display: contents">
                        <div  style="margin:5px;">
                            <div class="text-red" v-show="render3">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + thumbnail_1" alt="이미지를 사용할 수 없음" class="product-image" />
                            <!-- <img :src="'https://back.nutri33.co.kr/public/' + thumbnail_1" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                        </div>
                    </div>
                </div>

                
                <div class="p-field p-grid">
                    <label for="thumbnail_2" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('RawMaterialadd.list.thumbnail2') }}:</label>
                    <div class="p-col-12 p-md-4 p-sm-2" style="display: contents">
                        <div  style="margin:5px;">
                            <div class="text-red" v-show="render4">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + thumbnail_2" alt="이미지를 사용할 수 없음" class="product-image" />
                            <!-- <img :src="'https://back.nutri33.co.kr/public/' + thumbnail_2" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                        </div>
                    </div>
                </div>
               


               

                <div class="p-field p-grid">
                    <label for="raw_material_img" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('RawMaterialadd.list.rawdetails') }}:</label>
                    <div class="p-col-12 p-md-4 p-sm-2" style="display: contents">
                        <div v-for="(raw_material_img, img) in raw_material_img" :key="img" style="margin:5px;">
                            <div class="text-red" v-show="render2">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + raw_material_img" alt="이미지를 사용할 수 없음" class="product-image" />
                            <!-- <img :src="'https://back.nutri33.co.kr/public/' + raw_material_img" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                        </div>
                    </div>
                </div>

               

                <div class="p-field p-grid">
                    <label
                        for="tag_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.tags(KO)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ tag_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="tag_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.tags(EN)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ tag_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="status"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('RawMaterialadd.list.status') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ $t(status) }}</p>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end" style="float:left;">
                    <!-- <router-link to="/view-user"
                        ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2" disabled><i class="pi pi-eye p-mr-2"></i>point</Button>
                    </router-link>-->
                    <router-link :to="'/editraw-material-registration/' + $route.params.id">
                        <Button
                            label="help"
                            class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @mouseenter="setData($route.params.id)"
                        >
                            <i class="pi pi-user-edit p-mr-2"></i>
                            수정 
                        </Button>
                    </router-link>
                </div>
                <div class="p-d-flex p-jc-end">
                    <!-- <Button @click="del($route.params.id)" label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"><i class="pi pi-trash p-mr-2"></i> {{ $t('button.delete') }}</Button> -->
                    <Button
                        :label="$t('button.back')"
                        icon="pi pi-replay"
                        iconPos="left"
                        class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                        @click="$router.go(-1)"
                    ></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import RawService from '../../service/API/RawService';
// import {useRouter} from 'vue-router'
export default {
    data() {
        return {
            dropdownItems: [
                { name: 'male', code: 'male' },
                { name: 'female', code: 'female' },
                { name: 'others', code: 'others' },
            ],
            dropdownItem: null,
            render1: false,
            render2: false,
            render3: false,
            render4: false,
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
            category_id: '',
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
            thumbnail_1: '',
            thumbnail_2: '',
            category_name_ko: '',
            fileName: null,
            filesName: null,
            fileNames: null,
            filesNames: null,
            files: null,
            file: null,
            fileExtension: '',
            filesExtension: '',
            DropdownValue: '',
            formData: new FormData(),
            mydata: {
                // name: '',
                // email: '',


            },
        };
    },
    created() {
        this.rawService = new RawService();
    },
    methods: {
        del(id) {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: `/admin/dfc/delete`, data: { deleteIdArray: id } }).then((res) => {
                        console.warn(res);
                        this.$router.push({ name: 'Dfc' });
                    });

                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
        setData(id) {
            this.rawService.viewRaw (id)
           .then((res) => {
                localStorage.setItem('desc', JSON.stringify(res.data.data[0]));
                // alert(res.data.data[0].daily_intake_amount_ko)
            });
            

        },
        formatDate(value) {
            const date = new Date(value);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            var hr = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (value = yyyy + '/' + mm + '/' + dd + '-' + hr + ':' + min + ':' + sec);
        },
    },
    mounted() {
        this.rawService.viewRaw(this.$route.params.id).then((res) => {
            this.category_id = res.data.data[0].category_id;
            this.category_name_ko = res.data.data[0].category_name_ko;
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
            this.similar_product_img = res.data.data[0].similar_images_path.toString().split(",");
            this.thumbnail_1 = res.data.data[0].thumbnail_1_path;
            this.thumbnail_2 = res.data.data[0].thumbnail_2_path;
            this.raw_material_img = res.data.data[0].raw_material_images_path.toString().split(",");

            this.tag_ko = res.data.data[0].tag_ko;
            this.tag_en = res.data.data[0].tag_en;
            this.status = res.data.data[0].status;

        });
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
</style>

