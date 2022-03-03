import axios from 'axios';
export default class NoticeService {
    async getNoticeList(titl, stat, sdate, edate) {
        return await axios
            .post(`/admin/notice`, {
                title: titl,
                status: stat,
                startDate: sdate,
                endDate: edate,
            })
            .then((res) => res.data.data.notice);
    }
    async addNotice(titl, desc, stat) {
        return await axios
            .post(`/admin/notice/add`, {
                title: titl,
                description: desc,
                status: stat,
            })
            .then((res) => res);
    }
    async viewNotice(ids) {
        return await axios
            .post(`/admin/notice/id`, {
                id: ids,
            })
            .then((res) => res.data.data[0]);
    }
    async editNotice(titl, desc, ids,stat) {
        return await axios
            .put(`/admin/notice/edit`, {
                title: titl,
                description: desc,
                id: ids,
                status:stat
            })
            .then((res) => res);
    }
}
