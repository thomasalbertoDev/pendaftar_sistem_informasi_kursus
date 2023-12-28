import React from 'react';

interface CheckboxRoundedOutlineDangerProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedOutlineDanger: React.FC<CheckboxRoundedOutlineDangerProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-danger rounded-full" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedOutlineDanger;
