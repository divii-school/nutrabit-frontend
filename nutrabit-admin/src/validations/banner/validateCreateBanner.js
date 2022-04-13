
import validator from 'validator';

const validateCreateBanner = (data) => {
    let errors = {};

    const { title, link, file,status} = data;

    if (validator.isEmpty(title)) {
        errors.title = '제목을 입력해주세요';
    }
    if (validator.isEmpty(status)) {
        errors.status = '선택 해주세요';
    }
    
    if (validator.isEmpty(link)) {
        errors.link = 'URL을 입력해주세요';
    }
    if (!validator.isURL(link)) {
        errors.link = 'URL을 입력해주세요';
    }
    if (validator.isEmpty(file)) {
        errors.file = '파일을 업로드 해주세요';
    }
    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateCreateBanner;
