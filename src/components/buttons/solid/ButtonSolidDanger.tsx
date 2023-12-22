import React from 'react';

interface ButtonSolidDangerProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidDanger: React.FC<ButtonSolidDangerProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-danger">
        {text}
      </button>
    </>
  );
};

export default ButtonSolidDanger;
