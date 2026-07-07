import { Bot, Braces, MessageSquareText, Network, Sparkles } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const steps = [
  { label: "User Prompt", detail: { zh: "学生提出任务", en: "The learner states a task" }, icon: MessageSquareText },
  { label: "Tokenization", detail: { zh: "文本切成 Token", en: "Text becomes tokens" }, icon: Braces },
  { label: "Transformer", detail: { zh: "多层上下文计算", en: "Context is processed in layers" }, icon: Network },
  { label: "Probability", detail: { zh: "预测下一个 Token", en: "Next-token probabilities are estimated" }, icon: Sparkles },
  { label: "Response", detail: { zh: "逐步生成回答", en: "The response is generated step by step" }, icon: Bot }
];

export function LLMFlowDiagram() {
  const { language } = useLanguage();

  return (
    <div className="grid gap-3 md:grid-cols-5">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={step.label} className="relative rounded-2xl border border-cyan-200/15 bg-slate-950/70 p-4">
            {index < steps.length - 1 && <span className="hidden md:block visual-flow-arrow" aria-hidden="true" />}
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
              <Icon size={21} aria-hidden="true" />
            </div>
            <p className="font-display text-sm font-black text-white">{step.label}</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">{step.detail[language]}</p>
          </div>
        );
      })}
      <div className="md:col-span-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 font-mono text-sm text-cyan-100">
        P(next token | previous tokens)
      </div>
    </div>
  );
}
