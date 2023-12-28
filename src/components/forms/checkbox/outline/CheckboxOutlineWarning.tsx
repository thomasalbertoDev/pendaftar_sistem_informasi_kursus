import React from 'react';

interface CheckboxOutlineWarningProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxOutlineWarning: React.FC<CheckboxOutlineWarningProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-warning" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxOutlineWarning;
