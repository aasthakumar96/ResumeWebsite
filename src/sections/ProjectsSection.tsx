import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/portfolio";

const themeClasses = {
  light: "from-white/16 via-transparent to-transparent",
  mid: "from-neutral-500/16 via-transparent to-transparent",
  dark: "from-neutral-800/30 via-transparent to-transparent"
};

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Enterprise projects with product and platform impact."
          description="These featured builds are distilled from Aastha's experience across AI platforms, public web redesign, and internal tooling for operational excellence."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${themeClasses[project.theme]} opacity-70 transition duration-500 group-hover:scale-110`}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-white">{project.title}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-5 text-base leading-7 text-slate-300">{project.summary}</p>
                <p className="mt-5 text-base leading-7 text-slate-200">{project.impact}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
