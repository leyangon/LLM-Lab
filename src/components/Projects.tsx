import { Hammer, Layers } from "lucide-react";
import { getProjects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageProvider";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  const { language, t } = useLanguage();
  const projects = getProjects(language);

  return (
    <section id="projects" className="section-wrap">
      <SectionHeader
        eyebrow="Projects"
        title={t("projects.title")}
        description={t("projects.description")}
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="glass-card p-6 hover:-translate-y-1">
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/25">
                <Hammer size={22} aria-hidden="true" />
              </span>
              <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
                {project.difficulty}
              </span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-black text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Info title={t("projects.knowledge")} items={project.knowledge} />
              <Info title={t("projects.stack")} items={project.stack} />
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-cyan-200">
                <Layers size={16} aria-hidden="true" />
                {t("projects.outcome")}
              </div>
              <p className="text-sm leading-6 text-slate-300">{project.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-white">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
