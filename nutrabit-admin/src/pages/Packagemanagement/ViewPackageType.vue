<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
    
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>{{$t('PackageType.view.header')}}</strong></h4>
                 <div class="p-field p-grid">
                    <label
                        for="name_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('PackageType.view.packagename(ko)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{name_ko }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="name_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('PackageType.view.packagename(en)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{name_en }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="image"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('PackageType.view.image') }}:</label>
                    <div class="p-col-12 p-md-10">
                       <div class="text-red" v-show="render1" >{{$t('validation.invalidFile')}}</div>
                                <img :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + image" :alt="image" class="product-image" />
                    </div>
                </div>
               
                
               <div class="p-field p-grid">
                    <label
                        for="description_ko"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('PackageType.view.description(ko)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{description_ko }}</p>
                    </div>
                </div>

                 <div class="p-field p-grid">
                    <label
                        for="description_en"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('PackageType.view.description(en)') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{description_en }}</p>
                    </div>
                </div>
                    
                    
                <div class="p-d-flex p-jc-end" style="float:left;">
                   
                    <router-link :to="'/edit-package-type/' + $route.params.id"
                        ><Button label="help" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> {{ $t('button.edit') }}</Button></router-link
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
import PackageTypeService from '../../service/API/PackageTypeService';
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
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            products: null,
            selectedProduct: null,
            limit:'',
            id:'',
            name_ko:'',
            name_en:'',
            description_ko:'',
            description_en:'',
            status:'',  
            image:'',
            fileName:null,
            filesName:null,
            fileNames:null,
            filesNames:null,
            files: null,
            file: null,   
            fileExtension: '',
            filesExtension: '',
            DropdownValue:'',
            formData: new FormData(),
            mydata: {
                // name: '',
                // email: '',
            
            
            },
        };
    },
    created() {
        this.packageTypeService = new PackageTypeService();
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
        this.packageTypeService.viewPackageType(this.$route.params.id).then((res) => {
            this.name_ko = res.data.data[0].name_ko;
            this.name_en = res.data.data[0].name_en;
            this.description_ko = res.data.data[0].description_ko;
            this.description_en = res.data.data[0].description_en;
            this.image = res.data.data[0].image_path;
            //this.raw_material_img = res.data.data[0].raw_material_images_path.toString().split(",");
            
        });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
.p-button{
    background: #000000;
    border: 1px solid #0A0A0A;
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

