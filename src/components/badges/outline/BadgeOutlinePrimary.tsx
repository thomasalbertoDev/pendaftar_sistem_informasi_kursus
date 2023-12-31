import React from 'react';

interface BadgeOutlinePrimaryProps {
  label: string;
}

const BadgeOutlinePrimary: React.FC<BadgeOutlinePrimaryProps> = ({ label }) => {
  return (
    <>
      <span className="badge badge-outline-primary">{label}</span>
    </>
  );
};

export default BadgeOutlinePrimary;
