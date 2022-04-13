import validator from 'validator';

const validateEditBusiness = (data) => {
  let errors = {}

  const {business_number,business_name,department, person_in_charge, uuid, email, mobile, address,createdDate} = data;
  if(validator.isEmpty(business_number)) {
    errors.business_number =  "Please don't keep it blank";
  }
  if(validator.isEmpty(business_name)) {
    errors.business_name =  "Please don't keep it blank";
  }
  if(validator.isEmpty(department)) {
    errors.department =  "Please don't keep it blank";
  }
  if(validator.isEmpty(person_in_charge)) {
    errors.person_in_charge =  "Please don't keep it blank";
  }
  if(validator.isEmpty(uuid)) {
    errors.uuid =  "Please don't keep it blank";
  }
  if(validator.isEmpty(email)) {
    errors.email =  "Please don't keep it blank";
  }
  if(validator.isEmpty(mobile)) {
    errors.mobile =  "Please don't keep it blank";
  }
  if(validator.isEmpty(address)) {
    errors.address =  "Please don't keep it blank";
  }

  if(validator.isEmpty(createdDate)) {
    errors.createdDate =  "Please don't keep it blank";
  }

 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateEditBusiness;