import React from 'react';

interface RadioOutlineWarningProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioOutlineWarning: React.FC<RadioOutlineWarningProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio outline-warning" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioOutlineWarning;
