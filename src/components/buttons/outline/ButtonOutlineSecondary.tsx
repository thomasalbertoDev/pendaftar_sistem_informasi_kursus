import React from 'react';

interface ButtonOutlineSecondaryProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlineSecondary: React.FC<ButtonOutlineSecondaryProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-outline-secondary">
        {text}
      </button>
    </>
  );
};

export default ButtonOutlineSecondary;
