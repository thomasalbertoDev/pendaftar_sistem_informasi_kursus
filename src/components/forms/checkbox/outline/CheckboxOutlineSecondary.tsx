import React from 'react';

interface CheckboxOutlineSecondaryProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxOutlineSecondary: React.FC<CheckboxOutlineSecondaryProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-secondary" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxOutlineSecondary;
