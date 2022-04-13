<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('Application.details.header') }}</h5>
                    <div class="p-field p-grid">
                        <label for="title" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{
                            $t('Application.details.name')
                        }}:</label>
                        <div class="p-col-12 p-md-10">
                            <p>{{ name }}</p>
                        </div>
                    </div>

                    <div class="p-field p-grid">
                        <label for="title" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{
                            $t('Application.details.id')
                        }}:</label>
                        <div class="p-col-12 p-md-10">
                            <p>{{ ID }}</p>
                        </div>
                    </div>

                    <div class="p-field p-grid">
                        <label for="title" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{
                            $t('Application.details.password')
                        }}:</label>
                        <div class="p-col-12 p-md-10">
                            <p>******</p>
                        </div>
                    </div>

                    <div class="p-field p-grid">
                        <label for="title" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{
                            $t('Application.details.email')
                        }}:</label>
                        <div class="p-col-12 p-md-10">
                            <p>{{ email }}</p>
                        </div>
                    </div>

                    <div class="p-field p-grid">
                        <label for="title" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{
                            $t('Application.details.mobile')
                        }}:</label>
                        <div class="p-col-12 p-md-10">
                            <p>{{ mobile }}</p>
                        </div>
                    </div>


                    <div class="p-field p-grid">
                        <label for="title" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{
                            $t('Application.details.address')
                        }}:</label>
                        <div class="p-col-12 p-md-10">
                            <p>{{ address }}</p>
                        </div>
                    </div>

                    <div class="p-field p-grid">
                        <label for="title" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{
                            $t('Application.details.datetime')
                        }}:</label>
                        <div class="p-col-12 p-md-10">
                            <p>{{ createdDate }}</p>
                        </div>
                    </div>

                    <div class="p-field p-grid">
                        <label for="title" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{
                            $t('Application.details.application')
                        }}:</label>
                        <div class="p-col-12 p-md-10">
                            <p>{{ Application_mode }}</p>
                        </div>
                    </div>

                    <div class="p-field p-grid">
                        <label for="title" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{
                            $t('Application.details.client')
                        }}:</label>
                        <div class="p-col-12 p-md-10">
                            <p>{{ additional_request }}</p>
                        </div>
                    </div>

                    <div class="p-field p-grid">
                        <label for="title" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">{{
                            $t('Application.details.applicationlist')
                        }}:</label>
                        <div class="p-col-12 p-md-10">
                            <table id="firstTable">
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
                                        <td>{{ item.category }}</td>
                                        <td>{{ item.explanation }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>









                    <br />
                    <h4>
                        <strong>{{ $t('Application.details.adminheader') }}</strong>
                    </h4>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="state2">{{ $t('Application.details.status') }}</label>
                            <select class="p-dropdown-label p-inputtext" name="status" id="status"
                                v-model="status_by_admin">
                                <option value>Select</option>
                                <option v-for="(item, index) in dropdownValues" v-bind:key="index" :value="item.name">{{
                                    item.name
                                }}</option>
                            </select>
                            <div class="text-red">{{ error.status }}</div>
                        </div>
                    </div>


                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="answer_by_admin">{{ $t('Application.details.answer') }}</label>
                            <div style="width: 150%;">
                                <Quill-Editor style="height: 100px;" :placeholder="$t('Application.details.answer')"  id="answer_by_admin"
                                    v-model:content="answer_by_admin" ref="myQuillEditor" :options="editorOption"
                                    contentType="text" />
                            </div>
                            <!-- <Textarea type="text" :placeholder="$t('Application.details.answer')" id="answer_by_admin"
                                v-model="answer_by_admin"></Textarea> -->
                            <div class="text-red">{{ error.answer_by_admin }}</div>
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="memo_by_admin">{{ $t('Application.details.memo') }}</label>
                            <Textarea type="text" :placeholder="$t('Application.details.memo')" id="memo_by_admin"
                                v-model="memo_by_admin"></Textarea>
                            <div class="text-red">{{ error.memo_by_admin }}</div>
                        </div>
                    </div>


                </div>
            </div>

            <div class="p-d-flex p-jc-end p-ai-center" style="float:left;">
                <Button :label="$t('Application.details.save')" icon="pi pi-save" iconPos="left"
                    class="p-button p-button-sm p-mr-2 p-mb-2" @click="editApplicationManagement"></Button>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button :label="$t('button.back')" icon="pi pi-replay" iconPos="left"
                        class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import validateCreateApplication from '../../validations/application/validateCreateApplication';
import ApplicationmanagementService from '../../service/API/ApplicationmanagementService';
export default {
    name: 'appedit',
    data() {
        return {
            // render1: false,
            // render2: false,
            dropdownValues: [{ name: 'pending', code: '보류 중' }, { name: 'completed', code: '완전한' }],
            // dropdownValueTypes: [{ name: 'nft' }, { name: 'card_news' }, { name: 'media_press' }, { name: 'de_fi_services' }],
            dropdownValue: null,
            // dropdownValueType: null,
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
            items: [],
            formData: new FormData(),
            error: {},
            status: '',







        };
    },
    created() {
        this.applicationmanagementService = new ApplicationmanagementService();
    },
    mounted() {
        this.applicationmanagementService.viewApplicationmanagemenList(this.$route.params.id).then((res) => {
            this.name = res.data.data[0].name;
            this.ID = res.data.data[0].ID;
            this.email = res.data.data[0].email;
            this.address = res.data.data[0].address;
            this.createdDate = res.data.data[0].createdDate;
            this.Application_mode = res.data.data[0].Application_mode;
            this.additional_request = res.data.data[0].additional_request;
            this.status_by_admin = res.data.data[0].status_by_admin;
            this.answer_by_admin = res.data.data[0].answer_by_admin;
            this.memo_by_admin = res.data.data[0].memo_by_admin;
            this.options = res.data.data[0].options;
            for (let i = 0; i <= this.options.length; i++) {
                var res_option_type = this.options[i].split(':')[0]; // raw_material:1
                var res_option_value = this.options[i].split(':')[1];
                // console.log(res_option_type);
                // console.log(res_option_value);
                this.applicationmanagementService.optiondetails(res_option_type, res_option_value).then((res) => {
                    this.items.push({ 'category': res.data.data[0].category, 'explanation': res.data.data[0].explanation });
                    // console.log(res);
                });
            }
        });
    },
    methods: {
        reinitialize() {
            (this.name = null), (this.ID = null), (this.email = null), (this.address = null), (this.createdDate = null), (this.Application_mode = null), (this.additional_request = null), (this.status_by_admin = null), (this.answer_by_admin = null), (this.memo_by_admin = null), (this.options = null);
        },

        editApplicationManagement() {
            let vcheckData = {
                id: this.$route.params.id,
                status_by_admin: this.dropdownValue ? 'something' : 'something',
                answer_by_admin: this.answer_by_admin,
                memo_by_admin: this.memo_by_admin,
                // type: this.dropdownValueType ? 'something' : 'something',
                // link: this.link,
                // file: this.fileName1 == '' ? '' : 'something',
            };
            const { isInvalid, error } = validateCreateApplication(vcheckData);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                alert('업데이트 완료')
                return axios.put('/admin/application/edit', { "id": this.$route.params.id, "answer_by_admin": this.answer_by_admin, "status_by_admin": this.status_by_admin, "memo_by_admin": this.memo_by_admin }).then((res) => {
                    this.$router.push({ name: 'appmanagement' });
                    console.log(res);
                });
            }
        },


    },
};
</script>

<style scoped>
.img-info {
    font-size: 11px;
    font-weight: 400;
    color: rgb(48, 48, 48);
}

.product-image {
    padding-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    height: 100px;

}

.custom-select {
    position: relative;
    border: 1px solid #cecece;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
}

.select-file {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0%;
    z-index: 5;
    opacity: 0;
}

.SelectBtn {
    max-width: 100px;
}

.custom-select span {
    max-width: 140px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.custom-select-invalid {
    position: relative;
    border: 1px solid red;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
}

.p-button {
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}

table {
    font-family: "Open Sans", sans-serif;
    width: 750px;
    border-collapse: collapse;
    border: 1px solid #cfcfcf;

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