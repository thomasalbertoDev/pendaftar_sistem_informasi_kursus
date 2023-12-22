import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyWarningProps {
  content: string;
  children: React.ReactElement;
}

const TippyWarning = forwardRef(({ content, children }: TippyWarningProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} theme="warning">
        {children}
      </Tippy>
    </>
  );
});

export default TippyWarning;
