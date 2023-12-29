import React from 'react';

interface RadioOutlineDarkProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioOutlineDark: React.FC<RadioOutlineDarkProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio outline-dark" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioOutlineDark;
