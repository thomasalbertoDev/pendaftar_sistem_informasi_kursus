import React from 'react';

interface CheckboxRoundedOutlineWarningProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedOutlineWarning: React.FC<CheckboxRoundedOutlineWarningProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-warning rounded-full" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedOutlineWarning;
