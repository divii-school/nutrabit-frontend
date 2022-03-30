import validator from "validator";

const passwordValidation = (data) => {
    let errors = {};

    const { password, confirmPassword, } = data;

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

    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors
    };
};

export default passwordValidation;
