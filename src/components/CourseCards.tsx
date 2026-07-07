import { ArrowUpRight, BookOpenCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { getCourses } from "../data/courses";
import { useLanguage } from "../i18n/LanguageProvider";
import { SectionHeader } from "./SectionHeader";

export function CourseCards() {
  const { language, t } = useLanguage();
  const courses = getCourses(language);

  return (
    <section id="courses" className="section-wrap">
      <SectionHeader
        eyebrow="Courses"
        title={t("courses.title")}
        description={t("courses.description")}
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <article key={course.title} className="glass-card group flex min-h-[280px] flex-col p-6 hover:-translate-y-1">
            <div className="mb-5 flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/25">
                <BookOpenCheck size={22} aria-hidden="true" />
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-200">
                {course.difficulty}
              </span>
            </div>
            <h3 className="font-display text-xl font-black text-white">{course.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{course.description}</p>
            <p className="mt-4 text-sm font-semibold text-emerald-200">{t("courses.duration")}{course.duration}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <Link to={`/tutorials/${course.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition group-hover:text-white">
              {t("courses.enter")}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
