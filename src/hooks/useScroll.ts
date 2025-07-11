import { useEffect, useRef } from 'react';
import { ScrollManager } from '../core/services/ScrollManager';

/**
 * useScroll initializes Locomotive Scroll on a container element.
 */
export const useScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const managerRef = useRef<ScrollManager>();

  useEffect(() => {
    if (containerRef.current) {
      managerRef.current = new ScrollManager();
      managerRef.current.init(containerRef.current);
    }
  }, []);

  return { containerRef, scroll: managerRef.current };
};
