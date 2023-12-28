import React from 'react';

interface RadioDefaultSuccessProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioDefaultSuccess:React.FC<RadioDefaultSuccessProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio text-success" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioDefaultSuccess;
