import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import { Form, Formik } from 'formik';
import { requestLogin } from '../../api/auth/services/requestLogin';
import { validationSchema } from './validationSchema';
import InputText from '../../components/forms/Input/InputText';
import InputPassword from '../../components/forms/Input/InputPassword';
import ButtonSolidPrimary from '../../components/buttons/solid/ButtonSolidPrimary';
import CheckboxDefaultPrimary from '../../components/forms/checkbox/default/CheckboxDefaultPrimary';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    dispatch(setPageTitle('Admin | Sign In'));

    const rememberMeData = localStorage.getItem('rememberMe');
    if (rememberMeData) {
      const { username, password } = JSON.parse(rememberMeData);
      setRememberMe(true);
      setFormValues({ username, password });
    }
  }, []);

  const handleSubmit = async (values: any) => {
    const { username, password } = values;
    const response = await requestLogin(username, password);
    if (response) {
      if (rememberMe) {
        localStorage.setItem('rememberMe', JSON.stringify({ username, password }));
      }
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/course.jpg')]">
      <div className="panel sm:w-[700px] px-6 pb-8 max-w-lg w-full rounded-2xl">
        <img src="/assets/images/logo_light.png" alt="logo" className="w-36  mx-auto" />
        <Formik
          initialValues={{
            username: formValues.username,
            password: formValues.password,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <Form className="space-y-5">
              <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'username'}
                  name={'username'}
                  label={'Username'}
                  value={values.username}
                  onChange={handleChange}
                  error={errors.username || ''}
                  placeholder={'Masukkan Username'}
                  isInputFilled={'Username Sudah Terisi'}
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
                  isInputFilled={'Password Sudah Terisi'}
                />

                <CheckboxDefaultPrimary text={'Ingatkan Saya!'} checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
              </div>

              <ButtonSolidPrimary text={'LOGIN'} width={'w-full'} onClick={() => handleSubmit(values)} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
