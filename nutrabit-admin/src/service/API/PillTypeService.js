import axios from 'axios';
export default class PillTypeService {
    async getPillTypeList(name_ko,pillImage) {
        return await axios
            .post(`/admin/pill`, {
                // title: title,
                name_ko: name_ko,
                pillImage: pillImage,
                // startDate: startDate,
                // endDate: endDate,
                // sortBy: sortBy,
                // sortOrder: sortOrder,
                // this.status,this.searchData,this.startDate,this.endDate,this.sortBy,this.sortOrder
                // link: link,
                // status: status,
                // createdDate: createdDate,
                // sortBy: 'id',
                // sortOrder: 'desc',
            })
            .then((res) => res.data.data.pills);
    }
    async viewPilltype(ids) {
        return await axios.post(`/admin/pill/view/id`, { id: ids }).then((res) => res);
    }
    async updatePilltype(formdata) {
        return await axios.put(`/admin/pill/edit`, formdata).then((res) => res);
    }
}