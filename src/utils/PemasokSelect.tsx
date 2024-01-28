import { requestGetPemasok } from '../pages/admin/pemasok/api/services/requestGetPemasok';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface PemasokSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string;
  isInputFilled: string;
  onChange: (e: any) => void;
}

const PemasokSelect = ({ id, name, label, placeholder, error, isInputFilled, onChange, value }: PemasokSelectProps) => {
  const [pemasok, setPemasok] = useState<any[]>([]);

  useEffect(() => {
    requestGetPemasok().then((pemasokData) => {
      const transformedData = pemasokData.map((item: any) => ({
        value: item.id_pemasok,
        label: item.nama_pemasok,
      }));
      setPemasok(transformedData);
    });
  }, []);

  return (
    <>
      <SelectSearch id={id} name={name} label={label} value={value} onChange={onChange} placeholder={placeholder} options={pemasok} error={error} isInputFilled={isInputFilled} />
    </>
  );
};

export default PemasokSelect;
