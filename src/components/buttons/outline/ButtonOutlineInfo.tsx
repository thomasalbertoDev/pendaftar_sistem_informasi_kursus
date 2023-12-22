import React from 'react';

interface ButtonOutlineInfoProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlinePrimary: React.FC<ButtonOutlineInfoProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-outline-info">
        {text}
      </button>
    </>
  );
};

export default ButtonOutlinePrimary;
