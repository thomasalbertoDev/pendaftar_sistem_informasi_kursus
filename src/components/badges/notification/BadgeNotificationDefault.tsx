import React from 'react';

interface BadgeNotificationDefaultProps {
  label: string;
  text: string;
  backgroundColor: string;
}

const BadgeNotificationDefault: React.FC<BadgeNotificationDefaultProps> = ({ label, text, backgroundColor }) => {
  return (
    <>
      <button type="button" className={`btn ${backgroundColor} my-4`}>
        {label}
        <span className="badge my-0 bg-white-light text-black ltr:ml-4 rtl:mr-4">{text}</span>
      </button>
    </>
  );
};

export default BadgeNotificationDefault;
