import { GraduationCap, Presentation, Rocket, Trophy, Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const scenes = [
  { key: "footer.scene.aiCourse", icon: Presentation },
  { key: "footer.scene.softwareDesign", icon: Rocket },
  { key: "footer.scene.research", icon: GraduationCap },
  { key: "footer.scene.competition", icon: Trophy },
  { key: "footer.scene.teacher", icon: Users }
] as const;

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="section-wrap pb-10">
      <div className="glass-card grid gap-8 p-6 md:p-8 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">About</p>
          <h2 className="mt-3 font-display text-3xl font-black text-white">{t("footer.title")}</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {t("footer.description")}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
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
      <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
        <span>LLM Learning Lab</span>
        <span>{t("footer.note")}</span>
      </div>
    </footer>
  );
}
