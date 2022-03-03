import validator from 'validator';

const validateEditDfc = (data) => {
  let errors = {}

  const {name,mobile} = data;
  if(validator.isEmpty(name)) {
    errors.name =  "Please don't keep it blank";
  }
  if(validator.isEmpty(mobile)) {
    errors.mobile =  "Please don't keep it blank";
  }
 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateEditDfc;