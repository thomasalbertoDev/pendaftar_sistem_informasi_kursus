import React from 'react';

interface CheckboxOutlinePrimaryProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxOutlinePrimary: React.FC<CheckboxOutlinePrimaryProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-primary" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxOutlinePrimary;
