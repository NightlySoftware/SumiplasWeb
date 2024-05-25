import { useState, useEffect } from 'react';

// Utility function to detect iOS devices
export const isIOS = (): boolean => {
  if (typeof navigator !== 'undefined') {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  }
  return false;
};

// Easing function for smooth scrolling
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

// Smooth scrolling function
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

type ModalType = 'quote' | 'menu' | 'bug' | null;

export const useModalVisibility = () => {
  const [visibleModal, setVisibleModal] = useState<ModalType>(null);
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

  const toggleModal = (modalType: ModalType, cancelled?: boolean): void => {
    if (cancelled === undefined) cancelled = false;

    if (isIOSDevice) {
      if (!visibleModal || (modalType === 'menu' && !cancelled)) {
        saveScroll();
      } else {
        scrollToPrevious();
      }
    } else {
      if (!visibleModal && window.scrollY > 2800 && modalType === 'bug') {
        saveScroll(); // Save the original scroll position
        smoothScrollTo(2800, 500); // Scroll to 2800 in 0.5 seconds (500 milliseconds)
      } else if (visibleModal === 'bug') {
        scrollToPrevious(); // Scroll back to the original position
      }
    }
    setVisibleModal(visibleModal === modalType ? null : modalType);
  };

  return { visibleModal, toggleModal };
};
