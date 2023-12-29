import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidDarkProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidDark = forwardRef(({ onClick, text }: ButtonSolidDarkProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-dark ltr:ml-4 rtl:mr-4">
        {text}
      </button>
    </>
  );
});

export default ButtonSolidDark;
