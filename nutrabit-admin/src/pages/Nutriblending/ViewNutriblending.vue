<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>추천 블랜딩 정보</strong>
                </h4>

                <div class="p-field p-grid">
                    <label
                        for="name_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.name') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.name_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="category_id"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.category') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.category_name_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="raw_material_id"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.Mainraw') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.material_name_ko }}</p>
                    </div>
                </div>

                 <div class="p-field p-grid">
                    <label
                        for="sub_raw_materials"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.subrawmaterial_ko') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.sub_raw_materials_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="sub_raw_materials"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.subraw_en') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.sub_raw_materials_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="pill_id"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.pilltype') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.pillName_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="tags_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.addtag') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.tags_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="tags_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.blendingtags') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.tags_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="efficiency_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.efficacy') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.efficiency_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="efficiency_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.blendingefficacy') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.efficiency_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="ingredients_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.appearance') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.ingredients_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="ingredients_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.blendingappearance') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.ingredients_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="description_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.productdescription') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p v-html="mydata.description_ko"></p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="description_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.blendingproductdescription') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p v-html="mydata.description_en"></p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="detailimage" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('Blending.details.DetailImage') }}:</label>
                    <div class="p-col-12 p-md-4 p-sm-2" style="display: contents">
                        <div v-for="(detailimage, img) in mydata.detailimage" :key="img" style="margin:5px;" >
                            <div class="text-red" v-show="render1">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public' + detailimage" alt="이미지를 사용할 수 없음" class="product-image" v-if="detailimage != '/uploads/blending/null'"/>
                            <!-- <img :src="'https://back.nutri33.co.kr/public' + detailimage" alt="이미지를 사용할 수 없음" class="product-image" v-if="detailimage != '/uploads/blending/null'"/> -->
                        </div>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="similarimage" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('Blending.details.SimilarProductImage') }}:</label>
                    <div class="p-col-12 p-md-4 p-sm-2" style="display: contents">
                        <div v-for="(similarimage, img) in mydata.similarimage" :key="img" style="margin:5px;" >
                            <div class="text-red" v-show="render2">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public' + similarimage" alt="이미지를 사용할 수 없음" class="product-image" v-if="similarimage != '/uploads/blending/null'"/>
                            <!-- <img :src="'https://back.nutri33.co.kr/public' + similarimage" alt="이미지를 사용할 수 없음" class="product-image" v-if="similarimage != '/uploads/blending/null'"/> -->
                        </div>
                    </div>
                </div>

                 <div class="p-field p-grid">
                    <label for="thumbnail1" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('Blending.details.Thumbnail') }}:</label>
                    <div class="p-col-12 p-md-4 p-sm-2" style="display: contents">
                        <div style="margin:5px;">
                            <div class="text-red" v-show="render3">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + mydata.thumbnail1" alt="이미지를 사용할 수 없음" class="product-image" />
                             <!-- <img :src="'https://back.nutri33.co.kr/public/' + mydata.thumbnail1" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                        </div>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="thumbnail2" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{ $t('Blending.details.blendingthumbnail') }}:</label>
                    <div class="p-col-12 p-md-4 p-sm-2" style="display: contents">
                        <div style="margin:5px;">
                            <div class="text-red" v-show="render4">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + mydata.thumbnail2" alt="이미지를 사용할 수 없음" class="product-image" />
                            <!-- <img :src="'https://back.nutri33.co.kr/public/' + mydata.thumbnail2" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                        </div>
                    </div>
                </div>



                

                <div class="p-field p-grid">
                    <label
                        for="status"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Blending.details.viewstatus') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ $t(mydata.status) }}</p>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end" style="float:left;">
                    <router-link :to="'/editnutri-blending/' + $route.params.id">
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
                   

                    <Button
                        @click="$router.go(-1)"
                        :label="$t('button.back')"
                        icon="pi pi-angle-left"
                        class="p-button-text p-mr-2 p-mb-2"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import BlendingService from '../../service/API/BlendingService';

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
            mydata: {
                detailimage: '',
                similarimage: '',
                name_ko: '',
                // name_en: '',
                category_id: '',
                category_name_ko:'',
                raw_material_id: '',
                material_name_ko:'',
                sub_raw_materials_ko: '',
                sub_raw_materials_en: '',
                pill_id: '',
                pillName_ko:'',
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
                exposure: '',
                status:'',
            },
        };
    },
    created() {
        this.blendingService = new BlendingService();
    },
    methods: {
        del(id) {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: `/admin/Blending/delete`, data: { deleteIdArray: id } }).then((res) => {
                        console.warn(res);
                        this.$router.push({ name: 'nutri' });
                    });

                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
         setData(id) {
            this.blendingService.viewBlending (id)
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
        this.blendingService.viewBlending(this.$route.params.id).then((res) => {
            // console.log(res);
            this.mydata.name_ko = res.data.data[0].name_ko;
            // this.mydata.name_en = res.data.data[0].name_en;
            this.mydata.category_name_ko = res.data.data[0].category_name_ko;
            this.mydata.material_name_ko = res.data.data[0].material_name_ko;
            this.mydata.sub_raw_materials_ko = res.data.data[0].sub_raw_materials_ko;
            this.mydata.sub_raw_materials_en = res.data.data[0].sub_raw_materials_en;
            this.mydata.pillName_ko = res.data.data[0].pillName_ko;
            this.mydata.tags_ko = res.data.data[0].tags_ko;
            this.mydata.tags_en = res.data.data[0].tags_en;
            this.mydata.efficiency_ko = res.data.data[0].efficiency_ko;
            this.mydata.efficiency_en = res.data.data[0].efficiency_en;
            this.mydata.ingredients_ko = res.data.data[0].ingredients_ko;
            this.mydata.ingredients_en = res.data.data[0].ingredients_en;
            this.mydata.description_ko = res.data.data[0].description_ko;
            this.mydata.description_en = res.data.data[0].description_en;
            // this.mydata.detail_image = res.data.data[0].detail_image_path.split(",");

            this.mydata.detailimage = res.data.data[0].detail_image_path.toString().split(",");

            // console.log(res.data.data[0].detail_image_path.toString().split(","));
            this.mydata.similarimage = res.data.data[0].similar_image_path.toString().split(",");
            this.mydata.thumbnail1 = res.data.data[0].thumbnail_1_path;
            this.mydata.thumbnail2 = res.data.data[0].thumbnail_2_path;
            this.mydata.status = res.data.data[0].status;
            console.log(this.mydata.detailimage);
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

.detailimage {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 32%;
    right: 0%;
    top: 671px;
    bottom: 0%;
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