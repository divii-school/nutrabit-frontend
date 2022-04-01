//import 
import axios from 'axios';

// variables
var token = localStorage.getItem('token');

export default class MainService {

  // API Functions
  async getSlider() {
    return await axios.post(`/banner`, { lang: 'KO' }).then((res) => res.data).catch((err) => err);
  }

  //getNutriData API Functions
  async getNutriData() {
    return await axios.post(`/nutriBlending`, { lang: 'KO' }).then((res) => res.data).catch((err) => err);
  }
}