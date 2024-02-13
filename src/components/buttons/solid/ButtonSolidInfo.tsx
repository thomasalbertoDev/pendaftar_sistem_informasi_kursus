import { forwardRef, ForwardedRef } from 'react';

interface ButtonSolidInfoProps {
  onClick?: () => void;
  text: string;
  width?: string;
}

const ButtonSolidInfo = forwardRef(({ onClick, text, width }: ButtonSolidInfoProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="submit" className={`btn btn-lg btn-info ${width} my-2`}>
        {text}
      </button>
    </>
  );
});

export default ButtonSolidInfo;
