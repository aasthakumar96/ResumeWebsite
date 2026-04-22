import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";

const heroWords = ["UI/UX Designer", "Senior Frontend Developer", "AI Product Builder"];

export function HeroSection() {
  const typedText = useTypewriter(heroWords);

  return (
    <section id="home" className="relative isolate overflow-hidden px-6 pb-20 pt-8 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-[-18rem] -z-20 mx-auto h-[38rem] max-w-6xl rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.16),_rgba(255,255,255,0.02)_45%,_transparent_72%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-[-10rem] -z-20 mx-auto h-[24rem] max-w-5xl rounded-full bg-[radial-gradient(circle,_rgba(115,115,115,0.22),_transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#050505_0%,#0d0d0d_38%,#050505_100%)]" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.22em] text-white">AK</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <a
            href="/Aastha_Kumar_Resume.pdf"
            download="Aastha_Kumar_Resume.pdf"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Download Resume
          </a>
        </div>
      </nav>

      <div className="mx-auto mt-16 max-w-5xl text-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white"
          >
            <Sparkles className="h-4 w-4" />
            Building elegant systems for ambitious products
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-8 max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
            <span className="mt-4 block bg-[linear-gradient(135deg,#f59e0b_10%,#fb7185_52%,#38bdf8_100%)] bg-clip-text text-transparent">
              {typedText}
              <span className="ml-1 inline-block h-[0.95em] w-[2px] animate-pulse bg-white align-middle" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 max-w-4xl font-display text-xl font-medium leading-[1.5] tracking-[-0.02em] text-slate-200 sm:text-2xl lg:text-[1.7rem]"
          >
            <span className="bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(214,214,214,0.92)_52%,rgba(140,140,140,0.88)_100%)] bg-clip-text text-transparent">
              {profile.subtitle}
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {profile.heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(245,158,11,0.14),rgba(251,113,133,0.12),rgba(56,189,248,0.14))] px-4 py-2 text-sm text-slate-100 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#experience"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-neutral-200"
            >
              View Experience
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 grid w-full gap-6 sm:grid-cols-3"
          >
            {[
              { label: "Experience", value: "8+ years" },
              { label: "Primary Stack", value: "React + TypeScript" },
              { label: "Current Focus", value: "AI-forward UI systems" }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                <p className="mt-3 text-lg font-medium text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
