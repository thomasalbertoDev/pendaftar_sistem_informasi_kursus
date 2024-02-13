import React from 'react';

interface InputFileProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error: string;
  isInputFilled: string;
}

const InputFile: React.FC<InputFileProps> = ({ id, name, value, onChange, label, error, isInputFilled }) => {
  const isFilled = value !== '';

  return (
    <>
      <div className="mb-5">
        <div className="flex justify-between">
          <label htmlFor={label}>{label}</label>
        </div>
        <input
          id={id}
          name={name}
          type="file"
          onChange={onChange}
          className={`dark:bg-white dark:text-black form-input file:py-3 rounded-lg file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary ${
            error ? 'file-input-error' : ''
          } mb-1`}
        />

        {error && <span className="text-danger">{error}</span>}
        {isFilled && !error && <span className="text-success">{isInputFilled}</span>}
      </div>
    </>
  );
};

export default InputFile;
