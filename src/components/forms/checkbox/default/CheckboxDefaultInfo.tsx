import React from 'react';

interface CheckboxDefaultInfoProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxDefaultInfo: React.FC<CheckboxDefaultInfoProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} type="checkbox" className="form-checkbox text-info" onChange={onChange} />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxDefaultInfo;
