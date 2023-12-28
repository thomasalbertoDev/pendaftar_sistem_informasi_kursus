import React from 'react';

interface CheckboxOutlineInfoProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxOutlineInfo: React.FC<CheckboxOutlineInfoProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-info" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxOutlineInfo;
