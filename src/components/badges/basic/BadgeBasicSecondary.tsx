import React from 'react';

interface BadgeBasicSecondaryProps {
  label: string;
}

const BadgeBasicSecondary: React.FC<BadgeBasicSecondaryProps> = ({ label }) => {
  return (
    <>
      <span className="badge bg-secondary">{label}</span>
    </>
  );
};

export default BadgeBasicSecondary;
