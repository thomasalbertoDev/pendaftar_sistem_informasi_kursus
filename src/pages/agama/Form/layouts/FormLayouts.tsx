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
        <div className={submitCount ? (errors.nama_agama ? 'has-error' : 'has-success') : ''}>
          <InputText
            id={'nama_agama'}
            name={'nama_agama'}
            label={'Nama Agama'}
            value={values.nama_agama}
            onChange={handleChange}
            error={errors.nama_agama || ''}
            placeholder={'Masukkan Nama Agama'}
            isInputFilled={'Form Nama Agama Sudah Terisi'}
          />
        </div>
      </Form>
    </>
  );
};

export default FormLayouts;
