import React from 'react';

interface InputRadioProps {
  id: string;
  name: string;
  text: string;
  error: string;
}

const InputRadio: React.FC<InputRadioProps> = ({ id, name, text, error }) => {
  return (
    <>
      <div className="mb-5">
        <label className="flex items-center cursor-pointer">
          <input id={id} name={name} type="radio" className={`form-radio ${error ? 'border-red-500' : ''}`} />
          <span className="text-white-dark">{text}</span>
        </label>
      </div>
    </>
  );
};

export default InputRadio;
