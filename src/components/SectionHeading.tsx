import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type SectionHeadingProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  description: string;
}>;

export function SectionHeading({
  eyebrow,
  title,
  description,
  children
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="mx-auto mb-10 max-w-3xl"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/70">{eyebrow}</p>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </motion.div>
  );
}
