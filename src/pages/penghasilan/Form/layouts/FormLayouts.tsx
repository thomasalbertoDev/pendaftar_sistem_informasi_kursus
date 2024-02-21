import React from 'react';
import { Form } from 'formik';
import InputText from '../../../../components/forms/Input/InputText';

interface Penghasilan {
  jumlah_penghasilan: string;
}

interface FormLayoutsProps {
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  submitCount: number;
  values: Penghasilan;
}

const FormLayouts: React.FunctionComponent<FormLayoutsProps> = ({ errors, handleChange, submitCount, values }) => {
  return (
    <>
      <Form className="space-y-5">
        <div className={submitCount ? (errors.jumlah_penghasilan ? 'has-error' : 'has-success') : ''}>
          <InputText
            id={'jumlah_penghasilan'}
            name={'jumlah_penghasilan'}
            label={'Jumlah Penghasilan'}
            value={values.jumlah_penghasilan}
            error={errors.jumlah_penghasilan || ''}
            onChange={handleChange}
            placeholder={'Masukkan Jumlah Penghasilan'}
            isInputFilled={'Form Jumlah Penghasilan Sudah Terisi'}
          />
        </div>
      </Form>
    </>
  );
};

export default FormLayouts;
