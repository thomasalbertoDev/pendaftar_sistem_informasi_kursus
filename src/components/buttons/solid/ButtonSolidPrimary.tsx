import React from 'react';

interface ButtonSolidPrimaryProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidPrimary: React.FC<ButtonSolidPrimaryProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-primary">
        {text}
      </button>
    </>
  );
};

export default ButtonSolidPrimary;
