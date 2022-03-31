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

  //API business function

  // API Functions
  // async getBusinessData(userId) {
  //   return await axios.post(`/profile/business_information`,
  //     {
  //       userID: userId,
  //     }).then((res) => res).catch((err) => err);
  // }

  // async updateBusinessInfo(userID, business_number, business_name, department, contactPerson, password, confirmPassword, phoneNumber, address) {
  //   return await axios.post(`/profile/personal_information/update`, {
  //     userID: userID,
  //     business_number: business_number,
  //     business_name:business_name,
  //     department:department,
  //     name: contactPerson,
  //     password: password,
  //     confirm_password:confirmPassword,
  //     mobile: phoneNumber,
  //     address: address,  
  //   }).then((res) => res);
  // }

}