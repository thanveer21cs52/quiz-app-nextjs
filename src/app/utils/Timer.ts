import { useEffect, useState } from "react";

export function useCountdown(initialSeconds: number = 10) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!active || seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [active, seconds]);

  const reset = () => {
    setSeconds(initialSeconds);
    setActive(true);
  };

  const stop = () => setActive(false);

  return { seconds, active, reset, stop };
}
