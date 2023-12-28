import React from 'react';

interface SwitchSolidRoundedProps {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const SwitchSolidRounded: React.FC<SwitchSolidRoundedProps> = ({ checked, onChange }) => {
  return (
    <>
      <label className="w-12 h-6 relative">
        <input checked={checked} type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" onChange={onChange} />
        <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
      </label>
    </>
  );
};

export default SwitchSolidRounded;
