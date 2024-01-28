import { useEffect, useState } from 'react';
import { requestGetKategoriBarang } from '../pages/admin/kategoriBarang/api/services/requestGetKategoriBarang';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface KategoriBarangSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string;
  isInputFilled: string;
  onChange: (e: any) => void;
}

const KategoriBarangSelect = ({ id, name, label, placeholder, error, isInputFilled, onChange, value }: KategoriBarangSelectProps) => {
  const [kategoriBarang, setKategoriBarang] = useState([]);

  useEffect(() => {
    requestGetKategoriBarang().then((kategoriBarangData) => {
      const transformedData = kategoriBarangData.map((item: any) => ({
        value: item.id_kategori_barang,
        label: item.nama_kategori_barang,
      }));
      setKategoriBarang(transformedData);
    });
  }, []);

  return (
    <>
      <SelectSearch id={id} name={name} label={label} value={value} onChange={onChange} placeholder={placeholder} options={kategoriBarang} error={error} isInputFilled={isInputFilled} />
    </>
  );
};

export default KategoriBarangSelect;
