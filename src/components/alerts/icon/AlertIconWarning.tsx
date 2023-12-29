import React from 'react';
import IconX from '../../Icons/IconX';
import { Icon } from '@iconify/react';

interface AlertIconWarningProps {
  title: string;
  text: string;
  icon: string;
  width?: number;
  onClick?: () => void;
}

const AlertIconWarning: React.FC<AlertIconWarningProps> = ({ title, text, icon, width, onClick }) => {
  return (
    <>
      <div className="relative flex items-center border p-3.5 rounded text-warning bg-warning-light border-warning ltr:border-l-[64px] rtl:border-r-[64px] dark:bg-warning-dark-light">
        <span className="absolute ltr:-left-11 rtl:-right-11 inset-y-0 text-white w-6 h-6 m-auto">
          <Icon icon={icon} width={width} />
        </span>
        <span className="ltr:pr-2 rtl:pl-2">
          <strong className="ltr:mr-1 rtl:ml-1">{title}</strong>
          {text}
        </span>
        <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80" onClick={onClick}>
          <IconX className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default AlertIconWarning;
