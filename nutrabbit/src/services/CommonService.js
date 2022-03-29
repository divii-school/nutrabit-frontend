//import 
import axios from 'axios';

// variables
// var token = localStorage.getItem('token');

export default class CommonService {

  // API Functions
  async getLogin(loginId, loginPw) {
    return await axios.post(`/auth/login`, { login_id: loginId, password: loginPw, }).then((res) => res).catch((err) => err);
  }
  // Individuals signup
  async individalRegistration(name, username, password, email, phoneNumber, address, checkName) {
    return await axios.post(`/user/individual_registration`, {
      name: name,
      username: username,
      password: password,
      email: email,
      mobile: phoneNumber,
      address: address,
      distribution_medium: checkName,
    })
      .then((res) => res)
      .catch((err) => err)
  }

  // send otp

  async sendOTP(email) {
    return await axios.post(`/user/send_otp`, { email })
      .then((res) => res)
      .catch((err) => err)
  }

  // User find id

  async userFindId(email) {
    return await axios.post(`/user/find_id`, { email })
      .then((res) => res)
      .catch((err) => err)
  }
}