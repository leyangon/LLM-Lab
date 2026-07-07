import { Projects } from "../components/Projects";
import { useLanguage } from "../i18n/LanguageProvider";

export function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <main className="page-shell">
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">Practice</p>
        <h1 className="mt-4 font-display text-5xl font-black text-white">{t("projects.pageTitle")}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">
          {t("projects.pageDescription")}
        </p>
      </section>
      <Projects />
    </main>
  );
}
