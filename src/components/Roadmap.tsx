import { motion } from "framer-motion";
import { Clock3, Gauge, Milestone } from "lucide-react";
import { getRoadmap } from "../data/roadmap";
import { useLanguage } from "../i18n/LanguageProvider";
import { SectionHeader } from "./SectionHeader";

export function Roadmap() {
  const { language, t } = useLanguage();
  const roadmap = getRoadmap(language);

  return (
    <section id="roadmap" className="section-wrap">
      <SectionHeader
        eyebrow="Roadmap"
        title={t("roadmap.title")}
        description={t("roadmap.description")}
      />
      <div className="grid gap-5 lg:grid-cols-5">
        {roadmap.map((stage, index) => (
          <motion.article
            key={stage.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card group flex flex-col p-5 hover:-translate-y-1"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
                {stage.stage}
              </span>
              <Milestone className="text-emerald-300" size={20} aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl font-black text-white">{stage.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{stage.description}</p>
            <div className="mt-5 grid gap-2 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <Gauge size={16} className="text-cyan-300" aria-hidden="true" />
                {stage.difficulty}
              </span>
              <span className="flex items-center gap-2">
                <Clock3 size={16} className="text-emerald-300" aria-hidden="true" />
                {stage.duration}
              </span>
            </div>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
              {stage.topics.map((topic) => (
                <li key={topic} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  {topic}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {stage.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
