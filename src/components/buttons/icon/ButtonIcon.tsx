import { Icon } from '@iconify/react';
import { forwardRef, ForwardedRef } from 'react';

interface ButtonIconProps {
  icon: string;
  onClick?: () => void;
  backgroundColor?: string;
}

const ButtonIcon = forwardRef(({ icon, onClick, backgroundColor }: ButtonIconProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className={`btn ${backgroundColor} ltr:ml-4 rtl:mr-4`}>
        <Icon icon={icon} />
      </button>
    </>
  );
});

export default ButtonIcon;
