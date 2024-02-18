import Flatpickr from 'react-flatpickr';
import { IRootState } from '../../../store';
import { useSelector } from 'react-redux';

interface DateTimeProps {
  id: string;
  name: string;
  label: string;
  value: Date;
  placeholder?: string;
  error: string;
  onChange: (selectedDates: Date[], dateStr: string) => void;
  isInputFilled: string;
}

const DateTime: React.FC<DateTimeProps> = ({ id, name, label, value, placeholder, error, onChange, isInputFilled }) => {
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
  const isFilled = value !== null && value.toString().trim() !== '';

  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>
        <Flatpickr
          id={id}
          name={name}
          data-enable-time
          options={{
            enableTime: true,
            dateFormat: 'Y-m-d H:i',
            position: isRtl ? 'auto right' : 'auto left',
          }}
          value={value}
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

export default DateTime;
