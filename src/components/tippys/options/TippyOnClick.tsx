import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyOnClickProps {
  content: string;
  children: React.ReactElement;
}

const TippyOnClick = forwardRef(({ content, children }: TippyOnClickProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy trigger="click" content={content}>
        {children}
      </Tippy>
    </>
  );
});

export default TippyOnClick;
