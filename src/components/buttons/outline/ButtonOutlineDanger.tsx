import { forwardRef, ForwardedRef } from 'react';

interface ButtonOutlineDangerProps {
  onClick?: () => void;
  text: string;
}

const ButtonOutlineDanger = forwardRef(({ onClick, text }: ButtonOutlineDangerProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className="btn btn-outline-danger ltr:ml-4 rtl:mr-4">
        {text}
      </button>
    </>
  );
});

export default ButtonOutlineDanger;
