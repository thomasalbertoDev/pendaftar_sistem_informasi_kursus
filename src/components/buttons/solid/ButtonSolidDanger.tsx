import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidDangerProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidDanger = forwardRef(({ onClick, text }: ButtonSolidDangerProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-danger">
        {text}
      </button>
    </>
  );
});

export default ButtonSolidDanger;
