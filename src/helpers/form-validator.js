import { TEXT_MIN_LENGTH, URL_REGEX, EMAIL_REGEX } from 'constants.js';

class FormValidator {

  validate = (attributeData) => {
    let validations = attributeData['validations']
    return validations.map((validationKey) => {
      switch(validationKey) {
        case 'presence':
          return this.validatePresence(attributeData.value);
        case 'email':
          return this.validateEmail(attributeData.value);
        case 'url':
          return this.validateURL(attributeData.value);
        case 'min_length':
          return this.validateLength(attributeData.value);
        case 'acceptance':
          return this.validateAcceptance(attributeData.checked);
      }
    }).filter(Boolean);
  }

  validatePresence = (value) => {
    if (!value.trim()) {
      return 'Cant be blank'
    }
  }

  validateEmail = (value) => {
    if(!EMAIL_REGEX.test(value)) {
      return 'Email is not valid';
    }
  }

  validateURL = (value) => {
    if(!URL_REGEX.test(value)) {
      return 'URL is not valid';
    }
  }

  validateLength = (value) => {
    if(value.trim().length < TEXT_MIN_LENGTH) {
      return `Please specify atleast ${TEXT_MIN_LENGTH} characters.`;
    }
  }

  validateAcceptance = (value) => {
    if(!value) {
      return 'Please accept this.';
    }
  }
}

export default FormValidator;
