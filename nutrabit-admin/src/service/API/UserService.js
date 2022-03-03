import axios from 'axios';

export default class UserService {
    async getUserList(name, email, mobile, date1, date2) {
        return await axios.post(`/user`, { status: 'active', name: name, email: email, mobile: mobile, startDate: date1, endDate: date2 }).then((res) => res.data.data.users);
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

    async deleteUser(id) {
        return await axios.delete(`/user/delete`, { deleteIdArray: id }).then((res) => res);
    }
    async viewUser(ids) {
        return await axios.post(`/user/view/id`, { id: ids }).then((res) => res);
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
