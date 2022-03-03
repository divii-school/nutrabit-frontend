<template>
    <div class="p-col-12 p-pb-0">
        <Button @click="$router.go(-1)" label="Go Back" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
    </div>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>New</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">Title</label>
                            <InputText type="text" placeholder="Title" id="title2" v-model="mydata.title"></InputText>
                        </div>

                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="state2">state</label>
                            <Dropdown id="state2" v-model="mydata.status" :options="dropdownValues" optionLabel="name" :placeholder="mydata.status" />
                        </div>
                    </div>
                </div>
                <div class="p-col-12">
                    <span class="p-float-label">
                        <Quill-Editor style="height: 230px" v-model:content="modelname" ref="myQuillEditor" :options="editorOption" contentType="html" />
                    </span>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button label="cancel" icon="pi pi-times" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="cancel"> </Button>
                    <Button label="confirm" icon="pi pi-check" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="confirm($event)"></Button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
// import validateEditUser from '../../validations/user/validateEditUser';
import NoticeService from '../../service/API/NoticeService';
export default {
    data() {
        return {
            dropdownValues: [{ name: 'active' }, { name: 'inactive' }],
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
            },
            error: {},
        };
    },
    created() {
        this.noticeService = new NoticeService();
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
        confirm(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.noticeService.editNotice(this.mydata.title, this.modelname, this.$route.params.id,this.mydata.status.name==undefined?this.mydata.status:this.mydata.status.name).then((res) => {
                        console.warn(res);
                        localStorage.removeItem('desc');
                        this.$router.push({ name: 'NoticeList' });
                    });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
    },
    mounted() {
        this.noticeService.viewNotice(this.$route.params.id).then((res) => {
            this.mydata.title = res.title;
            this.mydata.status = res.status;
            this.modelname = res.description;
        });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
