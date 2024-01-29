import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { requestGetBarang } from '../barang/api/services/requestGetBarang';
import { requestGetKaryawan } from '../karyawan/api/services/requestGetKaryawan';
import { useEffect, useState } from 'react';
import { requestGetBarangMasuk } from '../barangMasuk/api/services/requestGetBarangMasuk';
import { requestGetPengambilanBarang } from '../pengambilanBarang/api/services/requestGetPengambilanBarang';
import IconArrowLeft from '../../../components/Icons/IconArrowLeft';

const initialState = {
  karyawan: [],
  barang: [],
  pengambilanBarang: [],
  barangMasuk: [],
};

const Index = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(initialState);

  useEffect(() => {
    dispatch(setPageTitle('Admin | Dashboard'));

    Promise.all([requestGetKaryawan(), requestGetBarang(), requestGetPengambilanBarang(), requestGetBarangMasuk()]).then(([karyawanRes, barangRes, pengambilanBarangRes, barangMasukRes]) => {
      setData({
        karyawan: karyawanRes,
        barang: barangRes,
        pengambilanBarang: pengambilanBarangRes,
        barangMasuk: barangMasukRes,
      });
    });
  }, [dispatch]);

  const getTotal = (key: keyof typeof data) => (data[key].length > 0 ? data[key].length : 0);

  const totalKaryawan = getTotal('karyawan');
  const totalBarang = getTotal('barang');
  const totalPengambilanBarang = getTotal('pengambilanBarang');
  const totalBarangMasuk = getTotal('barangMasuk');

  return (
    <>
      {/* Karyawan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 mb-6 text-white">
        <div className="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
          <div className="flex justify-between">
            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Karyawan</div>
          </div>
          <div className="flex items-center mt-5">
            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3">{totalKaryawan} Karyawan</div>
          </div>
          <div className="flex items-center font-semibold mt-5">
            <IconArrowLeft className="ltr:mr-2 rtl:ml-2 shrink-0" />
            Data Karyawan
          </div>
        </div>

        {/*  Barang */}
        <div className="panel bg-gradient-to-r from-blue-500 to-blue-400">
          <div className="flex justify-between">
            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Barang</div>
          </div>
          <div className="flex items-center mt-5">
            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {totalBarang} Barang </div>
          </div>
          <div className="flex items-center font-semibold mt-5">
            <IconArrowLeft className="ltr:mr-2 rtl:ml-2 shrink-0" />
            Data Barang
          </div>
        </div>

        {/* Pengambilan Barang */}
        <div className="panel bg-gradient-to-r from-violet-500 to-violet-400">
          <div className="flex justify-between">
            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Pengambilan Barang</div>
          </div>
          <div className="flex items-center mt-5">
            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {totalPengambilanBarang} Pengambilan Barang </div>
          </div>
          <div className="flex items-center font-semibold mt-5">
            <IconArrowLeft className="ltr:mr-2 rtl:ml-2 shrink-0" />
            Data Pengambilan Barang
          </div>
        </div>

        {/* Barang Masuk */}
        <div className="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
          <div className="flex justify-between">
            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Barang Masuk</div>
          </div>
          <div className="flex items-center mt-5">
            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {totalBarangMasuk} Barang Masuk</div>
          </div>
          <div className="flex items-center font-semibold mt-5">
            <IconArrowLeft className="ltr:mr-2 rtl:ml-2 shrink-0" />
            Data Barang Masuk
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
