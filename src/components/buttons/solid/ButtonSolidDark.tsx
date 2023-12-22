import React from 'react';

interface ButtonSolidDarkProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidDark: React.FC<ButtonSolidDarkProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-dark">
        {text}
      </button>
    </>
  );
};

export default ButtonSolidDark;
