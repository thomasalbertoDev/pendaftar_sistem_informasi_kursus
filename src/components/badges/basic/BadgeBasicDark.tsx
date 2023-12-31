import React from 'react';

interface BadgeBasicDarkProps {
  label: string;
}

const BadgeBasicDark: React.FC<BadgeBasicDarkProps> = ({ label }) => {
  return (
    <>
      <span className="badge bg-dark">{label}</span>
    </>
  );
};

export default BadgeBasicDark;
