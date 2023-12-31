import React from 'react';

interface BadgeRoundedOutlineSuccessProps {
  label: string;
}

const BadgeRoundedOutlineSuccess: React.FC<BadgeRoundedOutlineSuccessProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge badge-outline-success rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedOutlineSuccess;
