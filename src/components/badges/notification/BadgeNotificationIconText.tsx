import { Icon } from '@iconify/react';
import React from 'react';

interface BadgeNotificationIconTextProps {
  icon: any;
  label: string;
  backgroundColor: string;
}

const BadgeNotificationIconText: React.FC<BadgeNotificationIconTextProps> = ({ icon, label, backgroundColor }) => {
  return (
    <>
      <button type="button" className={`btn ${backgroundColor} my-4`}>
        <span className="flex items-center">
          <Icon icon={icon} width={20} className="mr-2" />
          {label}
        </span>
        <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">9</span>
      </button>
    </>
  );
};

export default BadgeNotificationIconText;
