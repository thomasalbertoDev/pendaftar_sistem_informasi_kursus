import React from 'react';

interface BadgeNotificationTextProps {
  label: string;
  backgroundColor: string;
}

const BadgeNotificationText: React.FC<BadgeNotificationTextProps> = ({ label, backgroundColor }) => {
  return (
    <>
      <button type="button" className={`btn ${backgroundColor} my-4`}>
        <span>{label}</span>
        <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">4</span>
      </button>
    </>
  );
};

export default BadgeNotificationText;
