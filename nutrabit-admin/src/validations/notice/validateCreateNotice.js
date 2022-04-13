
import validator from 'validator';

const validateCreateNotice = (data) => {
    let errors = {};

    const { title_en, title_ko,description_en,description_ko,file,top10,expose} = data;

    if (validator.isEmpty(title_en)) {
        errors.title_en = '제목 KR을 입력하세요.';
    }
    if (validator.isEmpty(title_ko)) {
        errors.title_ko = '제목을 입력하세요 KO';
    }
    
    if (validator.isEmpty(description_en)) {
        errors.description_en = '설명을 입력하세요 KO';
    }
    if (validator.isEmpty(description_ko)) {
        errors.description_ko = '설명을 입력하세요.';
    }
    if (validator.isEmpty(file)) {
        errors.file = '파일을 업로드 해주세요';
    }

    if (validator.isEmpty(top10)) {
        errors.top10 = '선택 해주세요';
    }

    if (validator.isEmpty(expose)) {
        errors.expose = '선택 해주세요';
    }
    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateCreateNotice;
