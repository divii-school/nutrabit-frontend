//import 
import axios from 'axios';

// variables
// var token = localStorage.getItem('token');

export default class CommonService {

  // API Functions
  async getLogin(loginId, loginPw) {
    return await axios.post(`/auth/login`,{login_id: loginId, password: loginPw,}).then((res) => res).catch((err) => err);
  }
 
}