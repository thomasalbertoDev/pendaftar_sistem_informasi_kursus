import axios from 'axios';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface KecamatanSelectProps {
  id: string;
  name: string;
  label: string;
  value: any;
  error: string;
  onChange: (value: any) => void;
  isInputFilled: string;
  placeholder: string;
  kabupatenId: string;
  onKecamatanChange: (value: any) => void;
}

const KecamatanSelect: React.FC<KecamatanSelectProps & { kabupatenId: string }> = ({ id, name, label, error, value, onChange, isInputFilled, placeholder, kabupatenId, onKecamatanChange }) => {
  const [kecamatan, setKecamatan] = useState<any[]>([]);

  useEffect(() => {
    const fetchKecamatan = async () => {
      try {
        const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${kabupatenId}.json`);
        const transformedKecamatan = response?.data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));

        setKecamatan(transformedKecamatan);
      } catch (error) {
        console.error(error);
      }
    };

    fetchKecamatan();
  }, [kabupatenId]);

  const handleKecamatanChange = (selectedKecamatanValue: any) => {
    onChange(selectedKecamatanValue?.label);
    onKecamatanChange(selectedKecamatanValue?.value);
  };

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
        <SelectSearch
          id={id}
          name={name}
          label={label}
          value={value}
          error={error}
          styles={styles}
          options={kecamatan}
          onChange={handleKecamatanChange}
          placeholder={placeholder}
          isInputFilled={isInputFilled}
        />
      </div>
    </>
  );
};

export default KecamatanSelect;
