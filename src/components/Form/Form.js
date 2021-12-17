import { useState } from 'react';

import FormValidator from 'helpers/form-validator';
// Components
import Input from 'components/Input/Input';

const Form = (({formData}) => {
  const defaultFormData = formData;
  const [data, updatedata] = useState(formData);

  const onChangeHandler = ((event) => {
    let target = event.target;
    updatedata({
      ...data,
      [target.name]: {...data[target.name], value: target.value, checked: target.checked}
    });
  });

  const onFormSubmit = ((event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Form submitted');
      updatedata(defaultFormData);
    }
  });

  const validateForm = (() => {
    let formValidator = new FormValidator(),
      isDataValid = true;
    Object.keys(data).forEach((key) => {
      let errors = formValidator.validate(data[key]);
      data[key]['errors'] = errors;
      isDataValid = isDataValid && !errors.length
    });
    updatedata({
      ...data
    });
    return isDataValid;
  });
  return (
    <form onSubmit={onFormSubmit}>
      { Object.keys(data).map((key, index) => {
        return <Input {...data[key]} onChangeHandler={ onChangeHandler}  key={index}/>
      } ) }
      <h4>You will be sent an email when someone posts comments on your blog or album</h4>
      <h6>Your password will be mailed to you</h6>
      <Input type='submit' value='Go'/>
    </form>
  )
});

export default Form;
