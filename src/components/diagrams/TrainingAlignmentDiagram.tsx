import { DatabaseZap, MessageCircleHeart, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const copy = {
  zh: [
    { title: "预训练", tag: "通用能力", detail: "从大规模文本中学习语言模式、知识关联和基础表达能力。", icon: DatabaseZap },
    { title: "微调", tag: "任务适配", detail: "用更小、更有针对性的数据调整格式、领域和任务风格。", icon: SlidersHorizontal },
    { title: "反馈对齐", tag: "偏好与安全", detail: "通过人类或 AI 反馈鼓励更有帮助、更安全、更符合规范的回答。", icon: MessageCircleHeart }
  ],
  en: [
    { title: "Pretraining", tag: "General Ability", detail: "Learn language patterns, knowledge associations, and basic expression from massive text.", icon: DatabaseZap },
    { title: "Fine-tuning", tag: "Task Adaptation", detail: "Use smaller targeted datasets to adjust format, domain behavior, and task style.", icon: SlidersHorizontal },
    { title: "Feedback Alignment", tag: "Preference and Safety", detail: "Use human or AI feedback to encourage helpful, safer, more norm-aligned answers.", icon: MessageCircleHeart }
  ]
};

export function TrainingAlignmentDiagram() {
  const { language } = useLanguage();
  const stages = copy[language];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stages.map((stage, index) => {
        const Icon = stage.icon;
        return (
          <article key={stage.title} className="diagram-node">
            <div className="flex items-center justify-between gap-3">
              <Icon className="text-emerald-200" size={24} aria-hidden="true" />
              <span className="tag">{stage.tag}</span>
            </div>
            <h4 className="mt-4 font-display text-lg font-black text-white">{stage.title}</h4>
            <p className="mt-2 text-sm leading-7 text-slate-300">{stage.detail}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" style={{ width: `${(index + 1) * 30}%` }} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
