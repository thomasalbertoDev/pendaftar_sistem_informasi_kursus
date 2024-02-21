import React from 'react';
import { Form } from 'formik';
import InputText from '../../../../components/forms/Input/InputText';

interface Pendidikan {
  nama_pendidikan: string;
}

interface FormLayoutsProps {
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  submitCount: number;
  values: Pendidikan;
}

const FormLayouts: React.FunctionComponent<FormLayoutsProps> = ({ errors, handleChange, submitCount, values }) => {
  return (
    <>
      <Form className="space-y-5">
        <div className={submitCount ? (errors.nama_pendidikan ? 'has-error' : 'has-success') : ''}>
          <InputText
            id={'nama_pendidikan'}
            name={'nama_pendidikan'}
            label={'Nama Pendidikan'}
            value={values.nama_pendidikan}
            error={errors.nama_pendidikan || ''}
            onChange={handleChange}
            placeholder={'Masukkan Nama Pendidikan'}
            isInputFilled={'Form Nama Pendidikan Sudah Terisi'}
          />
        </div>
      </Form>
    </>
  );
};

export default FormLayouts;
