<template>
    <!-- <div class="p-col-12 p-pb-0">
        
    </div> -->
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>{{ $t('upload-doc.upload_doc_header') }}</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <!-- <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="title2">{{ $t('upload-doc.doc_title') }}</label>
                            <InputText :class="`${error.title ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Banner.list.title')" id="title2" v-model="title"></InputText>
                            <div class="text-red">{{ error.title }}</div>
                        </div> -->

                        <div class="p-col-12 p-mb-2 p-lg-3 p-mb-lg-0 p-field">
                            <label for="subtitle2">
                                {{ $t('upload-doc.upload') }}
                                <span class="img-info" style="color: #17a2b8">(File type: xlsx )</span>
                            </label>
                            <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
                                <span v-if="!fileName">{{$t('button.select_file')}}</span>
                                <span v-else>{{ fileName }}</span>
                                <input  type="file" class="select-file" v-on:change="onFileChange" />
                                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
                            </div>
                            <div class="text-red" v-show="render1">지원하지 않는 파일입니다</div>
                            <div class="text-red">{{ error.file }}</div>
                            <img id="frame" src width="100px" height="100px" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center " style="float:left;" >
              
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button :label="$t('button.save')" icon="pi pi-save" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="confirm($event)"></Button>
               </div>

                <div class="p-d-flex p-jc-end p-ai-center ">
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
                </div>
            
        </form>
    </div>
</template>

<script>
// import validateUploadDoc from '../../validations/doc/uploadDoc';
// import CardnewsService from '../../service/API/CardnewsService';
import axios from 'axios';
export default {
    name: 'CreateDocument',
    data() {
        return {
            render1: false,
            title: '',
            userid: localStorage.getItem('dfc_Id'),
            status: 'active',
            file: '',
            fileName: '',
            fileExtension: '',
            formData: new FormData(),
            error: {},
            
        };
    },
    created() {
        // this.cardnewsService = new CardnewsService();
    },

    methods: {
        // reset() {
        //     this.title = '';
        //     this.fileName = '';
        // },
        onFileChange(e) {
            this.formData.delete('file');
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.file = files[0];
            //jpg,png,hwp,docs,pdf,xls
            var allowedExtensions = /(\.xlsx)$/i;
            if (!allowedExtensions.exec(this.file.name)) {
                this.render1 = true;
                return false;
            } else {
                this.render1 = false;
                this.fileName = this.file.name;
                this.formData.append('file', files[0]);
            }
            this.fileExtension = this.fileName.replace(/^.*\./, '');
            console.log(this.fileName);
        },
        confirm(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: '이대로 진행하시겠습니까?',
                icon: 'pi pi-exclamation-triangle',
                acceptLabel:"네",
                rejectLabel:"아니요",
                accept: () => {
                    // let vcheckData = {
                    //     title: this.title,
                    //     file: this.fileName == '' ? '' : 'something',
                    // };
                   
                    // const { isInvalid, error } = validateUploadDoc(vcheckData);
                    // if (isInvalid) {
                    //     this.error = error;
                    //     console.log(error);
                    // } 
                    // else
                     {
                       
                        console.log(this.formData);
                        return axios.post('/admin/product_raw_material/upload', this.formData).then(() => {
                            this.$router.push({ name: 'RawProduct' });
                        });
                    }
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
        addcardnews() {},
    },
};
</script>

<style scoped>
.quill-invalid {
    border: 1px solid red;
}
.img-info {
    font-size: 11px;
    font-weight: 400;
    color: rgb(48, 48, 48);
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

.p-button{
    background: #000000;
    border: 1px solid #0a0a0a;
    color: white;
}
</style>
