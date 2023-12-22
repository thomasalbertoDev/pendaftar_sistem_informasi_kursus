import React from 'react';

interface ButtonOutlineDangerProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlineDanger: React.FC<ButtonOutlineDangerProps> = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-outline-danger">
        {text}
      </button>
    </>
  );
};

export default ButtonOutlineDanger;
