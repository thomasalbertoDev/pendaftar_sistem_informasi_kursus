import React from 'react';

interface InputRadioProps {
  id: string;
  name: string;
  value: string;
  choice: string;
  error: string;
}

const InputRadio: React.FC<InputRadioProps> = ({ id, name, value, choice, error }) => {
  return (
    <>
      <div className="mb-5">
        <label className="flex items-center cursor-pointer">
          <input id={id} name={name} type="radio" value={value} className={`form-radio ${error ? 'border-red-500' : ''}`} defaultChecked />
          <span className="text-white-dark">{choice}</span>
        </label>

        {error && <span className="text-danger">{error}</span>}
      </div>
    </>
  );
};

export default InputRadio;
