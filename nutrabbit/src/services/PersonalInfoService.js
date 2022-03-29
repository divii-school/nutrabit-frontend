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
        // headers: {
        //   token: token,
        // }
      }).then((res) => res.data).catch((err) => err);
  }

}