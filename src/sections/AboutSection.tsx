import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description=""
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {[
              { label: "Based in", value: profile.location },
              { label: "Availability", value: profile.availability },
              { label: "Contact", value: profile.email }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                <p className="mt-4 text-xl font-medium text-white">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
