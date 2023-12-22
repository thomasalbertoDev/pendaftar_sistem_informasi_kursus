import React from 'react';

interface ButtonOutlineDarkProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlineDark: React.FC<ButtonOutlineDarkProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-outline-dark">
        {text}
      </button>
    </>
  );
};

export default ButtonOutlineDark;
