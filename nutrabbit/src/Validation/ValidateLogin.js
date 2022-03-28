import validator from 'validator';

const validateLogin = (vdata) => {
  let errors = {}

  const {email, password} = vdata;

  if(!validator.isEmail(email)) {
    errors.email = 'Please enter a valid email'
  }
  if(validator.isEmpty(email)) {
    errors.email = 'Email is required'
  }
  if(validator.isEmpty(password)) {
    errors.password = 'Password is required'
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateLogin;