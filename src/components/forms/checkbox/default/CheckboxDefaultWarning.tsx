import React from 'react';

interface CheckboxDefaultWarningProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxDefaultWarning: React.FC<CheckboxDefaultWarningProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} type="checkbox" className="form-checkbox text-warning" onChange={onChange} />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxDefaultWarning;
