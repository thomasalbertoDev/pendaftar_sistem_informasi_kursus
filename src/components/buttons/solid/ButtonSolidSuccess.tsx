import React from 'react';

interface ButtonSolidSuccessProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidSuccess: React.FC<ButtonSolidSuccessProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-success">
        {text}
      </button>
    </>
  );
};

export default ButtonSolidSuccess;
