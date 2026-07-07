import { CheckCircle2, Circle, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { getPromptPresets } from "../data/prompts";
import { useLanguage } from "../i18n/LanguageProvider";
import { SectionHeader } from "./SectionHeader";

const checkLabels = [
  ["task", "prompt.task"],
  ["context", "prompt.context"],
  ["format", "prompt.format"],
  ["constraints", "prompt.constraints"]
] as const;

export function PromptPlayground() {
  const { language, t } = useLanguage();
  const promptPresets = getPromptPresets(language);
  const [selectedId, setSelectedId] = useState(promptPresets[0].id);
  const selected = useMemo(
    () => promptPresets.find((preset) => preset.id === selectedId) ?? promptPresets[0],
    [selectedId]
  );

  return (
    <section id="playground" className="section-wrap">
      <SectionHeader
        eyebrow="Prompt Playground"
        title={t("prompt.title")}
        description={t("prompt.description")}
      />
      <div className="glass-card overflow-hidden">
        <div className="border-b border-white/10 p-4">
          <div className="flex flex-wrap gap-2">
            {promptPresets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => setSelectedId(preset.id)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                  selected.id === preset.id
                    ? "bg-cyan-300 text-slate-950"
                    : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
          <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-cyan-200">
              <Sparkles size={16} aria-hidden="true" />
              {t("prompt.input")}
            </div>
            <textarea
              className="min-h-[260px] w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 p-4 font-mono text-sm leading-7 text-slate-100 outline-none transition focus:border-cyan-300/60"
              value={selected.prompt}
              readOnly
              aria-label={t("prompt.inputAria")}
            />
          </div>

          <div className="p-5">
            <div className="mb-3 text-sm font-bold text-emerald-200">{t("prompt.output")}</div>
            <pre className="min-h-[260px] whitespace-pre-wrap rounded-2xl border border-white/10 bg-emerald-300/[0.06] p-4 font-body text-sm leading-7 text-slate-100">
              {selected.output}
            </pre>
          </div>
        </div>

        <div className="grid gap-5 border-t border-white/10 p-5 lg:grid-cols-[.65fr_1fr]">
          <div>
            <div className="mb-2 flex items-end justify-between">
              <span className="text-sm font-bold text-white">{t("prompt.score")}</span>
              <span className="font-display text-3xl font-black text-cyan-200">{selected.score}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
                style={{ width: `${selected.score}%` }}
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {checkLabels.map(([key, labelKey]) => {
              const active = selected.checks[key];
              const Icon = active ? CheckCircle2 : Circle;
              return (
                <div key={key} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Icon className={active ? "text-emerald-300" : "text-slate-500"} size={20} aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-white">{t(labelKey)}</p>
                  <p className="mt-1 text-xs text-slate-400">{active ? t("prompt.covered") : t("prompt.improve")}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
