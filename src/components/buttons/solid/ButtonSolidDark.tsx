import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidDarkProps {
  onClick?: () => void;
  text: string;
  width?: string;
}

const ButtonSolidDark = forwardRef(({ onClick, text, width }: ButtonSolidDarkProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="submit" className={`btn btn-lg btn-dark ${width} my-2`}>
        {text}
      </button>
    </>
  );
});

export default ButtonSolidDark;
