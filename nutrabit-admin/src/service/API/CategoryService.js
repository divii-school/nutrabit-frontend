import axios from 'axios';
export default class CategoryService {
    async getCategoryList(status,searchData,startDate,endDate,sortBy,sortOrder) {
        return await axios
            .post(`/admin/product_category`, {
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
            .then((res) => res.data.data.productCategory);
    }

    async getCategorydropdown() {
        return await axios
            .get(`/admin/product_raw_material/categoryDropdown`, {
                // title: title,
                // status: status,
                // searchData: searchData,
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
            .then((res) => res.data.data.rawMaterials);
    }
    async viewCategory(ids) {
        return await axios.post(`/admin/product_category/id`, { id: ids }).then((res) => res);
    }
    async updateCategory(formdata) {
        return await axios.put(`/admin/EditCategory/edit`, formdata).then((res) => res);
    }
}
