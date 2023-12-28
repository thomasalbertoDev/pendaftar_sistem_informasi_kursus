import React from 'react';

interface CheckboxRoundedDefaultSecondaryProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedDefaultSecondary: React.FC<CheckboxRoundedDefaultSecondaryProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox text-secondary rounded-full" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedDefaultSecondary;
