import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TrendingUp } from "lucide-react";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        !!target.closest("button") ||
        !!target.closest("a") ||
        !!target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isDesktop) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 left-0 w-10 h-10 rounded-full border border-emerald-500/50 pointer-events-none z-1000000 flex items-center justify-center bg-emerald-500/5 backdrop-blur-[1px] shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
              scale: isHovering ? 1.5 : 1,
              borderColor: isHovering
                ? "rgba(16,185,129,0.9)"
                : "rgba(16,185,129,0.5)",
              backgroundColor: isHovering
                ? "rgba(16,185,129,0.1)"
                : "rgba(16,185,129,0.05)",
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.5,
            }}
          >
            <motion.div
              animate={{
                opacity: isHovering ? 1 : 0,
                scale: isHovering ? 1 : 0.5,
              }}
              transition={{ duration: 0.2 }}
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-1000000"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovering ? 0 : 1,
              x: mousePosition.x - 6,
              y: mousePosition.y - 6,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", ease: "linear", duration: 0 }}
          >
            <div className="w-full h-full bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,1)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
