import React from 'react';

interface BadgeOutlineInfoProps {
  label: string;
}

const BadgeOutlineInfo: React.FC<BadgeOutlineInfoProps> = ({ label }) => {
  return (
    <>
      <span className="badge badge-outline-info">{label}</span>
    </>
  );
};

export default BadgeOutlineInfo;
