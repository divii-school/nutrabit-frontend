import validator from 'validator';

const validateAddPackage = (data) => {
  let errors = {}
  
  const { name_ko, name_en,description_ko,description_en,file} = data;

  if(validator.isEmpty(name_ko)) {
    errors.name_ko =  "재료 이름 Ko는 필수 항목입니다";
  }
  if(validator.isEmpty(name_en)) {
    errors.name_en =  "재료 이름 EN은 필수 항목입니다.";
  }
  
  if(validator.isEmpty(description_ko)) {
    errors.description_ko =  "재료 설명 KO가 필요합니다";
  }
  if(validator.isEmpty(description_en)) {
    errors.description_en =  "재료 설명 EN가 필요합니다";
  }
  if (validator.isEmpty(file)) {
    errors.file = '파일을 업로드 해주세요';
}
 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateAddPackage;