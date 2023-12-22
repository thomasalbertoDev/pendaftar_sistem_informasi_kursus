import React from 'react';

interface InputCheckboxProps {
  id: string;
  name: string;
  value: string;
  choice: string;
  error: string;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({ id, name, value, choice, error }) => {
  return (
    <>
      <div className="mb-5">
        <label className="flex items-center cursor-pointer">
          <input id={id} name={name} value={value} type="checkbox" className={`form-checkbox ${error ? 'border-red-500' : ''}`} defaultChecked />
          <span className=" text-white-dark">{choice}</span>
        </label>

        {error && <span className="text-danger">{error}</span>}
      </div>
    </>
  );
};

export default InputCheckbox;
