import API_JSON from '../../../../configs/API_JSON';

const URL = 'laporan-barang-masuk';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}
