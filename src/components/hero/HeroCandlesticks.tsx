import { motion } from "motion/react";

export const HeroCandlesticks = () => {
  const bars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    isGreen: Math.random() > 0.4,
    baseHeight: Math.random() * 50 + 20,
    duration1: Math.random() * 3 + 2,
    delay1: Math.random() * 2,
    duration2: Math.random() * 2 + 1,
    heightDelta: Math.random() * 20 - 10,
  }));

  return (
    <div className="absolute inset-0 z-[2] opacity-40 mix-blend-screen pointer-events-none flex items-end justify-between px-2 sm:px-10 pb-10 overflow-hidden">
      {bars.map((bar) => (
        <motion.div
          key={bar.id}
          className="relative flex flex-col items-center justify-end w-2 sm:w-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: bar.duration1,
            repeat: Infinity,
            delay: bar.delay1,
          }}
          style={{ height: "70%" }}
        >
          <motion.div
            className={`w-[1px] absolute top-1/4 bottom-1/4 ${bar.isGreen ? "bg-emerald-500" : "bg-red-500"}`}
          />
          <motion.div
            initial={{ height: `${bar.baseHeight}%` }}
            animate={{
              height: [
                `${bar.baseHeight}%`,
                `${bar.baseHeight + bar.heightDelta}%`,
                `${bar.baseHeight}%`,
              ],
            }}
            transition={{
              duration: bar.duration2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`w-full rounded-[1px] z-10 ${bar.isGreen ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" : "bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"}`}
          />
        </motion.div>
      ))}
    </div>
  );
};
