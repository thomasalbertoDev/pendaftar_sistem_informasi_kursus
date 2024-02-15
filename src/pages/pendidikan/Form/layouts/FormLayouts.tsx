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
        <div className={submitCount ? (errors.nama_pendidikan ? 'has-error' : 'has-success') : ''}>
          <InputText
            id={'nama_pendidikan'}
            name={'nama_pendidikan'}
            label={'Nama Pendidikan'}
            value={values.nama_pendidikan}
            onChange={handleChange}
            error={errors.nama_pendidikan || ''}
            placeholder={'Masukkan Nama Pendidikan'}
            isInputFilled={'Form Nama Pendidikan Sudah Terisi'}
          />
        </div>
      </Form>
    </>
  );
};

export default FormLayouts;
