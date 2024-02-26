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
      <SelectSearch id={id} name={name} label={label} styles={styles} value={value} onChange={onChange} placeholder={placeholder} options={penghasilan} error={error} isInputFilled={isInputFilled} />
    </>
  );
};

export default PenghasilanSelect;
