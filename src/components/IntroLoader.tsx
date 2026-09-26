import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="relative flex flex-col items-center">

            {/* Top line */}
            <motion.div
              className="h-px bg-[#D7E2EA]"
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: ['0px', '180px', '260px'],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            />

            {/* Main name */}
            <motion.h1
              className="mt-6 text-center text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[0.18em] text-[#D7E2EA]"
              initial={{
                opacity: 0,
                y: 18,
                filter: 'blur(12px)',
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              ABDELRHMAN
            </motion.h1>

            {/* Last name */}
            <motion.div
              className="mt-2 text-sm sm:text-base tracking-[0.55em] text-white/50"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.85,
                duration: 0.6,
              }}
            >
              REDA
            </motion.div>

            {/* Bottom line */}
            <motion.div
              className="mt-6 h-px bg-[#D7E2EA]"
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: '180px',
                opacity: 0.7,
              }}
              transition={{
                delay: 1,
                duration: 0.7,
                ease: 'easeOut',
              }}
            />

            {/* Small status */}
            <motion.div
              className="mt-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.35em] text-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.5 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#D7E2EA]" />
              Software Engineer
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}