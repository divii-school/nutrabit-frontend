<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" label="Go Back" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>More Information</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <strong> <label for="nameuser">Name:</label></strong>
                        <p>{{ mydata.name }}</p>
                    </div>
                    <div class="p-field p-col">
                        <strong><label for="emailuser">E-mail:</label></strong>
                        <p>{{ mydata.Email }}</p>
                    </div>
                    <div class="p-field p-col">
                        <strong><label for="mobileuser">Phone Number:</label></strong>
                        <p>+91- {{ mydata.phone }}</p>
                    </div>

                    <div class="p-field p-col">
                        <strong><label for="state">gender:</label></strong>
                        <p>{{ mydata.gender }}</p>
                    </div>
                </div>
                <!-- <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <strong><label for="pass">Total Points:</label></strong>
                        <p>0</p>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <strong><label for="pass">Number Of Visits:</label></strong>
                        <p>0</p>
                    </div>
                </div> -->

                <div class="p-d-flex p-jc-end">
                    <!-- <router-link to="/view-user"
                        ><Button label="info" class="p-button-outlined p-button-info p-mr-2 p-mb-2" disabled><i class="pi pi-eye p-mr-2"></i>point</Button>
                    </router-link> -->
                    <router-link :to="'/user/edit-user/' + $route.params.id"
                        ><Button label="help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-user-edit p-mr-2"></i> Edit</Button></router-link
                    >
                    <Button @click="del($route.params.id)" label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"><i class="pi pi-trash p-mr-2"></i> delete</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import UserService from '../../service/API/UserService';
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
                name: '',
                Email: '',
                phone: '',
                gender: '',
            },
        };
    },
    created() {
        this.userService = new UserService();
    },
    methods: {
        del(id) {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: `/user/delete`, data: { deleteIdArray: id } }).then((res) => {
                        console.warn(res);
                        this.$router.push({ name: 'User' });
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
        this.userService.viewUser(this.$route.params.id).then((res) => {
            this.mydata.name = res.data.data[0].name;
            this.mydata.Email = res.data.data[0].email;
            this.mydata.phone = res.data.data[0].mobile;
            this.mydata.gender = res.data.data[0].gender === 'm' ? 'male' : 'female';
            console.log(res.data.data);
        });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
