import { NavLink } from "react-router-dom";
import { getTutorialGroups } from "../data/tutorials";
import { useLanguage } from "../i18n/LanguageProvider";

export function TutorialSidebar() {
  const { language, t } = useLanguage();
  const groups = getTutorialGroups(language);

  return (
    <aside className="tutorial-sidebar">
      <div className="mb-4 px-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
        {t("sidebar.title")}
      </div>
      <div className="space-y-5">
        {groups.map((group) => (
          <section key={group.category}>
            <h3 className="px-2 text-sm font-black text-white">{group.category}</h3>
            <div className="mt-2 space-y-1">
              {group.lessons.map((lesson) => (
                <NavLink
                  key={lesson.slug}
                  to={`/tutorials/${lesson.slug}`}
                  className={({ isActive }) =>
                    `block rounded-2xl px-3 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                      isActive
                        ? "bg-cyan-300 text-slate-950"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  <span className="mr-2 font-mono text-xs opacity-70">
                    {String(lesson.order).padStart(2, "0")}
                  </span>
                  {lesson.title}
                </NavLink>
              ))}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}
