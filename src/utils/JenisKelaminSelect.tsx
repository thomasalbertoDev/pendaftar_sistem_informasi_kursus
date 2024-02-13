import Select from 'react-select';
import React, { useState } from 'react';

interface JenisKelaminSelectProps {
  id: string;
  name: string;
  label: string;
  value: any;
  error: string;
  onChange: (value: any) => void;
  isInputFilled: string;
}

const JenisKelaminSelect: React.FC<JenisKelaminSelectProps> = ({ id, name, label, error, value, onChange, isInputFilled }) => {
  const isFilled = value !== '';

  const jenisKelamin = [
    {
      label: 'Laki-laki',
      value: 'Laki - Laki',
    },
    {
      label: 'Perempuan',
      value: 'Perempuan',
    },
  ];

  const selectedOption = jenisKelamin.find((option: any) => option.value === value);

  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>

        <Select
          id={id}
          name={name}
          value={selectedOption}
          placeholder="--- Pilih Jenis Kelamin ---"
          options={jenisKelamin}
          isSearchable={false}
          isClearable={true}
          onChange={onChange}
          className="mb-1 basic-single text-black"
          classNamePrefix="select"
          styles={{
            control: (provided) => ({
              ...provided,
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              paddingBottom: '6px',
              paddingTop: '6px',
              color: '#1f2937',
              backgroundColor: '#fff',
            }),
          }}
        />

        {error && <span className="text-danger">{error}</span>}
        {isFilled && !error && <span className="text-success">{isInputFilled}</span>}
      </div>
    </>
  );
};

export default JenisKelaminSelect;
