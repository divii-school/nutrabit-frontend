import axios from 'axios';
export default class InquiryService {
    async getInquirytypeList() {
        return await axios.post(`/inquery_type`).then((res) => res.data.data.inqueryType);
    }
    async getInquiryList(stat, contentype, content, sdate, edate) {
        return await axios
            .post(`/inquery`, {
                status: stat,
                typeId: contentype,
                searchData: content,
                from_date: sdate,
                to_date: edate,
            })
            .then((res) => res.data.data.inquery);
    }
    async getInquiryType() {
        return await axios.post(`inquery/typeList`).then((res) => res.data.data);
    }
    async addInquiryType(titl) {
        return await axios
            .post(`/inquery_type/add`, {
                title: titl,
                status: 'active',
            })
            .then((res) => res);
    }
    async viewInquiryType(ids) {
        return await axios
            .post(`/inquery_type/id`, {
                id: ids,
            })
            .then((res) => res.data.data[0]);
    }
    async viewInquiry(ids) {
        return await axios
            .post(`/inquery/id`, {
                id: ids,
            })
            .then((res) => res.data.data[0]);
    }
    async editInquiryType(titl, stat, ids) {
        return await axios
            .put(`/inquery_type/edit`, {
                title: titl,
                status: stat,
                id: ids,
            })
            .then((res) => res);
    }
    async editInquiry(txt, ids) {
        return await axios
            .put(`/inquery/edit`, {
                replyText: txt,
                id: ids,
            })
            .then((res) => res);
    }
}
