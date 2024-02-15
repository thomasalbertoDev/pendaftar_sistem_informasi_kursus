import React from 'react';
import { Form } from 'formik';
import InputText from '../../../../components/forms/Input/InputText';

interface FormLayoutsProps {
  errors: any;
  handleChange: any;
  submitCount: any;
  values: any;
}

const FormLayouts: React.FC<FormLayoutsProps> = ({ errors, handleChange, submitCount, values }) => {
  return (
    <>
      <Form className="space-y-5">
        <div className={submitCount ? (errors.jumlah_penghasilan ? 'has-error' : 'has-success') : ''}>
          <InputText
            id={'jumlah_penghasilan'}
            name={'jumlah_penghasilan'}
            label={'Jumlah Penghasilan'}
            value={values.jumlah_penghasilan}
            onChange={handleChange}
            error={errors.jumlah_penghasilan || ''}
            placeholder={'Masukkan Jumlah Penghasilan'}
            isInputFilled={'Form Jumlah Penghasilan Sudah Terisi'}
          />
        </div>
      </Form>
    </>
  );
};

export default FormLayouts;
