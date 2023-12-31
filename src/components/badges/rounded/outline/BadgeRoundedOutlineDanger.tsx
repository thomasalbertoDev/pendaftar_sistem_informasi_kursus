import React from 'react';

interface BadgeRoundedOutlineDangerProps {
  label: string;
}

const BadgeRoundedOutlineDanger: React.FC<BadgeRoundedOutlineDangerProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge badge-outline-danger rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedOutlineDanger;
