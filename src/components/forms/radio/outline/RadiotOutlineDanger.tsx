import React from 'react';

interface RadioOutlineDangerProps {
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const RadioOutlineDanger: React.FC<RadioOutlineDangerProps> = ({ text, checked, onChange, name }) => {
  return (
    <>
      <label className="inline-flex">
        <input checked={checked} onChange={onChange} type="radio" name={name} className="form-radio outline-danger" />
        <span>{text}</span>
      </label>
    </>
  );
};

export default RadioOutlineDanger;
