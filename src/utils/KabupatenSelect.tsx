import axios from 'axios';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface KabupatenSelectProps {
  id: string;
  name: string;
  label: string;
  value: any;
  error: string;
  onChange: (value: any) => void;
  isInputFilled: string;
  placeholder: string;
  provinsiId: string;
  onKabupatenChange: (value: any) => void;
}

const KabupatenSelect: React.FC<KabupatenSelectProps & { provinsiId: string }> = ({ id, name, label, error, value, onChange, isInputFilled, placeholder, provinsiId, onKabupatenChange }) => {
  const [kabupaten, setKabupaten] = useState<any[]>([]);

  useEffect(() => {
    const fetchKabupaten = async () => {
      try {
        const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsiId}.json`);
        const transformedKabupaten = response?.data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));

        setKabupaten(transformedKabupaten);
      } catch (error) {
        console.error(error);
      }
    };

    fetchKabupaten();
  }, [provinsiId]);

  const handleKabupatenChange = (selectedKabupatenValue: any) => {
    onChange(selectedKabupatenValue?.label);
    onKabupatenChange(selectedKabupatenValue?.value);
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
          options={kabupaten}
          onChange={handleKabupatenChange}
          placeholder={placeholder}
          isInputFilled={isInputFilled}
        />
      </div>
    </>
  );
};

export default KabupatenSelect;
