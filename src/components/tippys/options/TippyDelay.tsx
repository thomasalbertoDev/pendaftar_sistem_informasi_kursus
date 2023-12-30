import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyDelayProps {
  delay: number;
  content: string;
  children: React.ReactElement;
}

const TippyDelay = forwardRef(({ delay, content, children }: TippyDelayProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} delay={delay}>
        {children}
      </Tippy>
    </>
  );
});

export default TippyDelay;
