import React from 'react';
import IconX from '../../Icon/IconX';

interface AlertOutlineSecondaryProps {
  title: string;
  text: string;
  onClick?: () => void;
}

const AlertOutlineSecondary: React.FC<AlertOutlineSecondaryProps> = ({ title, text, onClick }) => {
  return (
    <>
      <div className="flex items-center border p-3.5 rounded text-white-dark border-secondary">
        <span className="ltr:pr-2 rtl:pl-2">
          <strong className="ltr:mr-2 rtl:ml-2">{title}</strong>
          {text}
        </span>
        <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80" onClick={onClick}>
          <IconX className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default AlertOutlineSecondary;
