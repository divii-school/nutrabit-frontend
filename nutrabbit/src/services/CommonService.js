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

    // check user id

    async checkUser(uuid) {
      return await axios.post(`/user/check_id`, { uuid })
        .then((res) => res)
        .catch((err) => err)
    }

  // send otp

  async sendOTP(email) {
    return await axios.post(`/user/send_otp`, { email })
      .then((res) => res)
      .catch((err) => err)
  }

  // verify OTP

  async verifyOTP(email, verification_code) {
    return await axios.post(`/user/verify_otp`, { email, verification_code })
      .then((res) => res)
      .catch((err) => err)
  }

  

  // User find id

  async userFindId(email) {
    return await axios.post(`/user/find_id`, { email })
      .then((res) => res)
      .catch((err) => err)
  }

  // forget password verification

  async forgetPassword(email, username) {
    return await axios.post(`/user/find_password`, { email, username })
      .then((res) => res)
      .catch((err) => err)
  }

  // change password

  async ChangePassword(userId, newPassword, confirm_password){
    return await axios.post(`/user/change_password`, {
      userId, 
      newPassword, 
      confirm_password
    })
    .then((res)=> res)
    .catch((err)=> err)
  }
}