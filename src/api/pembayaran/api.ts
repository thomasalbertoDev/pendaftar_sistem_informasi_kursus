import API_FORM from '../../configs/API_FORM';
import API_JSON from '../../configs/API_JSON';

const URL = 'pembayaran';

export async function getByUser() {
  return await API_JSON.get(`/api/${URL}/user`);
}

export async function createPembayaran(id_pendaftaran: string, data: object) {
  return await API_FORM.post(`/api/${URL}/${id_pendaftaran}`, data);
}
