import validator from 'validator';

const validateAddUser = (data) => {
  let errors = {}

  const {name, mobile, email, password, confirmPassword, gender} = data;

  if(validator.isEmpty(name)) {
    errors.name =  'Please enter a name'
  }
  if(validator.isEmpty(mobile)) {
    errors.mobile =  'Please enter a mobile'
  }
  if(validator.isEmpty(gender)) {
    errors.gender =  'Please Select Your gender'
  }
  if(!validator.isEmail(email)) {
    errors.email = 'Please enter a valid email'
  }
  if(validator.isEmpty(email)) {
    errors.email = 'Email is required'
  }
  if(validator.isEmpty(password)) {
    errors.password = 'Password is required'
  }
  if(validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = 'confirm Password is required'
  }


  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateAddUser;