import { Icon } from '@iconify/react';
import { forwardRef, ForwardedRef } from 'react';

interface ButtonIconProps {
  icon: string;
  onClick?: () => void;
  backgroundColor?: string;
  disabled?: boolean;
}

const ButtonIcon = forwardRef(({ icon, onClick, backgroundColor, disabled }: ButtonIconProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <>
      <button ref={ref} onClick={onClick} type="button" className={`btn ${backgroundColor} `} disabled={disabled}>
        <Icon icon={icon} width={17} />
      </button>
    </>
  );
});

export default ButtonIcon;
