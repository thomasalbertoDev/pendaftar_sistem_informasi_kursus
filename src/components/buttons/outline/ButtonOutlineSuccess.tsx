import React from 'react';

interface ButtonOutlineSuccessProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlineSuccess: React.FC<ButtonOutlineSuccessProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-outline-success">
        {text}
      </button>
    </>
  );
};

export default ButtonOutlineSuccess;
