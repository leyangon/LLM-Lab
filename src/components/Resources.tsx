import { ExternalLink } from "lucide-react";
import { getResources } from "../data/resources";
import { useLanguage } from "../i18n/LanguageProvider";
import { SectionHeader } from "./SectionHeader";

export function Resources() {
  const { language, t } = useLanguage();
  const resources = getResources(language);

  return (
    <section id="resources" className="section-wrap">
      <SectionHeader
        eyebrow="Resources"
        title={t("resources.title")}
        description={t("resources.description")}
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((group) => (
          <article key={group.category} className="glass-card p-6">
            <h3 className="font-display text-xl font-black text-white">{group.category}</h3>
            <div className="mt-5 space-y-4">
              {group.items.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="block rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="mt-1 text-xs font-bold text-emerald-200">
                        {item.type} · {item.recommendation}
                      </p>
                    </div>
                    <ExternalLink className="shrink-0 text-slate-500" size={16} aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
