import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidWarningProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidWarning = forwardRef(({ onClick, text }: ButtonSolidWarningProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-warning">
        {text}
      </button>
    </>
  );
});

export default ButtonSolidWarning;
