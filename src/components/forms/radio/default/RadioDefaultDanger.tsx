import React from 'react';

interface RadioDefaultDangerProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioDefaultDanger: React.FC<RadioDefaultDangerProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio text-danger" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioDefaultDanger;
