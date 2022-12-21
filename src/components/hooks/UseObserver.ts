import { useCallback, useEffect, useRef } from "react";

export const useObserver = (
  onIntersect: (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => void
) => {
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      // if (entries.find((item) => item.isIntersecting))
      onIntersect(entries, observer);
    },
    [onIntersect]
  );

  useEffect(() => {
    if (ref.current !== null) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref.current);
    }
  }, [ref, callback]);

  return ref;
};
