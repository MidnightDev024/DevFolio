'use client'; // This component is client-side

import useSmoothScroll from '@/hooks/useSmoothScroll';
import React from 'react';

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  // The client-side hook is called here
  useSmoothScroll();
  
  // This component just renders its children without adding any HTML
  return <>{children}</>;
};

export default SmoothScrollProvider;