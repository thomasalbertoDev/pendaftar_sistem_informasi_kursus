import React from 'react';

interface CheckboxRoundedOutlineDarkProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedOutlineDark: React.FC<CheckboxRoundedOutlineDarkProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-dark rounded-full" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedOutlineDark;
