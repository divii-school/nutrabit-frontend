<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
       
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('Business.list.Businessheader') }}</strong>
                </h4>

                <div class="p-field p-grid">
                    <label
                        for="nameuser"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Business.list.BusinessNumber') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.business_number }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="business_name"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Business.list.BusinessName') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.business_name }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="department"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Business.list.Departmentname') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.department }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="person_in_charge"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Business.list.Personincharge') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.person_in_charge }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="person_in_charge"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Business.list.name') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.name }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="uuid"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Business.list.ID') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.uuid }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="password"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Business.list.Password') }}:</label>
                    <div
                        class="p-col-12 p-md-10"
                        style="display: flex; justify-content: flex-start"
                    >
                        <p>********</p>
                        <a
                            href="#"
                            @click="open"
                            class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                            style=" background: white;border: 1px solid #0A0A0A;color: #000000; margin-left: 1%;"
                        >{{ $t('비밀번호 재설정') }}</a>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="email"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Business.list.Email') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.email }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="mobile"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Business.list.mobile') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.mobile }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="address"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Business.list.Area') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.address }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="detailaddress"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('Business.list.detailaddress') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.detail_address }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="createdDate"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >등록 날짜 및 시간:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ dateformat(mydata.createdDate) }}</p>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end" style="float:left;">
                    
                    <router-link :to="'/business-edit/' + $route.params.id">
                        <Button
                            label="help"
                            class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                        >
                            <i class="pi pi-user-edit p-mr-2"></i>
                            수정
                        </Button>
                    </router-link>
                </div>
                <div class="p-d-flex p-jc-end">
                    <Button
                        @click="del($route.params.id)"
                        label="delete"
                        class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                    >
                        <i class="pi pi-trash p-mr-2"></i>
                        {{ $t('button.delete') }}
                    </Button>
                </div>
            </div>
        </div>
        <Dialog
            :header="$t('Individual.list.changepass')"
            v-model:visible="display"
            :breakpoints="{ '960px': '75vw' }"
            :style="{ width: '30vw' }"
            :modal="true"
        >
            <div class="p-field p-fluid">
                <label for="username">{{ $t('Individual.list.newpassword') }}:</label>
                <InputText id="password" placeholder="#123Abc" type="text" v-model="new_password" />
                <small v-show="helptxt">{{ $t('password.help') }}</small>
                <!-- <div class="text-redx">{{ error.new_password }}{{ errmsg }}</div> -->
            </div>
            <template #footer>
                <Button
                    :label="$t('Individual.list.confirm')"
                    @click="resetpass"
                    class="p-button"
                    style="background:white;color:black;border:0px solid; margin-right:60px;"
                />
                <Button
                    :label="$t('Individual.list.cancel')"
                    @click="close"
                    class="p-button"
                    style="float:left; background:white;color:black;border:0px solid;margin-left:60px;"
                />
            </template>
        </Dialog>
    </div>
</template>
<script>
import axios from 'axios';
import UserService from '../../service/API/UserService';
// import {useRouter} from 'vue-router'
import moment from 'moment';
export default {
    data() {
        return {
            dropdownItems: [
                { name: 'male', code: 'male' },
                { name: 'female', code: 'female' },
                { name: 'others', code: 'others' },
            ],
            dropdownItem: null,
            new_password: '',
            display: false,
            mydata: {
                // name: '',
                // email: '',
                status: '',
                id: '',
                business_number: '',
                business_name: '',
                department: '',
                person_in_charge: '',
                email: '',
                account_type: '',
                username: '',
                uuid: '',
                mobile: '',
                createdDate: '',
                address: '',
                detail_address:'',
                password: '',
                name:'',
            },
        };
    },
    created() {
        this.userservice = new UserService();
    },
    methods: {
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
        del(id) {
            this.$confirm.require({
                group: 'dialog',
                header: '확인',
                message: '삭제하시겠습니까?',
                icon: 'pi pi-trash',
                acceptLabel:"확인",
                rejectLabel:"취소",
                accept: () => {
                    axios({ method: 'delete', url: '/admin/user/delete', data: { deleteIdArray: id } }).then(function (response) {
                        console.log(response);
                    
                     });
                     this.$router.push({ name: 'BusinessMember' });
                    
                    this.$toast.add({ severity: 'info', summary: '삭제됨', detail: '성공적으로 삭제되었습니다', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '당신은 거부했습니다', life: 3000 });
                },
            });
            setTimeout(() => {
                this.userservice.getBusinessUserList().then((data) => {
                    this.customer1 = data;
                    console.log(data);
                    this.loading1 = false;
                });
            }, 2000);
        },
        dateformat(value) {
             if (value) {
                 console.log()
            // return moment(String(value)).locale('ko').format('LLL')
            return moment(String(value)).format('YYYY/MM/DD     LT')
            }
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
        resetpass() {
            // // let vcheckData = {
            //     resetemail: this.resetemail,
            // };
            // const { isInvalid, error } = validateReset(vcheckData);
            // if (isInvalid) {
            //     this.error = error;
            //     this.helptxt = false;
            //     console.log(error);
            // } 
            // else {
            this.errmsg = '';
            var self = this;
            this.helptxt = true;
            this.error = {};
            axios({
                method: 'post',
                url: '/admin/user/change_password',
                data: { id: this.$route.params.id, new_password: this.new_password },
                // this.$router.push({ name: 'BannerManagement' });
            })
                .then(function (res) {
                    console.log(res.data.status)
                    if (res.data.status == 200) {
                        alert('비밀번호가 성공적으로 변경되었습니다.')
                    }
                    self.close();
                    self.$toast.add({ severity: 'success', summary: '비밀번호가 성공적으로 변경되었습니다', detail: ` 새로운 비밀번호가 ${self.new_password}로 발송되었습니다  `, life: 5000 });
                })
                .catch((err) => {
                    this.helptxt = false;
                    this.errmsg = err.response.data.message;
                });
            // }
        },
    },
    mounted() {
        this.userservice.viewBusinessUser(this.$route.params.id).then((res) => {
            this.mydata.business_number = res.data.data[0].business_number;
            this.mydata.business_name = res.data.data[0].business_name;
            this.mydata.department = res.data.data[0].department;
            this.mydata.person_in_charge = res.data.data[0].person_in_charge;
            this.mydata.name = res.data.data[0].name;
            this.mydata.uuid = res.data.data[0].uuid;
            this.mydata.password = res.data.data[0].password;
            this.mydata.email = res.data.data[0].email;
            this.mydata.mobile = res.data.data[0].mobile;
            this.mydata.address = res.data.data[0].address;
            this.mydata.detail_address = res.data.data[0].detail_address;
            this.mydata.createdDate = res.data.data[0].createdDate;

        });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}
</style>

