<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{$t('popup.details.header')}}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <strong>
                            <label for="title">{{$t('popup.list.title')}} :</label>
                        </strong>
                        <p>{{ mydata.title }}</p>
                    </div>
                    <div class="p-field p-col">
                        <strong>
                            <label for="title">{{$t('popup.details.popuptype')}} :</label>
                        </strong>
                        <p>{{ mydata.popuptype}}</p>
                    </div>
                    <div class="p-field p-col">
                        <strong>
                            <label for="status">{{$t('popup.list.status')}}:</label>
                        </strong>
                        <p>{{ mydata.status }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <strong>
                            <label for="description">{{$t('popup.details.description')}}:</label>
                        </strong>
                        <div class="renderHtml" v-html="mydata.desc"></div>
                    </div>
                </div>
                <div class="p-d-flex p-jc-end">
                    <!-- <router-link to="/view-user"
                        ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2" disabled><i class="pi pi-eye p-mr-2"></i>point</Button>
                    </router-link>-->
                    <router-link :to="'/edit-popup/' + $route.params.id">
                        <Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"> <i class="pi pi-user-edit p-mr-2"></i> {{$t('button.edit')}} </Button>
                    </router-link>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import PopupService from '../../service/API/PopupService';
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
                desc: '',
                status: '',
                popuptype: '',
            },
        };
    },
    created() {
        this.popupService = new PopupService();
    },
    methods: {
        del(id) {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: `/faq/delete`, data: { deleteIdArray: id } }).then((res) => {
                        console.warn(res);
                        this.$router.push({ name: 'Faq' });
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
        this.popupService.viewPopup(this.$route.params.id).then((res) => {
            this.mydata.title = res.title;
            this.mydata.status = res.status;
            this.mydata.desc = res.description;
            this.mydata.popuptype = res.popupType;
            console.log(res);

        });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
.renderHtml {
    background-color: #fcfcfc;
    padding: 25px;
    border: 1px solid rgba(70, 77, 242, 0.2);
    border-radius: 5px;
    margin-top: 15px;
}
</style>
