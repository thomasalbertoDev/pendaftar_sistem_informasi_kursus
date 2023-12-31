import React from 'react';

interface BadgeRoundedOutlineSecondaryProps {
  label: string;
}

const BadgeRoundedOutlineSecondary: React.FC<BadgeRoundedOutlineSecondaryProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge badge-outline-secondary rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedOutlineSecondary;
