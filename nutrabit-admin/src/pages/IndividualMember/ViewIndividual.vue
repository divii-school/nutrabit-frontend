<template>
    <ConfirmDialog group="dialog" />
    <div class="p-grid">
       

        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('DFC.details.individualheader') }}</strong>
                </h4>
                <div class="p-field p-grid">
                    <label
                        for="nameuser"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('DFC.details.name') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.name }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="uuid"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('DFC.details.grade') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.uuid }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="password"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('DFC.details.password') }}:</label>
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
                        >{{ $t('Change Password') }}</a>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="email"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('DFC.details.email') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.email }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="mobile"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('DFC.details.mobile') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.mobile }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="address"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('DFC.details.address') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.address }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="createdDate"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('DFC.details.location') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.createdDate }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label
                        for="findings"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >{{ $t('DFC.details.designation') }}:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ mydata.findings }}</p>
                    </div>
                </div>

                <div class="p-d-flex p-jc-end" style="float:left;">
                   
                    <router-link :to="'/individual-edit/' + $route.params.id">
                        <Button
                            label="help"
                            class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                        >
                            <i class="pi pi-user-edit p-mr-2"></i>
                            {{ $t('button.edit') }}
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
                <InputText id="password" type="text" v-model="new_password"  />
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
                page: '',
                limit: '',
                name: '',
                id: '',
                email: '',
                startDate: '',
                endDate: '',
                sortBy: '',
                sortOrder: '',
                account_type: '',
                username: '',
                uuid: '',
                mobile: '',
                findings: '',
                createdDate: '',
                address: '',
                password: '',

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
        this.userservice.viewIndividualUser(this.$route.params.id).then((res) => {
            this.mydata.name = res.data.data[0].name;
            this.mydata.email = res.data.data[0].email;
            this.mydata.mobile = res.data.data[0].mobile;
            this.mydata.uuid = res.data.data[0].uuid;
            this.mydata.address = res.data.data[0].address;
            this.mydata.createdDate = res.data.data[0].createdDate;
            this.mydata.findings = res.data.data[0].findings;
            this.mydata.password = res.data.data[0].password;
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
.p-dialog-header-close-icon {
    display: none !important;
}
.button.p-button.p-component.p-button-danger {
    float: left;
    margin-left: 30px;
    background-color: white;
    color: black;
    border: 0px solid;
}
</style>
