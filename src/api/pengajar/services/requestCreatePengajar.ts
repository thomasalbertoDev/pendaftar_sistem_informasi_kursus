import { post } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Pengajar Berhasil Ditambahkan!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Pengajar Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = () => {
  ShowToast('error', 'Pengajar Sudah Ada!');
  return false;
};

type Pengajar = {
  nama_pengajar: string;
  no_telepon_pengajar: string;
  gelar_pengajar: string;
  keahlian_pengajar: string;
  pengalaman_pengajar: string;
  foto_pengajar: string;
  sertifikat_pengajar: string;
};

interface PengajarResponse {
  status: number;
  data: {
    data: Pengajar[];
  };
}

export const requestCreatePengajar = async (values: Pengajar) => {
  try {
    const data: Pengajar = {
      nama_pengajar: values.nama_pengajar,
      no_telepon_pengajar: values.no_telepon_pengajar,
      gelar_pengajar: values.gelar_pengajar,
      keahlian_pengajar: values.keahlian_pengajar,
      pengalaman_pengajar: values.pengalaman_pengajar,
      foto_pengajar: values.foto_pengajar,
      sertifikat_pengajar: values.sertifikat_pengajar,
    };
    const response: PengajarResponse = await post(data);
    if (response.status === 201) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    if ((error as Error | any).response.status === 409) {
      return handleErrorConflict();
    } else {
      return handleError();
    }
  }
};
