import React from 'react';

interface CheckboxRoundedDefaultPrimaryProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedDefaultPrimary: React.FC<CheckboxRoundedDefaultPrimaryProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox rounded-full" defaultChecked />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedDefaultPrimary;
