'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export const isIOS = (): boolean => {
  if (typeof navigator !== 'undefined') {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  }
  return false;
};

export const easeInOutQuad = (
  currentTime: number,
  startValue: number,
  changeInValue: number,
  duration: number
): number => {
  currentTime /= duration / 2;
  if (currentTime < 1) return (changeInValue / 2) * currentTime * currentTime + startValue;
  currentTime--;
  return (-changeInValue / 2) * (currentTime * (currentTime - 2) - 1) + startValue;
};

export const smoothScrollTo = (target: number, duration: number): void => {
  const start = window.scrollY;
  const change = target - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = (): void => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
};

interface CardVisibilityContextProps {
  isCardVisible: boolean;
  toggleCard: () => void;
}

const CardVisibilityContext = createContext<CardVisibilityContextProps | undefined>(undefined);

export const useCardVisibility = (): CardVisibilityContextProps => {
  const context = useContext(CardVisibilityContext);
  if (!context) {
    throw new Error('useCardVisibility must be used within a CardVisibilityProvider');
  }
  return context;
};

export const CardVisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isCardVisible, setCardVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isIOSDevice, setIsIOSDevice] = useState(false);

  useEffect(() => {
    setIsIOSDevice(isIOS());
  }, []);

  const saveScroll = (): void => {
    setScrollY(window.scrollY);
    smoothScrollTo(0, 500); // Scroll to the top in 0.5 seconds (500 milliseconds)
  };

  const scrollToPrevious = (): void => {
    smoothScrollTo(scrollY, 500); // Scroll to previous position in 0.5 seconds (500 milliseconds)
  };

  const toggleCard = (): void => {
    if (isIOSDevice) {
      if (!isCardVisible) {
        saveScroll();
      } else {
        scrollToPrevious();
      }
    } else {
      if (!isCardVisible) {
        if (window.scrollY > 3000) {
          smoothScrollTo(3000, 500); // Scroll to 3000 in 0.5 seconds (500 milliseconds)
        }
      }
    }
    setCardVisible(!isCardVisible);
  };

  return (
    <CardVisibilityContext.Provider value={{ isCardVisible, toggleCard }}>{children}</CardVisibilityContext.Provider>
  );
};
