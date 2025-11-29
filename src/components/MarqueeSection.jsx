/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { marqueeItems } from '../data/mockData';

const MarqueeSection = () => {
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="py-20 overflow-x-clip mb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Top Gradient Bar */}
      <motion.div
        className="z-0 translate-y-10 rotate-6 bg-gradient-to-r from-[#6799fe] to-[#0255fb] py-4 opacity-60 md:rotate-3 lg:translate-y-16 lg:py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />

      {/* Marquee */}
      <motion.div
        className="z-2 -mx-1 flex -rotate-3 items-center justify-center overflow-x-clip bg-gradient-to-r from-[#6799fe] to-[#e401d1d8] py-1.5 lg:py-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex flex-none"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={index} className="inline-flex ml-2 gap-2 items-center font-semibold uppercase">
                <span className="text-sm md:text-base lg:text-lg tracking-wider text-gray-50">
                  {item}
                </span>
                <div>
                  <img
                    alt="Star"
                    loading="lazy"
                    className="size-6"
                    src="/star.svg"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MarqueeSection;