import React from 'react';

interface BadgeOutlineDangerProps {
  label: string;
}

const BadgeOutlineDanger: React.FC<BadgeOutlineDangerProps> = ({ label }) => {
  return (
    <>
      <span className="badge badge-outline-danger">{label}</span>
    </>
  );
};

export default BadgeOutlineDanger;
