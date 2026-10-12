"use client";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const glitchVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 0.6, 0.6, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.1, 0.9, 1],
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0 },
};

export default function GlitchTransition({ isActive }: { isActive: boolean }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed bottom-0 left-0 w-full h-full z-[10] pointer-events-none overflow-hidden"
          variants={glitchVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Dark base layer (lower opacity) */}
          <div className="absolute inset-0 bg-white/30 mix-blend-overlay animate-glitch"></div>

          {/* Layer 2 - Soft magenta */}
          <div className="absolute inset-0 bg-pink-500/20 mix-blend-screen animate-glitch2"></div>

          {/* Layer 3 - Soft blue */}
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-screen animate-glitch3"></div>
        </motion.div>

      )}
    </AnimatePresence>
  );
}
