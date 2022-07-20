import validator from 'validator';

const validatePass = (data) => {
  let errors = {}

  const { newp, confi} = data;

  // if(validator.isEmpty(current)) {
  //   errors.current =  '현재 비밀번호를 입력해주세요.'
  // }
  if(validator.isEmpty(newp)) {
    errors.newp =  '새로운 비밀번호를 입력해주세요.'
  }
  if(validator.isEmpty(confi)) {
    errors.confi =  '비밀번호 확인을 입력해주세요.'
  }
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validatePass;