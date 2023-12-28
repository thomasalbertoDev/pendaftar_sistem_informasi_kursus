import React from 'react';

interface CheckboxRoundedDefaultSuccessProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedDefaultSuccess: React.FC<CheckboxRoundedDefaultSuccessProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox text-success rounded-full" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedDefaultSuccess;
