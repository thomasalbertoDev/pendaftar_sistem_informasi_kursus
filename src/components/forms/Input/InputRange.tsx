import React from 'react';

interface InputRangeProps {
  id: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const InputRange: React.FC<InputRangeProps> = ({ id, name, value, onChange, label }) => {
  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>
        <input id={id} type="range" name={name} value={value} onChange={onChange} className="form-input" />
      </div>
    </>
  );
};

export default InputRange;
