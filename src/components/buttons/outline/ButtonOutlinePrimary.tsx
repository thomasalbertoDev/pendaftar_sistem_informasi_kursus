import React from 'react';

interface ButtonOutlinePrimaryProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlinePrimary: React.FC<ButtonOutlinePrimaryProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-outline-primary">
        {text}
      </button>
    </>
  );
};

export default ButtonOutlinePrimary;
