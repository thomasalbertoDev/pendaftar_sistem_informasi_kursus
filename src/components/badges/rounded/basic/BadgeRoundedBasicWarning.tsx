import React from 'react';

interface BadgeRoundedBasicWarningProps {
  label: string;
}

const BadgeRoundedBasicWarning: React.FC<BadgeRoundedBasicWarningProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge bg-warning rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedBasicWarning;
