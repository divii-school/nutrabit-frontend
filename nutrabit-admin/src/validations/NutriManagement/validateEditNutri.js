import validator from 'validator';

const validateEditNutri = (data) => {
  let errors = {}
  
  const { name_ko,name_en,category_id,raw_material_id,package_id,pill_id,tags_ko,tags_en,description_ko,description_en,file,filesimilar,filesthumb,status} = data;

  if(validator.isEmpty(name_ko)) {
    errors.name_ko =  "Nutri 이름을 입력하세요. Ko는 필수 항목입니다.";
  }
  if(validator.isEmpty(name_en)) {
    errors.name_en =  "재료 이름 EN은 필수 항목입니다.";
  }
  if(validator.isEmpty(category_id)) {
    errors.category_id =  "Nutri 이름을 입력하세요. Ko는 필수 항목입니다.";
  }
  if(validator.isEmpty(raw_material_id)) {
    errors.raw_material_id =  "재료 이름 EN은 필수 항목입니다.";
  }
  if(validator.isEmpty(package_id)) {
    errors.package_id =  "Nutri 이름을 입력하세요. Ko는 필수 항목입니다.";
  }
  if(validator.isEmpty(pill_id)) {
    errors.pill_id =  "재료 이름 EN은 필수 항목입니다.";
  }
  if(validator.isEmpty(tags_ko)) {
    errors.tags_ko =  "태그를 입력하세요 Ko가 필요합니다";
  }
  if(validator.isEmpty(tags_en)) {
    errors.tags_en =  "태그를 입력하세요. En이 필요합니다";
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
  if (validator.isEmpty(filesimilar)) {
    errors.filesimilar = '파일을 업로드 해주세요';
  }

  if (validator.isEmpty(filesthumb)) {
    errors.filesthumb = '파일을 업로드 해주세요';
  }

  if (validator.isEmpty(status)) {
    errors.status = '선택 해주세요';
}
 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateEditNutri;