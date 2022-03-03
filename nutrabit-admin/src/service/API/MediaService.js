import axios from 'axios';
export default class MediaService {
    async getMediaPressList(titl, stat, sdate, edate) {
        return await axios
            .post(`/admin/mediaPress`, {
                title: titl,
                status: stat,
                startDate: sdate,
                endDate: edate,
                // sortBy: 'id',
                // sortOrder: 'desc',
            })
            .then((res) => res.data.data.mediaPresss);
    }
    async viewMediaPress(ids) {
        return await axios.post(`/admin/mediaPress/id`, { id: ids }).then((res) => res.data.data[0]);
    }
   
}
