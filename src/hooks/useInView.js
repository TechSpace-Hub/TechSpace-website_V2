import { useEffect, useRef, useState } from "react";

// Tiny IntersectionObserver helper: lets components pause offscreen
// animations / auto-play so they don't burn CPU while out of view.
export function useInView(rootMargin = "200px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView];
}
