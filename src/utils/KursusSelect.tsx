import { requestGetKursus } from '../api/kursus/services/requestGetKursus';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface KursusSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error: string;
  isInputFilled: string;
  onChange: (e: any) => void;
}

const KursusSelect = ({ id, name, label, placeholder, error, isInputFilled, onChange, value }: KursusSelectProps) => {
  const [kursus, setKursus] = useState<any[]>([]);

  useEffect(() => {
    requestGetKursus().then((response) => {
      const transformedData = response.map((item: any) => ({
        value: item.id_kursus,
        label: item.nama_kursus,
      }));
      setKursus(transformedData);
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
      <SelectSearch id={id} name={name} label={label} styles={styles} value={value} onChange={onChange} placeholder={placeholder} options={kursus} error={error} isInputFilled={isInputFilled} />
    </>
  );
};

export default KursusSelect;
