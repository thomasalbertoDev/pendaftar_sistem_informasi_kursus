import React from 'react';

interface ButtonLoaderCircleProps {
  text: string;
  backgroundColor?: string;
}

const ButtonLoaderCircle: React.FC<ButtonLoaderCircleProps> = ({ text, backgroundColor }) => {
  return (
    <>
      <button type="button" className={`btn ${backgroundColor} btn-lg ltr:ml-4 rtl:mr-4`} disabled>
        <span className="animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 ltr:mr-4 rtl:ml-4 inline-block align-middle shrink-0"></span>
        {text}
      </button>
    </>
  );
};

export default ButtonLoaderCircle;
