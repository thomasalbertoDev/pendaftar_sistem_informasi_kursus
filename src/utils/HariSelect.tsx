import Select from 'react-select';
import React from 'react';

interface HariSelectProps {
  id: string;
  name: string;
  label: string;
  value: any;
  error: string;
  onChange: (value: any) => void;
  isInputFilled: string;
}

const HariSelect: React.FC<HariSelectProps> = ({ id, name, label, error, value, onChange, isInputFilled }) => {
  const isFilled = value !== '';

  const hari = [
    {
      label: 'Senin',
      value: 'senin',
    },
    {
      label: 'Selasa',
      value: 'selasa',
    },
    {
      label: 'Rabu',
      value: 'rabu',
    },
    {
      label: 'Kamis',
      value: 'kamis',
    },
    {
      label: 'Jumat',
      value: 'jumat',
    },
    {
      label: 'Sabtu',
      value: 'sabtu',
    },
    {
      label: 'Minggu',
      value: 'minggu',
    },
  ];

  const selectedOptions = hari.filter((option) => value.includes(option.value));
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
        <label htmlFor={label}>{label}</label>

        <Select
          isMulti
          id={id}
          name={name}
          value={selectedOptions}
          placeholder="--- Pilih Hari ---"
          options={hari}
          isSearchable={false}
          isClearable={true}
          onChange={onChange}
          className="mb-1 basic-single text-black"
          classNamePrefix="select"
          styles={styles}
        />

        {error && <span className="text-danger">{error}</span>}
        {isFilled && !error && <span className="text-success">{isInputFilled}</span>}
      </div>
    </>
  );
};

export default HariSelect;
