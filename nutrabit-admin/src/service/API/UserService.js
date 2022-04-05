import axios from 'axios';
export default class UserService {
    // async getUserList(name, email, mobile, date1, date2) {
    //     return await axios.post(`/user`, { status: 'active', name: name, email: email, mobile: mobile, startDate: date1, endDate: date2 }).then((res) => res.data.data.users);
    // }
    async getIndividualUserList(account_type,status,page,limit,name,id,email,startDate,endDate,sortBy,sortOrder) {
        return await axios.post(`/admin/user`, {account_type: 'personal_member',status:'active',page:page,limit:'10',name:name,id:id,email:email,startDate:startDate,endDate:endDate,sortBy:sortBy,sortOrder:sortOrder}).then((res) => res.data.data.users);
    }
    async getBusinessUserList(account_type,status,page,limit,username,id,email,business_number,business_name,startDate,endDate,sortBy,sortOrder) {
        return await axios.post(`/admin/user`, {account_type: 'business_member',status:'active',page:page,limit:'10',username:username,id:id,email:email,business_number:business_number,business_name:business_name,startDate:startDate,endDate:endDate,sortBy:sortBy,sortOrder:sortOrder}).then((res) => res.data.data.users);
    }
    async getUserListsingle(startdate) {
        return await axios.post(`/user`, { status: 'active', startDate: startdate }).then((res) => res.data.data.users);
    }
    async addUser(name, mobile, email, gender, pass, confirm_pass) {
        return await axios.post(`/user/add`, { name: name, mobile: mobile, email: email, gender: gender, password: pass, confirm_password: confirm_pass }).then((res) => res.data.data[0]);
    }
    async updateUser(name, mobile, email, gender, id) {
        return await axios.put(`/user/edit`, { name: name, mobile: mobile, email: email, gender: gender, id: id }).then((res) => res);
    }
    // async deleteUser(id) {
    //     return await axios.delete(`/user/delete`, { deleteIdArray: id }).then((res) => res);
    // }
    // async viewUser(ids) {
    //     return await axios.post(`/user/view/id`, { id: ids }).then((res) => res);
    // }
    async viewIndividualUser(ids) {
        return await axios.post(`/admin/user/view/id`, { id: ids }).then((res) => res);
    }
    async updateIndividualUser(id,name, mobile, address) {
        return await axios.put(`/admin/user/personal_member/edit`, {id: id ,name: name, mobile: mobile, address:address }).then((res) => res);
    }
    async viewBusinessUser(ids) {
        return await axios.post(`/admin/user/view/id`, { id: ids }).then((res) => res);
    }
    async updateBusinessUser(id,name,mobile, email, address, business_name, department, person_in_charge) {
        return await axios.put(`/admin/user/business_member/edit`, {id: id ,name:name,mobile:mobile,email:email,address:address,business_name: business_name,department:department,person_in_charge: person_in_charge }).then((res) => res);
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