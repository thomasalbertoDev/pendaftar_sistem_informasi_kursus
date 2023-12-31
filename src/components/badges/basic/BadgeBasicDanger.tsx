import React from 'react';

interface BadgeBasicDangerProps {
  label: string;
}

const BadgeBasicDanger: React.FC<BadgeBasicDangerProps> = ({ label }) => {
  return (
    <>
      <span className="badge bg-danger">{label}</span>
    </>
  );
};

export default BadgeBasicDanger;
