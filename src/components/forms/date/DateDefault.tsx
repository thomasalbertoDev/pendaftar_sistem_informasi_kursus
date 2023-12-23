import Flatpickr from 'react-flatpickr';
import { IRootState } from '../../../store';
import { useSelector } from 'react-redux';

interface DateDefaultProps {
  label: string;
  value: Date;
  placeholder?: string;
  onChange: (selectedDates: Date[], dateStr: string) => void;
}

const DateDefault: React.FC<DateDefaultProps> = ({ label, value, placeholder, onChange }) => {
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>
        <Flatpickr value={value} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input" onChange={onChange} placeholder={placeholder} />
      </div>
    </>
  );
};

export default DateDefault;
