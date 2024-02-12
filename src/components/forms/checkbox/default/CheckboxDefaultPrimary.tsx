import React from 'react';

interface CheckboxDefaultPrimaryProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxDefaultPrimary: React.FC<CheckboxDefaultPrimaryProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} type="checkbox" className="form-checkbox" onChange={onChange} />
        <span className="text-gray-700">{text}</span>
      </label>
    </>
  );
};

export default CheckboxDefaultPrimary;
