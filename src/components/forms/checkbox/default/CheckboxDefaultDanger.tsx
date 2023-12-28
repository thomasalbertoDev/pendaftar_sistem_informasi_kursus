import React from 'react';

interface CheckboxDefaultDangerProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxDefaultDanger: React.FC<CheckboxDefaultDangerProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} type="checkbox" className="form-checkbox text-danger" onChange={onChange} />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxDefaultDanger;
