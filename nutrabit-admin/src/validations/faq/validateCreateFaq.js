
import validator from 'validator';

const validateCreateFaq = (data) => {
    let errors = {};

    const { category_id,title_ko, title_en, description_ko,description_en,state,top_10} = data;

    if (validator.isEmpty(category_id)) {
        errors.category_id = '카테고리를 입력하십시오';
    }
    
    if (validator.isEmpty(title_ko)) {
        errors.title_ko = '제목을 입력하세요 ko';
    }

    if (validator.isEmpty(title_en)) {
        errors.title_en = '제목을 입력하세요 en';
    }

    if (validator.isEmpty(description_ko)) {
        errors.description_ko = '설명을 입력하세요 ko';
    }

    if (validator.isEmpty(description_en)) {
        errors.description_en = '설명을 입력하세요 en';
    }

    if (validator.isEmpty(top_10)) {
        errors.top_10 = '선택 해주세요';
    }

    if (validator.isEmpty(state)) {
        errors.state = '선택 해주세요';
    }
    
  
    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateCreateFaq;