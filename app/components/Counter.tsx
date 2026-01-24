"use client";

import { useEffect, useState } from "react";

export default function Counter({
  to,
  duration = 800,
}: {
  to: number;
  duration?: number;
}) {
  const [v, setV] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return <span>{v}</span>;
}
