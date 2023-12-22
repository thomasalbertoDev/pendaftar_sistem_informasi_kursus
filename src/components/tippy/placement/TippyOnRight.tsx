import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyOnRightProps {
  content: string;
  children: React.ReactElement;
}

const TippyOnRight = forwardRef(({ content, children }: TippyOnRightProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} placement="right">
        {children}
      </Tippy>
    </>
  );
});

export default TippyOnRight;
