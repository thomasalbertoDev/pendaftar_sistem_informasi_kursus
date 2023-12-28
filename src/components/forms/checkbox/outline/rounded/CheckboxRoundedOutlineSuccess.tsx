import React from 'react';

interface CheckboxRoundedOutlineSuccessProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedOutlineSuccess: React.FC<CheckboxRoundedOutlineSuccessProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-success rounded-full" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedOutlineSuccess;
