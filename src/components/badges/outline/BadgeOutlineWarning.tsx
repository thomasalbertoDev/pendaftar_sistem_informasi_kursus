import React from 'react';

interface BadgeOutlineWarningProps {
  label: string;
}

const BadgeOutlineWarning: React.FC<BadgeOutlineWarningProps> = ({ label }) => {
  return (
    <>
      <span className="badge badge-outline-warning">{label}</span>
    </>
  );
};

export default BadgeOutlineWarning;
