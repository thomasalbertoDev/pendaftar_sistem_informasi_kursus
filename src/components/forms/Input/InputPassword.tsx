import React from 'react';
import IconEye from '../../Icons/IconEye';
import { Icon } from '@iconify/react';

interface InputPasswordProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  error: string;
  isInputFilled: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({ id, name, value, onChange, placeholder, label, error, isInputFilled }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? 'text' : 'password';
  const isFilled = value !== '';

  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>
        <div className="relative">
          <input id={id} type={inputType} name={name} value={value} onChange={onChange} placeholder={placeholder} className={`form-input ${error ? 'error' : ''} py-3 rounded-lg`} />
          <button type="button" className="absolute inset-y-0 right-0 px-3 py-2" onClick={toggleShowPassword}>
            {showPassword ? (
              <Icon icon="majesticons:eye-off" width="1.3rem" height="1.3rem" className="text-primary" />
            ) : (
              <Icon icon="mdi:eye" width="1.3rem" height="1.3rem" className="text-primary" />
            )}
          </button>
        </div>

        {error && <span className="text-danger">{error}</span>}
        {isFilled && !error && <span className="text-success">{isInputFilled}</span>}
      </div>
    </>
  );
};

export default InputPassword;
