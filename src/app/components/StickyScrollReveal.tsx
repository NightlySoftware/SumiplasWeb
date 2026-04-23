'use client';
import React, { useRef, useState } from 'react';
import { LazyMotion, domAnimation, m, useMotionValueEvent, useScroll } from 'framer-motion';
import { cn } from '../../../lib/utils';

const LINEAR_GRADIENTS = [
  'linear-gradient(to bottom right, #06b6d4, #10b981)',
  'linear-gradient(to bottom right, #ec4899, #6366f1)',
  'linear-gradient(to bottom right, #f97316, #f59e0b)',
];

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundGradient = LINEAR_GRADIENTS[activeCard % LINEAR_GRADIENTS.length];
  const activeContent = content[activeCard];

  if (!content.length || !activeContent) {
    return null;
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div ref={ref} className="h-[300vh] w-full">
        <div className="h-safe-screen sticky top-0 flex items-center overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-full bg-slate-950" />
          <div className="grid w-full max-w-5xl grid-cols-1 gap-4 px-4 mx-auto md:grid-cols-2 lg:gap-10">
            <div className="relative z-10 col-span-1">
              {content.map((item, index) => (
                <m.div
                  key={`${item.title}-${item.description}`}
                  className="mb-10"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                    y: activeCard === index ? 0 : 50,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <m.h2 className="text-2xl font-bold text-slate-100 mb-4">{item.title}</m.h2>
                  <m.p className="text-lg text-slate-300">{item.description}</m.p>
                </m.div>
              ))}
            </div>
            <m.div
              className={cn('col-span-1 hidden md:block', contentClassName)}
              style={{ background: backgroundGradient }}
              animate={{
                background: backgroundGradient,
              }}
              transition={{ duration: 0.5 }}
            >
              {activeContent.content}
            </m.div>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
};
