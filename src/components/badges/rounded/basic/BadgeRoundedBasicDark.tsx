import React from 'react';

interface BadgeRoundedBasicDarkProps {
  label: string;
}

const BadgeRoundedBasicDark: React.FC<BadgeRoundedBasicDarkProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge bg-dark rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedBasicDark;
