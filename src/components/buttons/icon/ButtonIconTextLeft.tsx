import { Icon } from '@iconify/react';
import { forwardRef, ForwardedRef } from 'react';

interface ButtonIconTextLeftProps {
  text: string;
  icon: string;
  onClick?: () => void;
  backgroundColor?: string;
}

const ButtonIconTextLeft = forwardRef(({ text, icon, onClick, backgroundColor }: ButtonIconTextLeftProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className={`btn ${backgroundColor}`}>
        <Icon icon={icon} />
        {text}
      </button>
    </>
  );
});

export default ButtonIconTextLeft;
