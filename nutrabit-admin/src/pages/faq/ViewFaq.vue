<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        <!-- <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>-->
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('Faq.viewfaq') }}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-6">
                        <strong>
                            <label for="nameuser">{{ $t('Faq.list.category') }} :</label>
                        </strong>
                        <p style="float:right">{{ mydata.category_name_ko }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-6">
                        <strong>
                            <label for="title_ko">{{ $t('Faq.add.title') }} :</label>
                        </strong>
                        <p style="float:right;">{{ mydata.title_ko }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-6">
                        <strong>
                            <label for="title_en">{{ $t('Faq.add.addtitle') }} :</label>
                        </strong>
                        <p style="float:right;">{{ mydata.title_en }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-6">
                        <strong>
                            <label for="description_ko">{{ $t('Faq.add.answer') }} :</label>
                        </strong>
                        <p style="float:left;margin-left:20%;text-align: justify;">{{ mydata.description_ko }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-6">
                        <strong>
                            <label for="description_en">{{ $t('Faq.add.addanswer') }} :</label>
                        </strong>
                        <p style="float:left;margin-left:20%; text-align: justify;">{{ mydata.description_en }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-6">
                        <strong>
                            <label for="status">{{ $t('Faq.add.status') }} :</label>
                        </strong>
                        <p style="float:right;">{{ mydata.status }}</p>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-6">
                        <strong>
                            <label for="top_10">{{ $t('Faq.add.top') }} :</label>
                        </strong>
                        <p style="float:right;">{{ mydata.top_10 }}</p>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-6">
                        <strong>
                            <label for="createdDate">{{ $t('Faq.add.createdate') }} :</label>
                        </strong>
                        <p style="float:right;"> {{ dateformat(mydata.createdDate) }}</p>
                    </div>
                </div>

                <!-- <div class="p-field p-col p-md-3">
                        <strong><label for="mobileuser">{{$t('Banner.list.type')}} :</label></strong>
                        <p>{{ mydata.type }}</p>
                </div>-->

                <div class="p-d-flex p-jc-end" style="float:left;">
                    <router-link :to="'/faq/edit/' + $route.params.id">
                        <Button
                            label="help"
                            class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                        >
                            <i class="pi pi-user-edit p-mr-2"></i>
                            {{ $t('button.edit') }}
                        </Button>
                        <Button
                            :label="$t('button.back')"
                            icon="pi pi-replay"
                            iconPos="left"
                            class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                            @click="$router.go(-1)"
                        ></Button>
                    </router-link>
                    <!-- <Button @click="del($route.params.id)" label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"><i class="pi pi-trash p-mr-2"></i>{{$t('button.delete')}}</Button> -->
                </div>

                <div class="p-d-flex p-jc-end p-ai-center">
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
import axios from 'axios';
import FaqService from '../../service/API/FaqService';
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
                category_name_ko: '',
                title_ko: '',
                title_en: '',
                description_ko: '',
                description_en: '',
                top_10: '',
                status: '',
                createdDate: '',
                // type:''
            },
        };
    },
    created() {
        this.FaqService = new FaqService();
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
         dateformat(value) {
             if (value) {
            return moment(String(value)).format('YYYY/MM/DD  hh:mm:ss')
            }
        },
    },
    mounted() {

        this.FaqService.viewFaq(this.$route.params.id).then((res) => {
            this.mydata.category_name_ko = res.data.data[0].category_name_ko;
            this.mydata.title_ko = res.data.data[0].title_ko;
            this.mydata.title_en = res.data.data[0].title_en;
            this.mydata.description_ko = res.data.data[0].description_ko;
            this.mydata.description_en = res.data.data[0].description_en;
            this.mydata.top_10 = res.data.data[0].top_10;
            this.mydata.status = res.data.data[0].status;
            this.mydata.createdDate = res.data.data[0].createdDate;
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
    width: 837px;
    height: 120px;
    margin-left: 74%;
}
.p-fluid .p-button {
    width: auto;
}

.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}

.card{
    height: 720px;
}
</style>