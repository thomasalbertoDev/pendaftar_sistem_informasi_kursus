import React from 'react';

interface RadioDefaultSecondaryProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioDefaultSecondary: React.FC<RadioDefaultSecondaryProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio text-secondary" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioDefaultSecondary;
