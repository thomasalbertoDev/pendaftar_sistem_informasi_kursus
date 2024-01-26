import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidDangerProps {
  onClick?: () => void;
  text: string;
  width?: string;
}

const ButtonSolidDanger = forwardRef(({ onClick, text, width }: ButtonSolidDangerProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="submit" className={`btn btn-danger ${width}`}>
        {text}
      </button>
    </>
  );
});

export default ButtonSolidDanger;
