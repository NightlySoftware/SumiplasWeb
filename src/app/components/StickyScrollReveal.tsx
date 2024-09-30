'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
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
    console.log('Scroll progress:', latest, 'Active card:', closestBreakpointIndex);
  });

  const backgroundColors = ['#0f172a', '#000000', '#171717'];
  const linearGradients = [
    'linear-gradient(to bottom right, #06b6d4, #10b981)',
    'linear-gradient(to bottom right, #ec4899, #6366f1)',
    'linear-gradient(to bottom right, #f97316, #f59e0b)',
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div ref={ref} className="h-[300vh] w-full">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 w-full bg-slate-950" />
        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 px-4 mx-auto md:grid-cols-2 lg:gap-10">
          <div className="relative z-10 col-span-1">
            {content.map((item, index) => (
              <motion.div
                key={item.title + index}
                className="mb-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 50,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2 className="text-2xl font-bold text-slate-100 mb-4">{item.title}</motion.h2>
                <motion.p className="text-lg text-slate-300">{item.description}</motion.p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className={cn('col-span-1 hidden md:block', contentClassName)}
            style={{ background: backgroundGradient }}
            animate={{
              background: backgroundGradient,
            }}
            transition={{ duration: 0.5 }}
          >
            {content[activeCard].content}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
