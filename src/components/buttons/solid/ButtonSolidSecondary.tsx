import React from 'react';

interface ButtonSolidSecondaryProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidSecondary: React.FC<ButtonSolidSecondaryProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-secondary">
        {text}
      </button>
    </>
  );
};

export default ButtonSolidSecondary;
