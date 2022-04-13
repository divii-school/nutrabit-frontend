<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
       
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('Category.details.header') }}</strong>
                </h4>

                <div class="p-field p-grid">
                    <label
                        for="fst_category_name_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Category.list.title') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.fst_category_name_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="fst_category_name_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Category.list.url') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.fst_category_name_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="scnd_category_name_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Category.list.status') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.scnd_category_name_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="scnd_category_name_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Category.list.created_dt') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.scnd_category_name_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="categoryimage"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Category.list.deskcategory') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <img
                            :src="'https://api-nutrabbit-dev.dvconsulting.org/public' + mydata.category_image"
                            :alt="mydata.category_image"
                            class="product-image"
                        />
                    </div>
                </div>

                
                <div class="p-d-flex p-jc-end" style="float:left;">
                    <router-link :to="'/edit-category/' + $route.params.id">
                        <Button
                            label="help"
                            class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                        >
                            <i class="pi pi-user-edit p-mr-2"></i>
                            {{ $t('button.edit') }}
                        </Button>
                    </router-link>
                </div>
                <div class="p-d-flex p-jc-end">
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
import CategoryService from '../../service/API/CategoryService';
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
                // title: '',
                // link: '',
                // status: '',
                // desktop_banner: '',
                // mobile_banner: '',
                fst_category_name_ko: '',
                fst_category_name_en: '',
                scnd_category_name_ko: '',
                scnd_category_name_en: '',
                category_image: '',
                // type:''
            },
        };
    },
    created() {
        this.categoryService = new CategoryService();
    },
    methods: {
        del(id) {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: `/admin/product_category/delete`, data: { deleteIdArray: id } }).then((res) => {
                        console.warn(res);
                        this.$router.push({ name: 'CategoryRegistration' });
                    });

                    this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
    },
    mounted() {
        this.categoryService.viewCategory(this.$route.params.id).then((res) => {
            this.mydata.fst_category_name_ko = res.data.data[0].fst_category_name_ko;
            this.mydata.fst_category_name_en = res.data.data[0].fst_category_name_en;
            this.mydata.scnd_category_name_ko = res.data.data[0].scnd_category_name_ko;
            this.mydata.scnd_category_name_en = res.data.data[0].scnd_category_name_en;
            this.mydata.category_image = res.data.data[0].category_image_path;
            // this.mydata.type = res.data.data[0].type;
        });
    },
};
</script>

<style scoped>
.product-image {
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    height: 100px;
}
.p-fluid .p-button {
    width: auto;
}

.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}
</style>