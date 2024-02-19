import React from 'react';
import { Form } from 'formik';
import InputText from '../../../../components/forms/Input/InputText';

type Agama = {
  nama_agama: string;
};

interface FormLayoutsProps {
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  submitCount: number;
  values: Agama;
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
