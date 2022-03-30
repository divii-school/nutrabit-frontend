import validator from "validator";

const validateRegistration = (data) => {
  let errors = {};

  const { termsCheck, personalCheck, name, username, password, confirmPassword, email, emailOTP, phoneNumber, address, account_type, businessNumber, businessName, depertment, contactPerson } = data;


  if (termsCheck == false) {
    errors.termsCheck = "Please check the terms";
  }
  if (personalCheck == false) {
    errors.personalCheck = "Please check personal information";
  }
  if (account_type == 'business') {
    if (validator.isEmpty(businessNumber)) {
      errors.businessNumber = "Please enter your business number";
    }
    if (validator.isEmpty(businessName)) {
      errors.businessName = "Please enter your business name";
    }
    if (validator.isEmpty(depertment)) {
      errors.depertment = "Please enter the department name";
    }
    if (validator.isEmpty(contactPerson)) {
      errors.contactPerson = "Please enter the name of the person in charge";
    }
  }
  if (validator.isEmpty(name)) {
    errors.name = "Enter your name please";
  }
  if (validator.isEmpty(username)) {
    errors.username = "Please enter your ID";
  }
  else if (!(validator.isAlphanumeric(username))) {
    errors.username = "Please use only letter and number";
  }
  if (validator.isEmpty(password)) {
    errors.password = "Please enter a Password";
  }
  else if (!(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,20}$/))) {
    errors.password = "Enter your password (*10-20 characters including uppercase and lowercase letters, numbers, and special symbols)";
  }
  if (validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = "Please confirm your password";
  }
  if (!validator.equals(password, confirmPassword)) {
    errors.confirmPassword = "Password should match!";
  }
  if (!validator.isEmail(email)) {
    errors.email = "Enter a valid email address";
  }
  if (validator.isEmpty(email)) {
    errors.email = "Please enter your email address";
  }
  if (validator.isEmpty(emailOTP)) {
    errors.emailOTP = "Please enter your email verification code";
  }
  if (validator.isEmpty(phoneNumber)) {
    errors.phoneNumber = "Please enter your mobile phone number";
  }
  if (validator.isEmpty(address)) {
    errors.address = "Please enter your address";
  }


  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  };
};

export default validateRegistration;
