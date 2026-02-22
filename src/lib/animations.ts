import type { Easing } from "framer-motion";

const ease: Easing = [0.25, 0.46, 0.45, 0.94];

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease },
});
