import React from 'react';
import IconX from '../../Icons/IconX';

interface AlertDefaultInfoProps {
  title: string;
  text: string;
  onClick?: () => void;
}

const AlertDefaultInfo: React.FC<AlertDefaultInfoProps> = ({ title, text, onClick }) => {
  return (
    <>
      <div className="flex items-center p-3.5 rounded text-info bg-info-light dark:bg-info-dark-light">
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

export default AlertDefaultInfo;
