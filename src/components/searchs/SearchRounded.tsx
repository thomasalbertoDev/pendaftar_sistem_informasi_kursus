import React from 'react';
import IconSearch from '../Icons/IconSearch';

interface SearchRoundedProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClick: () => void;
}

const SearchRounded: React.FC<SearchRoundedProps> = ({ value, onChange, onSubmit, onClick }) => {
  return (
    <>
      <div className="mb-5 space-y-5">
        <form className="mx-auto w-full sm:w-1/2 mb-5" onSubmit={onSubmit}>
          <div className="relative">
            <input
              type="text"
              value={value}
              placeholder="Search Attendees..."
              className="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11"
              onChange={onChange}
            />
            <button type="button" className="btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center" onClick={onClick}>
              <IconSearch className="w-4 h-4 text-white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchRounded;
