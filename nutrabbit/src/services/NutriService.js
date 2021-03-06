//import 
import axios from 'axios';

// variables
var token = localStorage.getItem('token');

export default class NutriService {

  // API Functions
  async getNutriService() {
    return await axios.post(`/nutriBlending`,
      {
        lang: localStorage.getItem('selectedLang')
      }).then((res) => res).catch((err) => err);
  }

  async getNutridetails(id) {
    return await axios.post(`/nutriBlending/id`,
      {
        id:id,
        lang: localStorage.getItem('selectedLang')
      }).then((res) => res).catch((err) => err);
  }

  async confirmbutton(id) {
    return await axios.post(`/nutriBlending/get_quote`,{
      id:id,
      lang: localStorage.getItem('selectedLang')
    }).then((res) => res).catch((err) => err);
}
  
}