import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyOnTopProps {
  content: string;
  children: React.ReactElement;
}

const TippyOnTop = forwardRef(({ content, children }: TippyOnTopProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} placement="top">
        {children}
      </Tippy>
    </>
  );
});

export default TippyOnTop;
