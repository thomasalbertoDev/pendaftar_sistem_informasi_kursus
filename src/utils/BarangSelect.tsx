import { requestGetBarang } from '../pages/admin/barang/api/services/requestGetBarang';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface BarangSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string;
  isInputFilled: string;
  onChange: (e: any) => void;
}

const BarangSelect = ({ id, name, label, placeholder, error, isInputFilled, onChange, value }: BarangSelectProps) => {
  const [barang, setBarang] = useState<any[]>([]);

  useEffect(() => {
    requestGetBarang().then((barangData) => {
      const transformedData = barangData.map((item: any) => ({
        value: item.id_barang,
        label: item.nama_barang,
      }));
      setBarang(transformedData);
    });
  }, []);

  return (
    <>
      <SelectSearch id={id} name={name} label={label} value={value} onChange={onChange} placeholder={placeholder} options={barang} error={error} isInputFilled={isInputFilled} />
    </>
  );
};

export default BarangSelect;
