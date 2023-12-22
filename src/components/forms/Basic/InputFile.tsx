import React from 'react';

interface InputFileProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error: string;
}

const InputFile: React.FC<InputFileProps> = ({ id, name, value, onChange, label, error }) => {
  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>
        <input
          id={id}
          name={name}
          value={value}
          type="file"
          onChange={onChange}
          className={`form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary ${
            error ? 'file-input-error' : ''
          }`}
          required
        />

        {error && <span className="text-danger">{error}</span>}
      </div>
    </>
  );
};

export default InputFile;
