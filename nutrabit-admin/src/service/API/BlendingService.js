import axios from 'axios';
export default class BlendingService {
    async getBlendingList(name_ko,category_id) {
        return await axios
            .post(`/admin/blending`, {
                // title: title,
                name: name_ko,
                category_id: category_id,
               
               
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
            .then((res) => res.data.data.blendingData);
    } 
    async getBlendingCategoryDropdown() {
        return await axios.get(`/admin/product_category/category2Dropdown/`, {}).then((res) => res.data.data.productCategory);
    }

    async getBlendingRawMainDropdown() {
        return await axios.get(`/admin/product_raw_material/rawMaterialDropdown/`, {}).then((res) => res.data.data.rawMaterials);
    }

    async getBlendingPillDropdown() {
        return await axios.get(`/admin/pill/pillDropdown/`, {}).then((res) => res.data.data.pills);
    }
    async viewBlending(ids) {
        return await axios.post(`/admin/blending/view`, { id: ids }).then((res) => res);
    }
    async updateBlending(formdata) {
        return await axios.put(`/admin/blending/edit`, formdata).then((res) => res);
    }
}