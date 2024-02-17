import React from 'react';

interface InputTextareaProps {
  id: string;
  name: string;
  rows: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  label: string;
  error: string;
  isInputFilled: string;
}

const InputTextarea: React.FC<InputTextareaProps> = ({ id, name, rows, value, onChange, placeholder, label, error, isInputFilled }) => {
  const isFilled = value !== '';

  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>
        <textarea id={id} name={name} rows={rows} value={value} onChange={onChange} placeholder={placeholder} className={`form-textarea ${error ? 'error' : ''} mb-1 rounded-lg`} />

        {error && <span className="text-danger">{error}</span>}
        {isFilled && !error && <span className="text-success">{isInputFilled}</span>}
      </div>
    </>
  );
};

export default InputTextarea;
