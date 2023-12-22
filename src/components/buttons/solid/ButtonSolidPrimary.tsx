import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidPrimaryProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidPrimary = forwardRef(({ onClick, text }: ButtonSolidPrimaryProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-primary">
        {text}
      </button>
    </>
  );
});

export default ButtonSolidPrimary;
