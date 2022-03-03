import validator from 'validator';

const validateUsersearch = (data) => {
  let errors = {}

  const {name, email, mobile, calendarValue, calendarValue1} = data;

  if(validator.isEmpty(name)) {
    errors.name = 'Name is required'
  }
  if(!validator.isEmail(email)) {
    errors.email = 'Please enter a valid email'
  }
  if(validator.isEmpty(email)) {
    errors.email = 'Email is required'
  }
  if(validator.isEmpty(mobile)) {
    errors.mobile = 'Mobile is required'
  }
  if(validator.isEmpty(calendarValue)) {
    errors.calendarValue = 'Date is required'
  }
  if(validator.isEmpty(calendarValue1)) {
    errors.calendarValue1 = 'Date is required'
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateUsersearch;