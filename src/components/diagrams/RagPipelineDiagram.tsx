import { useState } from "react";
import { BookMarked, FileSearch, MessageSquare, Quote, Sparkles } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const ragSteps = {
  zh: [
    { label: "用户问题", title: "明确问题边界", detail: "先把学生问题转成可检索的查询，保留课程、章节或时间范围。", icon: MessageSquare },
    { label: "检索文档", title: "找到相关资料", detail: "从课程讲义、规章制度或论文片段中找出最相关的证据。", icon: FileSearch },
    { label: "注入上下文", title: "把资料放入 Prompt", detail: "只放入高相关片段，避免把无关文本塞满上下文窗口。", icon: BookMarked },
    { label: "生成回答", title: "基于证据组织语言", detail: "让模型围绕检索内容回答，而不是依赖模糊记忆。", icon: Sparkles },
    { label: "引用检查", title: "检查来源和可信度", detail: "确认回答能追溯到材料，并标出需要人工确认的部分。", icon: Quote }
  ],
  en: [
    { label: "User Question", title: "Clarify the question boundary", detail: "Turn the student's question into a searchable query while preserving course, chapter, or time scope.", icon: MessageSquare },
    { label: "Retrieve Documents", title: "Find relevant evidence", detail: "Find the most relevant course or policy snippets from notes, rules, or paper passages.", icon: FileSearch },
    { label: "Inject Context", title: "Put evidence into the prompt", detail: "Insert only highly relevant snippets instead of flooding the context window.", icon: BookMarked },
    { label: "Generate Answer", title: "Write from grounded evidence", detail: "Ask the model to answer from retrieved material rather than loose memory.", icon: Sparkles },
    { label: "Citation Check", title: "Verify sources and trust", detail: "Make sure claims trace back to materials and flag anything requiring human review.", icon: Quote }
  ]
};

export function RagPipelineDiagram() {
  const { language } = useLanguage();
  const steps = ragSteps[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];
  const Icon = active.icon;

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
      <div className="grid gap-3 sm:grid-cols-5 lg:grid-cols-1">
        {steps.map((step, index) => (
          <button
            key={step.label}
            type="button"
            aria-label={step.label}
            className={`diagram-step-button ${activeIndex === index ? "diagram-step-active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <span>{index + 1}</span>
            {step.label}
          </button>
        ))}
      </div>
      <article className="diagram-split-card">
        <Icon className="text-emerald-200" size={28} aria-hidden="true" />
        <h4 className="mt-4 font-display text-2xl font-black text-white">{active.title}</h4>
        <p className="mt-3 text-sm leading-7 text-slate-300">{active.detail}</p>
      </article>
    </div>
  );
}
