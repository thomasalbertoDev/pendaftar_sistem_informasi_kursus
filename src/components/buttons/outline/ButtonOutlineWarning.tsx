import React from 'react';

interface ButtonOutlineWarningProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlineWarning: React.FC<ButtonOutlineWarningProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-outline-warning">
        {text}
      </button>
    </>
  );
};

export default ButtonOutlineWarning;
