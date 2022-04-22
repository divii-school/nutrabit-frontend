import validator from "validator";

const forgotPassword = (data) => {
    let errors = {};

    const { userId, email, emailOTP, validation_type, isConfirmOTP} = data;

    if(validation_type == 'forgotPassword'){
        if (validator.isEmpty(userId)) {
            errors.userId = "Please enter your ID";
        }
    }
    if (validator.isEmpty(email)) {
        errors.email = "Please enter your email address";
    }
    else if (!validator.isEmail(email)) {
        errors.email = "Enter a valid email address";
    }
    if (validator.isEmpty(emailOTP)) {
        errors.emailOTP = "Please enter your email verification code";
    }
    else if (isConfirmOTP==0) {
        errors.emailOTP = "Please Verify OTP";
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors
    };
};

export default forgotPassword;
