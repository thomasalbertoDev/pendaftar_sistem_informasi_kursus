import React from 'react';

interface BadgeRoundedOutlineInfoProps {
  label: string;
}

const BadgeRoundedOutlineInfo: React.FC<BadgeRoundedOutlineInfoProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge badge-outline-info rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedOutlineInfo;
