<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>1:1 문의</strong></h4>
                 <div class="p-field p-grid">
                     
                    <label
                        for="business_name"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >신청자명 / 업체명:</label>
                    
                    <div class="p-col-12 p-md-10" style="display:flex;justify-content: space-between;">
                        <p v-if="business_name != null  ">{{ business_name }}
                            
                        </p>
                         <p v-else>{{ applicant_name }}
                            
                        </p>

                         <p >{{dateformat(createdDate)}}</p>
                       
                    </div>

                </div>

                 <div class="p-field p-grid">
                    <label
                        for="title"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >문의 제목:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ title_ko }}</p>
                    </div>
                </div>

                  <div class="p-field p-grid">
                    <label
                        for="title"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >문의:</label>
                    <div class="p-col-12 p-md-10">
                        
                        <p>{{ description }}</p>
                    </div>
                </div>

                 <div class="p-field p-grid">
                    <label
                        for="title"
                        class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                    >첨부 파일:</label>
                    <div class="p-col-12 p-md-10" v-for="(attachment, img) in attachment" :key="img">
                        
                       <div class="text-red" v-show="render4">{{ $t('validation.invalidFile') }}</div>
                            <img :src="'https://api-nutrabbit-dev.dvconsulting.org/' + attachment" alt="이미지를 사용할 수 없음" class="product-image" />
                            <!-- <img :src="'https://back.nutri33.co.kr/' + attachment" alt="이미지를 사용할 수 없음" class="product-image" /> -->
                    </div>
                </div>


                
                
                
                
                  
            </div>
        </div>
    </div>
    <div class="p-grid">
         <div class="p-col-12">
            <div class="card p-fluid" style="height:320px;">
                <div class="p-grid p-formgrid p-mb-3">
                    <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                        <label for="title2" style="font-size: x-large;font-family: sans-serif;">댓글</label>
                        <div class="textbox">
                            <Quill-Editor style="height: 100px;" placeholder="회신하다" id="title2" v-model:content="replyText" ref="myQuillEditor" :options="editorOption" contentType="html" />
                        </div>
                        <!-- <Textarea class="" type="text" placeholder="회신하다" id="title2" v-model="replyText" style="height:100px;"></Textarea> -->
                        <div class="text-red">{{}}</div>
                    </div>
                </div>

                <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
                            
                            <br>
                            <!-- <Dropdown v-model="dropdownValue" modelValue="dropdownValues[0].name" :options="dropdownValues" optionLabel="code" :placeholder="status" /> -->
                            <div >
                                <input type="radio" id="Korean" name="replyLang" value="ko" v-model="replyLang" v-bind:checked="checked">
                                <label for="Korean">Riply In Korean</label>

                                <input type="radio" id="English" value="en" name="replyLang" v-model="replyLang">
                                <label for="English">Riply In English</label>

                                
                            </div>
                            <!-- <div class="text-red">{{ error.state }}</div> -->
                        </div>
                    </div>
                <div class="p-d-flex p-jc-end" style="float: left">
                    <!-- <Button @click="del($route.params.id)" label="delete" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"><i class="pi pi-trash p-mr-2"></i> {{ $t('button.delete') }}</Button> -->
                    <Button label="회신하다" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="replayans"></Button>
                    <Button :label="$t('button.back')" icon="pi pi-replay" iconPos="left"
            class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                </div>
            </div>
         </div>
    </div>
</template>
<script>
import InquiryService from '../../service/API/InquiryService';
import moment from 'moment';
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
            title_ko: '',
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
            applicant_name:'',
            id: '',
            replyText: '',
            replyLang:'',
            createdDate:'',
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
         dateformat(value) {
            if (value) {
                return moment(String(value)).locale('ko').format('ll - LTS')
            }
        },
        replayans() {

           
            this.inquiryService.ReplyInquiry(this.$route.params.id,  this.replyText, this.replyLang).then((res) => {
                console.warn(res);
                console.log(this.replyLang);
                alert('업데이트 완료')
                this.$router.push({ name: 'Inquiry' });
            });
        },
    },
    mounted() {
        //console.log(this.$route.params.id)
        this.inquiryService.viewInquiry(this.$route.params.id).then((res) => {
            //this.type = res.data.data[0].inqueryTypeTitle;
            this.description = res.data.data[0].description;
            this.createdDate = res.data.data[0].createdDate;
            this.status = res.data.data[0].status;
            this.business_name = res.data.data[0].business_name;
            this.applicant_name = res.data.data[0].name;
            this.title_ko = res.data.data[0].title_ko;
            this.type_id = res.data.data[0].type_id;
            this.repliedBy = res.data.data[0].repliedBy;
            this.type_title = res.data.data[0].type_title;
            this.attachment = res.data.data[0].attachmentURL.toString().split(',');
            console.log(this.applicant_name);
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
/* .card {
    height: 350px;
} */
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
@media screen and (max-width: 768px) {
  
    .textbox{
        width: 100%;
    }
}
</style>
