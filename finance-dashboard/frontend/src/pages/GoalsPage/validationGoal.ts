import * as Yup from 'yup';

export const goalSchema = Yup.object({
  type: Yup.string().min(2, 'To short!').required('Required'),
  title: Yup.string()
    .min(2, 'To short!')
    .max(30, 'To long!')
    .required('Required'),
  date: Yup.string()
    .min(2, 'To short!')
    .max(30, 'To long!')
    .required('Required'),
  amount: Yup.number().positive().required('Required')
});
