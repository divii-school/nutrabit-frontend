import axios from 'axios';
export default class FaqService {
    async getFaqList(searchData,status,startDate,endDate,sortBy,sortOrder) {
        return await axios
            .post(`/admin/faq`, {
                // title: title,
               
                searchData: searchData,
                status: status,
                startDate: startDate,
                endDate: endDate,
                sortBy: sortBy,
                sortOrder: sortOrder,
                // this.status,this.searchData,this.startDate,this.endDate,this.sortBy,this.sortOrder
                // link: link,
                // status: status,
                // createdDate: createdDate,
                // sortBy: 'id',
                // sortOrder: 'desc',
            })
            .then((res) => res);
    }

    async getFaqCategoryDropdown() {
        return await axios.post(`/admin/faq_category`, {}).then((res) => res.data.data.faqCategory);
    }
    async viewFaq(ids) {
        return await axios.post(`/admin/faq/id`, { id: ids }).then((res) => res);
    }
    async updateBanner(formdata) {
        return await axios.put(`/admin/banner/edit`, formdata).then((res) => res);
    }
}
