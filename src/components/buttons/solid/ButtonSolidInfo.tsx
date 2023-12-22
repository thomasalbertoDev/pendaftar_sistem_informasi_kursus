import React from 'react';

interface ButtonSolidInfoProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidInfo: React.FC<ButtonSolidInfoProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-info">
        {text}
      </button>
    </>
  );
};

export default ButtonSolidInfo;
