import validator from "validator";

const validateRegister = (data) => {
  let errors = {};

  const { username, email, password, password_confirmation } = data;

  // if (localStorage.users) {
  //   let lsuser = localStorage.users;
  //   lsuser = JSON.parse(lsuser);
  //   let index = lsuser.findIndex((user) => user.email === email);
  //   if (index > -1) {
  //     errors.email = "Email already exists !";
  //   }
  // }

  if (validator.isEmpty(username)) {
    errors.username = "Enter your name";
  }
  if (!validator.isEmail(email)) {
    errors.email = "Enter a valid email address";
  }
  if (validator.isEmpty(email)) {
    errors.email = "Enter your email address";
  }
  if (validator.isEmpty(password)) {
    errors.password = "Enter a Password";
  }
  if (validator.isEmpty(password_confirmation)) {
    errors.password_confirmation = "Enter confirm Password";
  }
  if (!validator.equals(password, password_confirmation)) {
    errors.password_confirmation = "Password should match!";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  };
};

export default validateRegister;
