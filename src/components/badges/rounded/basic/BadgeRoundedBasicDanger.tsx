import React from 'react';

interface BadgeRoundedBasicDangerProps {
  label: string;
}

const BadgeRoundedBasicDanger: React.FC<BadgeRoundedBasicDangerProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge bg-danger rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedBasicDanger;
