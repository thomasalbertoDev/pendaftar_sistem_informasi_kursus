import React from 'react';

interface RadioDefaultDarkProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioDefaultDark: React.FC<RadioDefaultDarkProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio text-dark" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioDefaultDark;
