import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidDarkProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidDark = forwardRef(({ onClick, text }: ButtonSolidDarkProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-dark">
        {text}
      </button>
    </>
  );
});

export default ButtonSolidDark;
