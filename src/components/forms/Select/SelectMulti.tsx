import React from 'react';
import Select, { ActionMeta, MultiValue } from 'react-select';

interface OptionType {
  label: string;
  value: string;
  isDisabled?: boolean;
}

interface SelectMultiProps {
  id: string;
  name: string;
  value?: OptionType | null;
  onChange: (value: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void;
  placeholder: string;
  options: OptionType[];
  label: string;
  error: string;
}

const SelectMulti: React.FC<SelectMultiProps> = ({ id, name, value, onChange, placeholder, options, label, error }) => {
  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>
        <Select id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} options={options} isMulti isSearchable={false} />

        {error && <span className="text-danger">{error}</span>}
      </div>
    </>
  );
};

export default SelectMulti;
