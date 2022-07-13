import axios from 'axios';
export default class ApplicationmanagementService {
    async getApplicationmanagemenList(name,status,startDate,product,service) {
        return await axios
            .post(`/admin/application`, {
                // title: title,
                
                name: name,
                status_by_admin: status,
                startDate: startDate,
                product: product,
                service: service,
                
                
                // this.status,this.searchData,this.startDate,this.endDate,this.sortBy,this.sortOrder
                // link: link,
                // status: status,
                // createdDate: createdDate,
                // sortBy: 'id',
                // sortOrder: 'desc',
            })
            .then((res) => res.data.data.applicationData);
    }

    // async dropdownproductApplicationmanagemenList() {
    //     return await axios.post(`/admin/application`, { }).then((res) =>  res.data.data.applicationData);
    // }

    // async dropdownserviceApplicationmanagemenList() {
    //     return await axios.post(`/admin/application`, { }).then((res) =>  res.data.data.applicationData);
    // }

    async optiondetails(type,value) {
        return await axios.post(`/admin/application/options_details`,{ lang: 'KO',option_type:type,option_val:value }).then((res) => res);
    }
    async viewApplicationmanagemenList(ids) {
        return await axios.post(`/admin/application/id`, { id: ids }).then((res) => res);
    }
    async updateApplicationmanagemenList(formdata) {
        return await axios.put(`/admin/application/edit`, formdata).then((res) => res);
    }
}
