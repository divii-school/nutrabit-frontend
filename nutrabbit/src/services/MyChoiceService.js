//import 
import axios from 'axios';

// variables
var token = localStorage.getItem('token');

export default class MyChoiceService {

  // API Functions
  async getCategories() {
    return await axios.post(`/product/parent_category_list`, { lang: 'KO' }).then((res) => res.data).catch((err) => err);
  }

  //recommended blending API Functions
  async getRecommendedData() {
    return await axios.post(`/blending`, { lang: 'KO' }).then((res) => res.data).catch((err) => err);
  }

  //RawMaterial API Functions
  async getRawMaterial(sub_cat_id) {
    return await axios.post(`/product/raw_material`, { sub_category_id: sub_cat_id, lang: 'KO' }).then((res) => res).catch((err) => err);
  }

  //RawMaterial storage box API Functions
  async rawMaterialStorageBoxAdd(raw_material_id) {
    return await axios.post(`/product/raw_material_storage_box/add`, { raw_material_id: raw_material_id }).then((res) => res).catch((err) => err);
  }

}