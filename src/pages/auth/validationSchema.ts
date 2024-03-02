import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  otp: yup.string().required('OTP Wajib Diisi'),
  nama: yup.string().required('Nama Wajib Diisi'),
  email: yup.string().email('Email Tidak Valid').required('Email Wajib Diisi'),
  username: yup.string().required('Username Wajib Diisi'),
  password: yup.string().required('Password Wajib Diisi'),
});
