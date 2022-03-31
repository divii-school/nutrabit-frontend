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

  async updatePersonalInfo(userID, name, password, confirmPassword, phoneNumber, address, checkName) {
    return await axios.post(`/profile/personal_information/update`, {
      userID: userID,
      name: name,
      password:password,
      confirm_password:confirmPassword,
      mobile: phoneNumber,
      address: address,
      distribution_medium: checkName,   
    }).then((res) => res);
  }
  
}