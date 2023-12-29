import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidDangerProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidDanger = forwardRef(({ onClick, text }: ButtonSolidDangerProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-danger ltr:ml-4 rtl:mr-4">
        {text}
      </button>
    </>
  );
});

export default ButtonSolidDanger;
