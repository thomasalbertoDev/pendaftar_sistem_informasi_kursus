import axios from 'axios';
import { use } from 'i18next';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface KelurahanSelectProps {
  id: string;
  name: string;
  label: string;
  value: any;
  error: string;
  onChange: (value: any) => void;
  isInputFilled: string;
  placeholder: string;
  kecamatanId: string;
}

const KelurahanSelect: React.FC<KelurahanSelectProps & { kecamatanId: string }> = ({ id, name, label, error, value, onChange, isInputFilled, placeholder, kecamatanId }) => {
  const isFilled = value !== '';
  const [kelurahan, setKelurahan] = useState<any[]>([]);

  useEffect(() => {
    const fetchKelurahan = async () => {
      try {
        const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${kecamatanId}.json`);
        const transformedKelurahan = response?.data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));

        setKelurahan(transformedKelurahan);
      } catch (error) {
        console.error(error);
      }
    };

    fetchKelurahan();
  }, [kecamatanId]);

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
      <div className="mb-5">
        <SelectSearch id={id} name={name} label={label} value={value} error={error} styles={styles} options={kelurahan} onChange={onChange} placeholder={placeholder} isInputFilled={isInputFilled} />
      </div>
    </>
  );
};

export default KelurahanSelect;
