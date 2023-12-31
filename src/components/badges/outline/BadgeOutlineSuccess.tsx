import React from 'react';

interface BadgeOutlineSuccessProps {
  label: string;
}

const BadgeOutlineSuccess: React.FC<BadgeOutlineSuccessProps> = ({ label }) => {
  return (
    <>
      <span className="badge badge-outline-success">{label}</span>
    </>
  );
};

export default BadgeOutlineSuccess;
