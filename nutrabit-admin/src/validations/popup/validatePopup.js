
import validator from 'validator';

const validateEditPopup = (data) => {
    let errors = {};

    const { title, state,desc} = data;

    if (validator.isEmpty(title)) {
        errors.title = 'Please enter a title';
    }
    if (validator.isEmpty(state)) {
        errors.state = 'Atleast select one';
    }
    if (validator.isEmpty(desc)) {
        errors.desc = 'description is required';
    }
    
    

    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateEditPopup;
