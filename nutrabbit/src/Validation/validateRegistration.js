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

  if (validator.isEmpty(termsCheck)) {
    errors.termsCheck = "check 1";
  }
  if (validator.isEmpty(personalCheck)) {
    errors.personalCheck = "check 2";
  }
  if (validator.isEmpty(name)) {
    errors.name = "Enter your name";
  }
  if (validator.isEmpty(username)) {
    errors.username = "Enter your username";
  }
  if (validator.isEmpty(password)) {
    errors.password = "Enter a Password";
  }
  if (validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = "Enter a verifcation Password";
  }
  if (!validator.equals(password, confirmPassword)) {
    errors.confirmPassword = "Password should match!";
  }
  if (!validator.isEmail(email)) {
    errors.email = "Enter a valid email address";
  }
  if (validator.isEmpty(email)) {
    errors.email = "Enter an Email";
  }
  if (validator.isEmpty(emailOTP)) {
    errors.emailOTP = "Enter an Email OTP";
  }
  if (validator.isEmpty(phoneNumber)) {
    errors.phoneNumber = "Enter a Phone Number";
  }
  if (validator.isEmpty(address)) {
    errors.address = "Enter a Address";
  }


  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  };
};

export default validateRegistration;
