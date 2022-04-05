import validator from 'validator';

const validateEditIndividual = (data) => {
  let errors = {}

  const {name,mobile,email,uuid,address,findings,createdDate} = data;
  if(validator.isEmpty(name)) {
    errors.name =  "Please don't keep it blank";
  }
  if(validator.isEmpty(mobile)) {
    errors.mobile =  "Please don't keep it blank";
  }
  if(validator.isEmpty(email)) {
    errors.email =  "Please don't keep it blank";
  }
  if(validator.isEmpty(uuid)) {
    errors.uuid =  "Please don't keep it blank";
  }
  if(validator.isEmpty(address)) {
    errors.address =  "Please don't keep it blank";
  }
  if(validator.isEmpty(findings)) {
    errors.findings =  "Please don't keep it blank";
  }
  if(validator.isEmpty(createdDate)) {
    errors.createdDate =  "Please don't keep it blank";
  }

 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateEditIndividual;