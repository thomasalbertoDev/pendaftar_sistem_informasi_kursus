import React from 'react';
import { Form } from 'formik';
import InputText from '../../../../components/forms/Input/InputText';
import InputFile from '../../../../components/forms/Input/InputFile';
import TrimValue from '../../../../helpers/TrimValue';
import InputEmail from '../../../../components/forms/Input/InputEmail';
import InputNumber from '../../../../components/forms/Input/InputNumber';
import AgamaSelect from '../../../../utils/AgamaSelect';
import DateDefault from '../../../../components/forms/date/DateDefault';
import KursusSelect from '../../../../utils/KursusSelect';
import PreviewImage from '../../../../utils/PreviewImage';
import SekolahSelect from '../../../../utils/SekolahSelect';
import PekerjaanSelect from '../../../../utils/PekerjaanSelect';
import PendidikanSelect from '../../../../utils/PendidikanSelect';
import PenghasilanSelect from '../../../../utils/PenghasilanSelect';
import JenisKelaminSelect from '../../../../utils/JenisKelaminSelect';

interface FormLayoutsProps {
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  submitCount: number;
  values: { [key: string]: any };
  setFieldValue: (field: string, value: any) => void;
}

const FormLayouts: React.FunctionComponent<FormLayoutsProps> = ({ errors, handleChange, submitCount, values, setFieldValue }) => {
  return (
    <>
      <Form>
        {/* Data Kursus */}
        <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-4 mb-5 mt-10 bg-white dark:bg-black">
          <div className="flex items-center justify-between mb-8 px-4 mt-5">
            <h5 className="font-semibold text-xl dark:text-white-light">Data Kursus</h5>
          </div>

          {/* Kursus_ID */}
          <div className={submitCount ? (errors.kursus_ID ? 'has-error' : 'has-success') : 'px-4'}>
            <KursusSelect
              id={'kursus_ID'}
              name={'kursus_ID'}
              label={'Kursus'}
              value={values.kursus_ID}
              placeholder={'--- Pilih Kursus ---'}
              error={errors.kursus_ID}
              isInputFilled={'Form Kursus Sudah Dipilih'}
              onChange={(e: any) => {
                setFieldValue('kursus_ID', (values.kursus_ID = e.value));
              }}
            />
          </div>
        </div>

        {/* Data Pribadi */}
        <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-4 mb-5 mt-5 bg-white dark:bg-black">
          <div className="flex items-center justify-between mb-8 px-4 mt-5">
            <h5 className="font-semibold text-xl dark:text-white-light">Data Pribadi</h5>
          </div>

          <div className="px-4">
            {/* NISN , NIS , NIK */}
            <div className="grid md:grid-cols-3 gap-4 ">
              {/* NISN */}
              <div className={submitCount ? (errors.nisn ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'nisn'}
                  name={'nisn'}
                  label={'NISN (Nomor Induk Siswa Nasional)'}
                  value={values.nisn}
                  error={errors.nisn}
                  onChange={handleChange}
                  placeholder={'Masukkan NISN Anda...'}
                  isInputFilled={'Form NISN Sudah Diisi'}
                />
              </div>

              {/* NIS */}
              <div className={submitCount ? (errors.nis ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'nis'}
                  name={'nis'}
                  label={'NIS (Nomor Induk Siswa)'}
                  value={values.nis}
                  error={errors.nis}
                  onChange={handleChange}
                  placeholder={'Masukkan NIS Anda...'}
                  isInputFilled={'Form NIS Sudah Diisi'}
                />
              </div>

              {/* NIK */}
              <div className={submitCount ? (errors.nik ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'nik'}
                  name={'nik'}
                  label={'NIK (Nomor Induk Keluarga)'}
                  value={values.nik}
                  error={errors.nik}
                  onChange={handleChange}
                  placeholder={'Masukkan NIK Anda...'}
                  isInputFilled={'Form NIK Sudah Diisi'}
                />
              </div>
            </div>

            {/* Nama Lengkap , Jenis Kelamin */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Nama Lengkap */}
              <div className={submitCount ? (errors.nama_lengkap ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'nama_lengkap'}
                  name={'nama_lengkap'}
                  label={'Nama Lengkap'}
                  value={values.nama_lengkap}
                  onChange={handleChange}
                  error={errors.nama_lengkap || ''}
                  placeholder={'Masukkan Nama Lengkap Anda...'}
                  isInputFilled={'Form Nama Lengkap Sudah Terisi'}
                />
              </div>

              {/* Jenis Kelamin */}
              <div className={submitCount ? (errors.jenis_kelamin ? 'has-error' : 'has-success') : ''}>
                <JenisKelaminSelect
                  id={'jenis_kelamin'}
                  name={'jenis_kelamin'}
                  label={'Jenis Kelamin'}
                  error={errors.jenis_kelamin || ''}
                  value={values.jenis_kelamin}
                  onChange={(e: string | any) => {
                    setFieldValue('jenis_kelamin', e.value);
                  }}
                  isInputFilled={'Form Jenis Kelamin Sudah Terisi'}
                />
              </div>

              {/* agama_ID */}
              <div className={submitCount ? (errors.agama_ID ? 'has-error' : 'has-success') : ''}>
                <AgamaSelect
                  id={'agama_ID'}
                  name={'agama_ID'}
                  label={'Agama'}
                  value={values.agama_ID}
                  placeholder={'--- Pilih Agama ---'}
                  error={errors.agama_ID}
                  isInputFilled={'Form Agama Sudah Diisi'}
                  onChange={(e: any) => {
                    setFieldValue('agama_ID', (values.agama_ID = e.value));
                  }}
                />
              </div>
            </div>

            {/* Tempat Lahir , Tanggal Lahir */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Tempat Lahir */}
              <div className={submitCount ? (errors.tempat_lahir ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'tempat_lahir'}
                  name={'tempat_lahir'}
                  label={'Tempat Lahir'}
                  value={values.tempat_lahir}
                  onChange={handleChange}
                  error={errors.tempat_lahir || ''}
                  placeholder={'Masukkan Tempat Lahir Anda...'}
                  isInputFilled={'Form Tempat Lahir Sudah Terisi'}
                />
              </div>

              {/* Tanggal Lahir */}
              <div className={submitCount ? (errors.tanggal_lahir ? 'has-error' : 'has-success') : ''}>
                <DateDefault
                  id={'tanggal_lahir'}
                  name={'tanggal_lahir'}
                  label={'Tanggal Lahir'}
                  value={TrimValue(values.tanggal_lahir)}
                  onChange={(date) => {
                    setFieldValue('tanggal_lahir', date[0]);
                  }}
                  error={typeof errors.tanggal_lahir === 'string' ? errors.tanggal_lahir : ''}
                  placeholder={'Masukkan Tanggal Lahir Anda...'}
                  isInputFilled={'Form Tanggal Lahir Sudah Terisi'}
                />
              </div>
            </div>

            {/* Email , No Telepon */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Email */}
              <div className={submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}>
                <InputEmail
                  id={'email'}
                  name={'email'}
                  label={'Email'}
                  value={values.email}
                  error={errors.email}
                  onChange={handleChange}
                  placeholder={'Masukkan Email Anda...'}
                  isInputFilled={'Form Email Sudah Diisi'}
                />
              </div>

              {/* No Telepon */}
              <div className={submitCount ? (errors.no_telepon ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'no_telepon'}
                  name={'no_telepon'}
                  label={'No Telepon cth(8123456789)'}
                  value={values.no_telepon || 0}
                  error={errors.no_telepon}
                  onChange={handleChange}
                  placeholder={'Masukkan No Telepon Anda...'}
                  isInputFilled={'Form No Telepon Sudah Diisi'}
                />
              </div>
            </div>

            {/* Alamat */}
            <div className={submitCount ? (errors.alamat ? 'has-error' : 'has-success') : ''}>
              <InputText
                id={'alamat'}
                name={'alamat'}
                label={'Alamat'}
                value={values.alamat}
                error={errors.alamat}
                onChange={handleChange}
                placeholder={'Masukkan Alamat Anda...'}
                isInputFilled={'Form Alamat Sudah Diisi'}
              />
            </div>

            {/* pas Foto */}
            <div className={submitCount ? (errors.pas_foto ? 'has-error' : 'has-success') : ''}>
              <InputFile
                id={'pas_foto'}
                name={'pas_foto'}
                label={'Pas Foto (Ukuran 3 x 3)'}
                value={values.pas_foto}
                onChange={(e: any) => {
                  setFieldValue('pas_foto', e.target.files[0]);
                }}
                error={errors.pas_foto || ''}
                isInputFilled={'Form Pas Foto Sudah Terisi'}
              />

              {values.pas_foto && (values.pas_foto as any) instanceof File ? (
                <PreviewImage image={values.pas_foto} />
              ) : values.pas_foto ? (
                <div className="custom-file-container__image-preview relative">
                  <img src={`${import.meta.env.VITE_API_URL}/${values.pas_foto}`} alt="Pas Foto" />
                </div>
              ) : null}
            </div>

            {/* Foto KK */}
            <div className={submitCount ? (errors.foto_kk ? 'has-error' : 'has-success') : ''}>
              <InputFile
                id={'foto_kk'}
                name={'foto_kk'}
                label={'Foto KK  (Kartu Keluarga)'}
                value={values.foto_kk}
                onChange={(e: any) => {
                  setFieldValue('foto_kk', e.target.files[0]);
                }}
                error={errors.foto_kk || ''}
                isInputFilled={'Form Foto Keluarga Sudah Terisi'}
              />

              {values.foto_kk && (values.foto_kk as any) instanceof File ? (
                <PreviewImage image={values.foto_kk} />
              ) : values.foto_kk ? (
                <div className="custom-file-container__image-preview relative">
                  <img src={`${import.meta.env.VITE_API_URL}/${values.foto_kk}`} alt="Foto KK" />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Data Orang Tua */}
        <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-4 mb-5 mt-5 bg-white dark:bg-black">
          <div className="flex items-center justify-between mb-8 px-4 mt-5">
            <h5 className="font-semibold text-xl dark:text-white-light">Data Orang Tua</h5>
          </div>

          <div className="px-4">
            {/* Data Ayah */}
            <div className="grid md:grid-cols-5 gap-4 mb-5">
              {/* Nama Ayah */}
              <div className={submitCount ? (errors.nama_ayah ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'nama_ayah'}
                  name={'nama_ayah'}
                  label={'Nama Lengkap Ayah'}
                  value={values.nama_ayah}
                  onChange={handleChange}
                  error={errors.nama_ayah || ''}
                  placeholder={'Masukkan Nama Lengkap Ayah Anda...'}
                  isInputFilled={'Form Nama Lengkap Ayah Sudah Terisi'}
                />
              </div>

              {/* Pekerjaan Ayah */}
              <div className={submitCount ? (errors.pekerjaan_ayah_ID ? 'has-error' : 'has-success') : ''}>
                <PekerjaanSelect
                  id={'pekerjaan_ayah_ID'}
                  name={'pekerjaan_ayah_ID'}
                  label={'Pekerjaan Ayah'}
                  value={values.pekerjaan_ayah_ID}
                  error={errors.pekerjaan_ayah_ID}
                  placeholder={'--- Pilih Pekerjaan ---'}
                  isInputFilled={'Form Pekerjaan Sudah Di Isi'}
                  onChange={(e: any) => {
                    setFieldValue('pekerjaan_ayah_ID', (values.pekerjaan_ayah_ID = e.value));
                  }}
                />
              </div>

              {/* No Telepon Ayah */}
              <div className={submitCount ? (errors.no_telepon_ayah ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'no_telepon_ayah'}
                  name={'no_telepon_ayah'}
                  label={'No Telepon Ayah cth(8123456789)'}
                  value={values.no_telepon_ayah || 0}
                  error={errors.no_telepon_ayah}
                  onChange={handleChange}
                  placeholder={'Masukkan No Telepon Ayah Anda...'}
                  isInputFilled={'Form No Telepon Sudah Diisi'}
                />
              </div>

              {/* Pendidikan Ayah */}
              <div className={submitCount ? (errors.pendidikan_ayah_ID ? 'has-error' : 'has-success') : ''}>
                <PendidikanSelect
                  id={'pendidikan_ayah_ID'}
                  name={'pendidikan_ayah_ID'}
                  label={'Pendidikan Ayah'}
                  value={values.pendidikan_ayah_ID}
                  placeholder={'--- Pilih Pendidikan ---'}
                  error={errors.pendidikan_ayah_ID}
                  isInputFilled={'Form Pendidikan Sudah Di Isi'}
                  onChange={(e: any) => {
                    setFieldValue('pendidikan_ayah_ID', (values.pendidikan_ayah_ID = e.value));
                  }}
                />
              </div>

              {/* Penghasilan Ayah */}
              <div className={submitCount ? (errors.penghasilan_ayah_ID ? 'has-error' : 'has-success') : ''}>
                <PenghasilanSelect
                  id={'penghasilan_ayah_ID'}
                  name={'penghasilan_ayah_ID'}
                  label={'Penghasilan Ayah'}
                  value={values.penghasilan_ayah_ID}
                  placeholder={'--- Pilih Penghasilan ---'}
                  error={errors.penghasilan_ayah_ID}
                  isInputFilled={'Form Penghasilan Sudah Diisi'}
                  onChange={(e: any) => {
                    setFieldValue('penghasilan_ayah_ID', (values.penghasilan_ayah_ID = e.value));
                  }}
                />
              </div>
            </div>

            {/* Data Ibu */}
            <div className="grid md:grid-cols-5 gap-4">
              {/* Nama Ibu */}
              <div className={submitCount ? (errors.nama_ibu ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'nama_ibu'}
                  name={'nama_ibu'}
                  label={'Nama Lengkap Ibu'}
                  value={values.nama_ibu}
                  onChange={handleChange}
                  error={errors.nama_ibu || ''}
                  placeholder={'Masukkan Nama Lengkap Ibu Anda...'}
                  isInputFilled={'Form Nama Lengkap Ibu Sudah Terisi'}
                />
              </div>

              {/* Pekerjaan Ibu */}
              <div className={submitCount ? (errors.pekerjaan_ibu_ID ? 'has-error' : 'has-success') : ''}>
                <PekerjaanSelect
                  id={'pekerjaan_ibu_ID'}
                  name={'pekerjaan_ibu_ID'}
                  label={'Pekerjaan Ibu'}
                  value={values.pekerjaan_ibu_ID}
                  placeholder={'--- Pilih Pekerjaan ---'}
                  error={errors.pekerjaan_ibu_ID}
                  isInputFilled={'Form Pekerjaan Sudah Di Isi'}
                  onChange={(e: any) => {
                    setFieldValue('pekerjaan_ibu_ID', (values.pekerjaan_ibu_ID = e.value));
                  }}
                />
              </div>

              {/* No Telepon Ibu */}
              <div className={submitCount ? (errors.no_telepon_ibu ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'no_telepon_ibu'}
                  name={'no_telepon_ibu'}
                  label={'No Telepon Ibu cth(08123456789)'}
                  value={values.no_telepon_ibu || 0}
                  error={errors.no_telepon_ibu}
                  onChange={handleChange}
                  placeholder={'Masukkan No Telepon Ibu Anda...'}
                  isInputFilled={'Form No Telepon Sudah Diisi'}
                />
              </div>

              {/* Pendidikan Ibu */}
              <div className={submitCount ? (errors.pendidikan_ibu_ID ? 'has-error' : 'has-success') : ''}>
                <PendidikanSelect
                  id={'pendidikan_ibu_ID'}
                  name={'pendidikan_ibu_ID'}
                  label={'Pendidikan Ibu'}
                  value={values.pendidikan_ibu_ID}
                  placeholder={'--- Pilih Pendidikan ---'}
                  error={errors.pendidikan_ibu_ID}
                  isInputFilled={'Form Pendidikan Sudah Di Isi'}
                  onChange={(e: any) => {
                    setFieldValue('pendidikan_ibu_ID', (values.pendidikan_ibu_ID = e.value));
                  }}
                />
              </div>

              {/* Penghasilan Ibu */}
              <div className={submitCount ? (errors.penghasilan_ibu_ID ? 'has-error' : 'has-success') : ''}>
                <PenghasilanSelect
                  id={'penghasilan_ibu_ID'}
                  name={'penghasilan_ibu_ID'}
                  label={'Penghasilan Ibu'}
                  value={values.penghasilan_ibu_ID}
                  placeholder={'--- Pilih Penghasilan ---'}
                  error={errors.penghasilan_ibu_ID}
                  isInputFilled={'Form Penghasilan Sudah Diisi'}
                  onChange={(e: any) => {
                    setFieldValue('penghasilan_ibu_ID', (values.penghasilan_ibu_ID = e.value));
                  }}
                />
              </div>
            </div>

            {/* Slip Gaji Ayah Ibu */}
            <div className={submitCount ? (errors.slip_gaji_ayah_ibu ? 'has-error' : 'has-success') : ''}>
              <InputFile
                id={'slip_gaji_ayah_ibu'}
                name={'slip_gaji_ayah_ibu'}
                label={'Slip Gaji Ayah Ibu (Format PDF)'}
                value={values.slip_gaji_ayah_ibu}
                error={errors.slip_gaji_ayah_ibu || ''}
                onChange={(e: any) => {
                  setFieldValue('slip_gaji_ayah_ibu', e.target.files[0]);
                }}
                isInputFilled={'Form Slip Gaji Ayah Ibu Sudah Terisi'}
              />
            </div>
          </div>
        </div>

        {/* Data Sekolah */}
        <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-4 mb-5 mt-5 bg-white dark:bg-black">
          <div className="flex items-center justify-between mb-8 px-4 mt-5">
            <h5 className="font-semibold text-xl dark:text-white-light">Data Sekolah</h5>
          </div>

          <div className="px-4">
            {/* Sekolah_ID */}
            <div className={submitCount ? (errors.sekolah_ID ? 'has-error' : 'has-success') : ''}>
              <SekolahSelect
                id={'sekolah_ID'}
                name={'sekolah_ID'}
                label={'Sekolah'}
                value={values.sekolah_ID}
                placeholder={'--- Pilih Sekolah ---'}
                error={errors.sekolah_ID}
                isInputFilled={'Form Sekolah Sudah Diisi'}
                onChange={(e: any) => {
                  setFieldValue('sekolah_ID', (values.sekolah_ID = e.value));
                }}
              />
            </div>

            {/* Nilai Semester 1 - 6 */}
            <div className="grid md:grid-cols-6 gap-4 mt-8">
              {/* Nilai Semester 1 */}
              <div className={submitCount ? (errors.nilai_semester_1 ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'nilai_semester_1'}
                  name={'nilai_semester_1'}
                  label={'Nilai Semester 1'}
                  value={values.nilai_semester_1}
                  error={errors.nilai_semester_1}
                  onChange={handleChange}
                  placeholder={'Masukkan Nilai Semester 1 Anda...'}
                  isInputFilled={'Form Nilai Semester 1 Sudah Diisi'}
                />
              </div>

              {/* Nilai Semester 2 */}
              <div className={submitCount ? (errors.nilai_semester_2 ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'nilai_semester_2'}
                  name={'nilai_semester_2'}
                  label={'Nilai Semester 2'}
                  value={values.nilai_semester_2}
                  error={errors.nilai_semester_2}
                  onChange={handleChange}
                  placeholder={'Masukkan Nilai Semester 2 Anda...'}
                  isInputFilled={'Form Nilai Semester 2 Sudah Diisi'}
                />
              </div>

              {/* Nilai Semester 3 */}
              <div className={submitCount ? (errors.nilai_semester_3 ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'nilai_semester_3'}
                  name={'nilai_semester_3'}
                  label={'Nilai Semester 3'}
                  value={values.nilai_semester_3}
                  error={errors.nilai_semester_3}
                  onChange={handleChange}
                  placeholder={'Masukkan Nilai Semester 3 Anda...'}
                  isInputFilled={'Form Nilai Semester 3 Sudah Diisi'}
                />
              </div>

              {/* Nilai Semester 4 */}
              <div className={submitCount ? (errors.nilai_semester_4 ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'nilai_semester_4'}
                  name={'nilai_semester_4'}
                  label={'Nilai Semester 4'}
                  value={values.nilai_semester_4}
                  error={errors.nilai_semester_4}
                  onChange={handleChange}
                  placeholder={'Masukkan Nilai Semester 4 Anda...'}
                  isInputFilled={'Form Nilai Semester 4 Sudah Diisi'}
                />
              </div>

              {/* Nilai Semester 5 */}
              <div className={submitCount ? (errors.nilai_semester_5 ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'nilai_semester_5'}
                  name={'nilai_semester_5'}
                  label={'Nilai Semester 5 (Optional)'}
                  value={values.nilai_semester_5}
                  error={errors.nilai_semester_5}
                  onChange={handleChange}
                  placeholder={'Masukkan Nilai Semester 5 Anda...'}
                  isInputFilled={'Form Nilai Semester 5 Sudah Diisi'}
                />
              </div>

              {/* Nilai Semester 5 */}
              <div className={submitCount ? (errors.nilai_semester_6 ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'nilai_semester_6'}
                  name={'nilai_semester_6'}
                  label={'Nilai Semester 6 (Optional)'}
                  value={values.nilai_semester_6}
                  error={errors.nilai_semester_6}
                  onChange={handleChange}
                  placeholder={'Masukkan Nilai Semester 6 Anda...'}
                  isInputFilled={'Form Nilai Semester 6 Sudah Diisi'}
                />
              </div>
            </div>

            {/* Raport */}
            <div className={submitCount ? (errors.raport ? 'has-error' : 'has-success') : ''}>
              <InputFile
                id={'raport'}
                name={'raport'}
                label={'Raport (Format PDF)'}
                value={values.raport}
                error={errors.raport}
                onChange={(e: any) => {
                  setFieldValue('raport', e.target.files[0]);
                }}
                isInputFilled={'Form Raport Sudah Terisi'}
              />
            </div>

            {/* Prestasi */}
            <div className={submitCount ? (errors.prestasi ? 'has-error' : 'has-success') : ''}>
              <InputFile
                id={'prestasi'}
                name={'prestasi'}
                label={'Prestasi (Optional | Format PDF)'}
                value={values.prestasi}
                error={errors.prestasi}
                onChange={(e: any) => {
                  setFieldValue('prestasi', e.target.files[0]);
                }}
                isInputFilled={'Form prestasi Sudah Terisi'}
              />
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default FormLayouts;
