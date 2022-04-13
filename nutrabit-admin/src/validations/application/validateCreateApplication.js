import validator from 'validator';

const validateCreateApplication = (data) => {
    let errors = {};

    const { answer_by_admin, status_by_admin} = data;

    if (validator.isEmpty(answer_by_admin)) {
        errors.answer_by_admin = '관리자 답변을 입력하세요';
    }
    // if (validator.isEmpty(memo_by_admin)) {
    //     errors.memo_by_admin = '선택 해주세요';
    // }
    
    if (validator.isEmpty(status_by_admin)) {
        errors.status_by_admin = '상태를 선택하십시오';
    }
   
    
    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
    
};

export default validateCreateApplication;
