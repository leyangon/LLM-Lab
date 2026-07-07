import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";

const presets = {
  zh: [
  {
    label: "模糊 Prompt",
    score: 42,
    prompt: "介绍一下 Transformer。",
    checks: ["任务较宽泛", "缺少受众背景", "没有输出格式", "没有限制条件"],
    summary: "任务范围偏大，学生可能得到很长但重点不稳定的回答。"
  },
  {
    label: "改进 Prompt",
    score: 74,
    prompt: "请面向大一学生，用 150 字解释 Transformer，并给出一个生活化例子。",
    checks: ["任务明确", "有受众背景", "有字数限制", "格式仍可更具体"],
    summary: "任务和限制更清楚，但还可以要求分点输出或标注关键术语。"
  },
  {
    label: "高质量 Prompt",
    score: 96,
    prompt: "你是人工智能课程助教。请面向大一学生，用 3 个要点解释 Transformer：每点不超过 40 字，并附 1 个生活化类比。输出 Markdown 列表。",
    checks: ["任务明确", "上下文完整", "格式清晰", "限制条件具体"],
    summary: "任务、上下文、格式和限制条件都比较明确。"
  }
  ],
  en: [
    {
      label: "Vague Prompt",
      score: 42,
      prompt: "Explain Transformer.",
      checks: ["Task is too broad", "Missing audience context", "No output format", "No constraints"],
      summary: "The task scope is too broad, so students may receive a long but unfocused answer."
    },
    {
      label: "Improved Prompt",
      score: 74,
      prompt: "Explain Transformer in 150 words for first-year students and include one everyday example.",
      checks: ["Task is clear", "Audience context is present", "Word limit is present", "Format can be more specific"],
      summary: "The task and constraints are clearer, but the prompt can still request bullet points or key-term labels."
    },
    {
      label: "High-quality Prompt",
      score: 96,
      prompt: "You are an AI teaching assistant. Explain Transformer for first-year students in 3 bullet points. Each point should be under 40 words and include one everyday analogy. Output a Markdown list.",
      checks: ["Task is clear", "Context is complete", "Format is clear", "Constraints are specific"],
      summary: "The task, context, format, and constraints are all relatively clear."
    }
  ]
};

export function PromptQualityMeter() {
  const { language } = useLanguage();
  const localizedPresets = presets[language];
  const [activeLabel, setActiveLabel] = useState(localizedPresets[0].label);
  const active = localizedPresets.find((preset) => preset.label === activeLabel) ?? localizedPresets[0];

  return (
    <div className="space-y-4">
      <div className="visual-button-row">
        {localizedPresets.map((preset) => (
          <button
            key={preset.label}
            type="button"
            className={`visual-choice ${active.label === preset.label ? "visual-choice-active" : ""}`}
            onClick={() => setActiveLabel(preset.label)}
          >
            {preset.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Prompt</p>
          <p className="text-sm leading-7 text-slate-200">{active.prompt}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <div className="flex items-end justify-between gap-3">
            <p className="text-sm font-bold text-slate-300">{language === "zh" ? "质量评分" : "Quality Score"}</p>
            <p className="font-display text-3xl font-black text-white">{active.score} {language === "zh" ? "分" : "pts"}</p>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" style={{ width: `${active.score}%` }} />
          </div>
          <ul className="mt-4 space-y-2 text-xs leading-5 text-slate-300">
            {active.checks.map((check) => (
              <li key={check}>- {check}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-cyan-100">{active.summary}</p>
        </div>
      </div>
    </div>
  );
}
