import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidWarningProps {
  onClick?: () => void;
  text: string;
  width?: string;
}

const ButtonSolidWarning = forwardRef(({ onClick, text, width }: ButtonSolidWarningProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="submit" className={`btn btn-warning ${width}`}>
        {text}
      </button>
    </>
  );
});

export default ButtonSolidWarning;
