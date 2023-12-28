import React from 'react';

interface CheckboxRoundedDefaultDarkProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedDefaultDark: React.FC<CheckboxRoundedDefaultDarkProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox text-dark rounded-full" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedDefaultDark;
