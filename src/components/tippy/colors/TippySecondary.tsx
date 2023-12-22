import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippySecondaryProps {
  content: string;
  children: React.ReactElement;
}

const TippySecondary = forwardRef(({ content, children }: TippySecondaryProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} theme="secondary">
        {children}
      </Tippy>
    </>
  );
});

export default TippySecondary;
