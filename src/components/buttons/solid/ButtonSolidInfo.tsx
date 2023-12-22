import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidInfoProps {
  onClick?: () => void;
  text: string;
}

const ButtonSolidInfo = forwardRef(({ onClick, text }: ButtonSolidInfoProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-info">
        {text}
      </button>
    </>
  );
});

export default ButtonSolidInfo;
