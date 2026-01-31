import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ from, to, duration = 2, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(from);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const steps = 60;
    const stepValue = (to - from) / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newValue = Math.floor(from + stepValue * currentStep);
      setCount(Math.min(newValue, to));

      if (currentStep >= steps) {
        setCount(to);
        clearInterval(interval);
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(interval);
  }, [hasStarted, from, to, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={hasStarted ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {count}
      {suffix}
    </motion.div>
  );
};

export default Counter;
