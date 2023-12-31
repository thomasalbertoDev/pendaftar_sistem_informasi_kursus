import React from "react";

interface BadgeRoundedBasicSuccessProps {
  label: string;
}

const BadgeRoundedBasicSuccess:React.FC<BadgeRoundedBasicSuccessProps> = ({ label }) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <span className="badge bg-success rounded-full">{label}</span>
      </div>
    </>
  );
};

export default BadgeRoundedBasicSuccess;
