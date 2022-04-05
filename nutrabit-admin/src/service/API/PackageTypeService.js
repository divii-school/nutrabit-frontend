import axios from 'axios';
export default class PackageTypeService {
    // async getUserList(name, email, mobile, date1, date2) {
    //     return await axios.post(`/user`, { status: 'active', name: name, email: email, mobile: mobile, startDate: date1, endDate: date2 }).then((res) => res.data.data.users);
    // }
    async getPackageList(id,searchData,image_path,status,startDate,endDate,sortBy,sortOrder) {
        return await axios.post(`/admin/package/`, {id:id,searchData:searchData,image_path:image_path,status:'active',startDate:startDate,endDate:endDate,sortBy:sortBy,sortOrder:sortOrder}).then((res) => res.data.data.packageData);
    }
    async viewPackageType(ids) {
        return await axios.post(`/admin/package/id`, { id: ids }).then((res) => res);
    }
    async updatePackageType(id,name_ko, name_en, image,description_ko,description_en) {
        return await axios.put(`/admin/package/edit`, {id: id ,name_ko:name_ko, name_en:name_en,image:image,description_ko:description_ko,description_en:description_en}).then((res) => res);
    }
    async deletePackageType(id) {
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
