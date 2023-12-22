import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyPrimaryProps {
  content: string;
  children: React.ReactElement;
}

const TippyPrimary = forwardRef(({ content, children }: TippyPrimaryProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} theme="primary">
        {children}
      </Tippy>
    </>
  );
});

export default TippyPrimary;
