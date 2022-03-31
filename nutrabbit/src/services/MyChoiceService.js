//import 
import axios from 'axios';

// variables
var token = localStorage.getItem('token');

export default class MyChoiceService {

  // API Functions
  async getCategories() {
    return await axios.post(`/product/parent_category_list`,{lang: 'KO'}).then((res) => res.data).catch((err) => err);
  }
 
}