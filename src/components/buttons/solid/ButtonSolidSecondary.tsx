import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidSecondaryProps {
  onClick?: () => void;
  text: string;
  width?: string;
}

const ButtonSolidSecondary = forwardRef(({ onClick, text, width }: ButtonSolidSecondaryProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="submit" className={`btn btn-lg btn-secondary ${width} my-2`}>
        {text}
      </button>
    </>
  );
});

export default ButtonSolidSecondary;
