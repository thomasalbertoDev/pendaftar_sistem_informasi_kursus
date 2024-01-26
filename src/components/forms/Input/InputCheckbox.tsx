import React from 'react';

interface InputCheckboxProps {
  id: string;
  name: string;
  text: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({ id, name, text, checked, onChange }) => {
  return (
    <>
      <div className="mb-5">
        <label className="flex items-center cursor-pointer">
          <input id={id} name={name} checked={checked} onChange={onChange} type="checkbox" className="form-checkbox" />
          <span className=" text-white-dark">{text}</span>
        </label>
      </div>
    </>
  );
};

export default InputCheckbox;
