import axios from 'axios';
import { useEffect, useState } from 'react';
import SelectSearch from '../components/forms/Select/SelectSearch';

interface ProvinsiSelectProps {
  id: string;
  name: string;
  label: string;
  value: any;
  error: string;
  onChange: (value: any) => void;
  isInputFilled: string;
  placeholder: string;
  onProvinsiChange: (value: any) => void;
}

const ProvinsiSelect: React.FC<ProvinsiSelectProps> = ({ id, name, label, error, value, onChange, isInputFilled, placeholder, onProvinsiChange }) => {
  const [provinsi, setProvinsi] = useState<any[]>([]);

  useEffect(() => {
    const fetchProvinsi = async () => {
      try {
        const response = await axios.get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
        const transformedProvinsi = response?.data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));

        setProvinsi(transformedProvinsi);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProvinsi();
  }, []);

  const handleProvinsiChange = (selectedProvinsiValue: any) => {
    onChange(selectedProvinsiValue?.label);
    onProvinsiChange(selectedProvinsiValue?.value);
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
          onChange={handleProvinsiChange}
          options={provinsi}
          error={error}
          styles={styles}
          isInputFilled={isInputFilled}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default ProvinsiSelect;
