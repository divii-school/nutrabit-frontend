import validator from 'validator';

const validateAddNote = (data) => {
  let errors = {}

  const {title, description} = data;

  if(validator.isEmpty(title)) {
    errors.title = 'Title is required'
  }
  if(validator.isEmpty(description)) {
    errors.description = 'Description is required'
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateAddNote;