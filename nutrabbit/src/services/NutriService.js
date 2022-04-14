//import 
import axios from 'axios';

// variables
var token = localStorage.getItem('token');

export default class NutriService {

  // API Functions
  async getNutriService() {
    return await axios.post(`/nutriBlending`,
      {
        lang:"KO",
      }).then((res) => res).catch((err) => err);
  }
  
}