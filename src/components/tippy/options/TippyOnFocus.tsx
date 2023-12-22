import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyOnFocusProps {
  content: string;
  children: React.ReactElement;
}

const TippyOnFocus = forwardRef(({ content, children }: TippyOnFocusProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy trigger="focusin" content={content}>
        {children}
      </Tippy>
    </>
  );
});

export default TippyOnFocus;
