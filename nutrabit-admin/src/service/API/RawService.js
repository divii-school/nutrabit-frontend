import axios from 'axios';
export default class RawService {
    // async getUserList(name, email, mobile, date1, date2) {
    //     return await axios.post(`/user`, { status: 'active', name: name, email: email, mobile: mobile, startDate: date1, endDate: date2 }).then((res) => res.data.data.users);
    // }
   
    async getRawList(id,material_name_ko,category_id,searchdate,status,endDate,page,limit,sortBy,sortOrder,to_date) {
        return await axios.post(`/admin/product_raw_material/`, {id:id,searchData:material_name_ko,category_id:category_id,from_date:searchdate,status:status,endDate:endDate,page:page,limit:limit,sortBy:sortBy,sortOrder:sortOrder,to_date:to_date}).then((res) => res.data.data.productRawMaterialData);
    }
    async viewRaw(ids) {
        return await axios.post(`/admin/product_raw_material/id`, { id: ids }).then((res) => res);
    }
    async updateRaw(id,category_id, sub_category_id, material_name_ko, material_name_en,standard_ko,standard_en,material_description_ko,material_description_en,material_function_ko,material_function_en,material_prequotion_ko,material_prequotion_en,material_extra_info_ko,material_extra_info_en,daily_intake_amount_ko,daily_intake_amount_en,tag_ko,tag_en,status) {
        return await axios.put(`/admin/product_raw_material/edit`, {id: id ,category_id:category_id, sub_category_id:sub_category_id, material_name_ko:material_name_ko, material_name_en:material_name_en,standard_ko:standard_ko,standard_en:standard_en,material_description_ko:material_description_ko,material_description_en:material_description_en,material_function_ko:material_function_ko,material_function_en:material_function_en,material_prequotion_ko:material_prequotion_ko,material_prequotion_en:material_prequotion_en,material_extra_info_ko:material_extra_info_ko,material_extra_info_en:material_extra_info_en,daily_intake_amount_ko:daily_intake_amount_ko,daily_intake_amount_en:daily_intake_amount_en,tag_ko:tag_ko,tag_en:tag_en,status }).then((res) => res);
    }
    async getRawCategoryDropdown() {
        return await axios.get(`/admin/product_category/category2Dropdown`, {}).then((res) => res.data.data.productCategory);
    }

    async viewBusinessUser(ids) {
        return await axios.post(`/admin/user/view/id`, { id: ids }).then((res) => res);
    }
    async updateBusinessUser(id,business_number,business_name,department, person_in_charge, uuid, email, mobile, address) {
        return await axios.put(`/admin/user/edit`, {id: id ,business_number:business_number,business_name:business_name,department:department,person_in_charge:person_in_charge,uuid: uuid,email:email,mobile:mobile,address:address,account_type: 'business_member' }).then((res) => res);
    }
    async deleteIndividualUser(id) {
        return await axios.delete(`/admin/user/delete`, { deleteIdArray: id }).then((res) => res);
    }

    async downloadExcel(name, mobile, email, startdate, enddate, idary) {
        // http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1/admin/user//generate-excel/?status=active&page=1&limit=20&name=Elinasn
        return await axios({
            url: `/user//generate-excel/?status=active&page=&limit=&name=${name}&mobile=${mobile}&email=${email}&startDate=${startdate == null ? '' : startdate}&&endDate=${enddate == null ? '' : enddate}&idArray=${idary}`,
            method: 'GET',
            responseType: 'blob', // important
        }).then((res) => res);
    }
}
