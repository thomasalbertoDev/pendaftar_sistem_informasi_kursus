import React from 'react';

interface CheckboxOutlineDangerProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxOutlineDanger: React.FC<CheckboxOutlineDangerProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-danger" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxOutlineDanger;
