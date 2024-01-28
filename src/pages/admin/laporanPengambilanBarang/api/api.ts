import API_JSON from '../../../../configs/API_JSON';

const URL = 'laporan-pengambilan-barang';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}
