import React from 'react';

interface BadgeBasicInfoProps {
  label: string;
}

const BadgeBasicInfo: React.FC<BadgeBasicInfoProps> = ({ label }) => {
  return (
    <>
      <span className="badge bg-info">{label}</span>
    </>
  );
};

export default BadgeBasicInfo;
