import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup.string().required('Username Wajib Diisi'),
  password: yup.string().required('Password Wajib Diisi'),
});
