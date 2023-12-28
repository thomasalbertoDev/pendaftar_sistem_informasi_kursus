import React from 'react';

interface CheckboxRoundedOutlinePrimaryProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedOutlinePrimary: React.FC<CheckboxRoundedOutlinePrimaryProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-primary rounded-full" defaultChecked />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedOutlinePrimary;
