import React from 'react';

interface BadgeOutlineDarkProps {
  label: string;
}

const BadgeOutlineDark: React.FC<BadgeOutlineDarkProps> = ({ label }) => {
  return (
    <>
      <span className="badge badge-outline-dark">{label}</span>
    </>
  );
};

export default BadgeOutlineDark;
