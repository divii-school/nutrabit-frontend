<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('Banner.details.header') }}</strong>
                </h4>

                <div class="p-field p-grid">
                    <label
                        for="title"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Banner.list.title') }}:</label>
                    <div class="p-col-12 p-md-10 bannerTitle">
                        
                        <p>{{ mydata.title }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="desktopimage"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Banner.list.deskbanner') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <img
                            :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + mydata.desktop_banner"
                            :alt="mydata.desktop_banner"
                            class="product-image"
                        />
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="mobileimage"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Banner.list.mobbanner') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <img
                            :src="'https://api-nutrabbit-dev.dvconsulting.org/public/' + mydata.mobile_banner"
                            :alt="mydata.mobile_banner"
                            class="product-image"
                        />
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="link"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Banner.list.link') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.link }}</p>
                    </div>
                </div>

               
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-3">
                        <strong>
                            <label for="mobileuser">{{ $t('Banner.list.status') }} :</label>
                        </strong>
                        <br />
                        <input
                            type="radio"
                            id="yes"
                            value="active"
                            name="status"
                            v-model="mydata.status"
                        />
                        <label for="yes">Yes</label>

                        <input
                            type="radio"
                            id="no"
                            name="status"
                            value="inactive"
                            v-model="mydata.status"
                        />
                        <label for="no">No</label>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end" style="float:left;">
                    <router-link :to="'/edit-banner/' + $route.params.id">
                        <Button
                            label="help"
                            class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                        >
                            <i class="pi pi-user-edit p-mr-2"></i>
                            {{ $t('button.edit') }}
                        </Button>
                    </router-link>
                    <!-- <Button @click="del($route.params.id)" label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"><i class="pi pi-trash p-mr-2"></i>{{$t('button.delete')}}</Button> -->
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
                desktop_banner: '',
                mobile_banner: '',
                // type:''
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
            this.mydata.desktop_banner = res.data.data[0].desktop_banner_path;
            this.mydata.mobile_banner = res.data.data[0].mobile_banner_path;
            // this.mydata.type = res.data.data[0].type;
        });
    },
};
</script>

<style scoped>

.bannerTitle{
    white-space: break-spaces;
    white-space: -moz-break-spaces;
    word-break: break-word;
}
.product-image {
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    height: 150px;
    
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
