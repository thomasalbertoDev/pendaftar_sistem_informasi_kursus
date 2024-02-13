import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidSuccessProps {
  onClick?: () => void;
  text: string;
  width?: string;
}

const ButtonSolidSuccess = forwardRef(({ onClick, text, width }: ButtonSolidSuccessProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="submit" className={`btn btn-lg btn-success ${width} my-2`}>
        {text}
      </button>
    </>
  );
});

export default ButtonSolidSuccess;
