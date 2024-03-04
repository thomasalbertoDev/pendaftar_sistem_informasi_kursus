import React from 'react';
import IconX from '../../Icons/IconX';

interface AlertSolidInfoProps {
  title: string;
  text: string;
  onClick?: () => void;
}

const AlertSolidInfo: React.FC<AlertSolidInfoProps> = ({ title, text, onClick }) => {
  return (
    <>
      <div className="flex items-center p-3.5 rounded-lg text-white bg-info">
        <span className="ltr:pr-2 rtl:pl-2">
          <strong className="ltr:mr-1 rtl:ml-1">{title}</strong>
          {text}
        </span>
      </div>
    </>
  );
};

export default AlertSolidInfo;
