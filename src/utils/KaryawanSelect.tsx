import { requestGetBarang } from '../pages/admin/barang/api/services/requestGetBarang';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';
import { requestGetKaryawan } from '../pages/admin/karyawan/api/services/requestGetKaryawan';

interface KaryawanSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string;
  isInputFilled: string;
  onChange: (e: any) => void;
}

const KaryawanSelect = ({ id, name, label, placeholder, error, isInputFilled, onChange, value }: KaryawanSelectProps) => {
  const [karyawan, setKaryawan] = useState<any[]>([]);

  useEffect(() => {
    requestGetKaryawan().then((karyawanData) => {
      const transformedData = karyawanData.map((item: any) => ({
        value: item.id_karyawan,
        label: item.nama_karyawan,
      }));
      setKaryawan(transformedData);
    });
  }, []);

  return (
    <>
      <SelectSearch id={id} name={name} label={label} value={value} onChange={onChange} placeholder={placeholder} options={karyawan} error={error} isInputFilled={isInputFilled} />
    </>
  );
};

export default KaryawanSelect;
