import { requestGetPenghasilan } from '../api/penghasilan/services/requestGetPenghasilan';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface PenghasilanSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string;
  isInputFilled: string;
  onChange: (e: any) => void;
}

const PenghasilanSelect = ({ id, name, label, placeholder, error, isInputFilled, onChange, value }: PenghasilanSelectProps) => {
  const [penghasilan, setPenghasilan] = useState<any[]>([]);

  useEffect(() => {
    requestGetPenghasilan().then((response) => {
      const transformedData = response.map((item: any) => ({
        value: item.id_penghasilan,
        label: item.jumlah_penghasilan,
      }));
      setPenghasilan(transformedData);
    });
  }, []);

  return (
    <>
      <SelectSearch id={id} name={name} label={label} value={value} onChange={onChange} placeholder={placeholder} options={penghasilan} error={error} isInputFilled={isInputFilled} />
    </>
  );
};

export default PenghasilanSelect;
