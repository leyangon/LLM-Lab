import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";

const examples = {
  zh: [
  {
    label: "中文教学句子",
    text: "大语言模型正在生成回答",
    tokens: ["大", "语言", "模型", "正在", "生成", "回答"]
  },
  {
    label: "英文技术句子",
    text: "attention maps help models connect tokens with context signals",
    tokens: ["attention", "maps", "help", "models", "connect", "tokens", "with", "context", "signals"]
  },
  {
    label: "Prompt 示例",
    text: "请用三句话解释 RAG，并给出一个课程问答例子。",
    tokens: ["请", "用", "三句话", "解释", "RAG", "课程", "问答", "例子"]
  }
  ],
  en: [
    {
      label: "Chinese Teaching Sentence",
      text: "大语言模型正在生成回答",
      tokens: ["大", "语言", "模型", "正在", "生成", "回答"]
    },
    {
      label: "English Technical Sentence",
      text: "attention maps help models connect tokens with context signals",
      tokens: ["attention", "maps", "help", "models", "connect", "tokens", "with", "context", "signals"]
    },
    {
      label: "Prompt Example",
      text: "Explain RAG in three sentences and give one course Q&A example.",
      tokens: ["Explain", "RAG", "three", "sentences", "course", "Q&A", "example"]
    }
  ]
};

export function TokenExplorer() {
  const { language } = useLanguage();
  const localizedExamples = examples[language];
  const [activeLabel, setActiveLabel] = useState(localizedExamples[0].label);
  const active = localizedExamples.find((example) => example.label === activeLabel) ?? localizedExamples[0];

  return (
    <div className="space-y-4">
      <div className="visual-button-row">
        {localizedExamples.map((example) => (
          <button
            key={example.label}
            type="button"
            className={`visual-choice ${active.label === example.label ? "visual-choice-active" : ""}`}
            onClick={() => setActiveLabel(example.label)}
          >
            {example.label}
          </button>
        ))}
      </div>
      <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
        <p className="text-sm leading-7 text-slate-300">{active.text}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {active.tokens.map((token, index) => (
            <span key={`${token}-${index}`} className="token-chip">
              {token}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm font-black text-cyan-100">
          {language === "zh" ? `当前约 ${active.tokens.length} tokens` : `About ${active.tokens.length} tokens`}
        </p>
      </div>
    </div>
  );
}
