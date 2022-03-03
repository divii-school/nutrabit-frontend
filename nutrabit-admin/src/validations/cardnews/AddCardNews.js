
import validator from 'validator';

const validateCreateCardNews = (data) => {
    let errors = {};

    const { title, written,desc,file} = data;

    if (validator.isEmpty(title)) {
        errors.title = '제목을 입력해주세요';
    }
    if (validator.isEmpty(written)) {
        errors.written = '입력하지 않은 항목이 있습니다';
    }
    if (validator.isEmpty(desc)) {
        errors.desc = '본문을 입력해주세요';
    }
    if (validator.isEmpty(file)) {
        errors.file = ' 파일을 선택해주세요';
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateCreateCardNews;
