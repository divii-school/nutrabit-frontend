//import 
import axios from 'axios';

// variables
var token = localStorage.getItem('token');

export default class PersonalBusinessService {

  // API Functions
  async getBusinessData(userId) {
    return await axios.post(`/profile/business_information`,
      {
        userID: userId,
      }).then((res) => res).catch((err) => err);
  }

  async updateBusinessInfo(userID, business_number, business_name, department, contactPerson, password, confirmPassword, email, phoneNumber, address, Detailaddress) {
    return await axios.post(`/profile/personal_information/update`, {
      userID: userID,
      business_number: business_number,
      business_name:business_name,
      department:department,
      name: contactPerson,
      password: password,
      confirm_password:confirmPassword,
      email:email,
      mobile: phoneNumber,
      address: address,  
      detail_address: Detailaddress,
    }).then((res) => res);
  }

  async businessWithdraw(reason) {
    return await axios.post(`/profile/withdrawal`,
      {
        reason:reason
      }).then((res) => res).catch((err) => err);
  }
}