import { ArrowLeft, ArrowRight, BookOpenCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import {
  getAdjacentTutorials,
  getRelatedTutorials,
  getTutorialBySlug
} from "../data/tutorials";
import { useLanguage } from "../i18n/LanguageProvider";
import { ArticleBlock } from "./ArticleBlock";
import { LessonFlowMap } from "./LessonFlowMap";
import { PageToc } from "./PageToc";
import { TutorialSidebar } from "./TutorialSidebar";

export function TutorialArticle() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const lesson = getTutorialBySlug(slug, language);

  if (!lesson) {
    return (
      <main className="page-shell">
        <section className="mx-auto max-w-2xl py-20 text-center">
          <h1 className="font-display text-4xl font-black text-white">{t("article.notFoundTitle")}</h1>
          <p className="mt-4 text-slate-300">{t("article.notFoundText")}</p>
          <Link to="/tutorials" className="btn-primary mt-8">
            {t("article.back")}
          </Link>
        </section>
      </main>
    );
  }

  const adjacent = getAdjacentTutorials(lesson.slug, language);
  const related = getRelatedTutorials(lesson.relatedSlugs, language);

  return (
    <main className="page-shell">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8 xl:grid-cols-[280px_minmax(0,1fr)_240px]">
        <TutorialSidebar />
        <article className="article-panel">
          <div className="border-b border-white/10 p-6 md:p-8">
            <Link to="/tutorials" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 hover:text-white">
              <ArrowLeft size={16} aria-hidden="true" />
              {t("article.back")}
            </Link>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">{lesson.category}</p>
            <h1 className="mt-3 font-display text-4xl font-black leading-tight text-white md:text-5xl">
              {lesson.title}
            </h1>
            <p className="mt-5 text-lg leading-9 text-slate-300">{lesson.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="tag">{lesson.difficulty}</span>
              <span className="tag">{lesson.duration}</span>
              {lesson.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <section className="border-b border-white/10 p-6 md:p-8">
            <h2 className="article-heading">{t("article.objectives")}</h2>
            <ul className="article-list">
              {lesson.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-black text-white">{t("article.prerequisites")}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {lesson.prerequisites.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="space-y-10 p-6 md:p-8">
            <LessonFlowMap lesson={lesson} />

            {lesson.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="article-heading">{section.heading}</h2>
                <div className="mt-5 space-y-5">
                  {section.blocks.map((block, index) => (
                    <ArticleBlock key={`${section.id}-${index}`} block={block} />
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-5">
              <div className="flex items-center gap-2 font-display text-lg font-black text-white">
                <BookOpenCheck className="text-emerald-200" size={20} aria-hidden="true" />
                {t("article.exercise")}
              </div>
              <p className="mt-3 text-slate-200">{lesson.quiz.question}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{t("article.referenceAnswer")}{lesson.quiz.answer}</p>
            </section>

            {related.length > 0 ? (
              <section>
                <h2 className="article-heading">{t("article.related")}</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {related.map((item) => (
                    <Link key={item.slug} to={`/tutorials/${item.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            <nav className="grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
              {adjacent.previous ? (
                <Link to={`/tutorials/${adjacent.previous.slug}`} className="article-nav-card">
                  <span>{t("article.previous")}</span>
                  <strong>{adjacent.previous.title}</strong>
                </Link>
              ) : (
                <div />
              )}
              {adjacent.next ? (
                <Link to={`/tutorials/${adjacent.next.slug}`} className="article-nav-card sm:text-right">
                  <span>{t("article.next")}</span>
                  <strong className="justify-end">
                    {adjacent.next.title}
                    <ArrowRight size={16} aria-hidden="true" />
                  </strong>
                </Link>
              ) : null}
            </nav>
          </div>
        </article>
        <PageToc lesson={lesson} />
      </div>
    </main>
  );
}
