import { motion } from "framer-motion";
import {
  siConfluence,
  siCypress,
  siElectron,
  siExpress,
  siFigma,
  siFramer,
  siGithub,
  siGithubactions,
  siIntellijidea,
  siJenkins,
  siJira,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siRedux,
  siSage,
  siTailwindcss,
  siTypescript
} from "simple-icons";
import { SectionHeading } from "../components/SectionHeading";
import { SimpleIconMark } from "../components/SimpleIconMark";

const toolLogos = [
  { label: "React", icon: siReact },
  { label: "TypeScript", icon: siTypescript },
  { label: "Next.js", icon: siNextdotjs },
  { label: "Redux", icon: siRedux },
  { label: "Tailwind CSS", icon: siTailwindcss },
  { label: "Framer", icon: siFramer },
  { label: "Node.js", icon: siNodedotjs },
  { label: "Express", icon: siExpress },
  { label: "Jenkins", icon: siJenkins },
  { label: "GitHub Actions", icon: siGithubactions },
  { label: "GitHub", icon: siGithub },
  { label: "IntelliJ IDEA", icon: siIntellijidea },
  { label: "Cypress", icon: siCypress },
  { label: "Figma", icon: siFigma },
  { label: "Jira", icon: siJira },
  { label: "Confluence", icon: siConfluence },
  { label: "Electron", icon: siElectron },
  { label: "Sage", icon: siSage }
];

function LogoStrip({ reverse = false }: { reverse?: boolean }) {
  const items = [...toolLogos, ...toolLogos];

  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="flex min-w-[190px] items-center gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-lg"
          >
            <SimpleIconMark icon={item.icon} size={26} className="shrink-0" />
            <span className="text-sm font-medium text-white">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I Work With"
          description=""
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="space-y-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
        >
          <LogoStrip />
          <LogoStrip reverse />
        </motion.div>
      </div>
    </section>
  );
}
