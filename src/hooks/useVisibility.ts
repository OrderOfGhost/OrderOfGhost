import { useEffect, useRef, useState } from 'react';

/**
 * useVisibility observes when an element becomes visible in viewport.
 */
export function useVisibility<T extends HTMLElement>() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
