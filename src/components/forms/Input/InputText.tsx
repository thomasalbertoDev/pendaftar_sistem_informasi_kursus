import React from 'react';

interface InputTextProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  error: string;
  isInputFilled: string;
}

const InputText: React.FC<InputTextProps> = ({ id, name, value, onChange, placeholder, label, error, isInputFilled }) => {
  const isFilled = value !== '';

  return (
    <>
      <div className="mb-5">
        <label htmlFor={label} className="mb-2 dark:text-white">
          {label}
        </label>
        <input
          id={id}
          type="text"
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

export default InputText;
