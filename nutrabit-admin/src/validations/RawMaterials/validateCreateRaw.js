import validator from 'validator';

const validateCreateRaw = (data) => {
  let errors = {}
  
  const {  material_name_ko, material_name_en,tag_ko,tag_en,standard_ko,standard_en,material_description_ko,material_description_en,
    material_function_ko,material_function_en,material_prequotion_ko,material_prequotion_en,material_extra_info_ko,material_extra_info_en,
    daily_intake_amount_ko,daily_intake_amount_en,file,files} = data;
  // if(validator.isEmpty(category_id)) {
  //   errors.category_id =  "카테고리를 선택하세요";
  // }
  // if(validator.isEmpty(sub_category)) {
  //   errors.sub_category =  "하위 카테고리 ID는 필수 항목입니다";
  // }
  if(validator.isEmpty(material_name_ko)) {
    errors.material_name_ko =  "재료 이름 Ko는 필수 항목입니다";
  }
  if(validator.isEmpty(material_name_en)) {
    errors.material_name_en =  "재료 이름 EN은 필수 항목입니다.";
  }
  if(validator.isEmpty(standard_ko)) {
    errors.standard_ko =  "표준 KO가 필요합니다.";
  }
  if(validator.isEmpty(standard_en)) {
    errors.standard_en =  "표준 EN가 필요합니다.";
  }
  if(validator.isEmpty(material_description_ko)) {
    errors.material_description_ko =  "재료 설명 KO가 필요합니다";
  }
  if(validator.isEmpty(material_description_en)) {
    errors.material_description_en =  "재료 설명 EN가 필요합니다";
  }
  if(validator.isEmpty(material_function_ko)) {
    errors.material_function_ko =  "머티리얼 기능 KO가 필요합니다";
  }
  if(validator.isEmpty(material_function_en)) {
    errors.material_function_en =  "머티리얼 기능 EN가 필요합니다";
  }
  if(validator.isEmpty(material_prequotion_ko)) {
    errors.material_prequotion_ko =  "재료 전치 KO는 필수 항목입니다.";
  }
  if(validator.isEmpty(material_prequotion_en)) {
    errors.material_prequotion_en =  "재료 전치 EN는 필수 항목입니다.";
  }
  if(validator.isEmpty(material_extra_info_ko)) {
    errors.material_extra_info_ko =  "재료 추가 정보 KO가 필요합니다";
  }
  if(validator.isEmpty(material_extra_info_en)) {
    errors.material_extra_info_en =  "재료 추가 정보 EN가 필요합니다";
  }
  if(validator.isEmpty(daily_intake_amount_ko)) {
    errors.daily_intake_amount_ko =  "1일 섭취량 KO 필수";
  }
  if(validator.isEmpty(daily_intake_amount_en)) {
    errors.daily_intake_amount_en =  "1일 섭취량 EN 필수";
  }
  if(validator.isEmpty(tag_ko)) {
    errors.tag_ko =  "태그 KO는 필수 항목입니다.";
  }
  if(validator.isEmpty(tag_en)) {
    errors.tag_en =  "태그 EN는 필수 항목입니다.";
  }

  if (validator.isEmpty(file)) {
    errors.file = '파일을 업로드 해주세요';
}

if (validator.isEmpty(files)) {
  errors.files = '파일을 업로드 해주세요';
}
 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateCreateRaw;