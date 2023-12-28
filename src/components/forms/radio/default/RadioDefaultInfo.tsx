import React from 'react';

interface RadioDefaultInfoProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioDefaultInfo: React.FC<RadioDefaultInfoProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio text-info" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioDefaultInfo;
