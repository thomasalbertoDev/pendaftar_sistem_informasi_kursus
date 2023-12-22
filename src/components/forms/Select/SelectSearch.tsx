import React from 'react';
import Select, { ActionMeta } from 'react-select';

interface OptionType {
  label: string;
  value: string;
}

interface SelectSearchProps {
  id: string;
  name: string;
  value?: OptionType | null;
  onChange: (value: OptionType | null, actionMeta: ActionMeta<OptionType>) => void;
  placeholder: string;
  options: OptionType[];
  label: string;
  error: string;
}

const SelectSearch: React.FC<SelectSearchProps> = ({ id, name, value, onChange, placeholder, options, label, error }) => {
  return (
    <>
      <div className="mb-5">
        <label htmlFor={label}>{label}</label>
        <Select id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} options={options} />

        {error && <span className="text-danger">{error}</span>}
      </div>
    </>
  );
};

export default SelectSearch;
