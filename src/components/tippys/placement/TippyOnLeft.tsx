import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyOnLeftProps {
  content: string;
  children: React.ReactElement;
}

const TippyOnLeft = forwardRef(({ content, children }: TippyOnLeftProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} placement="left">
        {children}
      </Tippy>
    </>
  );
});

export default TippyOnLeft;
