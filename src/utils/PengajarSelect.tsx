import { requestGetPengajar } from '../api/pengajar/services/requestGetPengajar';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface PengajarSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string;
  isInputFilled: string;
  onChange: (e: any) => void;
}

const PengajarSelect = ({ id, name, label, value, placeholder, error, isInputFilled, onChange }: PengajarSelectProps) => {
  const [pengajar, setPengajar] = useState<any[]>([]);

  useEffect(() => {
    requestGetPengajar().then((response) => {
      const transformedData = response.map((item: any) => ({
        value: item.id_pengajar,
        label: item.nama_pengajar,
      }));

      setPengajar(transformedData);
    });
  }, []);

  const styles = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      paddingBottom: '6px',
      paddingTop: '6px',
      paddingLeft: '8px',
      color: '#1f2937',
      backgroundColor: '#fff',
    }),
  };

  return (
    <>
      <SelectSearch id={id} name={name} label={label} value={value} onChange={onChange} placeholder={placeholder} options={pengajar} error={error} styles={styles} isInputFilled={isInputFilled} />
    </>
  );
};

export default PengajarSelect;
