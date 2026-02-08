'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener?.('change', onChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          // Once visible, we can optionally unobserve
          // observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      mq.removeEventListener?.('change', onChange);
    };
  }, [delay]);

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8'
  };

  return (
    <div
      ref={ref}
      className={
        reduceMotion
          ? className
          : `transition-all duration-700 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0 translate-x-0'
                : `opacity-0 ${directionClasses[direction]}`
            } ${className}`
      }
    >
      {children}
    </div>
  );
}
