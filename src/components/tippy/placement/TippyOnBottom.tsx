import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyOnBottomProps {
  content: string;
  children: React.ReactElement;
}

const TippyOnBottom = forwardRef(({ content, children }: TippyOnBottomProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} placement="bottom">
        {children}
      </Tippy>
    </>
  );
});

export default TippyOnBottom;
