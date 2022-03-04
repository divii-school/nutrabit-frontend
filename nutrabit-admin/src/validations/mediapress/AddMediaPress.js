
import validator from 'validator';

const validateCreateMediaPress = (data) => {
    let errors = {};

    const { title, link} = data;

    if (validator.isEmpty(title)) {
        errors.title = '제목을 입력해주세요.';
    }
    if (validator.isEmpty(link)) {
        errors.link = 'URL을 입력해주세요.';
    }
    if (!validator.isURL(link)) {
        errors.link = '유효한 URL을 기입해주세요.';
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateCreateMediaPress;
