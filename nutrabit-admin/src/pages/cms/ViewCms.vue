<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" label="Go Back" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>More Information</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <strong>
                            <label for="title">Title:</label>
                        </strong>
                        <p>{{ mydata.title }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <strong>
                            <label for="description">description:</label>
                        </strong>
                        <div class="renderHtml" v-html="mydata.desc"></div>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end">
                    <!-- <router-link to="/view-user"
                        ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2" disabled><i class="pi pi-eye p-mr-2"></i>point</Button>
                    </router-link>-->
                    <router-link :to="'/cms/edit/' + $route.params.id">
                        <Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"> <i class="pi pi-user-edit p-mr-2"></i> Edit </Button>
                    </router-link>
                    <Button @click="del($route.params.id)" label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"> <i class="pi pi-trash p-mr-2"></i> delete </Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import CmsService from '../../service/API/CmsService';
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
                desc: '',
                status: '',
            },
        };
    },
    created() {
        this.cmsService = new CmsService();
    },
    methods: {
        del(id) {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: `/cms/delete`, data: { deleteIdArray: id } }).then((res) => {
                        console.warn(res);
                        this.$router.push({ name: 'Cms' });
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
        this.cmsService.viewCms(this.$route.params.id).then((res) => {
            this.mydata.title = res.title;
            this.mydata.status = res.status;
            this.mydata.desc = res.description;
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
