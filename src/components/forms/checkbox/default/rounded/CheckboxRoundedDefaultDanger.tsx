import React from 'react';

interface CheckboxRoundedDefaultDangerProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedDefaultDanger: React.FC<CheckboxRoundedDefaultDangerProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox text-danger rounded-full" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedDefaultDanger;
