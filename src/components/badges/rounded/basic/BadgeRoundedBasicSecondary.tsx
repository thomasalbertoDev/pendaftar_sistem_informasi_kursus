import React from 'react';

interface BadgeRoundedBasicSecondaryProps {
  label: string;
}

const BadgeRoundedBasicSecondary: React.FC<BadgeRoundedBasicSecondaryProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge bg-secondary rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedBasicSecondary;
