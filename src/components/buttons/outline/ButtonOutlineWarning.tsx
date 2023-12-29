import { forwardRef, ForwardedRef } from 'react';

interface ButtonOutlineWarningProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlineWarning = forwardRef(({ onClick, text }: ButtonOutlineWarningProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-outline-warning ltr:ml-4 rtl:mr-4">
        {text}
      </button>
    </>
  );
});

export default ButtonOutlineWarning;
