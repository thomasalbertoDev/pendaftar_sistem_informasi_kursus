import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import IconSearch from '../Icons/IconSearch';

interface SearchOverlayProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClick: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ value, onChange, onSubmit, onClick }) => {
  const [focus, setFocus] = useState(false);

  const overlayClickAway = () => {
    setFocus(false);
  };

  const overlaySearchClick = () => {
    setFocus(true);
  };

  return (
    <>
      <div className="mb-5 space-y-5">
        <form onSubmit={onSubmit}>
          <ClickAwayListener onClickAway={overlayClickAway}>
            <div className="search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full" onClick={overlaySearchClick}>
              <input
                value={value}
                onChange={onChange}
                type="text"
                placeholder="Search..."
                className={`form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer ${focus ? '!block' : ''}`}
              />
              <button
                onClick={onClick}
                type="button"
                className={`text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary ${
                  focus ? '!ltr:!right-auto ltr:left-1 rtl:right-1' : ''
                }`}
              >
                <IconSearch className="mx-auto w-5 h-5" />
              </button>
            </div>
          </ClickAwayListener>
        </form>
      </div>
    </>
  );
};

export default SearchOverlay;
