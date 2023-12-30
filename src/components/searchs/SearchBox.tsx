import React, { useState } from 'react';
import IconSearch from '../Icons/IconSearch';

interface SearchBoxProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClick: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange, onSubmit, onClick }) => {
  return (
    <>
      <div className="mb-5 space-y-5">
        <form onSubmit={onSubmit}>
          <div className="relative border border-white-dark/20  w-full flex">
            <button type="submit" placeholder="Let's find your question in fast way" className="text-primary m-auto p-3 flex items-center justify-center" onClick={onClick}>
              <IconSearch className="w-5 h-5 text-primary" />
            </button>
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder="Let's find your question in fast way"
              className="form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
