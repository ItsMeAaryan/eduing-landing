'use client';

import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
}

export default function TabSwitcher({ tabs }: TabSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="flex justify-center gap-3 mb-12">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-8 py-3 rounded-pill font-semibold text-[15px] transition-all duration-300 ${
              activeIndex === index
                ? 'bg-indigo text-white shadow-indigo-glow'
                : 'bg-white text-dark border border-gray-200 hover:border-indigo hover:text-indigo'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {tabs[activeIndex].content}
      </motion.div>
    </div>
  );
}
