import axios from 'axios';
export default class CardnewsService {
    async getCardnewsList(titl,written) {
        return await axios
            .post(`/admin/cardNews`, {
                title: titl,
                writtenBy:written
            })
            .then((res) => res.data.data.cardNewss);
    }
    async addCardnews(titl, desc,written,stat) {
        return await axios
            .post(`/admin/cardNews/add`, {
                title: titl,
                description: desc,
                writtenBy:written,
                status:stat
            })
            .then((res) => res);
    }
    async viewCardnews(ids) {
        return await axios
            .post(`/admin/cardNews/id`, {
                id: ids,
            })
            .then((res) => res.data.data[0]);
    }
    async editCardnews(titl, stat, desc, ids,written) {
        return await axios
            .put(`/admin/cardNews/edit`, {
                title: titl,
                status: stat,
                description: desc,
                id: ids,
                writtenBy:written
            })
            .then((res) => res);
    }

}
