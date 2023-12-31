import React from 'react';

interface BadgeRoundedBasicInfoProps {
  label: string;
}

const BadgeRoundedBasicInfo: React.FC<BadgeRoundedBasicInfoProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge bg-info rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedBasicInfo;
