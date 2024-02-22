import React from 'react';
import { Form } from 'formik';
import InputText from '../../../../components/forms/Input/InputText';
import InputFile from '../../../../components/forms/Input/InputFile';
import QuillBasic from '../../../../components/quills/QuillBasic';
import InputNumber from '../../../../components/forms/Input/InputNumber';
import PreviewImage from '../../../../utils/PreviewImage';

interface Pengajar {
  nama_pengajar: string;
  no_telepon_pengajar: string;
  gelar_pengajar: string;
  keahlian_pengajar: string;
  pengalaman_pengajar: string;
  foto_pengajar: string;
  sertifikat_pengajar: string;
}

interface FormLayoutsProps {
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  submitCount: number;
  values: Pengajar;
  setFieldValue: (field: string, value: Pengajar, shouldValidate?: boolean | undefined) => void;
}

const FormLayouts: React.FC<FormLayoutsProps> = ({ errors, handleChange, submitCount, values, setFieldValue }) => {
  return (
    <>
      <Form>
        {/* Nama Pengajar , No Telepon Pengajar */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Nama Pengajar */}
          <div className={submitCount ? (errors.nama_pengajar ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'nama_pengajar'}
              name={'nama_pengajar'}
              label={'Nama Pengajar'}
              value={values.nama_pengajar}
              onChange={handleChange}
              error={errors.nama_pengajar || ''}
              placeholder={'Masukkan Nama Pengajar'}
              isInputFilled={'Form Nama Pengajar Sudah Terisi'}
            />
          </div>

          {/* No Telepon Pengajar */}
          <div className={submitCount ? (errors.no_telepon_pengajar ? 'has-error' : 'has-success') : ''}>
            <InputNumber
              id={'no_telepon_pengajar'}
              name={'no_telepon_pengajar'}
              label={'No Telepon Pengajar (cth: 8123456789)'}
              value={Number(values.no_telepon_pengajar)}
              onChange={handleChange}
              error={errors.no_telepon_pengajar || ''}
              placeholder={'Masukkan No Telepon Pengajar...'}
              isInputFilled={'Form No Telepon Pengajar Sudah Terisi'}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Gelar */}
          <div className={submitCount ? (errors.gelar_pengajar ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'gelar_pengajar'}
              name={'gelar_pengajar'}
              label={'Gelar Pengajar'}
              value={values.gelar_pengajar}
              onChange={handleChange}
              error={errors.gelar_pengajar || ''}
              placeholder={'Masukkan Gelar Pengajar'}
              isInputFilled={'Form Gelar Pengajar Sudah Terisi'}
            />
          </div>

          {/* Keahlian */}
          <div className={submitCount ? (errors.keahlian_pengajar ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'keahlian_pengajar'}
              name={'keahlian_pengajar'}
              label={'Keahlian Pengajar'}
              value={values.keahlian_pengajar}
              onChange={handleChange}
              error={errors.keahlian_pengajar || ''}
              placeholder={'Masukkan Keahlian Pengajar'}
              isInputFilled={'Form Keahlian Pengajar Sudah Terisi'}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Sertifikat  */}
          <div className={submitCount ? (errors.sertifikat_pengajar ? 'has-error' : 'has-success') : ''}>
            <InputFile
              id={'sertifikat_pengajar'}
              name={'sertifikat_pengajar'}
              label={'Sertifikat Pengajar (Format PDF)'}
              value={values.sertifikat_pengajar}
              onChange={(e: any) => {
                setFieldValue('sertifikat_pengajar', e.target.files[0]);
              }}
              error={errors.sertifikat_pengajar || ''}
              isInputFilled={'Form Sertifikat Pengajar Sudah Terisi'}
            />
          </div>

          {/* Foto */}
          <div className={submitCount ? (errors.foto_pengajar ? 'has-error' : 'has-success') : ''}>
            <InputFile
              id={'foto_pengajar'}
              name={'foto_pengajar'}
              label={'Foto Pengajar'}
              value={values.foto_pengajar}
              onChange={(e: any) => {
                setFieldValue('foto_pengajar', e.target.files[0]);
              }}
              error={errors.foto_pengajar || ''}
              isInputFilled={'Form Foto Pengajar Sudah Terisi'}
            />

            {values.foto_pengajar && (values.foto_pengajar as any) instanceof File ? (
              <PreviewImage image={values.foto_pengajar} />
            ) : values.foto_pengajar ? (
              <div className="custom-file-container__image-preview relative">
                <img src={`${import.meta.env.VITE_API_URL}/${values.foto_pengajar}`} alt="Foto Pengajar" />
              </div>
            ) : null}
          </div>
        </div>

        {/* Pengalaman */}
        <div className={submitCount ? (errors.pengalaman_pengajar ? 'has-error' : 'has-success') : ''}>
          <QuillBasic
            id={'pengalaman_pengajar'}
            label={'Pengalaman Pengajar'}
            value={values.pengalaman_pengajar}
            onChange={(e: any) => {
              setFieldValue('pengalaman_pengajar', e);
            }}
            error={errors.pengalaman_pengajar || ''}
            isInputFilled={'Form Pengalaman Pengajar Sudah Terisi'}
            placeholder={'Masukkan Pengalaman Pengajar'}
          />
        </div>
      </Form>
    </>
  );
};

export default FormLayouts;
