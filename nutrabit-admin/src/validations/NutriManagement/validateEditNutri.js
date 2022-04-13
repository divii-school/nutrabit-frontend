import validator from 'validator';

const validateEditNutri = (data) => {
  let errors = {}
  
  const { name_ko, name_en} = data;
  // if(validator.isEmpty(category_id)) {
  //   errors.category_id =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(sub_category_id)) {
  //   errors.sub_category_id =  "Please don't keep it blank";
  // }
  if(validator.isEmpty(name_ko)) {
    errors.name_ko =  "Please don't keep it blank";
  }
  if(validator.isEmpty(name_en)) {
    errors.name_en =  "Please don't keep it blank";
  }
  // if(validator.isEmpty(standard_ko)) {
  //   errors.standard_ko =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(standard_en)) {
  //   errors.standard_en =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(material_description_ko)) {
  //   errors.material_description_ko =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(material_description_en)) {
  //   errors.material_description_en =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(material_function_ko)) {
  //   errors.material_function_ko =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(material_function_en)) {
  //   errors.material_function_en =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(material_prequotion_ko)) {
  //   errors.material_prequotion_ko =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(material_prequotion_en)) {
  //   errors.material_description_en =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(material_extra_info_ko)) {
  //   errors.material_extra_info_ko =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(material_extra_info_en)) {
  //   errors.material_extra_info_en =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(daily_intake_amount_ko)) {
  //   errors.daily_intake_amount_ko =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(daily_intake_amount_en)) {
  //   errors.material_description_en =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(tag_ko)) {
  //   errors.tag_ko =  "Please don't keep it blank";
  // }
  // if(validator.isEmpty(tag_en)) {
  //   errors.tag_en =  "Please don't keep it blank";
  // }

 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateEditNutri;