import React from 'react';

interface CheckBoxOutlineSuccessProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckBoxOutlineSuccess: React.FC<CheckBoxOutlineSuccessProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-success" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckBoxOutlineSuccess;
