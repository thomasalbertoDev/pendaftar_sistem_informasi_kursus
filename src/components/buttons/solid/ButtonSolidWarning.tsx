import React from 'react';

interface ButtonSolidWarningProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidWarning: React.FC<ButtonSolidWarningProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-warning">
        {text}
      </button>
    </>
  );
};

export default ButtonSolidWarning;
