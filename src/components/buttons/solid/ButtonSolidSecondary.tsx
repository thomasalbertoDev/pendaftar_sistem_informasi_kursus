import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidSecondaryProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidSecondary = forwardRef(({ onClick, text }: ButtonSolidSecondaryProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-secondary ltr:ml-4 rtl:mr-4">
        {text}
      </button>
    </>
  );
});

export default ButtonSolidSecondary;
