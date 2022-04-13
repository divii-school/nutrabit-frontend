import validator from "validator";

const personalInfoValidation = (data) => {
  let errors = {};

  const { name, password, confirmPassword, phoneNumber, address, reason } = data;

  if (validator.isEmpty(name)) {
    errors.name = "Enter your name please";
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
  if (validator.isEmpty(phoneNumber)) {
    errors.phoneNumber = "Please enter your mobile phone number";
  }
  if (validator.isEmpty(address)) {
    errors.address = "Please enter your address";
  }

  if (validator.isEmpty(reason)) {
    errors.reason = "Please enter your reason";
  }


  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  };
};

export default personalInfoValidation;
