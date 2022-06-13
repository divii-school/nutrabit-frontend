import validator from 'validator';

const validateEditRaw = (data) => {
  let errors = {}
  
  const {  sub_category_id,material_name_ko, material_name_en,
    material_function_ko,material_function_en,
    daily_intake_amount_ko,daily_intake_amount_en,file,files ,status} = data;
  if(validator.isEmpty(sub_category_id)) {
    errors.sub_category_id =  "카테고리를 선택하세요";
  }
  
  if(validator.isEmpty(material_name_ko)) {
    errors.material_name_ko =  "필수 입력 항목입니다.";
  }
  if(validator.isEmpty(material_name_en)) {
    errors.material_name_en =  "필수 입력 항목입니다.";
  }
  // if(validator.isEmpty(standard_ko)) {
  //   errors.standard_ko =  "표준 KO가 필요합니다.";
  // }
  // if(validator.isEmpty(standard_en)) {
  //   errors.standard_en =  "표준 EN가 필요합니다.";
  // }
  // if(validator.isEmpty(material_description_ko)) {
  //   errors.material_description_ko =  "재료 설명 KO가 필요합니다";
  // }
  // if(validator.isEmpty(material_description_en)) {
  //   errors.material_description_en =  "재료 설명 EN가 필요합니다";
  // }
  if(validator.isEmpty(material_function_ko)) {
    errors.material_function_ko =  "필수 입력 항목입니다.";
  }
  if(validator.isEmpty(material_function_en)) {
    errors.material_function_en =  "필수 입력 항목입니다.";
  }
  // if(validator.isEmpty(material_prequotion_ko)) {
  //   errors.material_prequotion_ko =  "재료 전치 KO는 필수 항목입니다.";
  // }
  // if(validator.isEmpty(material_prequotion_en)) {
  //   errors.material_prequotion_en =  "재료 전치 EN는 필수 항목입니다.";
  // }
  // if(validator.isEmpty(material_extra_info_ko)) {
  //   errors.material_extra_info_ko =  "재료 추가 정보 KO가 필요합니다";
  // }
  // if(validator.isEmpty(material_extra_info_en)) {
  //   errors.material_extra_info_en =  "재료 추가 정보 EN가 필요합니다";
  // }
  if(validator.isEmpty(daily_intake_amount_ko)) {
    errors.daily_intake_amount_ko =  "필수 입력 항목입니다.";
  }
  if(validator.isEmpty(daily_intake_amount_en)) {
    errors.daily_intake_amount_en =  "필수 입력 항목입니다.";
  }
  // if(validator.isEmpty(tag_ko)) {
  //   errors.tag_ko =  "태그 KO는 필수 항목입니다.";
  // }
  // if(validator.isEmpty(tag_en)) {
  //   errors.tag_en =  "태그 EN는 필수 항목입니다.";
  // }

  if (validator.isEmpty(file)) {
    errors.file = '파일 업로드가 필요합니다.';
}

if (validator.isEmpty(files)) {
  errors.files = '파일 업로드가 필요합니다.';
}
if (validator.isEmpty(status)) {
  errors.status = '필수 선택 항목입니다.';
}
 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateEditRaw;