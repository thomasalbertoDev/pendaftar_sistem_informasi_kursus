import React from 'react';

interface CheckboxOutlineDarkProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxOutlineDark: React.FC<CheckboxOutlineDarkProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-dark" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxOutlineDark;
