import React from 'react';

interface RadioOutlineSecondaryProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioOutlineSecondary: React.FC<RadioOutlineSecondaryProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio outline-secondary" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioOutlineSecondary;
