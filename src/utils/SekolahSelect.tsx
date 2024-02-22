import { requestGetSekolah } from '../api/sekolah/services/requestGetSekolah';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface SekolahSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string;
  isInputFilled: string;
  onChange: (e: any) => void;
}

const SekolahSelect = ({ id, name, label, placeholder, error, isInputFilled, onChange, value }: SekolahSelectProps) => {
  const [sekolah, setSekolah] = useState<any[]>([]);

  useEffect(() => {
    requestGetSekolah().then((response) => {
      const transformedData = response.map((item: any) => ({
        value: item.id_sekolah,
        label: item.nama_sekolah,
      }));
      setSekolah(transformedData);
    });
  }, []);

  return (
    <>
      <SelectSearch id={id} name={name} label={label} value={value} onChange={onChange} placeholder={placeholder} options={sekolah} error={error} isInputFilled={isInputFilled} />
    </>
  );
};

export default SekolahSelect;
