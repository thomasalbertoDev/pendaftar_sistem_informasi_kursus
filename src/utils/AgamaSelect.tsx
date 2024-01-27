import { requestGetAgama } from '../pages/admin/agama/api/services/requestGetAgama';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface AgamaSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string;
  isInputFilled: string;
  onChange: (e: any) => void;
}

const AgamaSelect = ({ id, name, label, placeholder, error, isInputFilled, onChange, value }: AgamaSelectProps) => {
  const [agama, setAgama] = useState<any[]>([]);

  useEffect(() => {
    requestGetAgama().then((agamaData) => {
      const transformedData = agamaData.map((item: any) => ({
        value: item.id_agama,
        label: item.nama_agama,
      }));
      setAgama(transformedData);
    });
  }, []);

  return (
    <>
      <SelectSearch id={id} name={name} label={label} value={value} onChange={onChange} placeholder={placeholder} options={agama} error={error} isInputFilled={isInputFilled} />
    </>
  );
};

export default AgamaSelect;
