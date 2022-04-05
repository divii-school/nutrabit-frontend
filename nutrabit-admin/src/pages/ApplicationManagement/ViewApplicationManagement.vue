<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
        <!-- <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>-->
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('Application.details.header') }}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="nameuser">{{ $t('Application.details.name') }} :</label>
                        </strong>
                        <p style="float: right; margin-right: 19%">{{ mydata.name }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="id">{{ $t('Application.details.id') }} :</label>
                        </strong>
                        <p style="float: right; margin-right: 16%">{{ mydata.ID }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="password">{{ $t('Application.details.password') }} :</label>
                        </strong>
                        <p style="float: right; margin-right: 19%">******</p>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="email">{{ $t('Application.details.email') }} :</label>
                        </strong>
                        <p style="float: right; margin-right: 14%">{{ mydata.email }}</p>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="mobile">{{ $t('Application.details.mobile') }} :</label>
                        </strong>
                        <p style="float: right; margin-right: 19%">{{ mydata.mobile }}</p>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="address">{{ $t('Application.details.address') }} :</label>
                        </strong>
                        <p style="float: right; margin-right: 19%">{{ mydata.address }}</p>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="date">{{ $t('Application.details.datetime') }} :</label>
                        </strong>
                        <p style="float: right; margin-right: 19%">{{ dateformat(mydata.createdDate) }}</p>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="application">{{ $t('Application.details.application') }} :</label>
                        </strong>
                        <p style="float: right; margin-right: 19%">{{ mydata.Application_mode }}</p>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-9">
                        <strong>
                            <label for="client">{{ $t('Application.details.client') }} :</label>
                        </strong>
                        <p style="float: right; margin-left: 25%">{{ mydata.additional_request }}</p>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="applicationlist">{{ $t('Application.details.applicationlist') }} :</label>
                        </strong>
                        <table id="firstTable">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>카테고리</th>
                                    <th>설명</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- <tr v-for="(value, index) in mydata.options" :key="value">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ getoptiondetailsname(value.split(':')[0], value.split(':')[1]) }}</td>
                                    <td>{{ getoptiondetailsValue(value.split(':')[0], value.split(':')[1]) }}</td> 
                                </tr> -->

                                <tr v-for="(item, index) in items" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ item.category }}</td>
                                    <td>{{ item.explanation }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- <div class="p-field p-col p-md-3">
                        <strong><label for="mobileuser">{{$t('Banner.list.type')}} :</label></strong>
                        <p>{{ mydata.type }}</p>
                </div>-->

                <div class="p-d-flex p-jc-end" style="float: left">
                    <Button @click="isShowing ^= true" label="help" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"> <i class="pi pi-user-edit p-mr-2"></i> 어드민 메모 </Button>

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

    <div class="p-grid" id="app">
        <!-- <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>-->
        <div class="p-col-12">
            <div class="card p-fluid" v-show="isShowing">
                <h4>
                    <strong>{{ $t('Application.details.adminheader') }}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="status">{{ $t('Application.details.status') }} :</label>
                        </strong>
                        <p style="float: right; margin-right: 19%">{{ mydata.status_by_admin }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="answer">{{ $t('Application.details.answer') }} :</label>
                        </strong>
                        <p style="float: right; margin-right: 19%">{{ mydata.answer_by_admin }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="memo">{{ $t('Application.details.memo') }} :</label>
                        </strong>
                        <p style="float: right; margin-right: 19%">{{ mydata.memo_by_admin }}</p>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end" style="float: left">
                    <router-link :to="'/app-managementedit/' + $route.params.id">
                        <Button label="help" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2">
                            <i class="pi pi-user-edit p-mr-2"></i>
                            {{ $t('button.edit') }}
                        </Button>
                    </router-link>
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
import axios from 'axios';
import ApplicationmanagementService from '../../service/API/ApplicationmanagementService';
import moment from 'moment';
// import {useRouter} from 'vue-router'
export default {
    el: '#app',
    data() {
        return {
            dropdownItems: [
                { name: 'male', code: 'male' },
                { name: 'female', code: 'female' },
                { name: 'others', code: 'others' },
            ],
            dropdownItem: null,
            // options: {
            //         raw_material: '1',
            //         // raw_material: '2',
            //         pill: '1',
            //         package: '1',

            //     },
            type: '',
            value: '',
            category: '',
            items: [],

            mydata: {
                name: '',
                ID: '',
                email: '',
                mobile: '',
                address: '',
                createdDate: '',
                Application_mode: '',
                additional_request: '',
                status_by_admin: '',
                answer_by_admin: '',
                memo_by_admin: '',
                // type:''
                sl_no: '',
                category: '',
                explanation: '',
                options: '',
            },
            isShowing: false,
        };
    },

    created() {
        this.applicationmanagementService = new ApplicationmanagementService();
    },
    methods: {
        del(id) {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirmation',
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios({ method: 'delete', url: `/admin/application/delete`, data: { deleteIdArray: id } }).then((res) => {
                        console.warn(res);
                        this.$router.push({ name: 'app' });
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
                return moment(String(value)).format('MM/DD/YYYY - hh:mm:ss');
            }
        },
    },
    mounted() {
        this.applicationmanagementService.viewApplicationmanagemenList(this.$route.params.id).then((res) => {
            this.mydata.name = res.data.data[0].name;
            this.mydata.ID = res.data.data[0].ID;
            this.mydata.email = res.data.data[0].email;
            this.mydata.address = res.data.data[0].address;
            this.mydata.createdDate = res.data.data[0].createdDate;
            this.mydata.Application_mode = res.data.data[0].Application_mode;
            this.mydata.additional_request = res.data.data[0].additional_request;
            this.mydata.status_by_admin = res.data.data[0].status_by_admin;
            this.mydata.answer_by_admin = res.data.data[0].answer_by_admin;
            this.mydata.memo_by_admin = res.data.data[0].memo_by_admin;
            this.mydata.options = res.data.data[0].options;
            // console.log(this.mydata.options.length);
            for (let i = 0; i <= this.mydata.options.length; i++) {
                var res_option_type = this.mydata.options[i].split(':')[0]; // raw_material:1
                var res_option_value = this.mydata.options[i].split(':')[1];
                // console.log(res_option_type);
                // console.log(res_option_value);
                this.applicationmanagementService.optiondetails(res_option_type, res_option_value).then((res) => {
                this.items.push({'category':res.data.data[0].category,'explanation':res.data.data[0].explanation});
                // console.log(res);
                });
            }
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

table {
    font-family: 'Open Sans', sans-serif;
    width: 750px;
    border-collapse: collapse;
    border: 1px solid #cfcfcf;
    margin: 10px 10px 0 252px;
}

table th {
    text-transform: uppercase;
    text-align: left;
    background: #f2f2f2;
    color: #a4a4a4;
    padding: 8px;
    min-width: 30px;
    text-align: center;
}

table td {
    text-align: center;
    padding: 8px;
    border-right: 1px solid #cfcfcf;
    background: #ffffff;
}
table td:last-child {
    border-right: none;
}
table tbody tr:nth-child(2n) td {
    background: #ffffff;
}
</style>