import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";

const scenarios = {
  zh: [
  {
    label: "课程问答",
    query: "学生问：Attention 为什么能处理长句依赖？",
    snippets: ["课程讲义第 4 节：Attention 会为上下文 Token 分配权重。", "课堂例题：代词指代可用于观察上下文关联。"],
    answer: "可以先把 Attention 理解为“带权重地查阅上下文”。回答时应引用课程讲义第 4 节，并用代词指代例题解释。"
  },
  {
    label: "校内规章",
    query: "学生问：请假流程需要准备什么？",
    snippets: ["学生请假需提交审批记录，并在返校后完成销假。", "超过三天的请假申请需由学院辅导员和任课教师共同确认。"],
    answer: "根据命中文档，申请材料包含审批记录；如果超过三天，还需要学院辅导员和任课教师共同确认。"
  },
  {
    label: "论文综述",
    query: "学生问：怎么写 RAG 相关文献综述？",
    snippets: ["综述应先说明检索增强生成的动机，再比较切分、向量化和重排策略。", "实验部分要记录知识库来源、检索指标和生成质量评价。"],
    answer: "文献综述可以按“动机、流程模块、评估方法、局限性”展开，并补充知识库来源与检索指标。"
  }
  ],
  en: [
    {
      label: "Course Q&A",
      query: "Student asks: Why can Attention handle long-distance dependencies?",
      snippets: ["Lecture Note Section 4: Attention assigns weights to context tokens.", "Classroom example: pronoun reference can reveal contextual relations."],
      answer: "You can first understand Attention as weighted context lookup. The answer should cite Section 4 and explain with the pronoun-reference example."
    },
    {
      label: "Campus Policy",
      query: "Student asks: What should I prepare for a leave request?",
      snippets: ["Students must submit an approval record and complete return confirmation after coming back.", "Leave requests longer than three days require confirmation from the college counselor and course instructor."],
      answer: "According to the retrieved policy snippets, the application should include an approval record. Requests longer than three days also require counselor and instructor confirmation."
    },
    {
      label: "Literature Review",
      query: "Student asks: How should I write a literature review about RAG?",
      snippets: ["A review should first explain the motivation of retrieval-augmented generation, then compare chunking, embedding, and reranking strategies.", "The experiment section should record knowledge-source coverage, retrieval metrics, and generation-quality evaluation."],
      answer: "The review can follow motivation, workflow modules, evaluation methods, and limitations, while documenting knowledge sources and retrieval metrics."
    }
  ]
};

export function RagRetrievalDemo() {
  const { language, t } = useLanguage();
  const localizedScenarios = scenarios[language];
  const [activeLabel, setActiveLabel] = useState(localizedScenarios[0].label);
  const active = localizedScenarios.find((scenario) => scenario.label === activeLabel) ?? localizedScenarios[0];

  return (
    <div className="space-y-4">
      <div className="visual-button-row">
        {localizedScenarios.map((scenario) => (
          <button
            key={scenario.label}
            type="button"
            className={`visual-choice ${active.label === scenario.label ? "visual-choice-active" : ""}`}
            onClick={() => setActiveLabel(scenario.label)}
          >
            {scenario.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{t("visual.rag.query")}</p>
          <p className="text-sm leading-7 text-slate-200">{active.query}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <p className="font-display text-base font-black text-white">{t("visual.rag.snippets")}</p>
          <div className="mt-3 space-y-2">
            {active.snippets.map((snippet, index) => (
              <p key={snippet} className="rounded-2xl border border-emerald-200/15 bg-emerald-300/10 p-3 text-sm leading-6 text-emerald-50">
                [{index + 1}] {snippet}
              </p>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-200">
            <span className="font-bold text-cyan-100">{t("visual.rag.answer")}</span>
            {active.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
