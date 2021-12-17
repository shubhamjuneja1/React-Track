import Form from 'components/Form/Form';

const SignupForm = (() => {
  const formData= {
      login: { name: 'login', label: 'Login Id', type: 'text', value: '', error: '', validations: ['presence'] },
      email: { name: 'email', label: 'Email', type: 'text', value: '', error: '', validations: ['presence', 'email'] },
      name: { name: 'name', label: 'Name', type: 'text', value: '', error: '', validations: ['presence'] },
      timezone: { name: 'timezone', label: 'Time Zone', type: 'select', value: 'gmt', error: '', options: [['gmt', 'GMT'], ['gmt1', 'GMT+1'], ['gmt2', 'GMT+2']], validations: ['presence'] },
      home: { name: 'home', label: 'Home Page', type: 'text', value: '', error: '', validations: ['presence', 'url'] },
      about_me: { name: 'about_me', label: 'About Me', type: 'textarea', rows: '10', cols: '50', value: '', error: '', validations: ['presence', 'min_length'] },
      notification: { name: 'notification', label: 'Receive notifications of comments.', type: 'checkbox', checked: 'false', error: '', validations: ['acceptance'] }
  } 
  return <Form formData={formData}/>
});

export default SignupForm;
