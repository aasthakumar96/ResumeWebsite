import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Globe } from "lucide-react";
import { profile } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";

const contactCards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    iconColor: "text-[#EA4335]",
    iconBg: "bg-[#EA4335]/12"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aastha-kumar",
    href: "https://www.linkedin.com/in/aastha-kumar/",
    icon: Linkedin,
    iconColor: "text-[#0A66C2]",
    iconBg: "bg-[#0A66C2]/12"
  },
  {
    label: "GitHub",
    value: "github.com/aasthakumar96",
    href: "https://github.com/aasthakumar96",
    icon: Github,
    iconColor: "text-[#f5f5f5]",
    iconBg: "bg-white/10"
  },
  {
    label: "Portfolio",
    value: "aasthakumar-portfolio.netlify.app",
    href: "https://aasthakumar-portfolio.netlify.app/",
    icon: Globe,
    iconColor: "text-[#38BDF8]",
    iconBg: "bg-[#38BDF8]/12"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          description=""
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card, index) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className={`rounded-2xl p-3 ${card.iconBg} ${card.iconColor}`}>
                  <card.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </div>
              <p className="mt-8 text-sm uppercase tracking-[0.24em] text-slate-400">{card.label}</p>
              <p className="mt-3 break-words text-lg font-medium text-white">{card.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
