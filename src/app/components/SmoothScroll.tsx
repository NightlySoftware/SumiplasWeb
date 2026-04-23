'use client';

import React, { PropsWithChildren } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

const LenisRoot = ReactLenis as unknown as React.ComponentType<
  PropsWithChildren<{
    options: { duration: number };
    root: boolean;
  }>
>;

function SmoothScroll({ children }: PropsWithChildren): JSX.Element {
  return <LenisRoot options={{ duration: 1 }} root>{children}</LenisRoot>;
}

export default SmoothScroll;
