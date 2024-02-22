import { requestGetPekerjaan } from '../api/pekerjaan/services/requestGetPekerjaan';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface PekerjaanSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string;
  isInputFilled: string;
  onChange: (e: any) => void;
}

const PekerjaanSelect = ({ id, name, label, placeholder, error, isInputFilled, onChange, value }: PekerjaanSelectProps) => {
  const [pekerjaan, setPekerjaan] = useState<any[]>([]);

  useEffect(() => {
    requestGetPekerjaan().then((response) => {
      const transformedData = response.map((item: any) => ({
        value: item.id_pekerjaan,
        label: item.nama_pekerjaan,
      }));
      setPekerjaan(transformedData);
    });
  }, []);

  return (
    <>
      <SelectSearch id={id} name={name} label={label} value={value} onChange={onChange} placeholder={placeholder} options={pekerjaan} error={error} isInputFilled={isInputFilled} />
    </>
  );
};

export default PekerjaanSelect;
