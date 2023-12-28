import React from 'react';

interface CheckboxRoundedDefaultInfoProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedDefaultInfo: React.FC<CheckboxRoundedDefaultInfoProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox text-info rounded-full" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedDefaultInfo;
