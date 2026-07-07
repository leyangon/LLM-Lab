import { GraduationCap, Presentation, Rocket, Trophy, Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const scenes = [
  { key: "footer.scene.aiCourse", icon: Presentation },
  { key: "footer.scene.softwareDesign", icon: Rocket },
  { key: "footer.scene.research", icon: GraduationCap },
  { key: "footer.scene.competition", icon: Trophy },
  { key: "footer.scene.teacher", icon: Users }
] as const;

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="page-shell">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">About</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-tight text-white">{t("about.title")}</h1>
          <p className="mt-5 text-lg leading-9 text-slate-300">
            {t("about.description1")}
          </p>
          <p className="mt-5 text-lg leading-9 text-slate-300">
            {t("about.description2")}
          </p>
        </div>
        <div className="glass-card p-6">
          <h2 className="font-display text-2xl font-black text-white">{t("about.scenes")}</h2>
          <div className="mt-5 grid gap-3">
            {scenes.map((scene) => {
              const Icon = scene.icon;
              return (
                <div key={scene.key} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Icon className="text-emerald-300" size={20} aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-white">{t(scene.key)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
