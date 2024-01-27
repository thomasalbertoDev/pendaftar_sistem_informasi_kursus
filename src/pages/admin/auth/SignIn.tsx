import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { Form, Formik } from 'formik';
import { requestLogin } from './api/services/requestLogin';
import { validationSchema } from './validationSchema';
import InputText from '../../../components/forms/Input/InputText';
import InputPassword from '../../../components/forms/Input/InputPassword';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Admin | Login'));
  });

  const handleSubmit = async (values: any) => {
    const { username, password } = values;
    const response = await requestLogin(username, password);
    if (response) {
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/warehouse.jpg')]">
      <div className="panel sm:w-[500px] max-w-lg w-full">
        <h2 className="font-bold text-2xl mb-3">Login</h2>
        <p className="mb-7">Masukkan username dan password untuk login</p>
        <Formik
          initialValues={{
            username: '',
            password: '',
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
