import React from 'react';

interface RadioOutlinePrimaryProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioOutlinePrimary: React.FC<RadioOutlinePrimaryProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio outline-primary" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioOutlinePrimary;
