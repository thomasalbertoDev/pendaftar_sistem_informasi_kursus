import React from 'react';

interface SwitchOutlineRoundedProps {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const SwitchOutlineRounded: React.FC<SwitchOutlineRoundedProps> = ({ checked, onChange }) => {
  return (
    <>
      <label className="w-12 h-6 relative">
        <input id="custom_switch_checkbox1" type="checkbox" checked={checked} className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" onChange={onChange} />
        <span className="outline_checkbox border-2 border-[#ebedf2] dark:border-white-dark block h-full rounded-full before:absolute before:left-1 before:bg-[#ebedf2] dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:border-primary peer-checked:before:bg-primary before:transition-all before:duration-300"></span>
      </label>
    </>
  );
};

export default SwitchOutlineRounded;
