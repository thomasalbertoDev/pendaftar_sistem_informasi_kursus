import React, { forwardRef, ForwardedRef } from 'react';
import Tippy from '@tippyjs/react';

interface TippyInfoProps {
  content: string;
  children: React.ReactElement;
}

const TippyInfo = forwardRef(({ content, children }: TippyInfoProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <Tippy content={content} theme="info">
        {children}
      </Tippy>
    </>
  );
});

export default TippyInfo;
