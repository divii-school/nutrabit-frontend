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
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="title2">Title*</label>
                            <InputText type="text" placeholder="Title" id="title2" v-model="title"></InputText>
                        </div>

                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            <label for="state2">state*</label>
                            <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" :placeholder="dropdownValue" />
                        </div>
                    </div>
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
import InquiryService from '../../service/API/InquiryService';
// import axios from 'axios';
export default {
    name: 'CreateBanner',
    data() {
        return {
            dropdownValues: [{ name: 'active' }, { name: 'inactive' }],
            dropdownValueTypes: [{ name: 'main_banner' }, { name: 'banner_top' }, { name: 'banner_bottom' }],
            dropdownValue: 'active',
            dropdownValueType: null,
            title: '',
        };
    },
    created() {
        this.inquiryService = new InquiryService();
    },
    mounted() {
        this.inquiryService.viewInquiryType(this.$route.params.id).then((res) => {
            this.title = res.title;
            this.dropdownValue = res.status;
            console.log(res);
        });
    },

    methods: {
        confirm(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.inquiryService.editInquiryType(this.title, this.dropdownValue.name == undefined ? this.dropdownValue : this.dropdownValue.name, this.$route.params.id).then((res) => {
                        console.warn(res);
                        this.$router.push({ name: 'InquiryType' });
                    });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
    },
};
</script>

<style scoped>
.img-info {
    font-size: 11px;
    font-weight: 400;
    color: red;
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
.ql-editor {
    height: 200px;
}
</style>
