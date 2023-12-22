import React from 'react';

interface InputTextProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  error: string;
}

const InputText: React.FC<InputTextProps> = ({ id, name, value, onChange, placeholder, label, error }) => {
  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>
        <input id={id} type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} className={`form-input ${error ? 'error' : ''}`} required />

        {error && <span className="text-danger">{error}</span>}
      </div>
    </>
  );
};

export default InputText;
