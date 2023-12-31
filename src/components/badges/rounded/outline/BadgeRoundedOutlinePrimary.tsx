import React from 'react';

interface BadgeRoundedOutlinePrimaryProps {
  label: string;
}

const BadgeRoundedOutlinePrimary: React.FC<BadgeRoundedOutlinePrimaryProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge badge-outline-primary rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedOutlinePrimary;
