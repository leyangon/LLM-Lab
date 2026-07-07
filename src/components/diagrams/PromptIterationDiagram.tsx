import { ArrowRight, ClipboardCheck, FilePenLine, RotateCcw, Target } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const copy = {
  zh: [
    { title: "定义任务", detail: "说明要解决的问题和合格输出标准。", icon: Target },
    { title: "写出初稿", detail: "补齐上下文、格式和限制条件。", icon: FilePenLine },
    { title: "测试样例", detail: "用多组输入检查准确性和格式稳定性。", icon: ClipboardCheck },
    { title: "记录失败", detail: "把失败案例转成下一版 Prompt 的修改依据。", icon: RotateCcw }
  ],
  en: [
    { title: "Define Task", detail: "State the problem and acceptable output criteria.", icon: Target },
    { title: "Draft Prompt", detail: "Add context, format, and constraints.", icon: FilePenLine },
    { title: "Test Cases", detail: "Check accuracy and format stability with multiple inputs.", icon: ClipboardCheck },
    { title: "Log Failures", detail: "Turn failures into concrete revisions for the next prompt.", icon: RotateCcw }
  ]
};

export function PromptIterationDiagram() {
  const { language } = useLanguage();
  const steps = copy[language];

  return (
    <div className="grid gap-3 md:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <article key={step.title} className="diagram-node relative">
            <Icon className="text-cyan-200" size={24} aria-hidden="true" />
            <h4 className="mt-3 font-display text-base font-black text-white">{step.title}</h4>
            <p className="mt-2 text-xs leading-6 text-slate-300">{step.detail}</p>
            {index < steps.length - 1 && (
              <ArrowRight className="absolute -right-4 top-1/2 hidden text-cyan-200/40 md:block" size={20} aria-hidden="true" />
            )}
          </article>
        );
      })}
    </div>
  );
}
