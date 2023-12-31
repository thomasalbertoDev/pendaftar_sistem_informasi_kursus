import React from 'react';
import { Icon } from '@iconify/react';

interface BadgeNotificationIconProps {
  icon: any;
  backgroundColor: string;
}

const BadgeNotificationIcon: React.FC<BadgeNotificationIconProps> = ({ icon, backgroundColor }) => {
  return (
    <>
      <button type="button" className={`btn ${backgroundColor} px-5 my-4`}>
        <span>
          <Icon icon={icon} width={20} />
        </span>
        <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">8</span>
      </button>
    </>
  );
};

export default BadgeNotificationIcon;
