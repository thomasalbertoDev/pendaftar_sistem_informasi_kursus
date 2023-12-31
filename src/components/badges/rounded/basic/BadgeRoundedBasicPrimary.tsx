import React from 'react';

interface BadgeRoundedBasicPrimaryProps {
  label: string;
}

const BadgeRoundedBasicPrimary: React.FC<BadgeRoundedBasicPrimaryProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge bg-primary rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedBasicPrimary;
