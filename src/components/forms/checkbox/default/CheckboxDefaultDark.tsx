import React from 'react';

interface CheckboxDefaultDarkProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxDefaultDark: React.FC<CheckboxDefaultDarkProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} type="checkbox" className="form-checkbox text-dark" onChange={onChange} />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxDefaultDark;
