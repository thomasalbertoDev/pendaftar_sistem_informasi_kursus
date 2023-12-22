import React from 'react';
import Select, { ActionMeta } from 'react-select';

interface OptionType {
  label: string;
  value: string;
  isDisabled?: boolean;
}

interface SelectNestedProps {
  id: string;
  name: string;
  value?: OptionType | null;
  onChange: (value: OptionType | null, actionMeta: ActionMeta<OptionType>) => void;
  placeholder: string;
  options: OptionType[];
  label: string;
  error: string;
}

const SelectNested: React.FC<SelectNestedProps> = ({ id, name, value, onChange, placeholder, options, label, error }) => {
  const customOptions = options.map((option) => ({
    ...option,
    isDisabled: option.isDisabled || false,
  }));

  return (
    <>
      <div className="mb-5">
        <label htmlFor={id}>{label}</label>
        <Select id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} options={customOptions} isSearchable={false} />

        {error && <div className="text-danger">{error}</div>}
      </div>
    </>
  );
};

export default SelectNested;
