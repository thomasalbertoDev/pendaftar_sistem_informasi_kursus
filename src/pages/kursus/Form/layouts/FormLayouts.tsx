import React from 'react';
import { Form } from 'formik';
import InputText from '../../../../components/forms/Input/InputText';
import TrimValue from '../../../../helpers/TrimValue';
import InputFile from '../../../../components/forms/Input/InputFile';
import QuillBasic from '../../../../components/quills/QuillBasic';
import InputNumber from '../../../../components/forms/Input/InputNumber';
import PreviewImage from '../../../../utils/PreviewImage';
import PengajarSelect from '../../../../utils/PengajarSelect';
import PreloadingTime from '../../../../components/forms/date/PreloadingTime';
import DateDefault from '../../../../components/forms/date/DateDefault';
import HariSelect from '../../../../utils/HariSelect';

interface FormLayoutsProps {
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  submitCount: number;
  values: Record<string, any>;
  setFieldValue: (field: string, value: Record<string, any>, shouldValidate?: boolean | undefined) => void;
}

const FormLayouts: React.FC<FormLayoutsProps> = ({ errors, handleChange, submitCount, values, setFieldValue }) => {
  return (
    <>
      <Form>
        {/* Nama Kursus , Topik Kursus */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Nama Kursus */}
          <div className={submitCount ? (errors.nama_kursus ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'nama_kursus'}
              name={'nama_kursus'}
              label={'Nama Kursus'}
              value={values.nama_kursus}
              onChange={handleChange}
              error={errors.nama_kursus || ''}
              placeholder={'Masukkan Nama Kursus...'}
              isInputFilled={'Form Nama Kursus Sudah Terisi'}
            />
          </div>

          {/* Topik Kursus */}
          <div className={submitCount ? (errors.topik_kursus ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'topik_kursus'}
              name={'topik_kursus'}
              label={'Topik Kursus'}
              value={values.topik_kursus}
              onChange={handleChange}
              error={errors.topik_kursus || ''}
              placeholder={'Masukkan Topik Kursus...'}
              isInputFilled={'Form Topik Kursus Sudah Terisi'}
            />
          </div>
        </div>

        {/* Jenjang Kursus ,  Pengajar */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Jenjang Kursus */}
          <div className={submitCount ? (errors.jenjang_kursus ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'jenjang_kursus'}
              name={'jenjang_kursus'}
              label={'Jenjang Kursus'}
              value={values.jenjang_kursus}
              onChange={handleChange}
              error={errors.jenjang_kursus || ''}
              placeholder={'Masukkan Jenjang Kursus...'}
              isInputFilled={'Form Jenjang Kursus Sudah Terisi'}
            />
          </div>

          {/* Pengajar */}
          <div className={submitCount ? (errors.pengajar_ID ? 'has-error' : 'has-success') : ''}>
            <PengajarSelect
              id={'pengajar_ID'}
              name={'pengajar_ID'}
              label={'Pengajar'}
              value={values.pengajar_ID}
              error={errors.pengajar_ID || ''}
              onChange={(e: any) => {
                setFieldValue('pengajar_ID', (values.pengajar_ID = e.value));
              }}
              placeholder={'--- Pilih Pengajar ---'}
              isInputFilled={'Form Pengajar Sudah Dipilih'}
            />
          </div>
        </div>

        {/* Jam Mulai , Jam Selesai */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Jam Mulai */}
          <div className={submitCount ? (errors.jam_mulai ? 'has-error' : 'has-success') : ''}>
            <PreloadingTime
              id={'jam_mulai'}
              name={'jam_mulai'}
              label={'Jam Mulai'}
              value={TrimValue(values.jam_mulai)}
              onChange={(time: any) => {
                setFieldValue('jam_mulai', time[0]);
              }}
              placeholder={'--- Pilih Jam Mulai ---'}
              error={errors.jam_mulai || ''}
              isInputFilled={'Form Jam Mulai Sudah Terisi'}
            />
          </div>

          {/* Jam Selesai */}
          <div className={submitCount ? (errors.jam_selesai ? 'has-error' : 'has-success') : ''}>
            <PreloadingTime
              id={'jam_selesai'}
              name={'jam_selesai'}
              label={'Jam Selesai'}
              value={TrimValue(values.jam_selesai)}
              onChange={(time: any) => {
                setFieldValue('jam_selesai', time[0]);
              }}
              placeholder={'--- Pilih Jam Selesai ---'}
              error={errors.jam_selesai || ''}
              isInputFilled={'Form Jam Selesai Sudah Terisi'}
            />
          </div>
        </div>

        {/* Tanggal Mulai , Tanggal selesai */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Tanggal mulai */}
          <div className={submitCount ? (errors.tanggal_mulai ? 'has-error' : 'has-success') : ''}>
            <DateDefault
              id={'tanggal_mulai'}
              name={'tanggal_mulai'}
              label={'Tanggal Mulai'}
              value={TrimValue(values.tanggal_mulai)}
              onChange={(date) => {
                setFieldValue('tanggal_mulai', date[0]);
              }}
              placeholder={'--- Pilih Tanggal Mulai ---'}
              error={errors.tanggal_mulai || ''}
              isInputFilled={'Form Tanggal Mulai Sudah Terisi'}
            />
          </div>

          {/* Tanggal Selesai */}
          <div className={submitCount ? (errors.tanggal_selesai ? 'has-error' : 'has-success') : ''}>
            <DateDefault
              id={'tanggal_selesai'}
              name={'tanggal_selesai'}
              label={'Tanggal Selesai'}
              value={TrimValue(values.tanggal_selesai)}
              onChange={(date) => {
                setFieldValue('tanggal_selesai', date[0]);
              }}
              placeholder={'--- Pilih Tanggal Selesai ---'}
              error={errors.tanggal_selesai || ''}
              isInputFilled={'Form Tanggal Selesai Sudah Terisi'}
            />
          </div>
        </div>

        {/* hari kursus  */}
        <div className={submitCount ? (errors.hari_kursus ? 'has-error' : 'has-success') : ''}>
          {/* Hari kursus */}
          <HariSelect
            id={'hari_kursus'}
            name={'hari_kursus'}
            label={'Hari Kursus'}
            value={values.hari_kursus}
            // onChange={(e: any) => {
            //   setFieldValue(
            //     'hari_kursus',
            //     e.map((item: any) => item.value)
            //   );
            // }}
            onChange={(e: any) => {
              setFieldValue('hari_kursus', e.map((item: any) => item.value));
            }}
            error={errors.hari_kursus}
            isInputFilled={'Form  Hari Kursus Sudah Terisi'}
          />
        </div>

        {/* Harga kursus , syarat kursus , modul kursus */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* harga Kursus */}
          <div className={submitCount ? (errors.harga_kursus ? 'has-error' : 'has-success') : ''}>
            <InputNumber
              id={'harga_kursus'}
              name={'harga_kursus'}
              label={'Harga Kursus'}
              value={values.harga_kursus}
              onChange={handleChange}
              placeholder={'Masukkan Harga Kursus...'}
              error={errors.harga_kursus || ''}
              isInputFilled={'Form Harga Kursus Sudah Terisi'}
            />
          </div>

          {/* Syarat kursus */}
          <div className={submitCount ? (errors.syarat_kursus ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'syarat_kursus'}
              name={'syarat_kursus'}
              label={'Syarat Kursus'}
              value={values.syarat_kursus}
              onChange={handleChange}
              error={errors.syarat_kursus || ''}
              placeholder={'Masukkan Syarat Kursus...'}
              isInputFilled={'Form Syarat Kursus Sudah Terisi'}
            />
          </div>

          <div className={submitCount ? (errors.modul_kursus ? 'has-error' : 'has-success') : ''}>
            <InputFile
              id={'modul_kursus'}
              name={'modul_kursus'}
              label={'Modul Kursus (Format PDF)'}
              value={values.modul_kursus}
              onChange={(e: any) => {
                setFieldValue('modul_kursus', e.target.files[0]);
              }}
              error={errors.modul_kursus || ''}
              isInputFilled={'Form Modul Kursus Sudah Terisi'}
            />
          </div>
        </div>

        {/* Deskripsi Kursus */}
        <div className={submitCount ? (errors.deskripsi_kursus ? 'has-error' : 'has-success') : ''}>
          <QuillBasic
            id={'deskripsi_kursus'}
            label={'Deskripsi Kursus'}
            value={values.deskripsi_kursus}
            onChange={(e: any) => {
              setFieldValue('deskripsi_kursus', e);
            }}
            error={errors.deskripsi_kursus || ''}
            isInputFilled={'Form Deskripsi Kursus Sudah Terisi'}
            placeholder={'Masukkan Deskripsi Kursus...'}
          />
        </div>

        {/* Foto Kursus */}
        <div className={submitCount ? (errors.foto_kursus ? 'has-error' : 'has-success') : ''}>
          <InputFile
            id={'foto_kursus'}
            name={'foto_kursus'}
            label={'Foto Kursus'}
            value={values.foto_kursus}
            onChange={(e: any) => {
              setFieldValue('foto_kursus', e.target.files[0]);
            }}
            error={errors.foto_kursus || ''}
            isInputFilled={'Form Foto Kursus Sudah Terisi'}
          />

          {values.foto_kursus && (values.foto_kursus as any) instanceof File ? (
            <PreviewImage image={values.foto_kursus} />
          ) : values.foto_kursus ? (
            <div className="custom-file-container__image-preview relative">
              <img src={`${import.meta.env.VITE_API_URL}/${values.foto_kursus}`} alt="Foto Kursus" />
            </div>
          ) : null}
        </div>
      </Form>
    </>
  );
};

export default FormLayouts;
