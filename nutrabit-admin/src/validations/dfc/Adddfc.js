import validator from 'validator';

const validateAddDfc = (data) => {
  let errors = {}

  const {file} = data;
  if(validator.isEmpty(file)) {
    errors.file =  "Excel 형식의 파일을 업로드 해주세요";
  }
 
 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateAddDfc;