<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>1:1 문의</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-6">
                        <strong> <label for="nameuser">신청자명 / 업체명:</label></strong>
                        <p style="float: right">{{ business_name }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-6">
                        <strong><label for="emailuser">문의 제목:</label></strong>
                        <p style="float: right">{{ title }}</p>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-6">
                        <strong><label for="state">문의:</label></strong>
                        <p style="float: right">{{ description }}</p>
                    </div>
                </div>
                <div class="p-grid p-formgrid p-mb-3 browse">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="subtitle2" style="font-weight: bold"> 첨부 파일: </label>
                        <div v-for="(attachment, img) in attachment" :key="img">
                            <div class="text-red" v-show="render4">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'http://api-nutrabbit-dev.dvconsulting.org/' + attachment" :alt="attachment" class="product-image" />
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
    <div class="p-grid">
         <div class="p-col-12">
            <div class="card p-fluid" style="height:250px;">
                <div class="p-grid p-formgrid p-mb-3">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="title2">Reply</label>
                        <Textarea class="" type="text" placeholder="회신하다" id="title2" v-model="replyText" style="height:100px;"></Textarea>
                        <div class="text-red">{{}}</div>
                    </div>
                </div>
                <div class="p-d-flex p-jc-end" style="float: left">
                    <!-- <Button @click="del($route.params.id)" label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"><i class="pi pi-trash p-mr-2"></i> {{ $t('button.delete') }}</Button> -->
                    <Button label="회신하다" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="replayans"></Button>
                </div>
            </div>
         </div>
    </div>
</template>
<script>
import InquiryService from '../../service/API/InquiryService';
export default {
    // name: 'Inquiry',
    data() {
        return {
            render: false,
            replay: '',
            type: '',
            content: '',
            regDate: '',
            status: '',
            calendarValue: null,
            calendarValue2: null,
            business_name: '',
            title: '',
            type_id: '',
            repliedBy: '',
            dropdownValue: null,
            dropdownValues: '',
            statusDropdownValue: null,
            statusDropdownValues: '',
            businessDropdownValues: '',
            businessDropdownValue: null,
            searchData: '',
            type_title: '',
            statusitem: '',
            attachment: '',
            description: '',
            id: '',
            replyText: '',
            dropdownItems: [
                { name: 'Member information related enquries', code: 'Member information related enquries' },
                { name: 'HJCBT mobile app error', code: 'HJCBT mobile app error' },
                { name: 'Medical angel request', code: 'Medical angel request' },
                { name: 'pre-cream report', code: 'pre-cream report' },
                { name: 'payment related inquries', code: 'payment related inquries' },
            ],
            dropdownItem: null,
            state: null,
            states: [
                { name: 'open', code: 'open' },
                { name: 'close', code: 'close' },
            ],
            language: null,
            languages: [
                { name: 'English', code: 'English' },
                { name: 'Hindi', code: 'Hindi' },
                { name: 'Korean', code: 'Korean' },
                { name: 'Japanese', code: 'Japanese' },
            ],
        };
    },
    created() {
        this.inquiryService = new InquiryService();
    },
    methods: {
        replayans() {
            this.inquiryService.ReplyInquiry(this.$route.params.id, this.replyText).then((res) => {
                console.warn(res);
                console.log(this.replyText);
                this.$router.push({ name: 'Inquiry' });
            });
        },
    },
    mounted() {
        //console.log(this.$route.params.id)
        this.inquiryService.viewInquiry(this.$route.params.id).then((res) => {
            //this.type = res.data.data[0].inqueryTypeTitle;
            this.description = res.data.data[0].description;
            this.status = res.data.data[0].status;
            this.business_name = res.data.data[0].business_name;
            this.title = res.data.data[0].title;
            this.type_id = res.data.data[0].type_id;
            this.repliedBy = res.data.data[0].repliedBy;
            this.type_title = res.data.data[0].type_title;
            this.attachment = res.data.data[0].attachmentURL.toString().split(',');

            console.log(res);
            if (res.status === 'closed') {
                this.render = false;
            } else {
                this.render = true;
            }
        });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
.p-button{
    background: #000000;
    border: 1px solid #0A0A0A;
    color: white;
}
.card {
    height: 350px;
}
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
    float: right;
}
</style>
