import React from 'react';

interface RadioDefaultPrimaryProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioDefaultPrimary: React.FC<RadioDefaultPrimaryProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio" defaultChecked />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioDefaultPrimary;
