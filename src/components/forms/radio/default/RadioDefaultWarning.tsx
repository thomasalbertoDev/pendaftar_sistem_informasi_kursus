import React from 'react';

interface RadioDefaultWarningProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioDefaultWarning: React.FC<RadioDefaultWarningProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio text-warning" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioDefaultWarning;
