import { forwardRef, ForwardedRef } from 'react';

interface ButtonOutlineDarkProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlineDark = forwardRef(({ onClick, text }: ButtonOutlineDarkProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-outline-dark ltr:ml-4 rtl:mr-4">
        {text}
      </button>
    </>
  );
});

export default ButtonOutlineDark;
