import validator from "validator";

const validateRegistration = (data) => {
  let errors = {};

  const { termsCheck, personalCheck, name, username, password, confirmPassword, email, emailOTP, phoneNumber, address} = data;

  // if (localStorage.users) {
  //   let lsuser = localStorage.users;
  //   lsuser = JSON.parse(lsuser);
  //   let index = lsuser.findIndex((user) => user.email === email);
  //   if (index > -1) {
  //     errors.email = "Email already exists !";
  //   }
  // }

  if (termsCheck == false) {
    errors.termsCheck = "Please check the terms";
  }
  if (personalCheck == false) {
    errors.personalCheck = "Please check personal information";
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
  else if (password.length < 10 || password.length > 20){
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
