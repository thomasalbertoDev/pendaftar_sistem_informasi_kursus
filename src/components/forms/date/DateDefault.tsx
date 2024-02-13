import Flatpickr from 'react-flatpickr';
import { IRootState } from '../../../store';
import { useSelector } from 'react-redux';

interface DateDefaultProps {
  id: string;
  label: string;
  value: Date;
  name: string;
  placeholder?: string;
  onChange: (selectedDates: Date[], dateStr: string) => void;
  error: string;
  isInputFilled: string;
}

const DateDefault: React.FC<DateDefaultProps> = ({ id, name, label, value, placeholder, onChange, error, isInputFilled }) => {
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
  const isFilled = value !== null && value.toString().trim() !== '';

  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>
        <Flatpickr
          id={id}
          name={name}
          value={value}
          options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }}
          className="form-input dark:bg-white mb-1 dark:text-black py-3 rounded-lg  "
          onChange={onChange}
          placeholder={placeholder}
        />

        {error && <span className="text-danger">{error}</span>}
        {isFilled && !error && <span className="text-success">{isInputFilled}</span>}
      </div>
    </>
  );
};

export default DateDefault;
