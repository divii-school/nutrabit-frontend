
import validator from 'validator';

const validateCreateCategory = (data) => {
    let errors = {};

    const {fst_category_name_ko, fst_category_name_en,scnd_category_name_ko,scnd_category_name_en,file} = data;

    if (validator.isEmpty(fst_category_name_ko)) {
        errors.fst_category_name_ko = '제목을 입력해주세요';
    }
    if (validator.isEmpty(fst_category_name_en)) {
        errors.fst_category_name_en = '선택 해주세요';
    }
    
    if (validator.isEmpty(scnd_category_name_ko)) {
        errors.scnd_category_name_ko = ' 두 번째 범주 이름 고';
    }
    if (validator.isEmpty(scnd_category_name_en)) {
        errors.scnd_category_name_en = '두 번째 범주 이름 En';
    }
    if (validator.isEmpty(file)) {
        errors.file = '파일을 업로드 해주세요';
    }
    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    }
}

export default validateCreateCategory;