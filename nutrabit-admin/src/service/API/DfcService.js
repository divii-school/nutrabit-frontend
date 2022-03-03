import axios from 'axios';
export default class DfcService {
    async getDfcList(ref, sdate, edate) {
        return await axios
            .post(`/admin/dfc`, {
                referralCode: ref,
                startDate: sdate,
                endDate: edate
            })
            .then((res) => res.data.data.dfcs);
    }
    async viewDfc(ids) {
        return await axios.post(`/admin/dfc/id`, { id: ids }).then((res) => res.data.data[0]);
    }
    async updateDfc(ids, name, mob, grad, locate,desgn,addr,remrk) {
        return await axios.put(`/admin/dfc/edit`, {
            id: ids,
            mobile: mob,
            name: name,
            grade: grad,
            location: locate,
            designation: desgn,
            address: addr,
            note: remrk,
           
        }).then((res) => res);
    }
    async downloadExcel() {
        return await axios({
            url: `/admin/dfc/download-excel`,
            method: 'GET',
            responseType: 'blob', // important
        }).then((res) => res);
    }
}