import React from 'react';

interface CheckboxDefaultSecondaryProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxDefaultSecondary: React.FC<CheckboxDefaultSecondaryProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} type="checkbox" className="form-checkbox text-secondary" onChange={onChange} />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxDefaultSecondary;
