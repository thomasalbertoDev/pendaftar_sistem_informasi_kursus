import { forwardRef, ForwardedRef } from 'react';

interface ButtonOutlineInfoProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlineInfo = forwardRef(({ onClick, text }: ButtonOutlineInfoProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-outline-info ltr:ml-4 rtl:mr-4">
        {text}
      </button>
    </>
  );
});

export default ButtonOutlineInfo;
