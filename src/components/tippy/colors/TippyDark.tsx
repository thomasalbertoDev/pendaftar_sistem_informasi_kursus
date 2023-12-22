import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyDarkProps {
  content: string;
  children: React.ReactElement;
}

const TippyDark = forwardRef(({ content, children }: TippyDarkProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} theme="dark">
        {children}
      </Tippy>
    </>
  );
});

export default TippyDark;
