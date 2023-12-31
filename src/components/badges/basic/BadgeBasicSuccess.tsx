import React from 'react';

interface BadgeBasicSuccessProps {
  label: string;
}

const BadgeBasicSuccess: React.FC<BadgeBasicSuccessProps> = ({ label }) => {
  return (
    <>
      <span className="badge bg-success">{label}</span>
    </>
  );
};

export default BadgeBasicSuccess;
