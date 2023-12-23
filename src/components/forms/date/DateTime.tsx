import Flatpickr from 'react-flatpickr';
import { IRootState } from '../../../store';
import { useSelector } from 'react-redux';

interface DateTimeProps {
  label: string;
  value: Date;
  placeholder?: string;
  onChange: (selectedDates: Date[], dateStr: string) => void;
}

const DateTime: React.FC<DateTimeProps> = ({ label, value, placeholder, onChange }) => {
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>
        <Flatpickr
          data-enable-time
          options={{
            enableTime: true,
            dateFormat: 'Y-m-d H:i',
            position: isRtl ? 'auto right' : 'auto left',
          }}
          value={value}
          className="form-input"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default DateTime;
