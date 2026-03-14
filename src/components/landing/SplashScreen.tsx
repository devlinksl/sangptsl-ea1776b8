import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sangptLogo from "@/assets/sangpt-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 500); // wait for exit animation
    }, 1400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(135deg, hsl(225 25% 6%), hsl(250 30% 12%), hsl(220 35% 10%))",
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, hsla(250, 50%, 45%, 0.15), transparent 60%)",
              filter: "blur(60px)",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-5"
          >
            <div
              className="relative w-20 h-20 rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 60px hsla(250, 50%, 50%, 0.2), 0 0 0 1px hsla(0, 0%, 100%, 0.08)",
              }}
            >
              <img src={sangptLogo} alt="Sangpt" className="w-full h-full object-cover" />
              {/* Pulsing glow overlay */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  boxShadow: "inset 0 0 20px hsla(0, 0%, 100%, 0.1)",
                  animation: "splash-pulse 1.5s ease-in-out infinite",
                }}
              />
            </div>

            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Sangpt
            </motion.span>

            {/* Animated dots loader */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-1.5 mt-2"
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.5)",
                    animation: `splash-dot 1s ease-in-out ${i * 0.15}s infinite`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
