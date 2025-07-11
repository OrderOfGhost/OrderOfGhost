import { ReactNode } from 'react';
import { useScroll } from '../hooks/useScroll';

interface ScrollContainerProps {
  children: ReactNode;
}

export const ScrollContainer = ({ children }: ScrollContainerProps) => {
  const { containerRef } = useScroll();
  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
};
