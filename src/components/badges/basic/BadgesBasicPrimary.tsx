import React from "react";

interface BadgeBasicPrimaryProps {
  label: string;
}

const BadgeBasicPrimary:React.FC<BadgeBasicPrimaryProps> = ({ label }) => {
  return (
    <>
      <span className="badge bg-primary">{label}</span>
    </>
  );
};

export default BadgeBasicPrimary;
