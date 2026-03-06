"use client";
import { useState, useCallback, useEffect, useRef } from "react";

const AUTO_DELAY = 5000; // ms between slides

export function useCarousel(total: number) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, AUTO_DELAY);
  }, [total]);

  // Start auto-advance on mount
  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
    startTimer(); // reset timer on manual interaction
  }, [total, startTimer]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
    startTimer();
  }, [total, startTimer]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    startTimer();
  }, [startTimer]);

  return { current, prev, next, goTo };
}