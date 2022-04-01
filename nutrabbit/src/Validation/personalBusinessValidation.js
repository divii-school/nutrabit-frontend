import validator from "validator";

const personalBusinessValidation = (data) => {
  let errors = {};

  const { business_number, business_name, department, contactPerson, password, 

    confirmPassword, phoneNumber, address, reason, withdraw_type } = data;

  // if (account_type == 'business') {
    if (validator.isEmpty(business_number)) {
      errors.businessNumber = "Please enter your business number";
    }
    if (validator.isEmpty(business_name)) {
      errors.businessName = "Please enter your business name";
    }
    if (validator.isEmpty(department)) {
      errors.department = "Please enter the department name";
    }
    if (validator.isEmpty(contactPerson)) {
      errors.contactPerson = "Please enter the name of the person in charge";
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

    if (withdraw_type == "bussiness") {
        if (validator.isEmpty(reason)) {
            errors.reason = "Please enter your reason";
        }
    }

  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  };
};

export default personalBusinessValidation;
