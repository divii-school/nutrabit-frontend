import axios from 'axios';
export default class NftService {
    async getNftList(stat,sdate,edate) {
        return await axios
            .post(`/admin/nft`, {
                status: stat,
                startDate: sdate,
                endDate: edate,
            })
            .then((res) => res.data.data.nfts);
    }
    async viewNft(ids) {
        return await axios.post(`/admin/nft/id`, { id: ids }).then((res) => res);
    }

}
