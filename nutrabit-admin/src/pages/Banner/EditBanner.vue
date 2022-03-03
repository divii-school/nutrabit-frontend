<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" label="Go Back" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div>
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>Correction</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="title2">Title</label>
                        <InputText type="text" placeholder="Title" :modelValue="title" id="title2" v-model="title"></InputText>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="subtitle2">Subtitle</label>
                        <InputText type="text" placeholder="Subtitle" :modelValue="subtitle" id="subtitle2" v-model="subtitle"></InputText>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="state2">state</label>
                        <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" :placeholder="dropdownValue" />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="title2">Link</label>
                        <InputText type="text" :modelValue="link" placeholder="link" id="title2" v-model="link"></InputText>
                    </div>
                </div>
                <div class="p-grid p-formgrid">
                    <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                        <label for="state2">Type</label>
                        <Dropdown v-model="dropdownValueType" :options="dropdownValueTypes" optionLabel="name" :placeholder="dropdownValueType" />
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                        <label for="subtitle2"
                            >Image
                            <!-- <span class="img-info">(File size must be at least 500*900px) </span> -->
                        </label>
                        <div class="custom-select">
                            <span v-if="!fileName">Select File</span>
                            <span v-else>{{ fileName }}</span>
                            <input type="file" class="select-file" v-on:change="onFileChange" />
                            <Button label="Select File" class="SelectBtn" />
                        </div>
                    </div>
                    <div class="p-field p-col-12 p-md-3" style="display: block; text-align: center">
                        <div style="color: gray; font-size: 13px; padding-bottom: 10px">
                            <span>(Acceptable file types "jpg", "png", "jpeg", "gif")</span>
                        </div>

                        <img :src="'http://dvcon-admin-nodejs.dvconsulting.org:4545' + fileName1" :alt="fileName1" class="product-image" />
                    </div>
                </div>
                <div class="p-d-flex p-jc-end">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button @click="cancel" icon="pi pi-times" label="Cancel" class="w-auto p-mr-2"></Button>
                    <Button ref="popup" @click="confirm($event)" label="confirm" icon="pi pi-check" class="p-mr-2"></Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';

import BannerService from '../../service/API/BannerService';
export default {
    name: 'EditBanner',
    data() {
        return {
            dropdownValues: [{ name: 'active' }, { name: 'inactive' }],
            dropdownValueTypes: [{ name: 'main_banner' }, { name: 'banner_top' }, { name: 'banner_bottom' }],
            dropdownValue: null,
            dropdownValueType: null,
            title: null,
            subtitle: null,
            link: null,
            file: null,
            file1: null,
            image: '',
            fileName1: '',
            formData: new FormData(),
        };
    },
    created() {
        this.bannerService = new BannerService();
    },
    mounted() {
        this.bannerService
            .viewBanner(this.$route.params.id)
            .then((res) => {
                this.title = res.data.data[0].title;
                this.subtitle = res.data.data[0].subTitle;
                this.link = res.data.data[0].link;
                this.dropdownValueType = res.data.data[0].bannerPostion;
                this.dropdownValue = res.data.data[0].status;
                this.fileName1 = res.data.data[0].bannerImage;
                console.log(res.data.data[0].bannerImage);
            })
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.formData.append('image', files[0]);
            this.file1 = files[0];
            this.file = files[0];
            this.fileName1 = this.file.name;
            this.fileName = this.file.name;
            console.log(this.fileName1);
            // var output = document.getElementById('output');
            // output.src = URL.createObjectURL(e.target.files[0]);
            // output.onload = function () {
            //     URL.revokeObjectURL(output.src); // free memory
            // };
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
                    console.log(this.formData);
                    this.formData.append('id', this.$route.params.id);
                    this.formData.append('title', this.title);
                    this.formData.append('subtitle', this.subtitle);
                    this.formData.append('link', this.link);
                    this.formData.append('status', 'active');

                    // this.formData.append('status', this.dropdownValue?.name);
                    this.formData.append('type', 'banner_top');

                    // console.log(this.formData);
                    // return axios
                    //     .put('banner/edit', this.formData)
                    //     .then((res) => {
                    //         console.log(res);
                    //         alert('Banner Successfully Added');
                    //         this.$router.push({ name: 'BannerManagement' });
                    //     })
                    //     .catch((err) => {
                    //         console.log(err);
                    //        
                    //     });

                    this.bannerService
                        .updateBanner(this.formData)
                        .then((res) => {
                            console.warn(res);
                            this.$router.push({ name: 'BannerManagement' });
                        })
                        .catch((res) => alert(res));

                    // this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
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
.p-fluid .p-button {
    width: auto;
}
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
.product-image {
    width: 70px;
    height: 70px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
</style>
