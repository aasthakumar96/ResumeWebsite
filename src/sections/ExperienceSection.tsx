import { motion, useInView, useScroll } from "framer-motion";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { siSage } from "simple-icons";
import { SectionHeading } from "../components/SectionHeading";
import { SimpleIconMark } from "../components/SimpleIconMark";
import { experiences } from "../data/portfolio";

type ExperiencePhaseProps = {
  experience: (typeof experiences)[number];
  isActive: boolean;
  onYearChange: (year: number) => void;
};

function ExperiencePhase({ experience, isActive, onYearChange }: ExperiencePhaseProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (!inView) {
        return;
      }

      const years = experience.years;
      const index = Math.min(years.length - 1, Math.max(0, Math.floor(value * years.length)));
      onYearChange(years[index]);
    });

    return () => unsubscribe();
  }, [experience.years, inView, onYearChange, scrollYProgress]);

  useEffect(() => {
    if (inView) {
      onYearChange(experience.years[0]);
    }
  }, [experience.years, inView, onYearChange]);

  return (
    <section
      ref={ref}
      className="relative border-t border-white/10 py-10 first:border-t-0 lg:min-h-[var(--phase-height)] lg:py-16"
      style={{ "--phase-height": `${Math.max(experience.years.length * 40, 70)}vh` } as CSSProperties}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="lg:sticky lg:top-28"
      >
        <div className="mb-6 lg:hidden">
          <div className="flex items-center gap-4">
            <div className={`h-px flex-1 ${isActive ? "bg-white" : "bg-white/10"}`} />
            <p className="font-display text-3xl text-white">{experience.years[0]}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.years.map((year) => (
              <span
                key={year}
                className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] ${
                  isActive && year === experience.years[0]
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-slate-400"
                }`}
              >
                {year}
              </span>
            ))}
          </div>
        </div>

        <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                {experience.company === "Adobe" ? (
                  <img
                    src="/brands/adobe-wordmark-red.svg"
                    alt="Adobe"
                    className="h-6 w-auto object-contain"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <SimpleIconMark icon={siSage} size={22} />
                    <span className="text-base font-semibold text-[#00D639]">Sage</span>
                  </div>
                )}
              </div>
              <h3 className="mt-2 font-display text-2xl text-white">{experience.role}</h3>
              <p className="mt-2 text-sm text-slate-400">
                {experience.location} • {experience.start} – {experience.end}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-5 space-y-3 text-slate-300">
            {experience.highlights.map((highlight) => (
              <p key={highlight}>{highlight}</p>
            ))}
          </div>
        </article>
      </motion.div>
    </section>
  );
}

export function ExperienceSection() {
  const [activeYear, setActiveYear] = useState(experiences[0].years[0]);

  return (
    <section id="experience" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience Timeline"
          title="Experience Timeline"
          description=""
        />

        <div className="sticky top-4 z-20 mb-6 lg:hidden">
          <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-black/70 px-5 py-3 backdrop-blur-xl">
            <span className="text-xs uppercase tracking-[0.28em] text-slate-400">Year</span>
            <motion.span
              key={activeYear}
              initial={{ opacity: 0.35, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="font-display text-2xl text-white"
            >
              {activeYear}
            </motion.span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="hidden lg:block">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Year</p>
              <div className="mt-5 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 backdrop-blur-xl">
                <motion.p
                  key={activeYear}
                  initial={{ opacity: 0.35, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="font-display text-7xl leading-none text-white"
                >
                  {activeYear}
                </motion.p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 lg:block" />
            <div className="space-y-2 lg:pl-10">
              {experiences.map((experience) => (
                <ExperiencePhase
                  key={`${experience.company}-${experience.role}`}
                  experience={experience}
                  isActive={activeYear === experience.years[0]}
                  onYearChange={setActiveYear}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
