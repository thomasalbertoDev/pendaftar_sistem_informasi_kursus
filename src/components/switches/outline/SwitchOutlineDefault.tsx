import React from 'react';

interface SwitchOutlineDefaultProps {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const SwitchOutlineDefault: React.FC<SwitchOutlineDefaultProps> = ({ checked, onChange }) => {
  return (
    <>
      <label className="w-12 h-6 relative">
        <input checked={checked} type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" onChange={onChange} />
        <span className="outline_checkbox border-2 border-[#ebedf2] dark:border-white-dark block h-full before:absolute before:left-1 before:bg-[#ebedf2] dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 peer-checked:before:left-7 peer-checked:border-primary peer-checked:before:bg-primary before:transition-all before:duration-300"></span>
      </label>
    </>
  );
};

export default SwitchOutlineDefault;
