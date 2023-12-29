import React from 'react';

interface RadioOutlineSuccessProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioOutlineSuccess: React.FC<RadioOutlineSuccessProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio outline-success" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioOutlineSuccess;
