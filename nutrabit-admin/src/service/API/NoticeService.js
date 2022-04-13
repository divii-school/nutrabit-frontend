import axios from 'axios';
export default class NoticeService {
    async getNoticeList(title) {
        return await axios
            .post(`/admin/notice`, {
                // title: title,
                title: title,
                
                // this.status,this.searchData,this.startDate,this.endDate,this.sortBy,this.sortOrder
                // link: link,
                // status: status,
                // createdDate: createdDate,
                // sortBy: 'id',
                // sortOrder: 'desc',
            })
            .then((res) => res);
    }
    async viewnNotice(ids) {
        return await axios.post(`/admin/notice/id`, { id: ids }).then((res) => res);
    }
    async updateBanner(formdata) {
        return await axios.put(`/admin/banner/edit`, formdata).then((res) => res);
    }
}
