
import validator from 'validator';

const validateCreatePilltype = (data) => {
    let errors = {};

    const { name_ko, name_en, file,description_ko,description_en} = data;

    if (validator.isEmpty(name_ko)) {
        errors.name_ko = '알약 종류 이름 ko 필수';
    }
    if (validator.isEmpty(name_en)) {
        errors.name_en = '알약 종류 이름 EN 필수';
    }
    
    if (validator.isEmpty(description_ko)) {
        errors.description_ko = '설명 ko 필수';
    }
    if (validator.isEmpty(description_en)) {
        errors.description_en = '설명 EN 필수';
    }
    if (validator.isEmpty(file)) {
        errors.file = '파일을 업로드 해주세요';
    }
    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateCreatePilltype;