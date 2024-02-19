import { Form } from 'formik';
import InputText from '../../../components/forms/Input/InputText';
import TrimValue from '../../../helpers/TrimValue';
import InputFile from '../../../components/forms/Input/InputFile';
import DateDefault from '../../../components/forms/date/DateDefault';
import InputNumber from '../../../components/forms/Input/InputNumber';
import JenisKelaminSelect from '../../../utils/JenisKelaminSelect';

interface FormLayoutsProps {
  errors: { [key: string]: any };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitCount: number;
  values: { [key: string]: any };
  setFieldValue: (field: string, value: any) => void;
  setImagePreview: (preview: string) => void;
}

const FormLayouts: React.FC<FormLayoutsProps> = ({ errors, handleChange, submitCount, values, setFieldValue, setImagePreview }) => {
  return (
    <>
      <Form>
        {/* Nama Lengkap */}
        <div className={submitCount ? (errors.nama ? 'has-error' : 'has-success') : ''}>
          <InputText
            id={'nama'}
            name={'nama'}
            label={'Nama Lengkap'}
            value={values.nama || ''}
            onChange={handleChange}
            error={typeof errors.nama === 'string' ? errors.nama : ''}
            placeholder={'Masukkan Nama Lengkap Anda...'}
            isInputFilled={'Form Nama Lengkap Sudah Terisi'}
          />
        </div>

        {/* Tempat Lahir & Tanggal Lahir */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className={submitCount ? (errors.tempat_lahir ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'tempat_lahir'}
              name={'tempat_lahir'}
              label={'Tempat Lahir'}
              value={values.tempat_lahir || ''}
              onChange={handleChange}
              error={typeof errors.tempat_lahir === 'string' ? errors.tempat_lahir : ''}
              placeholder={'Masukkan Tempat Lahir Anda...'}
              isInputFilled={'Form Tempat Lahir Sudah Terisi'}
            />
          </div>
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

        {/* No Telepon & Jenis Kelamin */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className={submitCount ? (errors.no_telepon ? 'has-error' : 'has-success') : ''}>
            <InputNumber
              id={'no_telepon'}
              name={'no_telepon'}
              label={'No Telepon (cth: 8123456789)'}
              value={values.no_telepon}
              onChange={handleChange}
              error={typeof errors.no_telepon === 'string' ? errors.no_telepon : ''}
              placeholder={'Masukkan No Telepon Anda...'}
              isInputFilled={'Form No Telepon Sudah Terisi'}
            />
          </div>

          <div className={submitCount ? (errors.jenis_kelamin ? 'has-error' : 'has-success') : ''}>
            <JenisKelaminSelect
              id={'jenis_kelamin'}
              name={'jenis_kelamin'}
              label={'Jenis Kelamin'}
              error={typeof errors.jenis_kelamin === 'string' ? errors.jenis_kelamin : ''}
              value={values.jenis_kelamin}
              onChange={(value: any) => {
                setFieldValue('jenis_kelamin', value.value);
              }}
              isInputFilled={'Form Jenis Kelamin Sudah Terisi'}
            />
          </div>
        </div>

        {/* Instagram & Whatsapp */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className={submitCount ? (errors.instagram ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'instagram'}
              name={'instagram'}
              label={'Instagram'}
              value={values.instagram || ''}
              onChange={handleChange}
              error={typeof errors.instagram === 'string' ? errors.instagram : ''}
              placeholder={'Masukkan Link Instagram Anda...'}
              isInputFilled={'Form Instagram Sudah Terisi'}
            />
          </div>
          <div className={submitCount ? (errors.whatsapp ? 'has-error' : 'has-success') : ''}>
            <InputNumber
              id={'whatsapp'}
              name={'whatsapp'}
              label={'No Whatsapp (cth: 8123456789)'}
              value={values.whatsapp}
              onChange={handleChange}
              error={typeof errors.whatsapp === 'string' ? errors.whatsapp : ''}
              placeholder={'Masukkan Whatsapp Anda...'}
              isInputFilled={'Form Whatsapp Sudah Terisi'}
            />
          </div>
        </div>

        {/* Alamat & Foto Profil */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className={submitCount ? (errors.alamat ? 'has-error' : 'has-success') : ''}>
            <InputText
              id={'alamat'}
              name={'alamat'}
              label={'Alamat'}
              value={values.alamat || ''}
              onChange={handleChange}
              error={typeof errors.alamat === 'string' ? errors.alamat : ''}
              placeholder={'Masukkan Alamat Anda...'}
              isInputFilled={'Form Alamat Sudah Terisi'}
            />
          </div>

          <div className={submitCount ? (errors.foto_profil ? 'has-error' : 'has-success') : ''}>
            <InputFile
              id={'foto_profil'}
              name={'foto_profil'}
              label={'Foto Profil'}
              value={values.foto_profil || ''}
              error={typeof errors.foto_profil === 'string' ? errors.foto_profil : ''}
              onChange={(e: any) => {
                setFieldValue('foto_profil', e.target.files[0]);
                setImagePreview(URL.createObjectURL(e.target.files[0]));
              }}
              isInputFilled={'Foto Sudah Terisi'}
            />
          </div>
        </div>
      </Form>
    </>
  );
};

export default FormLayouts;
