import axios from 'axios';
export default class FaqService {
    async getFaqList(sdata, stat, sdate, edate) {
        return await axios
            .post(`/admin/faq`, {
                searchData: sdata,
                status: stat,
                sortBy: 'id',
                sortOrder: 'desc',
                startDate: sdate,
                endDate: edate,
            })
            .then((res) => res.data.data.faq);
    }
    async addFaq(titl, desc) {
        return await axios
            .post(`/admin/faq/add`, {
                title: titl,
                description: desc,
            })
            .then((res) => res);
    }
    async viewFaq(ids) {
        return await axios
            .post(`/admin/faq/id`, {
                id: ids,
            })
            .then((res) => res.data.data[0]);
    }
    async editFaq(titl, stat, desc, ids) {
        return await axios
            .put(`/admin/faq/edit`, {
                title: titl,
                status: stat,
                description: desc,
                id: ids,
            })
            .then((res) => res);
    }
}
