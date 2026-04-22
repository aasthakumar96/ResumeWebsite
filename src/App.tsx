import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { education, profile } from "./data/portfolio";

const ExperienceSection = lazy(() =>
  import("./sections/ExperienceSection").then((module) => ({ default: module.ExperienceSection })),
);
const ContactSection = lazy(() =>
  import("./sections/ContactSection").then((module) => ({ default: module.ContactSection })),
);

function SectionFallback() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto h-40 max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="fixed inset-0 -z-50 bg-grid bg-[size:54px_54px] opacity-[0.06]" />
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_38%),radial-gradient(circle_at_85%_18%,rgba(115,115,115,0.12),transparent_28%),linear-gradient(180deg,#050505_0%,#0b0b0b_35%,#050505_100%)]" />

      <HeroSection />

      <main>
        <AboutSection />
        <SkillsSection />
        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection />
        </Suspense>

        <section className="px-6 py-8 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Education</p>
              <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <img
                    src="/brands/northcap-university-logo.svg"
                    alt="NorthCap University"
                    className="mb-5 h-12 w-auto max-w-[220px] object-contain"
                  />
                  <h2 className="font-display text-3xl text-white">{education.degree}</h2>
                  <p className="mt-2 text-lg text-slate-300">{education.institution}</p>
                </div>
                <p className="text-base text-slate-400">{education.period}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      <footer className="px-6 pb-10 pt-6 text-slate-400 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p>
            {profile.name} • Senior Frontend Engineer • React, TypeScript, Next.js
          </p>
          <div className="flex flex-wrap gap-4">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="transition hover:text-white"
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
