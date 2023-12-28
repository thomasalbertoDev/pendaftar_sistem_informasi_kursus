import React from 'react';

interface CheckboxRoundedOutlineInfoProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxRoundedOutlineInfo: React.FC<CheckboxRoundedOutlineInfoProps> = ({ text, checked, onChange }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="checkbox" className="form-checkbox outline-info rounded-full" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default CheckboxRoundedOutlineInfo;
