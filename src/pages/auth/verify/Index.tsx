import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { requestVerify } from '../../../api/auth/services/requestVerify';
import { validationSchema } from '../validationSchema';
import InputText from '../../../components/forms/Input/InputText';
import InputEmail from '../../../components/forms/Input/InputEmail';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';

interface FormValues {
  email: string;
  otp: string;
}

interface State {
  formValues: FormValues;
}

const Verify: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState<State>({
    formValues: {
      email: '',
      otp: '',
    },
  });

  useEffect(() => {
    dispatch(setPageTitle('Verify Email'));
  });

  const handleSubmit = async (values: FormValues) => {
    const response = await requestVerify(values);
    if (response === true) {
      navigate('/verify/verify-success');
    }

    console.log('values', values);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="px-10 py-16 text-center font-semibold before:container before:absolute before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-[linear-gradient(180deg,#4361EE_0%,rgba(67,97,238,0)_50.73%)] before:aspect-square before:opacity-10 md:py-20">
        <div className="relative w-96 px-5">
          <img src={'/assets/images/verify.svg'} alt="Verify" className="mx-auto -mt-10 w-full max-w-xs object-cover md:-mt-14 md:max-w-xl" />

          <Formik
            initialValues={{
              email: state.formValues.email,
              otp: state.formValues.otp,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, handleChange, submitCount, values }) => (
              <Form className="space-y-5 text-left">
                <div className={submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}>
                  <InputEmail
                    id={'email'}
                    name={'email'}
                    label={''}
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email || ''}
                    placeholder={'Masukkan Kembali Email Anda'}
                    isInputFilled={'Email Sudah Terisi'}
                  />
                </div>
                <div className={submitCount ? (errors.otp ? 'has-error' : 'has-success') : ''}>
                  <InputText
                    id={'otp'}
                    name={'otp'}
                    label={''}
                    value={values.otp}
                    onChange={handleChange}
                    error={errors.otp || ''}
                    placeholder={'Masukkan Kode OTP'}
                    isInputFilled={'Kode OTP Sudah Terisi'}
                  />
                </div>

                <ButtonSolidPrimary text={'Verifikasi Email'} width={'w-full'} onClick={() => handleSubmit(values)} />
              </Form>
            )}
          </Formik>
          <p className="mt-10">Kode OTP Sudah Dikirim Melalui Email Anda , Silahkan Di Cek</p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
