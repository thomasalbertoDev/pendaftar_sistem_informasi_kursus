import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyDefaultProps {
  content: string;
  children: React.ReactElement;
}

const TippyDefault = forwardRef(({ content, children }: TippyDefaultProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content}>
        <div ref={ref}>{children}</div>
      </Tippy>
    </>
  );
});

export default TippyDefault;
