<template>
    <div class="p-col-12 p-pb-0">
        <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
    </div>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>Edit PopUp</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('popup.list.title') }}</label>
                            <InputText :class="`${error.title ? 'p-invalid' : ''}`" type="text" placeholder="title" id="title2" v-model="mydata.title"></InputText>
                            <div class="text-red">{{ error.title }}</div>
                        </div>

                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="state2">{{ $t('popup.list.status') }}</label>
                            <Dropdown :class="`${error.state ? 'p-invalid' : ''}`" id="state2" v-model="mydata.status" :options="dropdownValues" optionLabel="name" :placeholder="mydata.status" />
                            <div class="text-red">{{ error.status }}</div>
                        </div>
                        <div v-show="render" class="p-field p-col-12 p-md-3">
                            <label for="name2">{{ $t('popup.list.startDate') }}</label>
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="mydata.startDate" placeholder="YYYY.MM.DD" dateFormat="yy.mm.dd"></Calendar>
                        </div>
                        <div v-show="render" class="p-field p-col-12 p-md-3">
                            <label for="email2">{{ $t('popup.list.lastDate') }}</label>
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="mydata.endDate" placeholder="YYYY.MM.DD" dateFormat="yy.mm.dd"></Calendar>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-field">
                    <label>{{ $t('popup.details.description') }} :</label>
                    <span class="p-float-label">
                        <div :class="`${error.desc ? 'quill-invalid' : 'quill-valid'}`">
                            <Quill-Editor style="height: 230px" v-model:content="modelname" ref="myQuillEditor" :options="editorOption" contentType="html" />
                        </div>
                    </span>
                    <div class="text-red">{{ error.desc }}</div>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button :label="$t('button.Cancel')" icon="pi pi-times" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="cancel"> </Button>
                    <Button :label="$t('button.confirm')" icon="pi pi-check" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="confirm($event)"></Button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import validateEditPopups from '../../validations/popup/validatePopup';
import PopupService from '../../service/API/PopupService';
export default {
    data() {
        return {
            dropdownValues: [
                { name: 'active', code: 'active' },
                { name: 'inactive', code: 'inactive' },
            ],
            render: false,
            dropdownItem: null,
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            products: null,
            selectedProduct: null,
            modelname: localStorage.getItem('desc'),
            mydata: {
                title: '',
                status: '',
                popupType: '',
                startDate: '',
                endDate: '',
                sdate:'',
                edate:''
            },
            error: {},
        };
    },
    created() {
        this.popupService = new PopupService();
    },
    methods: {
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
        cancel() {
            this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            setTimeout(() => {
                this.$router.go(-1);
            }, 2000);
        },
        staticformatDate(date) {
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (month < 10) {
                month = '0' + month;
            }

            if (day < 10) {
                day = '0' + day;
            }

            return date.getFullYear() + '-' + month + '-' + day;
        },
        formatDate(value) {
            const date = new Date(value);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (value = yyyy + '.' + mm + '.' + dd);
        },
        confirm(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let vcheckData = {
                        title: this.mydata.title,
                        state: this.mydata.status == '' ? '' : 'something',
                        desc: this.modelname == '<p><br></p>' ? '' : this.modelname,
                    };
                    const { isInvalid, error } = validateEditPopups(vcheckData);
                    if (isInvalid) {
                        this.error = error;
                        console.log(error);
                    } else {
                        this.popupService
                            .editPopup(this.mydata.title, this.mydata.status.code == undefined ? this.mydata.status : this.mydata.status.code, this.mydata.popupType, this.modelname, this.$route.params.id, this.mydata.startDate, this.mydata.endDate)
                            .then((res) => {
                                console.warn(res);
                                localStorage.removeItem('desc');
                                this.$router.push({ name: 'PopupManagement' });
                            });
                    }
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
            this.mydata.startDate = new Date(res.periodStartDate).toJSON().slice(0, 10).replace(/-/g, '.');
            this.mydata.endDate = new Date(res.periodEndDate).toJSON().slice(0, 10).replace(/-/g, '.');
            this.mydata.popupType = res.popupType;
            this.modelname = res.description;

            if (res.periodStartDate === null) {
                this.render = false;
                console.log(res.periodStartDate);
            } else {
                this.render = true;
                console.log(res.periodStartDate);
            }
            console.log(res);
        });
    },
};
</script>

<style scoped>
.quill-invalid {
    border: 1px solid red;
}
.p-fluid .p-button {
    width: auto;
}
</style>
