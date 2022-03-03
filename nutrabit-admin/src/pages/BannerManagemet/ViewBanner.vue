<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>{{$t('Banner.details.header')}}</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-3">
                        <strong> <label for="nameuser">{{$t('Banner.list.title')}} :</label></strong>
                        <p>{{ mydata.title }}</p>
                    </div>
                    <div class="p-field p-col p-md-3">
                        <strong><label for="emailuser">{{$t('Banner.list.link')}} :</label></strong>
                        <p>{{ mydata.link }}</p>
                    </div>
                    <div class="p-field p-col p-md-3">
                        <strong><label for="mobileuser">{{$t('Banner.list.type')}} :</label></strong>
                        <p>{{ mydata.type }}</p>
                    </div>
                    <div class="p-field p-col p-md-3">
                        <strong><label for="mobileuser">{{$t('Banner.list.status')}} :</label></strong>
                        <p>{{ mydata.status }}</p>
                    </div>

                    <div class="p-field p-col p-md-4">
                        <strong><label for="state">{{$t('Banner.list.deskbanner')}} :</label></strong>
                        <div>
                            <img :src="'http://da-lab-admin.dvconsulting.org:4040/' + mydata.dbanner" :alt="mydata.dbanner" class="product-image" />
                        </div>
                    </div>
                    <div class="p-field p-col p-md-4">
                        <strong><label for="state">{{$t('Banner.list.mobbanner')}} :</label></strong>
                        <div>
                            <img :src="'http://da-lab-admin.dvconsulting.org:4040/' + mydata.mbanner" :alt="mydata.mbanner" class="product-image" />
                        </div>
                    </div>
                </div>
                <div class="p-d-flex p-jc-end">
                    <router-link :to="'/edit-banner/' + $route.params.id"
                        ><Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> {{$t('button.edit')}}</Button></router-link
                    >
                    <Button @click="del($route.params.id)" label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"><i class="pi pi-trash p-mr-2"></i>{{$t('button.delete')}}</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import BannerService from '../../service/API/BannerService';
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
                title: '',
                link: '',
                status: '',
                dbanner: '',
                mbanner: '',
                type:''
            },
        };
    },
     created() {
        this.bannerService = new BannerService();
    },
    methods: {
        del(id) {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: `/admin/banner/delete`, data: { deleteIdArray: id } }).then((res) => {
                        console.warn(res);
                        this.$router.push({ name: 'BannerManagement' });
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
        this.bannerService.viewBanner(this.$route.params.id).then((res) => {
            this.mydata.title = res.data.data[0].title;
            this.mydata.link = res.data.data[0].link;
            this.mydata.status = res.data.data[0].status;
            this.mydata.dbanner = res.data.data[0].imageUrl;
            this.mydata.mbanner = res.data.data[0].imageUrlMobile;
            this.mydata.type = res.data.data[0].type;
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
</style>
