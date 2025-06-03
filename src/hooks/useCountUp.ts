import { useEffect, useState } from "react";

export const useCountUp = (
  end: number,
  start = 0,
  duration = 2000,
  shouldAnimate = false
) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(
        start + ((end - start) * progress) / duration,
        end
      );
      setCount(Math.floor(current));
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, start, duration, shouldAnimate]);

  return count;
};
