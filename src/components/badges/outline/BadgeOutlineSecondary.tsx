import React from 'react';

interface BadgeOutlineSecondaryProps {
  label: string;
}

const BadgeOutlineSecondary: React.FC<BadgeOutlineSecondaryProps> = ({ label }) => {
  return (
    <>
      <span className="badge badge-outline-secondary">{label}</span>
    </>
  );
};

export default BadgeOutlineSecondary;
