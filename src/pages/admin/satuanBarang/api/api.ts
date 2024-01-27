import API_JSON from '../../../../configs/API_JSON';

const URL = 'satuan-barang';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}

export async function getById(id_satuan_barang: any) {
  return await API_JSON.get(`/api/${URL}/${id_satuan_barang}`);
}

export async function post(data: any) {
  return await API_JSON.post(`/api/${URL}`, data);
}

export async function put(id_satuan_barang: string, data: any) {
  return await API_JSON.put(`/api/${URL}/${id_satuan_barang}`, data);
}

export async function remove(id_satuan_barang: any) {
  return await API_JSON.delete(`/api/${URL}/${id_satuan_barang}`);
}
