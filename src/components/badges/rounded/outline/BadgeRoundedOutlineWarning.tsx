import React from 'react';

interface BadgeRoundedOutlineWarningProps {
  label: string;
}

const BadgeRoundedOutlineWarning: React.FC<BadgeRoundedOutlineWarningProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge badge-outline-warning rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedOutlineWarning;
