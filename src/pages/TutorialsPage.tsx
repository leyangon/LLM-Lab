import { ArrowRight, BookOpen, Clock3, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { KnowledgeMap } from "../components/diagrams/KnowledgeMap";
import { getOrderedTutorials, getTutorialCategories, getTutorialGroups } from "../data/tutorials";
import { useLanguage } from "../i18n/LanguageProvider";

export function TutorialsPage() {
  const { language, t } = useLanguage();
  const groups = getTutorialGroups(language);
  const categories = getTutorialCategories(language);
  const orderedTutorials = getOrderedTutorials(language);

  return (
    <main className="page-shell">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">{t("tutorials.kicker")}</p>
            <h1 className="mt-4 font-display text-5xl font-black leading-tight text-white">{t("tutorials.title")}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">
              {t("tutorials.description")}
            </p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-300/10 text-emerald-200 ring-1 ring-emerald-300/25">
                <Compass size={21} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg font-black text-white">{t("tutorials.recommendedOrder")}</p>
                <p className="text-sm text-slate-400">{t("tutorials.orderPath")}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="tag">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {groups.map((group) => (
            <a key={group.category} href={`#${group.category}`} className="glass-card p-5 hover:-translate-y-1">
              <BookOpen className="text-cyan-200" size={22} aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-black text-white">{group.category}</h2>
              <p className="mt-2 text-sm text-slate-400">{group.lessons.length} {t("tutorials.countSuffix")}</p>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <KnowledgeMap />
        </div>

        <div className="mt-12 space-y-10">
          {groups.map((group) => (
            <section key={group.category} id={group.category} className="scroll-mt-28">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="font-display text-2xl font-black text-white">{group.category}</h2>
                <span className="text-sm text-slate-400">{group.lessons.length} {t("tutorials.countSuffix")}</span>
              </div>
              <div className="grid gap-4">
                {group.lessons.map((lesson) => (
                  <Link
                    key={lesson.slug}
                    to={`/tutorials/${lesson.slug}`}
                    className="glass-card group grid gap-4 p-5 hover:-translate-y-1 md:grid-cols-[1fr_auto] md:items-center"
                  >
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                        Lesson {String(lesson.order).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-black text-white">{lesson.title}</h3>
                      <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">{lesson.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="tag">{lesson.difficulty}</span>
                        <span className="tag inline-flex items-center gap-1">
                          <Clock3 size={12} aria-hidden="true" />
                          {lesson.duration}
                        </span>
                        {lesson.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-black text-cyan-200 group-hover:text-white">
                      {t("tutorials.startReading")}
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm leading-7 text-cyan-50">
          {t("tutorials.summaryPrefix")} {orderedTutorials.length} {t("tutorials.summarySuffix")}
        </div>
      </section>
    </main>
  );
}
