<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        <!-- <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div> -->
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>{{$t('PillType.details.header')}}</strong></h4>
                 <div class="p-field p-grid">
                    <label
                        for="name_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('PillType.list.addname') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.name_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="name_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('PillType.list.addnamepill') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.name_en }}</p>
                    </div>
                </div>


                 <div class="p-field p-grid">
                    <label
                        for="uploadimage"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('PillType.list.uploadimage') }}:</label>
                    <div class="p-col-12 p-md-10">
                       <div class="text-red" v-show="render1">{{$t('validation.invalidFile')}}</div>
                                <img :src="'http://api-nutrabbit-dev.dvconsulting.org/public' + image_path" :alt="image_path" class="product-image" />
                    </div>
                </div>
               
                
                <div class="p-field p-grid">
                    <label
                        for="description_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('PillType.list.Description') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.description_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="description_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('PillType.list.AddDescription') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.description_en }}</p>
                    </div>
                </div>
                
                
                    
               

                
                <div class="p-d-flex p-jc-end" style="float:left;">
                    <router-link :to="'/editpilltype/' + $route.params.id"
                        ><Button label="help" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> {{$t('button.edit')}}</Button></router-link
                    >
                    <!-- <Button @click="del($route.params.id)" label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"><i class="pi pi-trash p-mr-2"></i>{{$t('button.delete')}}</Button> -->
                </div>

                <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button :label="$t('button.back')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                    
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
import PillTypeService from '../../service/API/PillTypeService';
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
            image_path: '',
                image:'',
            mydata: {
                name_ko: '',
                name_en: '',
                // pillImage: '',
                // image:'',
                description_ko: '',
                description_en: '',
                status:'',
                createdDate:'',
                // type:''
            },
        };
    },
     created() {
        this.pillTypeService = new PillTypeService();
    },
    // methods: {
    //     del(id) {
    //         this.$confirm.require({
    //             group: 'dialog',
    //             header: 'Confirmation',
    //             message: 'Are you sure you want to delete?',
    //             icon: 'pi pi-exclamation-triangle',
    //             accept: () => {
    //                 axios({ method: 'delete', url: `/admin/banner/delete`, data: { deleteIdArray: id } }).then((res) => {
    //                     console.warn(res);
    //                     this.$router.push({ name: 'BannerManagement' });
    //                 });

    //                 this.$toast.add({ severity: 'info', summary: 'Deleted', detail: 'Deleted successfully', life: 3000 });
    //             },
    //             reject: () => {
    //                 this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    //             },
    //         });
    //     },
    // },
    mounted() {
        this.pillTypeService.viewPilltype(this.$route.params.id).then((res) => {
            this.mydata.name_ko = res.data.data[0].name_ko;
            this.mydata.name_en = res.data.data[0].name_en;
            this.image_path = res.data.data[0].image_path;
            this.mydata.description_ko = res.data.data[0].description_ko;
            this.mydata.description_en = res.data.data[0].description_en;
            // this.mydata.type = res.data.data[0].type;
            console.log(res)
        });
    },
};
</script>

<style scoped>

/* .product-image {
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 837px;
    height: 120px;
    margin-left:74%;
} */
.p-fluid .p-button {
    width: auto;
}

.p-button{
    background: #000000;
    border: 1px solid #0a0a0a;
        color: white;
}

.product-image {
    padding-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    height: 100px;
    /* margin-left: 25%; */
}
</style>