import React from 'react';
import { Form } from 'formik';
import InputText from '../../../../components/forms/Input/InputText';
import InputNumber from '../../../../components/forms/Input/InputNumber';
import ProvinsiSelect from '../../../../utils/ProvinsiSelect';
import KabupatenSelect from '../../../../utils/KabupatenSelect';
import KecamatanSelect from '../../../../utils/KecamatanSelect';
import KelurahanSelect from '../../../../utils/KelurahanSelect';

interface Sekolah {
  npsn: number;
  nama_sekolah: string;
  alamat: string;
  kode_pos: number;
  provinsi: string;
  kabupaten: string;
  kecamatan: string;
  kelurahan: string;
  status_sekolah: string;
  jenjang_pendidikan: string;
  akreditasi: string;
  email_sekolah: string;
  no_telepon_sekolah: string;
}

interface FormLayoutsProps {
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  submitCount: number;
  values: Sekolah;
  setFieldValue: (field: string, value: number | string | boolean, shouldValidate?: boolean | undefined) => void;
  selectedProvinsiId: string;
  setSelectedProvinsiId: string | number | any;
  selectedKabupatenId: string;
  setSelectedKabupatenId: string | number | any;
  selectedKecamatanId: string;
  setSelectedKecamatanId: string | number | any;
  selectedKelurahanId?: string;
  setSelectedKelurahanId?: string | number | any;
}

const FormLayouts: React.FC<FormLayoutsProps> = ({
  errors,
  handleChange,
  submitCount,
  values,
  setFieldValue,
  selectedProvinsiId,
  setSelectedProvinsiId,
  selectedKabupatenId,
  setSelectedKabupatenId,
  selectedKecamatanId,
  setSelectedKecamatanId,
  selectedKelurahanId,
  setSelectedKelurahanId,
}) => {
  return (
    <>
      <Form>
        {/* NPSN , Nama Sekolah */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* NPSN */}
          <div className={submitCount ? (errors.npsn ? 'has-error' : 'has-success') : ''}>
            <InputNumber
              id={'npsn'}
              name={'npsn'}
              label={'NPSN'}
              value={values.npsn}
              onChange={handleChange}
              error={errors.npsn || ''}
              placeholder={'Masukkan NPSN...'}
              isInputFilled={'Form NPSN Sudah Terisi'}
            />
          </div>

          {/* Nama Sekolah */}
          <div className={submitCount ? (errors.nama_sekolah ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'nama_sekolah'}
              name={'nama_sekolah'}
              label={'Nama Sekolah'}
              value={values.nama_sekolah}
              onChange={handleChange}
              error={errors.nama_sekolah || ''}
              placeholder={'Masukkan Nama Sekolah...'}
              isInputFilled={'Form Nama Sekolah Sudah Terisi'}
            />
          </div>
        </div>

        {/* Alamat , Kode Pos */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Alamat */}
          <div className={submitCount ? (errors.alamat ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'alamat'}
              name={'alamat'}
              label={'Alamat Sekolah'}
              value={values.alamat}
              onChange={handleChange}
              error={errors.alamat || ''}
              placeholder={'Masukkan Alamat Sekolah...'}
              isInputFilled={'Form Alamat Sekolah Sudah Terisi'}
            />
          </div>

          {/* Kode Pos */}
          <div className={submitCount ? (errors.kode_pos ? 'has-error' : 'has-success') : ''}>
            <InputNumber
              id={'kode_pos'}
              name={'kode_pos'}
              label={'Kode Pos'}
              value={values.kode_pos}
              onChange={handleChange}
              error={errors.kode_pos || ''}
              placeholder={'Masukkan Kode Pos...'}
              isInputFilled={'Form Kode Pos Sudah Terisi'}
            />
          </div>
        </div>

        {/* Provinsi , Kabupaten , Kecamatan , Kelurahan */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className={submitCount ? (errors.provinsi ? 'has-error' : 'has-success') : ''}>
            <ProvinsiSelect
              id={'provinsi'}
              name={'provinsi'}
              label={'Provinsi'}
              error={errors.provinsi || ''}
              value={selectedProvinsiId}
              onChange={(e: string) => {
                setFieldValue('provinsi', (values.provinsi = e));
              }}
              placeholder={'--- Pilih Provinsi ---'}
              isInputFilled={'Form Provinsi Sudah Terisi'}
              onProvinsiChange={(value: string) => setSelectedProvinsiId(value)}
            />
          </div>

          {selectedProvinsiId && (
            <div className={submitCount ? (errors.kabupaten ? 'has-error' : 'has-success') : ''}>
              <KabupatenSelect
                id={'kabupaten'}
                name={'kabupaten'}
                label={'Kabupaten'}
                error={errors.kabupaten || ''}
                value={selectedKabupatenId}
                onChange={(e: string) => {
                  setFieldValue('kabupaten', (values.kabupaten = e));
                }}
                provinsiId={selectedProvinsiId}
                placeholder={'--- Pilih Kabupaten ---'}
                isInputFilled={'Form Kabupaten Sudah Terisi'}
                onKabupatenChange={(value: string) => setSelectedKabupatenId(value)}
              />
            </div>
          )}

          {selectedKabupatenId && (
            <div className={submitCount ? (errors.kecamatan ? 'has-error' : 'has-success') : ''}>
              <KecamatanSelect
                id={'kecamatan'}
                name={'kecamatan'}
                label={'Kecamatan'}
                error={errors.kecamatan || ''}
                value={selectedKecamatanId}
                onChange={(e: string) => {
                  setFieldValue('kecamatan', (values.kecamatan = e));
                }}
                placeholder={'--- Pilih Kecamatan ---'}
                kabupatenId={selectedKabupatenId}
                isInputFilled={'Form Kecamatan Sudah Terisi'}
                onKecamatanChange={(value: string) => setSelectedKecamatanId(value)}
              />
            </div>
          )}

          {selectedKecamatanId && (
            <div className={submitCount ? (errors.kelurahan ? 'has-error' : 'has-success') : ''}>
              <KelurahanSelect
                id={'kelurahan'}
                name={'kelurahan'}
                label={'Kelurahan'}
                value={selectedKelurahanId}
                error={errors.kelurahan || ''}
                onChange={(e: string) => {
                  setFieldValue('kelurahan', (values.kelurahan = e));
                }}
                kecamatanId={selectedKecamatanId}
                placeholder={'--- Pilih Kelurahan ---'}
                isInputFilled={'Form Kelurahan Sudah Terisi'}
                onKelurahanChange={(value: string) => setSelectedKelurahanId(value)}
              />
            </div>
          )}
        </div>

        {/* Status Sekolaj , Jenjang Pendidikan , Akreditasi */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Status Sekolah */}
          <div className={submitCount ? (errors.status_sekolah ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'status_sekolah'}
              name={'status_sekolah'}
              label={'Status Sekolah'}
              value={values.status_sekolah}
              onChange={handleChange}
              error={errors.status_sekolah || ''}
              placeholder={'Masukkan Status Sekolah...'}
              isInputFilled={'Form Status Sekolah Sudah Terisi'}
            />
          </div>

          {/* Jenjang Pendidikan */}
          <div className={submitCount ? (errors.jenjang_pendidikan ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'jenjang_pendidikan'}
              name={'jenjang_pendidikan'}
              label={'Jenjang Pendidikan'}
              value={values.jenjang_pendidikan}
              onChange={handleChange}
              error={errors.jenjang_pendidikan || ''}
              placeholder={'Masukkan Jenjang Pendidikan...'}
              isInputFilled={'Form Jenjang Pendidikan Sudah Terisi'}
            />
          </div>

          {/* Akreditasi */}
          <div className={submitCount ? (errors.akreditasi ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'akreditasi'}
              name={'akreditasi'}
              label={'Akreditasi Sekolah'}
              value={values.akreditasi}
              error={errors.akreditasi || ''}
              onChange={handleChange}
              placeholder={'Masukkan Akreditasi Sekolah...'}
              isInputFilled={'Form Akreditasi Sekolah Sudah Terisi'}
            />
          </div>
        </div>

        {/* Email , No Telepon Sekolah */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Email */}
          <div className={submitCount ? (errors.email_sekolah ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'email_sekolah'}
              name={'email_sekolah'}
              label={'Email Sekolah'}
              value={values.email_sekolah}
              error={errors.email_sekolah || ''}
              onChange={handleChange}
              placeholder={'Masukkan Email Sekolah...'}
              isInputFilled={'Form Email Sekolah Sudah Terisi'}
            />
          </div>

          {/* No Telepon Sekolah */}
          <div className={submitCount ? (errors.no_telepon_sekolah ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'no_telepon_sekolah'}
              name={'no_telepon_sekolah'}
              label={'No Telepon Sekolah cth(8123456789)'}
              error={errors.no_telepon_sekolah || ''}
              value={values.no_telepon_sekolah}
              onChange={handleChange}
              placeholder={'Masukkan No Telepon Sekolah...'}
              isInputFilled={'Form No Telepon Sekolah Sudah Terisi'}
            />
          </div>
        </div>
      </Form>
    </>
  );
};

export default FormLayouts;
