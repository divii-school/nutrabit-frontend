import axios from 'axios';
export default class DfcuserService {
    async getDfcList() {
        return await axios
            .post(`/dfc-admin/dfc`, {
                code: localStorage.getItem('refcode')
            })
            .then((res) => res.data.data);
    }
    async getDocumentList(titl, typ, sdt) {
        return await axios
            .post(`/dfc-admin/user/documents`, {
                userId: localStorage.getItem('dfc_Id'),
                title: titl,
                docType: typ,
                startDate: sdt
            })
            .then((res) => res.data.data.documents);
    }
    async personalInfo() {
        return await axios.post(`/dfc-admin/user/view-personal-info`, { id: localStorage.getItem('dfc_Id') }).then((res) => res.data.data.details);
    }
    async downloadfile(docid) {
        return await axios({
            url: `/dfc-admin/user/download-doc`,
            method: 'POST',
            responseType: 'blob', // important
            data: {
                userId:localStorage.getItem('dfc_Id'),
                docId: docid,
            }
        }).then((res) => res);
    }

}