import { useEffect, useState } from 'react';
import { requestGetSatuanBarang } from '../pages/admin/satuanBarang/api/services/requestGetSatuanBarang';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface SatuanBarangSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string;
  isInputFilled: string;
  onChange: (e: any) => void;
}

const SatuanBarangSelect = ({ id, name, label, placeholder, error, isInputFilled, onChange, value }: SatuanBarangSelectProps) => {
  const [satuanBarang, setSatuanBarang] = useState([]);

  useEffect(() => {
    requestGetSatuanBarang().then((satuanBarangData) => {
      const transformedData = satuanBarangData.map((item: any) => ({
        value: item.id_satuan_barang,
        label: item.nama_satuan_barang,
      }));
      setSatuanBarang(transformedData);
    });
  }, []);

  return (
    <>
      <SelectSearch id={id} name={name} label={label} value={value} onChange={onChange} placeholder={placeholder} options={satuanBarang} error={error} isInputFilled={isInputFilled} />
    </>
  );
};

export default SatuanBarangSelect;
