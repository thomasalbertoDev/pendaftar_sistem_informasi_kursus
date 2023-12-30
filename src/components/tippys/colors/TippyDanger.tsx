import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyDangerProps {
  content: string;
  children: React.ReactElement;
}

const TippyDanger = forwardRef(({ content, children }: TippyDangerProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} theme="danger">
        {children}
      </Tippy>
    </>
  );
});

export default TippyDanger;
