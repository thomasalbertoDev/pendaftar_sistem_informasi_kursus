import { forwardRef, ForwardedRef } from 'react';

interface ButtonOutlineSuccessProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlineSuccess = forwardRef(({ onClick, text }: ButtonOutlineSuccessProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-outline-success">
        {text}
      </button>
    </>
  );
});

export default ButtonOutlineSuccess;
