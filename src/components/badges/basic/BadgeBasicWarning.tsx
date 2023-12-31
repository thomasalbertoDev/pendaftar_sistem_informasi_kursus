import React from 'react';

interface BadgeBasicWarningProps {
  label: string;
}

const BadgeBasicWarning: React.FC<BadgeBasicWarningProps> = ({ label }) => {
  return (
    <>
      <span className="badge bg-warning">{label}</span>
    </>
  );
};

export default BadgeBasicWarning;
