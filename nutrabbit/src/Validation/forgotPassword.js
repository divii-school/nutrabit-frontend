import validator from "validator";

const forgotPassword = (data) => {
    let errors = {};

    const { userId, email, emailOTP} = data;

    if (validator.isEmpty(userId)) {
        errors.userId = "Please enter a Password";
    }
    if (validator.isEmpty(email)) {
        errors.email = "Please enter a Password";
    }
    else if (validator.isEmail(email)) {
        errors.email = "Please enter a Password";
    }
    if (validator.isEmpty(emailOTP)) {
        errors.emailOTP = "Please enter a Password";
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors
    };
};

export default forgotPassword;
