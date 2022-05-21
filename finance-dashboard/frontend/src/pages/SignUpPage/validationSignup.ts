import * as Yup from 'yup';

export const SignupSchema = Yup.object({
  email: Yup.string().email('Invalid email!').required('Required'),
  firstName: Yup.string()
    .min(2, 'To short!')
    .max(50, 'To long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'To short!')
    .max(50, 'To long!')
    .required('Required'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      'Password must contain at least 8 characters, one upper case, one lower case and one number'
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required')
});
