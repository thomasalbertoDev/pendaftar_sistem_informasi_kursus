import API_JSON from '../../../../configs/API_JSON';

const URL = 'pengambilan-barang';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}

export async function post(data: any) {
  return await API_JSON.post(`/api/${URL}`, data);
}

export async function removeById(id_pengambilan_barang: any) {
  return await API_JSON.delete(`/api/${URL}/${id_pengambilan_barang}`);
}

export async function removeAll() {
  return await API_JSON.delete(`/api/${URL}`);
}
