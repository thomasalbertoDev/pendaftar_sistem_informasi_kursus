import { Icon } from '@iconify/react';
import { forwardRef, ForwardedRef } from 'react';

interface ButtonIconTextRightProps {
  text: string;
  icon: string;
  onClick?: () => void;
  backgroundColor?: string;
}

const ButtonIconTextRight = forwardRef(({ text, icon, onClick, backgroundColor }: ButtonIconTextRightProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className={`btn ${backgroundColor} ltr:ml-4 rtl:mr-4`}>
        {text}
        <Icon icon={icon} />
      </button>
    </>
  );
});

export default ButtonIconTextRight;
