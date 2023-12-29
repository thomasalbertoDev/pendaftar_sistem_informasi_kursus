import React from 'react';

interface RadioOutlineInfoProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioOutlineInfo: React.FC<RadioOutlineInfoProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio outline-info" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioOutlineInfo;
