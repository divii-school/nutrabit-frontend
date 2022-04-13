import axios from 'axios';
export default class UpdateRawService {
    
    async viewRaw(ids) {
        return await axios.post(`/admin/product_raw_material/id`, { id: ids }).then((res) => res);
    }
    async updateRaw(formdata) {
        return await axios.put(`/admin/product_raw_material/edit`, formdata).then((res) => res);
    }
    async getRawCategoryDropdown() {
        return await axios.get(`/admin/product_category/category2Dropdown/`, {}).then((res) => res.data.data.productCategory);
    }

}