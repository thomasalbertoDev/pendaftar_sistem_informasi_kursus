import API_FORM from '../../configs/API_FORM';

const URL = 'pembayaran';

export async function createPembayaran(id_pendaftaran: string, data: object) {
  return await API_FORM.post(`/api/${URL}/${id_pendaftaran}`, data);
}
