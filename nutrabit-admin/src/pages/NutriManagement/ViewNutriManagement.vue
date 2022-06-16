<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('Nutri3.View.header') }}</strong>
                </h4>
                <div class="p-field p-grid">
                    <label for="fst_category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('Nutri3.View.Nutri3-name') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ name_ko }}</p>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="fst_category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('Nutri3.View.Nutri3-name') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ name_en }}</p>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="fst_category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('Nutri3.View.Category') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ category_name_ko }}</p>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="fst_category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">주원료:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ material_name_ko }}</p>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="fst_category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">정제:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ pillName_ko }}</p>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="fst_category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('Nutri3.View.Package1') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ packageName_ko }}</p>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="fst_category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">태그 (KO):</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ tags_ko }}</p>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="fst_category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">태그 (EN):</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ tags_en }}</p>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="fst_category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('Nutri3.View.Description1(KO)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p  v-html="description_ko"></p>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="fst_category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('Nutri3.View.Description2(EN)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p v-html="description_en"></p>
                    </div>
                </div>
                
                <div class="p-field p-grid">
                    <label for="thumbnail" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">썸네일 이미지:</label>
                    <div class="p-col-12 p-md-10">
                        <div class="text-red" v-show="render1">{{ $t('validation.invalidFile') }}</div>
                        <img :src="'http://api-nutrabbit-dev.dvconsulting.org/' + thumbnail" alt="이미지를 사용할 수 없음" class="product-image" />
                        <!-- <img :src="'https://back.nutri33.co.kr/' + thumbnail" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="product_sub_image" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('Nutri3.View.productsubimg1') }}:</label>
                    <div class="p-col-12 p-md-4 p-sm-2" style="display: contents">
                        <div v-for="(product_sub, img) in product_sub" :key="img" style="margin:5px;  margin-left: 1%;">
                            <div class="text-red" v-show="render2">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'http://api-nutrabbit-dev.dvconsulting.org/' + product_sub" alt="이미지를 사용할 수 없음" class="product-image" />
                             <!-- <img :src="'https://back.nutri33.co.kr/' + product_sub" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                        </div>
                    </div>
                </div>
           
                <div class="p-field p-grid">
                    <label for="detail_image" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">상세 페이지 이미지:</label>
                    <div class="p-col-12 p-md-10">
                        <div class="text-red" v-show="render3">{{ $t('validation.invalidFile') }}</div>
                        <div class="raw-image">
                            <img :src="'http://api-nutrabbit-dev.dvconsulting.org/' + detail_image" alt="이미지를 사용할 수 없음" class="product-image" />
                            <!-- <img :src="'https://back.nutri33.co.kr/' + detail_image" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                        </div>
                    </div>
                </div>
             
                <div class="p-field p-grid">
                    <label for="status" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">상태:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ $t(status) }}</p>
                    </div>
                </div>
                <div class="p-d-flex p-jc-end" style="float: left">
                   
                    <router-link :to="'/editnutri-management/' + $route.params.id"
                        ><Button label="help" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @mouseenter="setData($route.params.id)"><i class="pi pi-user-edit p-mr-2"></i> 수정 </Button></router-link
                    >
                </div>
                <div class="p-d-flex p-jc-end">
                    <!-- <Button @click="del($route.params.id)" label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"><i class="pi pi-trash p-mr-2"></i> {{ $t('button.delete') }}</Button> -->
                    <Button :label="$t('button.back')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import NutriManagementService from '../../service/API/NutriManagementService';
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
            name_ko: '',
            name_en: '',
            description_ko: '',
            description_en: '',
            status: '',
            image: '',
            thumbnail: '',
            product_sub_image: '',
            detail_image: '',
            product_sub: '',
            raw_material_id: '',
            category_id: '',
            pill_id: '',
            package_id: '',
            fileName: null,
            filesName: null,
            fileNames: null,
            filesNames: null,
            files: null,
            file: null,
            fileExtension: '',
            filesExtension: '',
            DropdownValue: '',
            category_name_ko:'',
            material_name_ko:'',
            pillName_ko:'',
            packageName_ko:'',
            formData: new FormData(),
            mydata: {
                // name: '',
                // email: '',
            },
        };
    },
    created() {
        this.nutriManagementService = new NutriManagementService();
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
            this.nutriManagementService.ViewNurtiManagementList (id)
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
        this.nutriManagementService.ViewNurtiManagementList(this.$route.params.id).then((res) => {
            this.category_name_ko = res.data.data[0].category_name_ko;
            this.material_name_ko = res.data.data[0].raw_material_name_ko;
            this.pillName_ko = res.data.data[0].pillName_ko;
            this.packageName_ko = res.data.data[0].packageName_ko;

            this.name_ko = res.data.data[0].name_ko;
            this.name_en = res.data.data[0].name_en;
            this.description_ko = res.data.data[0].description_ko;
            this.description_en = res.data.data[0].description_en;
            this.thumbnail = res.data.data[0].thumbnail_path;
            //this.product_sub = res.data.data[0].product_sub_image_path.toString().split(",");
            this.detail_image = res.data.data[0].detail_image_path;

            this.product_sub = res.data.data[0].product_sub_image_path.toString().split(',');

            this.tags_ko = res.data.data[0].tags_ko;
            this.tags_en = res.data.data[0].tags_en;
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
    /* float: right; */
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
.raw-image {
    position: relative;
}
</style>

