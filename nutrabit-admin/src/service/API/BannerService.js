import axios from 'axios';
export default class BannerService {
    async getBannerList(status,searchData,startDate,endDate,sortBy,sortOrder) {
        return await axios
            .post(`/admin/banner`, {
                // title: title,
                status: status,
                searchData: searchData,
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
    async viewBanner(ids) {
        return await axios.post(`/admin/banner/id`, { id: ids }).then((res) => res);
    }
    async updateBanner(formdata) {
        return await axios.put(`/admin/banner/edit`, formdata).then((res) => res);
    }
}
