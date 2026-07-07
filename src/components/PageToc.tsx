import type { TutorialLesson } from "../data/tutorials";
import { useLanguage } from "../i18n/LanguageProvider";

export function PageToc({ lesson }: { lesson: TutorialLesson }) {
  const { t } = useLanguage();

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 space-y-5">
        <div className="glass-card p-5">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">{t("toc.title")}</p>
          <nav className="mt-4 space-y-2">
            {lesson.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {section.heading}
              </a>
            ))}
          </nav>
        </div>
        <div className="glass-card p-5">
          <p className="text-sm font-black text-white">{t("toc.info")}</p>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-slate-400">{t("toc.difficulty")}</dt>
              <dd className="font-bold text-emerald-200">{lesson.difficulty}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-slate-400">{t("toc.duration")}</dt>
              <dd className="font-bold text-cyan-200">{lesson.duration}</dd>
            </div>
            <div>
              <dt className="text-slate-400">{t("toc.tags")}</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {lesson.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </aside>
  );
}
