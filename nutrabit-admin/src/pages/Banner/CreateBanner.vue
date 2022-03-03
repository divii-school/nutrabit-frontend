<template>
    <div class="p-col-12 p-pb-0">
        <Button
            @click="$router.go(-1)"
            label="Go Back"
            icon="pi pi-angle-left"
            class="p-button-text p-mr-2 p-mb-2"
        />
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
                            <InputText type="text" placeholder="Title" id="title2" v-model="title"></InputText>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="subtitle2">Subtitle</label>
                            <InputText
                                type="text"
                                placeholder="Subtitle"
                                id="subtitle2"
                                v-model="subtitle"
                            ></InputText>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="state2">state</label>
                            <Dropdown
                                v-model="dropdownValue"
                                :options="dropdownValues"
                                optionLabel="name"
                                placeholder="Select"
                            />
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">Link</label>
                            <InputText type="text" placeholder="link" id="title2" v-model="link"></InputText>
                        </div>
                    </div>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="state2">Type</label>
                            <Dropdown
                                v-model="dropdownValueType"
                                :options="dropdownValueTypes"
                                optionLabel="name"
                                placeholder="Select"
                            />
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                Image
                                <span class="img-info">(File size must be at least 500*900px)</span>
                            </label>
                            <div class="custom-select">
                                <span v-if="!fileName">Select File</span>
                                <span v-else>{{ fileName }}</span>
                                <input type="file" class="select-file" v-on:change="onFileChange" />
                                <Button label="Select File" class="SelectBtn" />
                            </div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button
                        label="reset"
                        icon="pi pi-replay"
                        iconPos="left"
                        class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"
                        v-on:click="reinitialize"
                    ></Button>
                    <Button
                        label="confirm"
                        icon="pi pi-save"
                        iconPos="left"
                        class="p-button p-button-sm p-mr-2 p-mb-2"
                        @click="addBanner"
                    ></Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
// import validateCreatebanner from '../../validations/banner/validateCreateBanner';
export default {
    name: 'CreateBanner',
    // props: ['dog', 'image'],
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
            image: '',
            fileName: '',
            fileExtension: '',
            formData: new FormData(),
            error: {}
        };
    },
    methods: {
        reinitialize() {
            (this.dropdownValue = null), (this.dropdownValueType = null), (this.title = null), (this.subtitle = null), (this.link = null), (this.fileName = null), (this.file = {});
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.formData.append('image', files[0]);
            this.file = files[0];
            this.fileName = this.file.name;
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
        },
        addBanner() {
            console.log(this.file);
            this.formData.append('title', this.title);
            this.formData.append('subtitle', this.subtitle);
            this.formData.append('link', this.link);
            this.formData.append('status', this.dropdownValue?.name);
            this.formData.append('type', this.dropdownValueType?.name);
            console.log(this.formData);
            return axios
                .post('/banner/add', this.formData)
                .then((res) => {
                    this.$router.push({ name: 'User' });
                    console.log(res);
                    alert('Banner Successfully Added');
                    this.$router.push({ name: 'BannerManagement' });
                })
                .catch((err) => {
                    console.log(err);
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
</style>
