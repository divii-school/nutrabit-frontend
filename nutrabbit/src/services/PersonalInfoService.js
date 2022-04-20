//import 
import axios from 'axios';

// variables
var token = localStorage.getItem('token');

export default class PersonalInfoService {

  // API Functions
  async getPersonalData(userId) {
    return await axios.post(`/profile/personal_information`,
      {
        userID: userId,
      }).then((res) => res).catch((err) => err);
  }

  async updatePersonalInfo(userID, name, password, confirmPassword, email, phoneNumber, address, checkboxName) {
    return await axios.post(`/profile/personal_information/update`, {
      userID: userID,
      name: name,
      password:password,
      confirm_password:confirmPassword,
      email:email,
      mobile: phoneNumber,
      address: address,
      distribution_medium: checkboxName,   
    }).then((res) => res);
  }

  async businessWithdraw(reason) {
    return await axios.post(`/profile/withdrawal`,
      {
        reason:reason,
      }).then((res) => res).catch((err) => err);
  }
  
}