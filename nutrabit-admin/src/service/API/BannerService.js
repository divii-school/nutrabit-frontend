import axios from 'axios';
export default class BannerService {
    async getBannerList(typ, stat, sdate, edate) {
        return await axios
            .post(`/admin/banner`, {
                type: typ,
                status: stat,
                startDate: sdate,
                endDate: edate,
                // sortBy: 'id',
                // sortOrder: 'desc',
            })
            .then((res) => res.data.data.banners);
    }
    async viewBanner(ids) {
        return await axios.post(`/admin/banner/id`, { id: ids }).then((res) => res);
    }
    async updateBanner(formdata) {
        return await axios.put(`/admin/banner/edit`, formdata).then((res) => res);
    }
}
