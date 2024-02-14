import React from 'react';

interface InputNumberProps {
  id: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  error: string;
  isInputFilled: string;
}

const InputNumber: React.FC<InputNumberProps> = ({ id, name, value, onChange, placeholder, label, error, isInputFilled }) => {
  const isFilled = value !== 0;

  return (
    <>
      <div className="mb-5">
        <label htmlFor={label} className="mb-2 dark:text-white">
          {label}
        </label>
        <input
          id={id}
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`form-input ${error ? 'error' : ''} dark:bg-white mb-1 dark:text-black py-3 rounded-lg`}
        />

        {error && <span className="text-danger">{error}</span>}
        {isFilled && !error && <span className="text-success">{isInputFilled}</span>}
      </div>
    </>
  );
};

export default InputNumber;
