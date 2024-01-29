import API_FORM from '../../../../configs/API_FORM';
import API_JSON from '../../../../configs/API_JSON';

const URL = 'admin';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}

export async function put(id_karyawan: string, data: any) {
  return await API_FORM.put(`/api/${URL}/${id_karyawan}`, data);
}
