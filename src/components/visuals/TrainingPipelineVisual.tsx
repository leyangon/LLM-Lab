import { Database, MessagesSquare, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const stages = [
  { title: "Pretraining", detail: { zh: "从大规模文本学习通用语言规律", en: "Learn general language patterns from large-scale text" }, icon: Database },
  { title: "Fine-tuning", detail: { zh: "用任务数据适配场景、格式与风格", en: "Adapt to task, format, and style with focused data" }, icon: SlidersHorizontal },
  { title: "RLHF / RLAIF", detail: { zh: "用偏好反馈强化有帮助和安全的回答", en: "Use preference feedback to encourage helpful and safe answers" }, icon: MessagesSquare },
  { title: "Deployment Guardrails", detail: { zh: "通过评估、审核和策略约束上线行为", en: "Constrain deployed behavior through evaluation and policy" }, icon: ShieldCheck }
];

export function TrainingPipelineVisual() {
  const { language } = useLanguage();

  return (
    <div className="relative grid gap-4 md:grid-cols-4">
      {stages.map((stage) => {
        const Icon = stage.icon;
        return (
          <div key={stage.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-300/10 text-violet-200">
              <Icon size={20} aria-hidden="true" />
            </div>
            <p className="font-display text-sm font-black text-white">{stage.title}</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">{stage.detail[language]}</p>
          </div>
        );
      })}
    </div>
  );
}
