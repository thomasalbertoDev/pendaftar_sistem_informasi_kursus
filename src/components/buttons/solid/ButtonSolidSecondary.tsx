import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidSecondaryProps {
  onClick?: () => void;
  text: string;
  width?: string;
}

const ButtonSolidSecondary = forwardRef(({ onClick, text, width }: ButtonSolidSecondaryProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="submit" className={`btn btn-secondary ${width}`}>
        {text}
      </button>
    </>
  );
});

export default ButtonSolidSecondary;
