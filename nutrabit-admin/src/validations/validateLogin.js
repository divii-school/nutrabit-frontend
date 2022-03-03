import validator from 'validator';

const validateLogin = (data) => {
  let errors = {}

  const {email, password} = data;

  if(!validator.isEmail(email)) {
    errors.email = '유효한 이메일을 입력해주세요'
  }
  if(validator.isEmpty(email)) {
    errors.email = '이메일 주소를 입력해주세요'
  }
  if(validator.isEmpty(password)) {
    errors.password = '비밀번호를 입력해주세요'
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateLogin;