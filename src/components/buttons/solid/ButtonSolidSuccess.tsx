import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidSuccessProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidSuccess = forwardRef(({ onClick, text }: ButtonSolidSuccessProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-success">
        {text}
      </button>
    </>
  );
});

export default ButtonSolidSuccess;
