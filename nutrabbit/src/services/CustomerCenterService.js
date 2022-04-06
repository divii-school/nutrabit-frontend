//import 
import axios from 'axios';

export default class CustomerCenterService {

  // Notice List
  async getNoticeList() {
    return await axios.post(`/user/individual_registration`, {
        lang: 'KO',
        title: ''
    })
      .then((res) => res)
      .catch((err) => err)
  }
}