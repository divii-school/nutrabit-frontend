//import 
import axios from 'axios';

export default class CustomerCenterService {

    // Notice List
    async getNoticeList() {
        return await axios.post(`/notice`, { lang: 'KO', title: '' }).then((res) => res).catch((err) => err);
    }

    // Notice Details
    async getNoticeDetails(noticeId) {
        return await axios.post(`/notice/id`, { lang: 'EN', id: noticeId }).then((res) => res).catch((err) => err);
    }

    // Faq
    async getFAQList() {
        return await axios.post(`/faq`, { lang: 'EN'}).then((res) => res).catch((err) => err);
    }

    // Faq
    async getEnqueryList(inqId) {
        return await axios.post(`/inquery`, { lang: 'EN', userID: inqId}).then((res) => res).catch((err) => err);
    }

    async getEnqueryType() {
        return await axios.get(`/inquery/get_inquery_type`).then((res) => res).catch((err) => err);
    }

}