import { useState, useEffect, useCallback } from 'react';

interface UseInfiniteScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInfiniteScroll(
  callback: () => void,
  hasMore: boolean,
  loading: boolean,
  options: UseInfiniteScrollOptions = {}
) {
  const { threshold = 1.0, rootMargin = '0px' } = options;
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching || loading || !hasMore) return;
    
    callback();
    setIsFetching(false);
  }, [isFetching, callback, loading, hasMore]);

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setIsFetching(true);
          }
        },
        { threshold, rootMargin }
      );

      if (node) observer.observe(node);
      
      return () => {
        if (node) observer.unobserve(node);
      };
    },
    [loading, hasMore, threshold, rootMargin]
  );

  return { lastElementRef, isFetching };
}