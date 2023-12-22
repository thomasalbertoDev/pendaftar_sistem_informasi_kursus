import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippySuccessProps {
  content: string;
  children: React.ReactElement;
}

const TippySuccess = forwardRef(({ content, children }: TippySuccessProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} theme="success">
        {children}
      </Tippy>
    </>
  );
});

export default TippySuccess;
