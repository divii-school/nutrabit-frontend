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
  async getRecommendedData(limit, page) {
    return await axios.post(`/blending`, { lang: 'KO', limit: limit, page: page }).then((res) => res.data).catch((err) => err);
  }

  //recommended blending alphabetical API Functions
  async getRecommendedBlendingAlphabetical() {
    return await axios.post(`/blending/alphabetic/`, { lang: 'KO' }).then((res) => res).catch((err) => err);
  }

  //recommended blending popularity API Functions
  async getRecommendedBlendingPopularity() {
    return await axios.post(`/blending/popularity/`, { lang: 'KO' }).then((res) => res).catch((err) => err);
  }

  //RawMaterial API Functions
  async getRawMaterial(sub_cat_id) {
    return await axios.post(`/product/raw_material`, { sub_category_id: sub_cat_id, lang: 'KO' }).then((res) => res).catch((err) => err);
  }

  //RawMaterial alphabetical API Functions
  async getRawMaterialAlphabetical(sub_cat_id) {
    return await axios.post(`/product/raw_material/alphabetic/`, { sub_category_id: sub_cat_id, lang: 'KO' }).then((res) => res).catch((err) => err);
  }

  //RawMaterial popularity API Functions
  async getRawMaterialAlPopularity(sub_cat_id) {
    return await axios.post(`/product/raw_material/popularity`, { sub_category_id: sub_cat_id, lang: 'KO' }).then((res) => res).catch((err) => err);
  }

  //RawMaterial storage box add API Functions
  async rawMaterialStorageBoxAdd(raw_material_id) {
    return await axios.post(`/product/raw_material_storage_box/add`, { raw_material_id: raw_material_id }).then((res) => res).catch((err) => err);
  }

  //Recommended blending detail API Functions
  async getRecommendedBlendingDetail(blending_id) {
    return await axios.post(`/blending/id`, { id: blending_id, lang: 'KO' }).then((res) => res).catch((err) => err);
  }

  //recommended blending package API Functions
  async getRecommendedBlendingPackage() {
    return await axios.post(`/blending/package`, { lang: 'KO' }).then((res) => res.data).catch((err) => err);
  }

  //recommended blending package add API Functions
  async getRecommendedBlendingPackageAdd(blending_id, package_id, etc, additional_request, service_type, is_temporary_storage) {
    return await axios.post(`/blending/recommended/add`, { blending_id: blending_id, package_id: package_id, etc:etc, additional_request: additional_request, service_type: service_type, is_temporary_storage: is_temporary_storage }).then((res) => res.data).catch((err) => err);
  }

  //blending formulation API Functions
  async getBlendingFormulation() {
    return await axios.post(`/blending/formulation`, { lang: 'KO' }).then((res) => res.data).catch((err) => err);
  }

  //Recommended blending final quote application details detail API Functions
  async getRecommnededApplicationDetails(id) {
    return await axios.post(`/application/my_choice/details`, { id: id, application_type: 'my_choice' }).then((res) => res).catch((err) => err);
  }

  //option details
  async optiondetails(type, val) {
    return await axios.post(`/application/options_details`, { lang: 'KO', option_type: type, option_val: val }).then((res) => res).catch((err) => err);
  }

  //my choice detail API Functions
  async getRawMaterialDetail(raw_material_id) {
    return await axios.post(`/product/raw_material/details`, { raw_material_id: raw_material_id, lang: 'KO' }).then((res) => res).catch((err) => err);
  }

  //my choice detail API Functions
  async getRawMaterialImage(raw_material_id) {
    return await axios.post(`/product/raw_material/images`, { raw_material_id: raw_material_id }).then((res) => res).catch((err) => err);
  }

  //raw material package add API Functions
  async getRawMaterialPackageAdd(raw_material_ids, pill_id, package_id, title, additional_request, service_type, is_temporary_storage) {
    return await axios.post(`/blending/raw_material/add`, { raw_material_ids: raw_material_ids, pill_id: pill_id, package_id: package_id, title: title, additional_request: additional_request, service_type: service_type, is_temporary_storage: is_temporary_storage }).then((res) => res.data).catch((err) => err);
  }

  //raw material storage box API Functions
  async getRawMaterialStorageBox(user_id) {
    return await axios.post(`/product/raw_material_storage_box/`, { lang: "KO", user_id: user_id }).then((res) => res.data).catch((err) => err);
  }

  //delete storage box API Functions
  async deleteIngredientsStorageBox(user_id, raw_material_id) {
    return await axios.post(`/product/raw_material_storage_box/delete`, { user_id: user_id, raw_material_id: raw_material_id }).then((res) => res.data).catch((err) => err);
  }

}