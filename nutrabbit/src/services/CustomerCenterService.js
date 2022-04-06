//import 
import axios from 'axios';

export default class CustomerCenterService {

    // Notice List
    async getNoticeList() {
        return await axios.post(`/notice`, { lang: 'KO', title: '' }).then((res) => res.data).catch((err) => err);
    }
}