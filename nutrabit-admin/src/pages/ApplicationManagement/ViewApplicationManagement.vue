<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
       
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('Application.details.header') }}</strong>
                </h4>

                <div class="p-field p-grid">
                    <label
                        for="name"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Application.details.blendingname') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.blending_name_ko }}</p>
                    </div>
                </div>

                 <div class="p-field p-grid">
                    <label
                        for="name"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Application.details.name') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.name }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="ID"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Application.details.id') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.ID }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="password"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Application.details.password') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>******</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="email"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Application.details.email') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.email }}</p>
                    </div>
                </div>

                 <div class="p-field p-grid">
                    <label
                        for="mobile"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Application.details.mobile') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.mobile }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="address"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Application.details.address') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.address }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="date"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Application.details.datetime') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ dateformat(mydata.createdDate) }}</p>
                    </div>
                </div>
                
               
                
                 <div class="p-field p-grid">
                    <label
                        for="Application_mode"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Application.details.application') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ $t(mydata.Application_mode) }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="additional_request"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Application.details.client') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.additional_request }}</p>
                    </div>
                </div>


                <div class="p-field p-grid">
                    <label
                        for="additional_request"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Application.details.applicationlist') }}:</label>
                    <div class="p-col-12 p-md-10">
                         <table id="firstTable" class="firstTable">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>카테고리</th>
                                    <th>설명</th>
                                </tr>
                            </thead>
                             <tbody>
                                 <tr v-for="(item, index) in items" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ $t(item.category) }}</td>
                                    <td>{{ item.explanation }}</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>

               

               

            

              

               
               

                <div class="p-d-flex p-jc-end" style="float: left">
                    <Button @click="isShowing ^= true" label="help" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"> <i class="pi pi-user-edit p-mr-2"></i> 답변하기 </Button>

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
        
        <div class="p-col-12">
            <div class="card p-fluid" v-show="isShowing">
                <h4>
                    <strong>{{ $t('Application.details.adminheader') }}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="status">상태:</label>
                        </strong>
                        <p style="float: right; margin-right: 19%">{{ $t(mydata.status_by_admin) }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="answer">어드민 답변:</label>
                        </strong>
                        <p style="float: right; margin-right: 19%" v-html="mydata.answer_by_admin"></p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <strong>
                            <label for="memo">어드민 메모:</label>
                        </strong>
                        <p style="float: right; margin-right: 19%">{{ mydata.memo_by_admin }}</p>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end" style="float: left">
                    <router-link :to="'/app-managementedit/' + $route.params.id">
                        <Button label="help" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @mouseenter="setData($route.params.id)">
                            <i class="pi pi-user-edit p-mr-2"></i>
                            수정
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
                blending_name_ko:'',
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
                return moment(String(value)).format('MM/DD/YYYY - LTS');
            }
        },
         setData(id) {
            this.applicationmanagementService.viewApplicationmanagemenList (id)
           .then((res) => {
                localStorage.setItem('desc', JSON.stringify(res.data.data[0]));
                // alert(res.data.data[0].daily_intake_amount_ko)
            });
            

        },
    },
    mounted() {
        this.applicationmanagementService.viewApplicationmanagemenList(this.$route.params.id).then((res) => {
            this.mydata.name = res.data.data[0].name;
            this.mydata.ID = res.data.data[0].ID;
            this.mydata.email = res.data.data[0].email;
            this.mydata.mobile = res.data.data[0].mobile;
            this.mydata.address = res.data.data[0].address;
            this.mydata.createdDate = res.data.data[0].createdDate;
            this.mydata.Application_mode = res.data.data[0].Application_mode;
            this.mydata.additional_request = res.data.data[0].additional_request;
            this.mydata.status_by_admin = res.data.data[0].status_by_admin;
            this.mydata.answer_by_admin = res.data.data[0].answer_by_admin;
            this.mydata.memo_by_admin = res.data.data[0].memo_by_admin;
            this.mydata.blending_name_ko = res.data.data[0].blending_name_ko;
            
            this.mydata.options = res.data.data[0].options;
            // console.log(this.mydata.options.length);
            for (let i = 0; i <= this.mydata.options.length; i++) {
                var res_option_type = this.mydata.options[i].split(':')[0]; // raw_material:1
                var res_option_value = this.mydata.options[i].split(':')[1];
                // console.log(res_option_type);
                // console.log(res_option_value);
                this.applicationmanagementService.optiondetails(res_option_type, res_option_value).then((res) => {
                this.items.push({'category':res.data.data[0].category,'explanation':res.data.data[0].explanation});
                 console.log(this.mydata.blending_name_ko);
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
    /* margin: 10px 10px 0 252px; */
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
@media screen and (max-width: 768px) {
    .firstTable {
        width: 330px;
        display: inline;
    }
}
</style>