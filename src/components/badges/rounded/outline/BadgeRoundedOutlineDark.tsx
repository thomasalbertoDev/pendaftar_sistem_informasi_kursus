import React from 'react';

interface BadgeRoundedOutlineDarkProps {
  label: string;
}

const BadgeRoundedOutlineDark: React.FC<BadgeRoundedOutlineDarkProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge badge-outline-dark rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedOutlineDark;
