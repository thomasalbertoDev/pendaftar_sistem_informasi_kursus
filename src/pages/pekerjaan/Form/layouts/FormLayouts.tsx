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
        <div className={submitCount ? (errors.nama_pekerjaan ? 'has-error' : 'has-success') : ''}>
          <InputText
            id={'nama_pekerjaan'}
            name={'nama_pekerjaan'}
            label={'Nama Pekerjaan'}
            value={values.nama_pekerjaan}
            onChange={handleChange}
            error={errors.nama_pekerjaan || ''}
            placeholder={'Masukkan Nama Pekerjaan'}
            isInputFilled={'Form Nama Pekerjaan Sudah Terisi'}
          />
        </div>
      </Form>
    </>
  );
};

export default FormLayouts;
