import React from 'react';
import IconX from '../../Icons/IconX';

interface AlertSolidSuccessProps {
  title: string;
  text: string;
}

const AlertSolidSuccess: React.FC<AlertSolidSuccessProps> = ({ title, text }) => {
  return (
    <>
      <div className="flex items-center border p-3.5 text-white bg-success rounded-lg">
        <span className="ltr:pr-2 rtl:pl-2">
          <strong className="ltr:mr-1 rtl:ml-1">{title}</strong>
          {text}
        </span>
      </div>
    </>
  );
};

export default AlertSolidSuccess;
