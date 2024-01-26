import { forwardRef, ForwardedRef } from 'react';

interface ButtonOutlineSecondaryProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlineSecondary = forwardRef(({ onClick, text }: ButtonOutlineSecondaryProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-outline-secondary ">
        {text}
      </button>
    </>
  );
});

export default ButtonOutlineSecondary;
