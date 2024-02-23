import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { Form, Formik } from 'formik';
import { requestRegister } from '../../api/auth/services/requestRegister';
import { validationSchema } from './validationSchema';
import { Link, useNavigate } from 'react-router-dom';
import InputText from '../../components/forms/Input/InputText';
import InputEmail from '../../components/forms/Input/InputEmail';
import InputPassword from '../../components/forms/Input/InputPassword';
import ButtonSolidPrimary from '../../components/buttons/solid/ButtonSolidPrimary';

interface FormValues {
  nama: string;
  email: string;
  username: string;
  password: string;
}

interface State {
  formValues: FormValues;
}

const SignUp: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState<State>({
    formValues: {
      nama: '',
      email: '',
      username: '',
      password: '',
    },
  });

  useEffect(() => {
    dispatch(setPageTitle('Sign Up'));
  }, [dispatch]);

  const handleSubmit = async (values: FormValues) => {
    const response = await requestRegister(values);
    if (response === true) {
      navigate('/verify');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/course.jpg')]">
      <div className="panel sm:w-[700px] px-6 pb-8 max-w-lg w-full rounded-2xl">
        <img src="/assets/images/logo_light.png" alt="logo" className="w-36  mx-auto" loading="lazy" />
        <Formik
          initialValues={{
            nama: state.formValues.nama,
            email: state.formValues.email,
            username: state.formValues.username,
            password: state.formValues.password,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <Form className="space-y-5">
              <div className={submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}>
                <InputEmail
                  id={'email'}
                  name={'email'}
                  label={'Email'}
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email || ''}
                  placeholder={'Masukkan Email'}
                  isInputFilled={'Form Email Sudah Terisi'}
                />
              </div>
              <div className={submitCount ? (errors.nama ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'nama'}
                  name={'nama'}
                  label={'Nama Anda'}
                  value={values.nama}
                  onChange={handleChange}
                  error={errors.nama || ''}
                  placeholder={'Masukkan Nama Lengkap Anda'}
                  isInputFilled={'Form Nama Sudah Terisi'}
                />
              </div>
              <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'username'}
                  name={'username'}
                  label={'Username'}
                  value={values.username}
                  onChange={handleChange}
                  error={errors.username || ''}
                  placeholder={'Masukkan Username'}
                  isInputFilled={'Form Username Sudah Terisi'}
                />
              </div>
              <div className={submitCount ? (errors.password ? 'has-error' : 'has-success') : ''}>
                <InputPassword
                  id={'password'}
                  name={'password'}
                  label={'Password'}
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password || ''}
                  placeholder={'Masukkan Password'}
                  isInputFilled={'Form Password Sudah Terisi'}
                />
              </div>

              <ButtonSolidPrimary text={'REGISTER'} width={'w-full'} onClick={() => handleSubmit(values)} />

              <div className="text-center font-semibold">
                <h1>
                  Sudah Punya Akun?
                  <Link to={'/sign-in'} className="text-primary">
                    &nbsp;Login
                  </Link>
                </h1>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
