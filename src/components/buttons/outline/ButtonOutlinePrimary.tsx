import { forwardRef, ForwardedRef } from 'react';

interface ButtonOutlinePrimaryProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlinePrimary = forwardRef(({ onClick, text }: ButtonOutlinePrimaryProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-outline-primary ltr:ml-4 rtl:mr-4">
        {text}
      </button>
    </>
  );
});

export default ButtonOutlinePrimary;
