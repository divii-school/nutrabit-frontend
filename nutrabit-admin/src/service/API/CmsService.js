import axios from 'axios';
export default class CmsService {
    async getCmsList(titl) {
        return await axios
            .post(`/admin/cms`, {
                searchData: titl,
                sortBy: 'id',
                sortOrder: 'desc',
            })
            .then((res) => res.data.data.cms);
    }
    async addCms(titl, desc, ckey) {
        return await axios
            .post(`/admin/cms/add`, {
                title: titl,
                description: desc,
                cmsKey: ckey,
            })
            .then((res) => res);
    }
    async viewCms(ids) {
        return await axios
            .post(`/admin/cms/id`, {
                id: ids,
            })
            .then((res) => res.data.data[0]);
    }
    async editCms(titl, desc, ids) {
        return await axios
            .put(`/admin/cms/edit`, {
                title: titl,
                description: desc,
                id: ids,
            })
            .then((res) => res);
    }
}
