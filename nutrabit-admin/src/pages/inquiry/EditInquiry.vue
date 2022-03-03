<template>
    <div class="card p-fluid">
        <h5><b>Change</b></h5>
        <div class="p-field p-grid">
            <label for="name3" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Type</label>
            <div class="p-col-12 p-md-10">{{ type }}</div>
        </div>
        <div class="p-field p-grid">
            <label for="email3" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Contents</label>
            <div class="p-col-12 p-md-10">{{ content }}</div>
        </div>
        <div class="p-field p-grid">
            <label for="name3" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">registration date</label>
            <div class="p-col-12 p-md-10">{{ regDate }}</div>
        </div>
        <div class="p-field p-grid">
            <label for="email3" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">state</label>
            <div class="p-col-12 p-md-10">{{ status }}</div>
        </div>
        <div v-show="render">
            <h6>Answer*</h6>
            <Textarea placeholder="Your answer..." :autoResize="true" rows="3" cols="30" v-model="replay" />
        </div>
        <div class="p-mt-4">
            <Button v-show="render" :label="$t('submission')" icon="pi pi-check" iconPos="left" class="p-button p-mr-2 p-mb-2" @click="replayans"></Button>
            <Button :label="$t('go-back')" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-danger p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
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
            this.inquiryService.editInquiry(this.replay, this.$route.params.id).then((res) => {
                console.warn(res);
                this.$router.push({ name: 'Inquiry' });
            });
        },
    },
    mounted() {
        this.inquiryService.viewInquiry(this.$route.params.id).then((res) => {
            this.type = res.inqueryTypeTitle;
            this.content = res.description;
            this.regDate = res.createdDate;
            this.status = res.status;
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
</style>
