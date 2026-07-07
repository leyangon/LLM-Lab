import { Binary, WandSparkles } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const columns = [
  {
    title: { zh: "传统 AI", en: "Traditional AI" },
    icon: Binary,
    accent: "text-amber-200",
    items: {
      zh: ["目标通常固定", "输出多为类别或数值", "需要为任务单独建模", "解释依赖特征与规则"],
      en: ["Goals are usually fixed", "Outputs are often classes or numbers", "Each task often needs its own model", "Explanations depend on features and rules"]
    }
  },
  {
    title: { zh: "生成式 AI / LLM", en: "Generative AI / LLM" },
    icon: WandSparkles,
    accent: "text-cyan-200",
    items: {
      zh: ["目标可由 Prompt 定义", "输出自然语言、代码或结构化数据", "同一模型可处理多类任务", "需要上下文、引用和评估约束"],
      en: ["Goals can be defined by prompts", "Outputs can be language, code, or structured data", "One model can handle many task types", "Context, citation, and evaluation constraints still matter"]
    }
  }
];

export function AIComparisonVisual() {
  const { language } = useLanguage();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {columns.map((column) => {
        const Icon = column.icon;
        return (
          <div key={column.title.en} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ${column.accent}`}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <h4 className="font-display text-lg font-black text-white">{column.title[language]}</h4>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              {column.items[language].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
